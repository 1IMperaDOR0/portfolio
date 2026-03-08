import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
    const t = useTranslation();

    return (
        <footer className="flex justify-center bg-[#496977] text-center text-[#FFF9F2] lg:px-25 md:px-15 px-8 py-5">
            © {new Date().getFullYear()} Lucas Sena. {t.footer}
        </footer>
    )
}