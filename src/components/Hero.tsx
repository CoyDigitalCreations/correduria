import Image from "./common/Image";
import aboutImage from "../assets/images/pantallaprincipal.jpg";

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen w-full">

            {/* Fondo con la imagen */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={aboutImage}
                    alt="Fondo Hero"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-60"
                />
            </div>

            {/* Contenido encima */}
            <div className="relative z-10 flex flex-col lg:flex-row h-full w-full">

                {/* Contenedor - En móvil: arriba, En desktop: izquierdo 1/3 */}
                <div className="w-full lg:w-1/3 h-1/2 lg:h-full flex items-center justify-center lg:items-start lg:justify-start lg:pt-24">
                    <div className="bg-[#87888a] rounded-lg border-2 border-[#f3efec] p-6 md:p-8 mx-4 lg:mx-6 w-full max-w-sm lg:ml-8">
                        {/* "Correduría" con border-b y espacio lateral */}
                        <div className="border-b-2 border-[#f3efec] pb-4 mb-4 mx-2">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#f3efec] uppercase text-center">
                                Correduría
                            </h2>
                        </div>

                        {/* "Pública 39" */}
                        <div className="mx-2">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[#f3efec] uppercase text-center">
                                Pública Número 39
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Espacio - En móvil: abajo, En desktop: derecho 2/3 */}
                <div className="w-full lg:w-2/3 h-1/2 lg:h-full"></div>

            </div>
        </section>
    );
};

export default Hero;
