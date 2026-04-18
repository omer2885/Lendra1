import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { usePreloader } from "./PreloaderContext";

export function Preloader() {
    const { setStatus, view, videoReady } = usePreloader();
    const [progress, setProgress] = useState(0);
    const [animData, setAnimData] = useState<any>(null);
    const [isRevealing, setIsRevealing] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const hasRevealed = useRef(false);

    useEffect(() => {
        fetch("/Lendra preloader.json")
            .then((r) => r.json())
            .then(setAnimData)
            .catch(console.error);
    }, []);

    useEffect(() => {
        // Scroll lock
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    // Drive progress bar independently and robustly
    useEffect(() => {
        const duration = 2500; // 2.5 seconds to build anticipation
        const start = performance.now();
        let rafId: number;

        const animateProgress = (now: number) => {
            const elapsed = now - start;
            const pct = Math.min(elapsed / duration, 1);

            // Easing out sine for smooth finish
            const eased = Math.sin((pct * Math.PI) / 2);
            setProgress(Math.round(eased * 100));

            if (pct < 1) {
                rafId = requestAnimationFrame(animateProgress);
            }
        };

        rafId = requestAnimationFrame(animateProgress);
        return () => cancelAnimationFrame(rafId);
    }, []);

    // Main Orchestration Gate
    useEffect(() => {
        // Gate 1: Progress must reach 100%
        if (progress < 100) return;

        // Gate 2: If we are heading to the Vault, wait for the cinematic video
        if (view === "vault" && !videoReady) return;

        // Prevent double triggers
        if (hasRevealed.current) return;
        hasRevealed.current = true;

        // STEP 1: If Vault, mount and start the video behind the curtains
        if (view === "vault") {
            setStatus("video");
        } else {
            setStatus("revealing");
        }

        // STEP 2: Split the curtains!
        setIsRevealing(true);

        // STEP 3: Complete transition after curtains split
        setTimeout(() => {
            setIsDone(true);
            if (view !== "vault") {
                // Just reveal the homepage
                setStatus("done");
            }
            document.body.style.overflow = "";
        }, 2000); // 2 seconds (matches the 1.8s CSS transition width padding)

    }, [progress, view, videoReady, setStatus]);

    if (isDone) return null;

    return (
        <div
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 100000,
                pointerEvents: isRevealing ? "none" : "all",
            }}
        >
            <div
                className="preloader-panel preloader-panel--left"
                data-revealing={String(isRevealing)}
            />
            <div
                className="preloader-panel preloader-panel--right"
                data-revealing={String(isRevealing)}
            />

            <div
                className="preloader-content"
                style={{
                    opacity: isRevealing ? 0 : 1,
                    transition: "opacity 0.6s ease",
                }}
            >
                <div className="preloader-lottie">
                    {animData && (
                        <Lottie
                            animationData={animData}
                            loop={true}
                            style={{ width: "100%", height: "100%" }}
                        />
                    )}
                </div>

                <div className="preloader-bar-wrapper">
                    <div className="preloader-bar-track">
                        <div
                            className="preloader-bar-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="preloader-bar-pct">{progress}%</span>
                </div>
            </div>
        </div>
    );
}
