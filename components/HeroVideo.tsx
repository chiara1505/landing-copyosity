"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setPlaying(true);
    setStarted(true);
  }, []);

  const pause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (playing) pause();
    else play();
  }, [pause, play, playing]);

  const toggleFullscreen = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const doc = document as Document & {
        webkitFullscreenElement?: Element | null;
        webkitExitFullscreen?: () => Promise<void> | void;
      };
      const el = container as HTMLDivElement & {
        webkitRequestFullscreen?: () => Promise<void> | void;
      };

      const nativeActive = Boolean(
        document.fullscreenElement || doc.webkitFullscreenElement,
      );

      if (nativeActive) {
        if (document.exitFullscreen) await document.exitFullscreen();
        else doc.webkitExitFullscreen?.();
        return;
      }

      if (container.requestFullscreen) {
        await container.requestFullscreen();
      } else {
        el.webkitRequestFullscreen?.();
      }
    } catch {
      // Fullscreen may be blocked by the browser
    }
  }, []);

  const seek = useCallback((value: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    const next = Math.min(Math.max(value, 0), video.duration);
    video.currentTime = next;
    setProgress(next);
  }, []);

  useEffect(() => {
    function onFullscreenChange() {
      const doc = document as Document & {
        webkitFullscreenElement?: Element | null;
      };
      setIsFullscreen(
        Boolean(document.fullscreenElement || doc.webkitFullscreenElement),
      );
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullscreenChange,
      );
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => setProgress(video.currentTime);
    const onLoaded = () => setDuration(video.duration || 0);
    const onDurationChange = () => setDuration(video.duration || 0);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("durationchange", onDurationChange);

    if (video.duration) setDuration(video.duration);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("durationchange", onDurationChange);
    };
  }, []);

  const showScrubber = started && (hovering || !playing || isFullscreen);
  const percent = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className={`group relative w-full overflow-hidden rounded-2xl ${
        isFullscreen
          ? "flex h-screen w-screen items-center justify-center rounded-none bg-green-dark p-6 sm:p-10 md:p-14"
          : "aspect-[4/3] bg-pink/50"
      }`}
      onContextMenu={(event) => event.preventDefault()}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <video
        ref={videoRef}
        className={`h-full w-full ${
          isFullscreen
            ? "max-h-full max-w-full object-contain"
            : "object-cover"
        }`}
        src="/images/hero.mp4"
        poster="/images/hero-poster.jpg"
        playsInline
        preload="metadata"
        controls={false}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onPause={() => setPlaying(false)}
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
        }}
        onEnded={() => setPlaying(false)}
        aria-label="Video di presentazione del percorso Da 0 a Digital"
      >
        Il tuo browser non supporta la riproduzione video.
      </video>

      {!playing && (
        <button
          type="button"
          onClick={play}
          aria-label="Riproduci video"
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-dark text-white shadow-[0_12px_32px_rgba(36,92,71,0.35)] sm:h-20 sm:w-20">
            <svg
              viewBox="0 0 24 24"
              className="ml-1 h-8 w-8 sm:h-9 sm:w-9"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </button>
      )}

      {started && playing && (
        <button
          type="button"
          aria-label="Metti in pausa"
          onClick={pause}
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
        />
      )}

      {started && playing && (
        <div className="absolute bottom-14 right-3 z-40 flex gap-2 sm:bottom-16 sm:right-4">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              togglePlay();
            }}
            aria-label="Metti in pausa"
            className={`flex h-10 w-10 items-center justify-center rounded-full shadow-md backdrop-blur-sm transition sm:h-11 sm:w-11 ${
              hovering || isFullscreen
                ? "bg-green-light text-green-dark"
                : "bg-green-dark text-white"
            } hover:bg-green-light hover:text-green-dark`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              void toggleFullscreen();
            }}
            aria-label={isFullscreen ? "Riduci" : "Ingrandisci"}
            className={`hidden h-10 w-10 items-center justify-center rounded-full shadow-md backdrop-blur-sm transition md:flex sm:h-11 sm:w-11 ${
              hovering || isFullscreen
                ? "bg-green-light text-green-dark"
                : "bg-green-dark text-white"
            } hover:bg-green-light hover:text-green-dark`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {isFullscreen ? (
                <path
                  d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      )}

      {started && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/55 to-transparent px-3 pb-3 pt-8 transition-opacity duration-200 sm:px-4 sm:pb-3.5 ${
            showScrubber ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-1.5 flex justify-between text-xs text-white/90">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <label className="sr-only" htmlFor="hero-video-seek">
            Posizione nel video
          </label>
          <input
            id="hero-video-seek"
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            onChange={(event) => seek(Number(event.target.value))}
            onClick={(event) => event.stopPropagation()}
            className={`hero-seek w-full cursor-pointer ${
              showScrubber ? "pointer-events-auto" : "pointer-events-none"
            }`}
            style={{ ["--seek-progress" as string]: `${percent}%` }}
            aria-valuetext={`${formatTime(progress)} di ${formatTime(duration)}`}
          />
        </div>
      )}
    </div>
  );
}
