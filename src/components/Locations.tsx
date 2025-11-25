import Image from "./common/Image";

import mapsIcon from '../assets/icons/google-maps.svg';
import waseIcon from '../assets/icons/waze.svg';
import metroIcon from '../assets/icons/metrodelaciudaddemexico.svg';
import busIcon from '../assets/icons/bus.svg';
import carIcon from '../assets/icons/car.svg';

const CopyIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
);

const Locations = () => {
    const address =
        "Gobernador José María Tornel 52, San Miguel Chapultepec I Secc, Miguel Hidalgo, 11850 Ciudad de México, CDMX";

    const encodedAddress = encodeURIComponent(address);

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    const wazeUrl = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;

    const handleOpenMaps = () => {
        window.open(googleMapsUrl, "_blank");
    };

    const handleOpenWaze = () => {
        window.open(wazeUrl, "_blank");
    };

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        alert("Dirección copiada al portapapeles");
    };

    return (
        <section id="ubicaciones" className="py-20 bg-white w-full">
            <div className="w-full px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#41475f] uppercase">
                            Ubicación
                        </h2>
                        <p className="text-[#87888a] mt-4 max-w-2xl mx-auto">
                            Visítanos en nuestra oficina
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Mapa y botones */}
                        <div className="lg:col-span-2 flex flex-col">
                            <div className="rounded-2xl overflow-hidden shadow-xl grow h-80 lg:h-auto">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888134414968!2d-99.173949925007!3d19.419830781854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3a2c0e0f0f%3A0x1f4b4c4f4f4f4f4f!2sGobernador%20José%20María%20Tornel%2052%2C%20San%20Miguel%20Chapultepec%2C%2011850%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1ses!2smx!4v1690000000000!5m2!1ses!2smx`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación Correduría Pública 39"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <button
                                    onClick={handleOpenMaps}
                                    className="bg-[#87888a] text-[#f3efec] py-3 px-4 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold flex items-center justify-center space-x-2"
                                >
                                    <Image
                                        src={mapsIcon}
                                        width={16}
                                        height={16}
                                        className="w-4 h-4"
                                        alt="Maps"
                                    />
                                    <span>Abrir en Maps</span>
                                </button>
                                <button
                                    onClick={handleOpenWaze}
                                    className="bg-[#87888a] text-[#f3efec] py-3 px-4 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold flex items-center justify-center space-x-2"
                                >
                                    <Image
                                        src={waseIcon}
                                        width={16}
                                        height={16}
                                        className="w-4 h-4"
                                        alt="Waze"
                                    />
                                    <span>Abrir en Waze</span>
                                </button>
                            </div>
                        </div>

                        {/* Información oficina */}
                        <div className="bg-[#f3efec] rounded-2xl shadow-xl p-6 lg:p-8 flex flex-col">
                            <div className="grow">
                                <h3 className="text-xl lg:text-2xl font-bold text-[#41475f] mb-6 text-center">
                                    Oficina
                                </h3>

                                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex items-start">
                                        <div className="shrink-0 w-8 h-8 bg-[#41475f] rounded-full flex items-center justify-center mt-1 mr-4">
                                            <Image
                                                src={mapsIcon}
                                                width={20}
                                                height={20}
                                                className="w-5 h-5"
                                                alt="Google Maps"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#41475f] mb-2">
                                                Dirección
                                            </h4>
                                            <p className="text-[#87888a] leading-relaxed text-sm text-justify">
                                                {address}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCopyAddress}
                                    className="w-full bg-[#87888a] text-[#f3efec] py-3 px-4 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold flex items-center justify-center space-x-2 mb-6"
                                >
                                    <CopyIcon />
                                    <span>Copiar Dirección</span>
                                </button>

                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    <h4 className="font-semibold text-[#41475f] mb-4">
                                        Horario de Atención
                                    </h4>
                                    <div className="space-y-3 text-[#87888a] text-sm">
                                        <div className="flex justify-between items-center py-2 border-b border-[#f3efec]">
                                            <span>Lunes - Jueves</span>
                                            <span className="font-semibold text-[#41475f]">
                                                9:00 - 18:00
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-[#f3efec]">
                                            <span>Viernes</span>
                                            <span className="font-semibold text-[#41475f]">
                                                9:00 - 15:00
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span>Sabados y Domingos</span>
                                            <span className="font-semibold text-[#87888a]">
                                                Cerrado
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transporte */}
                    <div className="mt-16">
                        <div className="bg-[#41475f] rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#f3efec] mb-6 text-center">
                                Cómo llegar
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-[#f3efec] rounded-lg p-4 text-center">
                                    <div className="w-12 h-12 bg-[#87888a] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Image
                                            src={metroIcon}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Metro CDMX"
                                        />
                                    </div>
                                    <h4 className="font-semibold text-[#41475f] mb-2">Metro</h4>
                                    <p className="text-[#87888a] text-sm">
                                        Estación Chapultepec (Línea 1)
                                    </p>
                                </div>

                                <div className="bg-[#f3efec] rounded-lg p-4 text-center">
                                    <div className="w-12 h-12 bg-[#87888a] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Image
                                            src={busIcon}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Autobús"
                                        />
                                    </div>
                                    <h4 className="font-semibold text-[#41475f] mb-2">
                                        Autobús
                                    </h4>
                                    <p className="text-[#87888a] text-sm">Múltiples rutas disponibles</p>
                                </div>

                                <div className="bg-[#f3efec] rounded-lg p-4 text-center">
                                    <div className="w-12 h-12 bg-[#87888a] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Image
                                            src={carIcon}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Automóvil"
                                        />
                                    </div>
                                    <h4 className="font-semibold text-[#41475f] mb-2">Auto</h4>
                                    <p className="text-[#87888a] text-sm">Estacionamiento disponible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
