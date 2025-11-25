const MapPinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const MetroIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
    </svg>
);

const BusIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);

const CarIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.5 7.5A2.5 2.5 0 015 5h10a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5H5a2.5 2.5 0 01-2.5-2.5v-5zM5 7a1 1 0 00-1 1v3a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1H5z" clipRule="evenodd" />
    </svg>
);

const CopyIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
);

const MapsIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293A1 1 0 0118 6v10a1 1 0 01-.293.707L14 14.586V3.586l3.707 1.707z" clipRule="evenodd" />
    </svg>
);

const WazeIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
    </svg>
);

const Locations = () => {
    const address = "Gob. José Ma. Tornel No. 52, Col. San Miguel Chapultepec, 11850 Ciudad de México";
    const encodedAddress = encodeURIComponent(address);

    // URLs para navegación
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    const wazeUrl = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;

    const handleOpenMaps = () => {
        window.open(googleMapsUrl, '_blank');
    };

    const handleOpenWaze = () => {
        window.open(wazeUrl, '_blank');
    };

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        alert('Dirección copiada al portapapeles');
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
                        {/* Mapa y botones - ocupa 2/3 del ancho */}
                        <div className="lg:col-span-2 flex flex-col">
                            {/* Mapa de Google */}
                            <div className="rounded-2xl overflow-hidden shadow-xl grow h-80 lg:h-auto">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888134414968!2d-99.173949925007!3d19.419830781854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3a2c0e0f0f%3A0x1f4b4c4f4f4f4f4f!2sGobernador%20Jos%C3%A9%20Mar%C3%ADa%20Tornel%2052%2C%20San%20Miguel%20Chapultepec%2C%2011850%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1690000000000!5m2!1ses!2smx`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación Correduría Pública 39"
                                />
                            </div>

                            {/* Botones de navegación */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <button
                                    onClick={handleOpenMaps}
                                    className="bg-[#87888a] text-[#f3efec] py-3 px-4 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold flex items-center justify-center space-x-2"
                                >
                                    <MapsIcon />
                                    <span>Abrir en Maps</span>
                                </button>
                                <button
                                    onClick={handleOpenWaze}
                                    className="bg-[#87888a] text-[#f3efec] py-3 px-4 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold flex items-center justify-center space-x-2"
                                >
                                    <WazeIcon />
                                    <span>Abrir en Waze</span>
                                </button>
                            </div>
                        </div>

                        {/* Información de la oficina - ocupa 1/3 del ancho */}
                        <div className="bg-[#f3efec] rounded-2xl shadow-xl p-6 lg:p-8 flex flex-col">
                            <div className="grow">
                                <h3 className="text-xl lg:text-2xl font-bold text-[#41475f] mb-6 text-center">
                                    Oficina
                                </h3>

                                {/* Dirección */}
                                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex items-start">
                                        <div className="shrink-0 w-8 h-8 bg-[#41475f] rounded-full flex items-center justify-center mt-1 mr-4">
                                            <MapPinIcon />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#41475f] mb-2">Dirección</h4>
                                            <p className="text-[#87888a] leading-relaxed text-sm">
                                                {address}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Botón copiar dirección */}
                                <button
                                    onClick={handleCopyAddress}
                                    className="w-full bg-[#87888a] text-[#f3efec] py-3 px-4 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold flex items-center justify-center space-x-2 mb-6"
                                >
                                    <CopyIcon />
                                    <span>Copiar Dirección</span>
                                </button>

                                {/* Horarios */}
                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    <h4 className="font-semibold text-[#41475f] mb-4">Horario de Atención</h4>
                                    <div className="space-y-3 text-[#87888a] text-sm">
                                        <div className="flex justify-between items-center py-2 border-b border-[#f3efec]">
                                            <span>Lunes - Jueves</span>
                                            <span className="font-semibold text-[#41475f]">9:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-[#f3efec]">
                                            <span>Viernes</span>
                                            <span className="font-semibold text-[#41475f]">9:00 - 15:00</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span>Sabados y Domingos</span>
                                            <span className="font-semibold text-[#87888a]">Cerrado</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Información de transporte */}
                    <div className="mt-16">
                        <div className="bg-[#41475f] rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#f3efec] mb-6 text-center">
                                Cómo llegar
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-[#f3efec] rounded-lg p-4 text-center">
                                    <div className="w-12 h-12 bg-[#87888a] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <MetroIcon />
                                    </div>
                                    <h4 className="font-semibold text-[#41475f] mb-2">Metro</h4>
                                    <p className="text-[#87888a] text-sm">Estación Chapultepec (Línea 1)</p>
                                </div>
                                <div className="bg-[#f3efec] rounded-lg p-4 text-center">
                                    <div className="w-12 h-12 bg-[#87888a] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <BusIcon />
                                    </div>
                                    <h4 className="font-semibold text-[#41475f] mb-2">Autobús</h4>
                                    <p className="text-[#87888a] text-sm">Múltiples rutas disponibles</p>
                                </div>
                                <div className="bg-[#f3efec] rounded-lg p-4 text-center">
                                    <div className="w-12 h-12 bg-[#87888a] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <CarIcon />
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