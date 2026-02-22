import { useTranslation } from "../hooks/useTranslation";

export default function Contacts() {
    const t = useTranslation();
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl font-bold text-center mb-8">{t.contacts}</h2>
            <p className="mb-10">{t.contato}</p>
            <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                <a href="https://github.com/1IMperaDOR0" className="bg-[#CED6DA] h-15 w-15 rounded-full text-3xl flex justify-center items-center hover:scale-108 transition ease-in-out duration-300 hover:bg-[#496977]"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/luca5-5ena/" className="bg-[#CED6DA] h-15 w-15 rounded-full text-3xl flex justify-center items-center hover:scale-108 transition ease-in-out duration-300 hover:bg-[#496977]"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lucaslucore@gmail.com" className="bg-[#CED6DA] h-15 w-15 rounded-full text-3xl flex justify-center items-center hover:scale-108 transition ease-in-out duration-300 hover:bg-[#496977]"><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>
    )
}