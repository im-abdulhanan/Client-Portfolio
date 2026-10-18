import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { StarDoodle, WavyUnderline, WashiTape } from './DoodleAssets';
import { WaylineMockup, TandemMockup, ForgeMockup, VoltMockup } from './ProjectMockups';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  date: string;
  description: string;
  detailedCaseStudy?: {
    client: string;
    role: string;
    year: string;
    problem: string;
    solution: string;
    impact: string[];
    deliverables: string[];
  };
  tags: string[];
  color: string;
  textColor: string;
  tabOffsetPercent: number;
  imageUrl: string;
  imageAlt: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'wayline',
    number: '01',
    title: 'Wayline',
    date: 'MAR 19, 2026',
    description: "Making a whole city's transit app feel less like decoding a puzzle.",
    detailedCaseStudy: {
      client: 'Metropolitan Transit Authority',
      role: 'Lead Product Designer',
      year: '2026',
      problem: 'Commuters were abandoning the legacy transit app due to confusing schedule tables, delayed GPS tracking, and stressful transfer planning.',
      solution: 'Redesigned the entire mobility experience with glanceable route visualizers, live step-by-step guidance, and real-time crowd alerts.',
      impact: [
        '+42% daily active commuter adoption within 60 days',
        '88% decrease in support tickets for missed connections',
        'App Store rating increased from 2.8 to 4.8 stars',
      ],
      deliverables: ['Design System', 'iOS & Android App', 'Physical Station Kiosk UI', 'Micro-interactions'],
    },
    tags: ['MOBILITY', 'CONSUMER APP'],
    color: 'var(--ca-blue)',
    textColor: 'text-white',
    tabOffsetPercent: 0,
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Wayline Transit Mobile App Mockup',
  },
  {
    id: 'tandem',
    number: '02',
    title: 'Tandem',
    date: 'MAR 2, 2026',
    description: "From 'who owes who' to money that finally feels shared.",
    detailedCaseStudy: {
      client: 'Tandem Financial Labs',
      role: 'Staff Product & Systems Designer',
      year: '2026',
      problem: 'Roommates, couples, and travel groups struggled with awkward debt conversations and fragmented spreadsheets.',
      solution: 'Created an intuitive joint ledger and automated instant bill-splitting tool with zero friction and friendly celebration micro-animations.',
      impact: [
        '$140M+ in shared expenses settled smoothly',
        'Average expense settlement time reduced from 9 days to 4 hours',
        'Featured by Apple as Essential Finance App of the Month',
      ],
      deliverables: ['End-to-End Product Design', 'Brand Identity', 'Financial Data Visualizations', 'Interactive Prototype'],
    },
    tags: ['FINTECH', 'CONSUMER APP'],
    color: '#18181b',
    textColor: 'text-white',
    tabOffsetPercent: 18,
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Tandem Fintech App UI Mockup',
  },
  {
    id: 'forge',
    number: '03',
    title: 'Forge',
    date: 'JAN 2, 2026',
    description: 'Getting a new engineer from day one to shipping without the panic.',
    detailedCaseStudy: {
      client: 'Forge Developer Cloud',
      role: 'Principal UX Designer',
      year: '2026',
      problem: 'Developer onboarding at large tech organizations took an average of 3 weeks before an engineer could submit their first pull request.',
      solution: 'Designed an intelligent developer dashboard that streamlines repository access, cloud sandbox provisioning, and peer mentorship matching.',
      impact: [
        'Time-to-first-commit slashed from 21 days down to 2 days',
        '96% engineer satisfaction score across 4,000+ engineers',
        'Adopted company-wide across 18 engineering hubs',
      ],
      deliverables: ['Cloud Console UX', 'CLI Component Library', 'Developer Journey Mapping', 'Design Tokens'],
    },
    tags: ['DEV TOOLS', 'ONBOARDING'],
    color: 'var(--ca-yellow)',
    textColor: 'text-[var(--ca-ink)]',
    tabOffsetPercent: 36,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Forge Developer Console Workspace',
  },
  {
    id: 'volt',
    number: '04',
    title: 'Volt',
    date: 'NOV 15, 2025',
    description: 'Helping people actually understand the energy they use at home.',
    detailedCaseStudy: {
      client: 'Volt Clean Energy Grid',
      role: 'Product Designer & Visual Strategist',
      year: '2025',
      problem: 'Residential utility bills are incomprehensible walls of numbers that fail to motivate energy conservation or smart grid adoption.',
      solution: 'Transformed complex kWh metrics into actionable home energy insights, solar net-metering rewards, and smart appliance automation.',
      impact: [
        'Average household electricity footprint reduced by 24%',
        '85% active monthly user engagement with peak-hour shifting',
        'Winner of CleanTech Design Award 2025',
      ],
      deliverables: ['Smart Meter App', 'Data Visualizations', 'Hardware Display Interface', 'User Research'],
    },
    tags: ['CLIMATE', 'DATA DESIGN'],
    color: 'var(--ca-pink)',
    textColor: 'text-white',
    tabOffsetPercent: 54,
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Volt Smart Energy Management App',
  },
];

