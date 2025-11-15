'use client';

interface MoonPhaseNavProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export function MoonPhaseNav({ sections }: MoonPhaseNavProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // We always show 5 moon phases
  const moonPhases = [
    {
      size: 'sm',
      className: 'bg-midnight border-moonlightSilver/40 hover:border-moonlightSilver/70',
      title: 'New Moon',
    },
    {
      size: 'sm',
      className: 'bg-gradient-to-r from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-moonlightSilver/50 hover:border-moonlightSilver/80',
      title: 'Waxing Crescent',
    },
    {
      size: 'lg',
      className: 'bg-gradient-to-br from-lunarGold via-moonlightSilver to-starlight border-lunarGold/70',
      title: 'Full Moon',
      isCurrent: true,
    },
    {
      size: 'sm',
      className: 'bg-gradient-to-l from-midnight via-moonlightSilver/30 to-moonlightSilver/60 border-moonlightSilver/50 hover:border-moonlightSilver/80',
      title: 'Waning Crescent',
    },
    {
      size: 'sm',
      className: 'bg-midnight border-moonlightSilver/40 hover:border-moonlightSilver/70',
      title: 'New Moon',
    },
  ];

  return (
    <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
      {moonPhases.map((phase, index) => {
        const section = sections[index];
        const sizeClass = phase.size === 'lg'
          ? 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
          : 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10';

        return (
          <div key={index} className="flex items-center gap-3 sm:gap-4 md:gap-8">
            {phase.isCurrent ? (
              <div
                className={`${sizeClass} rounded-full ${phase.className} border-2 transition-all shadow-lg shadow-lunarGold/30 flex-shrink-0`}
                title={`${phase.title} - You are here`}
              />
            ) : section ? (
              <button
                onClick={() => scrollToSection(section.id)}
                className={`${sizeClass} rounded-full ${phase.className} border-2 hover:scale-110 transition-all cursor-pointer flex-shrink-0 group relative`}
                title={`${phase.title} - ${section.label}`}
                aria-label={`Scroll to ${section.label}`}
              >
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-moonlightSilver opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {section.label}
                </span>
              </button>
            ) : (
              <div
                className={`${sizeClass} rounded-full ${phase.className} border-2 transition-all flex-shrink-0`}
                title={phase.title}
              />
            )}
            {index < moonPhases.length - 1 && (
              <div className="h-0.5 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-moonlightSilver/30 to-mermaidTeal/30" />
            )}
          </div>
        );
      })}
    </div>
  );
}
