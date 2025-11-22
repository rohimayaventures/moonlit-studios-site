'use client';

import { useState } from "react";
import Link from "next/link";
import { AnimatedSword } from "./AnimatedSword";
import { AnimatedDiamond } from "./AnimatedDiamond";
import { AnimatedLightning } from "./AnimatedLightning";

interface Project {
  tag: string;
  title: string;
  points: string[];
  tech: string;
  status: string;
  link?: string;
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string;
  };
}

interface FlippingProjectCardProps {
  project: Project;
  index: number;
}

export function FlippingProjectCard({ project, index }: FlippingProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  // Determine status badge style
  const getStatusBadge = () => {
    if (project.status === "Journey Ongoing" || project.link) {
      return (
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-phoenixFire/90 to-lunarGold/80 border border-phoenixFire text-xs font-bold text-midnight shadow-lg flex items-center gap-1">
          <AnimatedSword className="w-3 h-3" />
          <span>{project.link ? "IN PROGRESS" : "ONGOING"}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="perspective-1000 h-[480px]"
      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Flip card to see ${isFlipped ? 'project details' : 'case study'} for ${project.title}`}
      >
        {/* FRONT OF CARD */}
        <div className="absolute w-full h-full backface-hidden">
          <article className="relative h-full rounded-2xl border-2 border-phoenixFire/30 bg-gradient-to-br from-[#1a0a0a]/95 via-midnight/98 to-deepOcean/95 p-6 text-moonlightSilver shadow-2xl shadow-black/60 backdrop-blur transition-all hover:border-phoenixFire/60 hover:shadow-phoenixFire/20 hover:-translate-y-1 animate-fadeInUp group flex flex-col">
            {/* Quest Complete Badge */}
            {getStatusBadge()}

            {/* Project Tag */}
            <p className="text-xs tracking-[0.25em] text-phoenixFire/70 uppercase font-semibold">
              {project.tag}
            </p>

            {/* Project Title */}
            <h3 className="mt-2 text-xl font-bold text-pearlWhite group-hover:text-phoenixFire transition-colors">
              {project.title}
            </h3>

            {/* Journey Milestones */}
            <ul className="mt-4 space-y-2 text-sm flex-grow">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2 items-start">
                  <svg className="mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D4AF37"/>
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats Section - LOTR Style */}
            <div className="mt-6 p-4 rounded-xl bg-phoenixFire/10 border border-phoenixFire/20 space-y-3">
              {/* Tech Stack */}
              <div>
                <p className="text-[0.65rem] tracking-wider text-phoenixFire/70 uppercase font-semibold mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L10 10M6 6V2M6 6H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="17" cy="17" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2L10 8L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Tools of the Trade</span>
                </p>
                <p className="text-sm font-semibold text-pearlWhite">
                  {project.tech}
                </p>
              </div>

              {/* Status with Journey Progress */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[0.65rem] tracking-wider text-lunarGold/70 uppercase font-semibold flex items-center gap-1">
                    <AnimatedLightning className="w-3 h-3" />
                    <span>Journey Status</span>
                  </p>
                  <p className="text-sm font-bold text-lunarGold">
                    {project.status}
                  </p>
                </div>
                {/* Progress bar based on status */}
                <div className="h-2 bg-deepOcean/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      project.status === "Journey Ongoing" || project.status === "In Progress"
                        ? "bg-gradient-to-r from-lunarGold to-phoenixFire w-3/4 animate-pulse"
                        : project.status === "Tale Conceived" || project.status === "Experimental Voyage"
                        ? "bg-gradient-to-r from-mermaidTeal to-tealBright w-1/4"
                        : project.status === "First Draft"
                        ? "bg-gradient-to-r from-lunarGold to-sunsetPink w-1/2"
                        : project.status === "Ready to Depart"
                        ? "bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire w-2/3"
                        : "bg-gradient-to-r from-mermaidTeal via-lunarGold to-phoenixFire w-full"
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Honor Earned */}
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-moonlightSilver/70 flex items-center gap-1">
                <AnimatedDiamond className="w-3 h-3" />
                <span>Honor Earned:</span>
              </span>
              <span className="font-bold text-mermaidTeal">
                {project.status === "Journey Ongoing" || project.status === "Legend Complete" || project.status === "In Progress"
                  ? "+1000 Honor"
                  : project.status === "First Draft"
                  ? "+500 Honor"
                  : "+250 Honor"}
              </span>
            </div>

            {/* Tap to Flip Hint */}
            <div className="mt-3 text-center text-xs text-moonlightSilver/50 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Tap to see case study</span>
            </div>
          </article>
        </div>

        {/* BACK OF CARD */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <article className="relative h-full rounded-2xl border-2 border-phoenixFire/60 bg-gradient-to-br from-deepOcean/98 via-midnight/95 to-[#1a0a0a]/95 p-6 text-moonlightSilver shadow-2xl shadow-phoenixFire/30 backdrop-blur flex flex-col">
            {/* Project Title */}
            <h3 className="text-lg font-bold text-phoenixFire mb-4 border-b border-phoenixFire/30 pb-2">
              {project.title}
            </h3>

            {project.caseStudy ? (
              <div className="space-y-4 flex-grow overflow-y-auto custom-scrollbar">
                {/* The Challenge */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">💡</span>
                    <h4 className="text-sm font-bold text-lunarGold uppercase tracking-wider">The Challenge</h4>
                  </div>
                  <p className="text-sm text-moonlightSilver/90 leading-relaxed">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">⚡</span>
                    <h4 className="text-sm font-bold text-mermaidTeal uppercase tracking-wider">The Solution</h4>
                  </div>
                  <p className="text-sm text-moonlightSilver/90 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>

                {/* The Results */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">✨</span>
                    <h4 className="text-sm font-bold text-phoenixFire uppercase tracking-wider">The Results</h4>
                  </div>
                  <p className="text-sm text-moonlightSilver/90 leading-relaxed">
                    {project.caseStudy.results}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-grow flex items-center justify-center">
                <p className="text-moonlightSilver/60 italic">Case study coming soon...</p>
              </div>
            )}

            {/* View Demo Button or Coming Soon */}
            <div className="mt-6 pt-4 border-t border-phoenixFire/20">
              {project.link ? (
                <Link
                  href={project.link}
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-phoenixFire to-lunarGold text-midnight font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-phoenixFire/50 hover:scale-105 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live Demo →
                </Link>
              ) : (
                <div className="w-full text-center px-6 py-3 rounded-full bg-moonlightSilver/10 border-2 border-moonlightSilver/30 text-moonlightSilver/60 font-bold text-sm uppercase tracking-wider">
                  Coming Soon
                </div>
              )}
            </div>

            {/* Tap to Flip Back Hint */}
            <div className="mt-3 text-center text-xs text-moonlightSilver/50 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Tap to flip back</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
