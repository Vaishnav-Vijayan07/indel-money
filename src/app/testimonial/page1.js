"use client";

import React, { useState, useMemo } from "react";
import { Video } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component

const FILTER_TYPES = {
    ALL: "ALL_TESTIMONIALS",
    WORDS: "EMPLOYEE_WORDS",
    VIDEO: "VIDEO_TESTIMONIAL",
};

const TESTIMONIAL_DATA = [
    {
        name: "Sreerajitha",
        role: "Branch Manager, Indel Money South Kalamserry",
        quote:
            "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
        profileImage: "/api/placeholder/400/400",
        hasVideo: true,
        videoSrc: "/path/to/video",
    },
    {
        name: "Sruthy Madhav",
        role: "Branch Manager",
        quote:
            "I manage to contribute to the company and still have time for my family. The management team makes sure that the suggestions and opinions of the employees are valued and included in the planning process of the organisation.",
        profileImage: "/api/placeholder/400/400",
        hasVideo: false,
    },
    {
        name: "Another Employee",
        role: "Team Member",
        quote:
            "Working here has been an incredible experience. The company culture is supportive and innovative.",
        profileImage: "/api/placeholder/400/400",
        hasVideo: false,
    },
];

const TestimonialFilters = ({ activeFilter, onFilterChange }) => {
    const filterOptions = [
        { key: FILTER_TYPES.ALL, label: "All Testimonials" },
        { key: FILTER_TYPES.WORDS, label: "Employee Words" },
        { key: FILTER_TYPES.VIDEO, label: "Video Testimonial" },
    ];

    return (
        <div className="flex justify-end space-x-2 mb-6">
            {filterOptions.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={() => onFilterChange(key)}
                    className={`
            px-4 py-2 
            rounded-full 
            text-sm 
            font-medium 
            transition-all 
            duration-300 
            ${activeFilter === key
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                        }
          `}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

const VideoTestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-[500px]">
                {/* Placeholder for video player */}
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                    <div className="text-center">
                        <Image
                            src={testimonial.profileImage}
                            alt={testimonial.name}
                            width={144} // Corresponds to w-36 (36 * 4 = 144px)
                            height={144} // Corresponds to h-36 (36 * 4 = 144px)
                            className="mx-auto rounded-full object-cover border-4 border-blue-50 mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-800">
                            {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <div className="mt-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center mx-auto">
                                <Video className="mr-2" />
                                Play Testimonial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WordTestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/4 p-6 flex items-center justify-center">
                <Image
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    width={144} // Corresponds to w-36 (36 * 4 = 144px)
                    height={144} // Corresponds to h-36 (36 * 4 = 144px)
                    className="rounded-full object-cover border-4 border-blue-50"
                />
            </div>
            <div className="md:w-3/4 p-6 flex flex-col justify-center">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                        {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                    "{testimonial.quote}"
                </blockquote>
            </div>
        </div>
    );
};

const EmployeeTestimonials = () => {
    const [activeFilter, setActiveFilter] = useState(FILTER_TYPES.ALL);

    const filteredTestimonials = useMemo(() => {
        switch (activeFilter) {
            case FILTER_TYPES.VIDEO:
                return TESTIMONIAL_DATA.filter((testimonial) => testimonial.hasVideo);
            case FILTER_TYPES.WORDS:
                return TESTIMONIAL_DATA.filter((testimonial) => !testimonial.hasVideo);
            default:
                return TESTIMONIAL_DATA;
        }
    }, [activeFilter]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <TestimonialFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />

            {filteredTestimonials.length > 0 ? (
                <div className="space-y-6">
                    {filteredTestimonials.map((testimonial, index) =>
                        testimonial.hasVideo ? (
                            <VideoTestimonialCard
                                key={`video-${testimonial.name}-${index}`}
                                testimonial={testimonial}
                            />
                        ) : (
                            <WordTestimonialCard
                                key={`word-${testimonial.name}-${index}`}
                                testimonial={testimonial}
                            />
                        )
                    )}
                </div>
            ) : (
                <div className="text-center text-gray-500 py-10">
                    No testimonials found for this filter.
                </div>
            )}
        </div>
    );
};

export default EmployeeTestimonials;