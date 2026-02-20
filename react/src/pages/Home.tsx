import LucasSena from '../assets/lucas.png';

export default function Home() {
    return (
        <div className="flex justify-between items-center gap-10 min-h-[calc(100vh+65px)] py-25 lg:py-0 home">
            <div className="max-w-[500px]">
                <h2 className="font-bold text-5xl">Hello World!</h2>
                <h1 className="font-bold text-8xl leading-[80px]">I am <span className="text-[#496977]">Lucas <br/>Sena</span></h1>
                <p className="pt-3 text-2xl">Student of Software Engineer, UX/UI, Programmer Front-end, Python, Java and <b>+</b></p>
                <a
                    href="../../public/Currículo.pdf"
                    download
                    className="inline-block bg-[#AC6532] text-[#FFF9F2] hover:bg-[#493222] hover:text-[#CED6DA] hover:scale-105 transition duration-300 ease-in-out text-2xl font-semibold py-4 px-12 mt-5 rounded-full cursor-pointer"
                >
                    <i className="fa-solid fa-download"></i> Download CV
                </a>
            </div>
            <div className="max-w-100 max-h-100 bg-[#496977] rounded-3xl hover:scale-105 hover:rotate-2 transition duration-500 ease-in-out">
            {/* <div className="max-w-100 max-h-100 bg-gradient-to-r from-[#222] to-[#496977] bg-transparent rounded-3xl"> */}
                <img src={LucasSena} alt="Lucas Sena" className="max-w-100 max-h-100 object-cover rounded-3xl" />
            </div>
        </div>
    )
}