interface ProjectsStackProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsStack: React.FC<ProjectsStackProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center sm:mb-24">
          <div className="inline-flex flex-col items-center">
            <span className="ca-hand text-2xl font-bold tracking-wide text-[var(--ca-ink)] sm:text-3xl">
              explore my work!
            </span>
            <WavyUnderline className="w-24 text-[var(--ca-ink)] -mt-1 sm:w-28" />
          </div>

          <h2 className="ca-display mt-6 text-6xl uppercase tracking-wider text-[var(--ca-ink)] sm:text-8xl md:text-9xl leading-none">
            FEATURED WORKS
          </h2>

          <div className="mx-auto mt-6 max-w-md">
            <div className="ca-mono -rotate-1 rounded-sm border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow-soft)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[3px_3px_0px_#191510] sm:text-sm">
              A few products I helped make simpler, calmer, and easier to trust.
            </div>
          </div>
        </div>

        {/* Stacked File-Folder Deck Cards */}
        <div className="relative flex flex-col gap-12 lg:gap-[15vh]">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className="lg:sticky lg:top-28 transition-transform duration-200"
              style={{ zIndex: idx + 1 }}
            >
              {/* Chamfered Tab Header */}
              <div
                className="flex"
                style={{
                  // On desktop, tab shifts horizontally to create the staggered folder tab layout
                  marginLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${project.tabOffsetPercent}%` : '0',
                }}
              >
                <div
                  className="ca-tab-chamfer inline-flex items-center gap-2.5 py-3 pr-14 pl-6 text-xs font-bold uppercase tracking-[0.2em] sm:py-4 sm:pr-24 sm:pl-8 sm:text-sm shadow-[0_-2px_6px_rgba(25,21,16,0.08)]"
                  style={{
                    backgroundColor: project.color,
                    color: project.textColor.includes('white') ? '#ffffff' : '#191510',
                  }}
                >
                  <StarDoodle className="h-4 w-4 fill-current" />
                  <span>PROJECT {project.number}</span>
                </div>
              </div>

              {/* Main Card Body */}
              <div
                className="relative overflow-hidden border-2 border-[var(--ca-ink)] p-6 shadow-[8px_8px_0px_#191510] sm:p-10 lg:grid lg:min-h-[520px] lg:grid-cols-[1.1fr_1.3fr] lg:gap-12 lg:p-14"
                style={{ backgroundColor: project.color }}
              >
                {/* Left Content Column */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Date Pill */}
                    <div className="ca-mono inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] opacity-90 sm:text-sm"
                         style={{ color: project.textColor.includes('white') ? '#ffffff' : '#191510' }}>
                      <span className="h-2.5 w-2.5 rounded-full bg-current ca-blink" />
                      {project.date}
                    </div>

                    {/* Project Title */}
                    <h3 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
                        style={{ color: project.textColor.includes('white') ? '#ffffff' : '#191510' }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 max-w-md text-base leading-relaxed opacity-90 sm:text-lg"
                       style={{ color: project.textColor.includes('white') ? '#ffffff' : '#191510' }}>
                      {project.description}
                    </p>

                    {/* View Project Link / Action */}
                    <div className="mt-8">
                      <button
                        id={`project-btn-${project.id}`}
                        onClick={() => onSelectProject(project)}
                        className="ca-mono group inline-flex items-center gap-2 border-b-2 pb-1 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:gap-3.5 sm:text-sm"
                        style={{
                          color: project.textColor.includes('white') ? '#ffffff' : '#191510',
                          borderColor: project.textColor.includes('white') ? '#ffffff' : '#191510',
                        }}
                      >
                        VIEW PROJECT CASE STUDY
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                    </div>
                  </div>

                  {/* Chamfered Category Tag Badges */}
                  <div className="mt-10 flex flex-wrap gap-2.5 sm:mt-12">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="ca-tag-chamfer ca-mono border border-[var(--ca-ink)]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[2px_2px_0px_rgba(25,21,16,0.3)] sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Mockup Column with Taped Photo Frame */}
                <div className="relative mt-8 flex items-center justify-center lg:mt-0">
                  <div className="group relative w-full max-w-lg cursor-pointer overflow-visible transition-transform duration-300 hover:scale-[1.02]"
                       onClick={() => onSelectProject(project)}>
                    
                    {/* Translucent Corner Washi Tapes */}
                    <WashiTape color="rgba(255, 255, 255, 0.7)" rotate="-rotate-12" width="w-24" height="h-7" className="-top-3 -left-4 z-20" />
                    <WashiTape color="rgba(255, 255, 255, 0.7)" rotate="rotate-12" width="w-24" height="h-7" className="-top-3 -right-4 z-20" />

                    {/* Framed Mockup Container */}
                    <div className="relative aspect-[16/11] overflow-hidden rounded-sm border-3 border-white bg-black/10 shadow-[6px_6px_0px_rgba(25,21,16,0.25)]">
                      {project.id === 'wayline' && <WaylineMockup />}
                      {project.id === 'tandem' && <TandemMockup />}
                      {project.id === 'forge' && <ForgeMockup />}
                      {project.id === 'volt' && <VoltMockup />}
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 pointer-events-none" />
                      <div className="ca-mono absolute bottom-3 right-3 rounded bg-black/85 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 shadow-md pointer-events-none">
                        CLICK TO EXPAND
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
