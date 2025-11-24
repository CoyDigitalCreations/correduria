import Image from './common/Image';
import aboutImage from '../assets/images/aboutimage.png';
import backabout from '../assets/images/pantallaprincipal.jpg';

const About = () => {
    return (
        <section id="acerca" className="py-20 bg-white w-full relative">
            {/* Imagen de fondo semitransparente */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={backabout}
                    alt="Fondo Correduría Pública"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                />
            </div>

            <div className="relative z-10 w-full px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={aboutImage}
                                    alt="¿Qué es una Correduría Pública?"
                                    layout="responsive"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="space-y-6">
                                <div className="mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-4">
                                        ¿Qué es una Correduría Pública?
                                    </h2>
                                </div>

                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        La Secretaría de Economía es la encargada de que se aplique la Ley Federal de Correduría Pública;
                                        a través de la Dirección General de Normatividad Mercantil habilita a los Corredores Públicos,
                                        no sin antes un arduo proceso de selección, así mismo, supervisa sus funciones.
                                    </p>
                                    <p>
                                        El objetivo de los corredores públicos es garantizar la seguridad y certeza jurídica,
                                        ejerciendo un control de legalidad en las transacciones comerciales y otras materias de
                                        competencia federal, brindando un asesoramiento profesional e imparcial.
                                    </p>
                                    <p>
                                        El Corredor Público es un Licenciado en Derecho que ha demostrado plena honorabilidad y solvencia moral,
                                        habilitado por el Ejecutivo por conducto de la Secretaría de Economía, previo el cumplimiento de los
                                        requisitos que le señala la Ley Federal de Correduría Pública y su reglamento.
                                    </p>
                                    <p>
                                        Entre las funciones que tiene un Corredor Publico está la de garantizar la seguridad y certeza jurídicas,
                                        ejerciendo un control de legalidad en las transacciones comerciales y otras materias de competencia federal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;