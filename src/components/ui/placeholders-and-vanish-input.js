"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import Image from "next/image";

export function PlaceholdersAndVanishInput({
    type,
    placeholders,
    onChange,
    onSubmit
}) {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    const intervalRef = useRef(null);
    const startAnimation = () => {
        intervalRef.current = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        }, 3000);
    };
    const handleVisibilityChange = () => {
        if (document.visibilityState !== "visible" && intervalRef.current) {
            clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
            intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
            startAnimation(); // Restart the interval when the tab becomes visible
        }
    };

    useEffect(() => {
        startAnimation();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [placeholders]);

    const canvasRef = useRef(null);
    const newDataRef = useRef([]);
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const [animating, setAnimating] = useState(false);

    const draw = useCallback(() => {
        if (!inputRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 800;
        canvas.height = 800;
        ctx.clearRect(0, 0, 800, 800);
        const computedStyles = getComputedStyle(inputRef.current);

        const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
        ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
        ctx.fillStyle = "#000";
        ctx.fillText(value, 16, 40);

        const imageData = ctx.getImageData(0, 0, 800, 800);
        const pixelData = imageData.data;
        const newData = [];

        for (let t = 0; t < 800; t++) {
            let i = 4 * t * 800;
            for (let n = 0; n < 800; n++) {
                let e = i + 4 * n;
                if (
                    pixelData[e] !== 0 &&
                    pixelData[e + 1] !== 0 &&
                    pixelData[e + 2] !== 0
                ) {
                    newData.push({
                        x: n,
                        y: t,
                        color: [
                            pixelData[e],
                            pixelData[e + 1],
                            pixelData[e + 2],
                            pixelData[e + 3],
                        ],
                    });
                }
            }
        }

        newDataRef.current = newData.map(({ x, y, color }) => ({
            x,
            y,
            r: 1,
            color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
        }));
    }, [value]);

    useEffect(() => {
        draw();
    }, [value, draw]);

    const animate = (start) => {
        const animateFrame = (pos = 0) => {
            requestAnimationFrame(() => {
                const newArr = [];
                for (let i = 0; i < newDataRef.current.length; i++) {
                    const current = newDataRef.current[i];
                    if (current.x < pos) {
                        newArr.push(current);
                    } else {
                        if (current.r <= 0) {
                            current.r = 0;
                            continue;
                        }
                        current.x += Math.random() > 0.5 ? 1 : -1;
                        current.y += Math.random() > 0.5 ? 1 : -1;
                        current.r -= 0.05 * Math.random();
                        newArr.push(current);
                    }
                }
                newDataRef.current = newArr;
                const ctx = canvasRef.current?.getContext("2d");
                if (ctx) {
                    ctx.clearRect(pos, 0, 800, 800);
                    newDataRef.current.forEach((t) => {
                        const { x: n, y: i, r: s, color: color } = t;
                        if (n > pos) {
                            ctx.beginPath();
                            ctx.rect(n, i, s, s);
                            ctx.fillStyle = color;
                            ctx.strokeStyle = color;
                            ctx.stroke();
                        }
                    });
                }
                if (newDataRef.current.length > 0) {
                    animateFrame(pos - 8);
                } else {
                    setValue("");
                    setAnimating(false);
                }
            });
        };
        animateFrame(start);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !animating) {
            vanishAndSubmit();
        }
    };

    const vanishAndSubmit = () => {
        setAnimating(true);
        draw();

        const value = inputRef.current?.value || "";
        if (value && inputRef.current) {
            const maxX = newDataRef.current.reduce((prev, current) => (current.x > prev ? current.x : prev), 0);
            animate(maxX);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        vanishAndSubmit();
        onSubmit && onSubmit(e);
    };
    return (
        (<form
            className={cn(
                "w-full relative z-1 bg-white h-[35px] lg:h-[40px] 2xlh-[50px] rounded-[7px] overflow-hidden transition duration-300",
                value && "bg-gray-50"
            )}
            onSubmit={handleSubmit}>
            <canvas
                className={cn(
                    "absolute pointer-events-none text-black transform scale-50 top-[20%] left-[15px] sm:left-5 origin-top-left filter invert dark:invert-0 pr-20",
                    !animating ? "opacity-0" : "opacity-100"
                )}
                ref={canvasRef} />
            <input
                onChange={(e) => {
                    if (!animating) {
                        setValue(e.target.value);
                        onChange && onChange(e);
                    }
                }}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                value={value}
                type={type}
                className={cn(
                    "text-[12px] lg:text-[14px] 3xl:text-[16px] w-full relative z-50 border-none bg-transparent text-black h-full focus:outline-none focus:ring-0 pl-[15px] sm:pl-4 lg:pl-5 pr-20",
                    animating && "text-transparent dark:text-transparent"
                )} />
            <button
                disabled={!value}
                type="submit"
                className="w-[35px] lg:w-[40px] 2xlw-[50px] aspect-square absolute right-2 top-1/2 z-50 -translate-y-1/2 disabled:opacity-50 bg-white transition duration-200 flex items-center justify-center cursor-pointer">
                <Image
                src="/images/icon-subscribe.svg"
                alt="subsribe"
                width={22}
                height={21}
                className="w-[15px] sm:w-[20px]"
                />
            </button>
            <div
                className="absolute inset-0 flex items-center rounded-full pointer-events-none">
                <AnimatePresence mode="wait">
                    {!value && (
                        <motion.p
                            initial={{
                                y: 5,
                                opacity: 0,
                            }}
                            key={`current-placeholder-${currentPlaceholder}`}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -15,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "linear",
                            }}
                            className="text-[12px] lg:text-[14px] 3xl:text-[16px] dark:text-zinc-500 font-normal text-black/5 pl-[15px] sm:pl-4 lg:pl-5 text-left w-[calc(100%-2rem)] truncate">
                            {placeholders[currentPlaceholder]}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </form>)
    );
}
