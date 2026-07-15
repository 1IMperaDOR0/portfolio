import Portfolio from '../assets/portfolio-desktop-preview.png';
import PassaABola from '../assets/passa-a-bola-preview.png';
import Melodia from '../assets/melodia-preview.png';
import Cinebox from '../assets/cinebox-preview.png';
import SistemaGrafica from '../assets/sistema-grafica-python-preview.png';
import { useTranslation } from '../hooks/useTranslation';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
}

const ProjectCard = ({ title, description, tech, github, demo, image }: ProjectCardProps) => {
    return (
        <div className="w-[350px] bg-[#496977] text-[#FFF9F2] rounded-3xl overflow-hidden shadow-xl hover:scale-103 transition-all duration-300">

            <div className="h-[160px] w-full overflow-hidden flex justify-center">
                <img
                    src={image}
                    alt={title}
                />
            </div>

            <div className="p-6 flex flex-col justify-between min-h-[220px]">

                <div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>

                    <p className="text-sm text-[#D1D9DE] mb-4">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((item, i) => (
                            <span key={i} className="bg-[#AC6532] px-3 py-1 rounded-full text-xs">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 text-xl">
                    <a href={github} target="_blank">
                        <i className="fa-brands fa-github hover:text-[#AC6532] transition"></i>
                    </a>
                    <a href={demo} target="_blank">
                        <i className="fa-solid fa-arrow-up-right-from-square hover:text-[#AC6532] transition"></i>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default function Projects() {
    const t = useTranslation();
    const projects = [
        {
            title: "Portfolio Website",
            description: t.portfolio,
            tech: ["React", "TypeScript", "TailwindCSS"],
            github: "https://github.com/1IMperaDOR0/portfolio",
            demo: "#",
            image: Portfolio,
        },
        {
            title: "Passa a Bola App",
            description: t.passaabola,
            tech: ["Dart", "Flutter", "Firebase"],
            github: "https://github.com/gabsakura/passa-a-bola",
            demo: "https://flutter-app-f547b.web.app/",
            image: PassaABola,
        },
        {
            title: "Melodia Website",
            description: t.melodia,
            tech: ["React", "TypeScript", "TailwindCSS"],
            github: "https://github.com/1IMperaDOR0/melodia.github.io",
            demo: "https://1imperador0.github.io/melodia.github.io/",
            image: Melodia,
        },
        {
            title: "CineBox Website",
            description: t.cinebox,
            tech: ["React", "TypeScript", "TailwindCSS"],
            github: "https://github.com/1IMperaDOR0/cinebox.github.io",
            demo: "https://1imperador0.github.io/cinebox.github.io/",
            image: Cinebox,
        },
                {
            title: t.sistemagrafico1,
            description: t.sistemagrafico2,
            tech: ["Python", "CLI"],
            github: "https://github.com/1IMperaDOR0/sistema-de-gestao-grafica",
            demo: "https://github.com/1IMperaDOR0/sistema-de-gestao-grafica",
            image: SistemaGrafica,
        }
    ];

    return (
        <div className='py-15'>
            <h2 className="text-5xl font-bold text-center mb-12">
                {t.projects}
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}