"use client";

import Image from "next/image";
import TypewriterText from "./TypewriterText";
import UserChoiceSection from "./UserChoiceSection";

const HeroSection = () => {
	return (
                <div
                        className="hero min-h-screen"
                        style={{
                                backgroundImage:
                                        'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)'
                        }}
                >
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-3xl">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-shadow">
                                                <TypewriterText text="무엇을 도와드릴까요?" repeat={false} typingSpeed={80} />
                                        </h1>
                                        <UserChoiceSection />
                                </div>
                        </div>
                </div>
	);
};

export default HeroSection;
