import Image from './common/Image';
import walmartLogo from '../assets/images/walmart-logo_brandlogos.net_9vfxa.png';
import attLogo from '../assets/images/AT&T_logo_2016svg.png';
import ocesaLogo from '../assets/images/ocesa-logo-png-transparent.png';
import autditorioLogo from '../assets/images/Auditorio-Nacional-Logo-Rojo.png';
import begrand5Logo from '../assets/images/begrand_33a8b3c106_Z1PX8SI.webp';
import monexLogo from '../assets/images/Monex_Logo.png';

interface Cliente {
    id: number;
    nombre: string;
    descripcion: string;
    logo: string;
    industria: string;
}

const PrincipalesClientes = () => {
    const clientes: Cliente[] = [
        {
            id: 1,
            nombre: "Walmart",
            descripcion: "Líder mundial en retail con presencia en múltiples países. Colaboramos en asesoría jurídica corporativa y procesos de mediación comercial.",
            logo: walmartLogo,
            industria: "Retail"
        },
        {
            id: 2,
            nombre: "AT&T",
            descripcion: "Compañía global de telecomunicaciones. Brindamos servicios de fedatario público para contratos y convenios corporativos.",
            logo: attLogo,
            industria: "Telecomunicaciones"
        },
        {
            id: 3,
            nombre: "OCESA",
            descripcion: "Empresa líder en entretenimiento en vivo y producción de eventos. Asesoramos en contratos mercantiles y certificaciones para operaciones comerciales.",
            logo: ocesaLogo,
            industria: "Entretenimiento"
        },
        {
            id: 4,
            nombre: "Auditorio Nacional",
            descripcion: "Recinto cultural emblemático de México. Proveemos servicios de certificación y formalización de actos jurídicos relacionados con eventos y operaciones comerciales.",
            logo: autditorioLogo,
            industria: "Cultura y Espectáculos"
        },
        {
            id: 5,
            nombre: "Be Grand",
            descripcion: "Desarrolladora inmobiliaria de alto nivel. Participamos en procesos de valuación, asesoría legal y formalización de operaciones corporativas.",
            logo: begrand5Logo,
            industria: "Inmobiliario"
        },
        {
            id: 6,
            nombre: "Monex Bank",
            descripcion: "Institución financiera especializada en banca corporativa y servicios cambiarios. Brindamos asesoría mercantil y certificaciones en transacciones comerciales.",
            logo: monexLogo,
            industria: "Finanzas"
        }
    ];

    return (
        <section id="clientes" className="py-20 bg-white w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
                        Principales Clientes
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Colaboramos con empresas líderes en sus industrias, brindando servicios de correduría pública
                        con el más alto nivel de profesionalismo y confidencialidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {clientes.map((cliente) => (
                        <div key={cliente.id} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 border border-gray-200">
                            {/* Logo del cliente */}
                            <div className="flex justify-center mb-4">
                                <div className="w-32 h-32 bg-white rounded-full p-4 shadow-sm border border-gray-300 flex items-center justify-center">
                                    <Image
                                        src={cliente.logo}
                                        alt={`Logo ${cliente.nombre}`}
                                        layout="intrinsic"
                                        width={96}
                                        height={96}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {cliente.nombre}
                                </h3>
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                                    {cliente.industria}
                                </span>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {cliente.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensaje adicional */}
                <div className="text-center mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Confían en Nuestra Experiencia
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Estas empresas líderes han elegido nuestros servicios de correduría pública por nuestra
                        trayectoria, profesionalismo y compromiso con la excelencia en cada proceso.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrincipalesClientes;