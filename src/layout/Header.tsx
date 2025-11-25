import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cdmxlogo from '../assets/images/cdmxlogo.jpg';
import Image from '../components/common/Image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuItems = [
        { href: '#inicio', text: 'Inicio' },
        { href: '#acerca', text: 'Acerca de Nosotros' },
        { href: '#servicios', text: 'Servicios' },
        { href: '#ubicaciones', text: 'Ubicaciones' },
        { href: '#contacto', text: 'Contacto' }
    ];

    const handleNavigation = (href: string) => {
        closeMenu();

        if (location.pathname === '/aviso') {
            navigate(`/${href}`);
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleLogoClick = () => {
        if (location.pathname === '/aviso') {
            navigate('/#inicio');
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-[#41475f] shadow-lg z-50">
            <div className="container mx-auto px-4 rounded-2xl">
                <nav className="flex justify-between items-center py-4">

                    {/* Logo reemplazando el texto */}
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex items-center"
                    >
                        <Image
                            src={cdmxlogo}
                            alt="CDMX Logo"
                            width={180}
                            height={90}
                            className="rounded-xl object-contain"
                        />
                    </Link>

                    {/* Botón menú móvil */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="relative w-10 h-10 flex flex-col justify-center items-center group"
                        >
                            <span className={`w-6 h-0.5 bg-[#f3efec] rounded-full transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
                            <span className={`w-6 h-0.5 bg-[#f3efec] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                            <span className={`w-6 h-0.5 bg-[#f3efec] rounded-full transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>

                            <span className="absolute -bottom-6 text-xs text-[#f3efec] opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#41475f] px-2 py-1 rounded whitespace-nowrap">
                                {isMenuOpen ? 'Cerrar' : 'Menú'}
                            </span>
                        </button>
                    </div>

                    {/* Menú desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavigation(item.href)}
                                className="relative text-[#f3efec] font-light transition-all duration-300 group cursor-pointer"
                            >
                                <div className="relative z-10 px-6 py-3">
                                    {item.text}
                                </div>
                                <div className="absolute inset-0 bg-[#7f8082] rounded-lg border-2 border-[#f3efec] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform -z-10 mx-1"></div>
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-[#41475f] z-40">
                        <div className="absolute top-6 right-6 z-50">
                            <button
                                onClick={closeMenu}
                                className="relative w-10 h-10 flex flex-col justify-center items-center group"
                            >
                                <span className="w-6 h-0.5 bg-[#f3efec] rounded-full transform rotate-45 translate-y-1.5"></span>
                                <span className="w-6 h-0.5 bg-[#f3efec] rounded-full transform -rotate-45 -translate-y-1.5"></span>

                                <span className="absolute -bottom-6 text-xs text-[#f3efec] opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#41475f] px-2 py-1 rounded whitespace-nowrap">
                                    Cerrar menú
                                </span>
                            </button>
                        </div>

                        <div className="flex flex-col justify-center h-full px-6">
                            <div className="bg-[#7f8082] rounded-2xl border-2 border-[#f3efec] p-6 mx-4">
                                {menuItems.map((item, index) => (
                                    <div
                                        key={item.href}
                                        className={`${index !== menuItems.length - 1 ? 'border-b-2 border-[#f3efec]' : ''}`}
                                    >
                                        <button
                                            onClick={() => handleNavigation(item.href)}
                                            className="block w-full text-center text-[#f3efec] text-xl font-semibold hover:text-white transition-all duration-300 py-4 rounded-lg hover:bg-[#41475f]"
                                        >
                                            {item.text}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
