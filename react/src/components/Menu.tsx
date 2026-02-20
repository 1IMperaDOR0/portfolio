import { useState, useEffect } from "react"

export default function Menu() {
    const [lang, setLang] = useState("EN")
    const [theme, setTheme] = useState("light")

    const toggleButton = (value: string, current: string) => `
    flex-1 flex justify-center items-center cursor-pointer rounded-3xl transition duration-300
    ${value === current 
        ? 'bg-[#AC6532] p-2 text-white' 
        : 'text-black opacity-60 hover:opacity-100'}`

    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("home")

    useEffect(() => {
    if (open) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return () => {
        document.body.style.overflow = "auto"
    }
    }, [open])

    const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        setActive(id)
        setOpen(false)
    }
    }

    const linkClass = (id: string) => `
    border-b-4 cursor-pointer transition ease-in-out duration-300

    ${active === id
        ? 'text-[#CED6DA] border-[#CED6DA]'
        : 'border-transparent hover:text-[#CED6DA] hover:border-[#CED6DA]'
    }
    `

    return (
        <nav 
            className={`
                fixed flex items-end w-full h-[65px] z-50
                bg-[#496977] text-[#FFF9F2] text-xl
                lg:px-25 md:px-15 px-8 
                ${open ? 'justify-end' : 'justify-between'}
            `}
        >
            <ul
                className={`
                    fixed top-0 right-0 w-60 min-h-[200vh] h-[65px]
                    flex flex-col gap-10 pt-25 lg:pt-5 md:pt-5 px-8 lg:px-0 md:px-0
                    bg-[#496977]
                    transform transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : 'translate-x-full'}
                    md:static md:min-h-0 md:w-auto
                    md:flex md:flex-row
                    md:translate-x-0 md:transform-none
                `}
            >
                <li onClick={() => scrollToSection("home")} className={linkClass("home")}>
                    Home
                </li>

                <li onClick={() => scrollToSection("skills")} className={linkClass("skills")}>
                    Skills
                </li>

                <li onClick={() => scrollToSection("projects")} className={linkClass("projects")}>
                    Projects
                </li>

                <li onClick={() => scrollToSection("contacts")} className={linkClass("contacts")}>
                    Contacts
                </li>
            </ul>
            
            <div className={`
                    fixed top-100 right-0 w-60 h-[65px]
                    flex flex-col items-center gap-10 px-8 lg:px-0 md:px-0
                    bg-[#496977]
                    transform transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : 'translate-x-full'}
                    md:static md:min-h-0 md:w-auto
                    md:flex md:flex-row
                    md:translate-x-0 md:transform-none
                `}
            >
                <div className="bg-[#CED6DA] w-25 h-12 p-2 flex rounded-3xl">
                    <div 
                        onClick={() => setLang("EN")}
                        className={toggleButton("EN", lang)}
                    >
                        EN
                    </div>
                    <div 
                        onClick={() => setLang("PT")}
                        className={toggleButton("PT", lang)}
                    >
                        PT
                    </div>
                </div>
                <div className="bg-[#CED6DA] w-25 h-12 p-2 flex rounded-3xl">
                    <div 
                        onClick={() => setTheme("light")}
                        className={toggleButton("light", theme)}
                    >
                        <i className="fa-solid fa-sun"></i>
                    </div>

                    <div 
                        onClick={() => setTheme("dark")}
                        className={toggleButton("dark", theme)}
                    >
                        <i className="fa-solid fa-moon"></i>
                    </div>
                </div>
            </div>

            <button
                className={`md:hidden text-2xl w-[32px] h-[32px] fixed flex justify-center items-center top-4`}
                onClick={() => setOpen(!open)}
            >
                {open ? '✕' : '☰'}
            </button>
        </nav>
    )
}