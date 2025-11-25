import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Enlaces de interés
    const enlacesInteres = [
        {
            nombre: "Servicio de Administración Tributaria",
            url: "https://www.sat.gob.mx"
        },
        {
            nombre: "Secretaría de Gobernación",
            url: "https://www.e5cinco.segob.gob.mx"
        },
        {
            nombre: "Gobierno de México",
            url: "https://www.tuempresa.gob.mx"
        },
        {
            nombre: "Registro Único de Garantías",
            url: "https://www.rug.gob.mx"
        },
        {
            nombre: "Instituto Mexicano de la Propiedad Industrial",
            url: "https://www.gob.mx/impi"
        }
    ];

    return (
        <footer className="bg-[#41475f] text-[#f3efec]">
            {/* Info Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Enlaces de interés */}
                        <div>
                            <h4 className="text-xl font-semibold mb-6 text-[#f3efec]">
                                Enlaces de interés
                            </h4>
                            <div className="space-y-3 text-[#f3efec] opacity-90">
                                {enlacesInteres.map((enlace, index) => (
                                    <div key={index}>
                                        <a
                                            href={enlace.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#87888a] transition duration-300 block py-1 text-xl hover:underline"
                                        >
                                            {enlace.nombre}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Aviso de privacidad y legales */}
                        <div>
                            <h4 className="text-xl font-semibold mb-6 text-[#f3efec]">
                                Información legal
                            </h4>
                            <div className="space-y-4">
                                <Link
                                    to="/aviso"
                                    className="bg-[#87888a] text-[#f3efec] font-bold px-6 py-3 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold w-full text-center block"
                                >
                                    Aviso de Privacidad
                                </Link>
                                <div className="bg-[#87888a] bg-opacity-20 rounded-lg p-4">
                                    <p className="text-sm text-[#f3efec] font-bold opacity-90 text-justify">
                                        Correduría Pública No. 39 CDMX es una institución comprometida con la
                                        transparencia y protección de datos personales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div className="border-t border-[#87888a] border-opacity-30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-[#f3efec] opacity-90 text-center md:text-left">
                            &copy; {currentYear} Todos los derechos reservados
                        </p>
                        <Link
                            to="/"
                            className="text-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold"
                        >
                            Correduría Pública No. 39 CDMX
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;