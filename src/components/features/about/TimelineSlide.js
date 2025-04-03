"use client";
import React, { useState, useEffect, useRef } from 'react';

const TimelineSlide = () => {
    const [activeYear, setActiveYear] = useState(1999);
    const [isPlaying, setIsPlaying] = useState(true);
    const [animation, setAnimation] = useState({ direction: 'next', isAnimating: false });
    const intervalRef = useRef(null);

    const timelineData = [
        {
            year: 1999,
            title: "Lorem Ipsum Is Dummy",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: "/api/placeholder/400/200"
        },
        {
            year: 2005,
            title: "Company Expansion",
            description: "Expanded operations across multiple regions.",
            image: "/api/placeholder/400/200"
        },
        {
            year: 2010,
            title: "Innovation Award",
            description: "Received industry recognition for innovative financial solutions.",
            image: "/api/placeholder/400/200"
        },
        {
            year: 2015,
            title: "Digital Transformation",
            description: "Launched digital platform for enhanced customer experience.",
            image: "/api/placeholder/400/200"
        },
        {
            year: 2020,
            title: "Pandemic Response",
            description: "Adapted services to support customers during challenging times.",
            image: "/api/placeholder/400/200"
        },
        {
            year: 2024,
            title: "Current Milestone",
            description: "A significant achievement in the company's journey.",
            image: "/api/placeholder/400/200"
        }
    ];

    // Years to display on the right side
    const years = timelineData.map(item => item.year);

    // Auto-advance the timeline
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                const currentIndex = timelineData.findIndex(item => item.year === activeYear);
                const nextIndex = (currentIndex + 1) % timelineData.length;
                setAnimation({ direction: 'next', isAnimating: true });

                // Small delay to allow exit animation before changing the data
                setTimeout(() => {
                    setActiveYear(timelineData[nextIndex].year);
                }, 300);

                // Reset animation state after transition
                setTimeout(() => {
                    setAnimation({ direction: 'next', isAnimating: false });
                }, 600);
            }, 4000); // Change slide every 4 seconds
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying, activeYear, timelineData]);

    // Find current timeline item
    const activeItem = timelineData.find(item => item.year === activeYear) || timelineData[0];
    const activeIndex = timelineData.findIndex(item => item.year === activeYear);

    // Handle manual navigation
    const handleYearClick = (year) => {
        const currentIndex = timelineData.findIndex(item => item.year === activeYear);
        const newIndex = timelineData.findIndex(item => item.year === year);
        const direction = newIndex > currentIndex ? 'next' : 'prev';

        setAnimation({ direction, isAnimating: true });

        // Small delay to allow exit animation before changing the data
        setTimeout(() => {
            setActiveYear(year);
        }, 300);

        // Reset animation state after transition
        setTimeout(() => {
            setAnimation({ direction, isAnimating: false });
        }, 600);

        // Reset auto-play timer when manually navigating
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                const currentIdx = timelineData.findIndex(item => item.year === activeYear);
                const nextIdx = (currentIdx + 1) % timelineData.length;

                setAnimation({ direction: 'next', isAnimating: true });

                setTimeout(() => {
                    setActiveYear(timelineData[nextIdx].year);
                }, 300);

                setTimeout(() => {
                    setAnimation({ direction: 'next', isAnimating: false });
                }, 600);
            }, 4000);
        }
    };

    // Toggle play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Animation classes based on state
    const getAnimationClasses = () => {
        if (!animation.isAnimating) {
            return "opacity-100 transform translate-y-0";
        }

        if (animation.direction === 'next') {
            return animation.isAnimating
                ? "opacity-0 transform -translate-y-12 transition-all duration-300"
                : "opacity-100 transform translate-y-0 transition-all duration-300";
        } else {
            return animation.isAnimating
                ? "opacity-0 transform translate-y-12 transition-all duration-300"
                : "opacity-100 transform translate-y-0 transition-all duration-300";
        }
    };

    return (
        <div className="w-full bg-blue-900 text-white min-h-screen">
            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
                {/* Left side - Title */}
                <div className="md:w-[430px] mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Years Since</h2>
                    <h2 className="text-4xl md:text-5xl font-bold">Inception</h2>

                    {/* Play/Pause Button */}
                    <button
                        className="mt-6 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? (
                            <>
                                <span className="mr-2">■</span> Pause
                            </>
                        ) : (
                            <>
                                <span className="mr-2">▶</span> Play
                            </>
                        )}
                    </button>
                </div>

                <div className="md:w-[calc(100%-430px)] flex flex-col md:flex-row">
                    {/* Left side - Years */}
                    <div className="md:w-[calc(100%-75px)] flex flex-col md:flex-row">
                        {/* Vertical line */}
                        {/* <div className="absolute h-full w-1 bg-blue-700 left-1/2 transform -translate-x-1/2"></div> */}
                        {/* Big year display with animation */}
                        <div className={`md:w-[365px] text-6xl md:text-8xl font-bold my-12 z-10 transition-all duration-300 text-right ${getAnimationClasses()}`}>
                            {activeItem.year}
                        </div>
                        <div className="md:w-[calc(100%-365px)] flex flex-col md:flex-row relative">
                            {/* Current count with animation */}
                            <div className={`text-6xl md:text-8xl font-bold my-12 z-10 transition-all duration-300 absolute left-0 ${getAnimationClasses()}`}>
                                {activeItem.year - 1999}
                            </div>
                            {/* Middle - Timeline */}
                            <div className="relative flex justify-center">
                                {/* Year markers */}
                                <div className="relative w-full h-full flex flex-col justify-between items-center">

                                    {/* Content card with animation */}
                                    <div className={`bg-white rounded-lg overflow-hidden text-blue-900 w-full max-w-md mb-8 z-10 transition-all duration-300 ${getAnimationClasses()}`}>
                                        <img
                                            src={activeItem.image}
                                            alt={activeItem.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="font-bold text-xl">{activeItem.title}</h3>
                                            <p className="text-gray-700">{activeItem.description}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side - Years */}
                    <div className="md:w-[75px]">
                        <div className="md:w-1/3 relative flex flex-col items-end h-full">
                            <div className="h-full flex flex-col justify-between">
                                {years.map((year, index) => (
                                    <div
                                        key={index}
                                        className={`text-sm font-semibold cursor-pointer transition-colors duration-300 ${year === activeYear ? 'text-white' : 'text-blue-300'}`}
                                        onClick={() => handleYearClick(year)}
                                    >
                                        {year}
                                    </div>
                                ))}
                            </div>
                            {/* Current year indicator */}
                            <div
                                className="absolute right-0 transition-all duration-500"
                                style={{
                                    top: `calc(12px + ${(activeIndex / (timelineData.length - 1)) * 100}%)`,
                                    transform: 'translateY(-50%)'
                                }}
                            >
                                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold">
                                    ↓
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TimelineSlide;