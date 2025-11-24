import Image from './common/Image';
import service1 from '../assets/images/fedatario.jpg';
import service2 from '../assets/images/perito.jpg';
import service3 from '../assets/images/agente.jpg';
import service4 from '../assets/images/agente.jpg';
import service5 from '../assets/images/arbitro.jpg';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}

const Services = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "Fedatario Público",
            description: "para hacer constar los contratos, convenios, actos y hechos de naturaleza mercantil, así como en la emisión de obligaciones y otros títulos de valor; en hipotecas sobre buques, navíos y aeronaves que se celebren ante él, y en el otorgamiento de créditos refaccionarios o avío, de acuerdo con la Ley de la materia.",
            image: service1
        },
        {
            id: 2,
            title: "Perito Valuador",
            description: "para estimar, valorar y cuantificar bienes, servicios, derechos y obligaciones que se sometan a su consideración por nombramiento privado o mandato de autoridad competente",
            image: service2
        },
        {
            id: 3,
            title: "Agente Mediador",
            description: "para intercambiar propuestas entre dos o más partes, respecto de cualquier bien o servicio que se ofrezca en el mercado nacional o internacional; conservar muestras de los bienes que les sean entregados y, asesorar en la celebración o ajuste de cualesquier contrato o convenio mercantil.",
            image: service3
        },
        {
            id: 4,
            title: "Asesor Jurídico",
            description: "de sociedades mercantiles y personas físicas en actividades propias del comercio.",
            image: service4
        },
        {
            id: 5,
            title: "Árbitro",
            description: "en la solución de controversias derivadas de actos, contratos o convenios mercantiles, a solicitud de las partes, así como las que resulten entre proveedores y consumidores de acuerdo con la Ley de la materia.",
            image: service5
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-white w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase font-secondary">
                        Servicios
                    </h2>
                </div>

                {/* Grid principal de 3 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Primera fila: servicios 1, 2, 3 */}
                    {services.slice(0, 3).map((service) => (
                        <div key={service.id} className="flex flex-col items-center mt-12 relative">
                            {/* Circular Image Container */}
                            <div className="relative w-36 h-36 mb-[-72px] z-10">
                                <div className="absolute inset-0 bg-white rounded-full p-0.5 shadow-lg border-4 border-white">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="bg-[#41475f] text-white p-8 pt-20 rounded-lg shadow-lg w-full min-h-[350px] flex flex-col">
                                <h3 className="text-xl font-bold mb-4 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-200 text-base leading-relaxed grow text-center">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Segunda fila: servicio 4 en columna 1, servicio 5 en columna 3 */}

                    {/* Servicio 4 - columna 1 */}
                    <div className="flex flex-col items-center mt-12 relative">
                        <div className="relative w-36 h-36 mb-[-72px] z-10">
                            <div className="absolute inset-0 bg-white rounded-full p-0.5 shadow-lg border-4 border-white">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src={services[3].image}
                                        alt={services[3].title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#41475f] text-white p-8 pt-20 rounded-lg shadow-lg w-full min-h-[350px] flex flex-col">
                            <h3 className="text-xl font-bold mb-4 text-center">
                                {services[3].title}
                            </h3>
                            <p className="text-gray-200 text-base leading-relaxed grow text-center">
                                {services[3].description}
                            </p>
                        </div>
                    </div>

                    {/* Espacio vacío en columna 2 */}
                    <div className="hidden lg:block"></div>

                    {/* Servicio 5 - columna 3 */}
                    <div className="flex flex-col items-center mt-12 relative">
                        <div className="relative w-36 h-36 mb-[-72px] z-10">
                            <div className="absolute inset-0 bg-white rounded-full p-0.5 shadow-lg border-4 border-white">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src={services[4].image}
                                        alt={services[4].title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#41475f] text-white p-8 pt-20 rounded-lg shadow-lg w-full min-h-[350px] flex flex-col">
                            <h3 className="text-xl font-bold mb-4 text-center">
                                {services[4].title}
                            </h3>
                            <p className="text-gray-200 text-base leading-relaxed grow text-center">
                                {services[4].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;