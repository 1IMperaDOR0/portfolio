import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Skills.css';

interface SkillCardProps {
    title: string;
    skills: string[];
    isActive: boolean;
}

const skillIcons: Record<string, string> = {
    Figma: "fa-brands fa-figma",
    HTML5: "fa-brands fa-html5",
    CSS3: "fa-brands fa-css3-alt",
    JavaScript: "fa-brands fa-js",
    TypeScript: "fa-brands fa-typescript",
    Tailwindcss: "fa-brands fa-tailwind-css",
    React: "fa-brands fa-react",
    Dart: "fa-brands fa-dart-lang",
    Flutter: "fa-brands fa-flutter",

    Git: "fa-brands fa-git-alt",
    GitHub: "fa-brands fa-github",
    VSCode: "fa-solid fa-laptop-code",
    Python: "fa-brands fa-python",
    "Packet Tracer": "fa-solid fa-network-wired",
    "Arduino/Esp32": "fa-solid fa-microchip",
    "Node-RED": "fa-solid fa-chart-column",

    Excel: "fa-solid fa-table-list",
    Numpy: "fa-solid fa-cube",
    Pandas: "fa-solid fa-sliders",
    Matplotlib: "fa-solid fa-chart-pie",
    Linux: "fa-brands fa-linux",
    "Kali Linux": "fa-brands fa-d-and-d",
    SQL: "fa-solid fa-database",
    Java: "fa-brands fa-java",
};

const SkillCard = ({ title, skills, isActive }: SkillCardProps) => {
    return (
        <div className={`
                p-8 px-12 m-2 rounded-[30px] lg:w-[450px] md:w-[450px] w-[300px] min-h-[400px] shadow-xl
                transition-all duration-500
                ${isActive ? "bg-[#496977] text-[#FFF9F2] scale-100 opacity-100" : "bg-[#B4B0AB] text-transparent scale-90 opacity-50"}
            `}
        >
            <h3 className="text-4xl font-semibold text-center mb-8">{title}</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-5 gap-x-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <i className={`${skillIcons[skill] || "fa-solid fa-code"} text-4xl text-white flex-shrink-0`}></i>
                        <span className="text-lg font-light">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = [
        {
            title: "Front-end",
            skills: ["Figma", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwindcss", "React", "Dart", "Flutter"]
        },
        {
            title: "Tools and Others",
            skills: ["Git", "GitHub", "VSCode", "Python", "Packet Tracer", "Arduino/Esp32", "Node-RED"]
        },
        {
            title: "Currently Learning",
            skills: ["Excel", "Pandas", "Numpy", "Matplotlib", "SQL", "Java", "Linux", "Kali Linux"],
        },
        {
            title: "Front-end",
            skills: ["Figma", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwindcss", "React", "Dart", "Flutter"]
        },
        {
            title: "Tools and Others",
            skills: ["Git", "GitHub", "VSCode", "Python", "Packet Tracer", "Arduino/Esp32", "Node-RED"]
        },
        {
            title: "Currently Learning",
            skills: ["Excel", "Pandas", "Numpy", "Matplotlib", "SQL", "Java", "Linux", "Kali Linux"],
        }
    ];

    return (
        <div>
            <h2 className="text-6xl font-bold text-center text-black">Skills</h2>

            <div className="overflow-x-hidden w-full">
                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    loopAdditionalSlides={categories.length}
                    slidesPerView={'auto'}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    className="skills-swiper"
                >
                    {[...categories, ...categories].map((cat, index) => (
                        <SwiperSlide key={index} style={{ width: 'fit-content', display: 'flex', justifyContent: 'center' }}>
                            <SkillCard
                                title={cat.title}
                                skills={cat.skills}
                                isActive={index === activeIndex}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;