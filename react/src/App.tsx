import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';

function App() {
    return (
        <>
            <Menu />
            <main>
                <section id='home' className='px-25 pt-5 bg-[#CED6DA] flex flex-col items-beetwen justify-center'>
                    <Home />
                </section>
                <section id='skills' className='px-25 py-10 bg-[#FFF9F2] flex flex-col items-beetwen justify-center'>
                    <Skills />
                </section>
                <section id='projects' className='px-25 py-10 bg-[#CED6DA] flex flex-col items-beetwen justify-center'>
                    <Projects />
                </section>
                <section id='contacts' className='px-25 py-10 bg-[#FFF9F2] flex flex-col items-beetwen justify-center'>
                    <Contacts />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
