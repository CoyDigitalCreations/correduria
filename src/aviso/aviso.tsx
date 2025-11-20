const AvisoPrivacidad = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Header con colores del documento */}
                <div className="bg-[#3a3f58] text-white py-6 px-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-center uppercase">
                        Aviso de Privacidad
                    </h1>
                    <p className="text-center mt-2 text-gray-200">
                        Correduría Pública Número 39 del Distrito Federal
                    </p>
                </div>

                <div className="p-8 space-y-8">
                    {/* Sección IMPORTANTE */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <span className="text-red-500 font-bold text-lg">!</span>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-red-800 font-bold text-lg mb-2">
                                    IMPORTANTE
                                </h3>
                                <p className="text-red-700 text-sm leading-relaxed">
                                    El presente aviso de privacidad tiene como finalidad ejemplificar cada uno de los elementos informativos a que se refieren los Artículos 8, 15, 16, 33 y 36 de la Ley Federal de Protección de Datos Personales en posesión de los Particulares y sus correlativos 14, 23, 24, 26, 30, 40, 41, 68, 90 y 102 del Reglamento, tomando en consideración las actividades y servicios. Sin embargo, es importante aclarar que cada Correduría Pública tiene la posibilidad de habilitar los mecanismos ad hoc para la atención de solicitudes de derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) por parte de los titulares de los datos. Asimismo, de acuerdo al uso que se le dé a los datos personales que posean, deberán adecuar el presente modelo de aviso.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Introducción */}
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            La Correduría Pública Número 39 del Distrito Federal, está comprometida con la protección de sus datos personales, al ser responsable de su uso, manejo y confidencialidad, y al respecto le informa lo siguiente:
                        </p>
                    </div>

                    {/* Finalidades */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#3a3f58] border-b-2 border-[#e45441] pb-2">
                            ¿Para qué fines utilizamos sus datos personales?
                        </h2>
                        <p className="text-gray-700">
                            Esta Correduría recaba y usa sus datos personales para el cumplimiento de las siguientes finalidades:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Confirmar su identidad.</li>
                            <li>Entender y atender sus necesidades de carácter legal.</li>
                            <li>Otorgar seguridad y certeza jurídica a los hechos, actos y negocios jurídicos que celebra mediante instrumentos públicos.</li>
                            <li>Redactar instrumentos públicos de su interés.</li>
                            <li>Llevar a cabo gestiones administrativas de apoyo al ejercicio de la correduría pública.</li>
                            <li>Brindarle asesoría y plasmar su voluntad en un instrumento público en el marco de la Ley Federal de Correduría Pública.</li>
                            <li>Cumplir con los requerimientos legales, reglamentarios u otros que le son aplicables.</li>
                            <li>Verificar la información que nos proporciona.</li>
                        </ul>
                    </div>

                    {/* Datos utilizados */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#3a3f58] border-b-2 border-[#e45441] pb-2">
                            ¿Qué datos utilizamos para los fines anteriores?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Para prestarle los servicios que solicita requerimos datos de identificación, laborales, patrimoniales, financieros, migratorios u otros, los cuales se obtienen de los documentos requisitados por usted y de los documentos privados u oficiales que nos proporciona directamente.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Asimismo, también utilizamos datos personales de carácter sensible relativos a origen racial o étnico, estado de salud presente y futuro, creencias religiosas, filosóficas o morales, afiliación sindical, opiniones políticas y preferencia sexual cuando sea aplicable.
                        </p>
                    </div>

                    {/* Compartición de datos */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#3a3f58] border-b-2 border-[#e45441] pb-2">
                            ¿Con quién compartimos sus datos personales?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            De forma eventual, sus datos personales se comparten para el cumplimiento de requerimientos legales o la atención de una orden fundada y motivada de las autoridades competentes en ejercicio de sus funciones de notificación, vigilancia y fiscalización, concretamente, con el Registro Público de la Propiedad y Comercio del Estado correspondiente o de otras Entidades Federativas respecto a las operaciones traslativas de dominio, el Servicio de Administración Tributaria en materia de impuestos, así como autoridades judiciales u administrativas locales o federales en el marco de la legislación mexicana.
                        </p>
                    </div>

                    {/* Derechos ARCO */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#3a3f58] border-b-2 border-[#e45441] pb-2">
                            ¿Cómo puede ejercer sus derechos ARCO o revocar su consentimiento?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Usted podrá acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales que tenemos en nuestros registros y archivos, o bien, revocar su consentimiento para el uso de los mismos, presentado solicitud por escrito en nuestro domicilio dirigida a la persona o departamento de privacidad, o bien, vía correo electrónico a <span className="text-[#e45441] font-semibold">ris@correduria39.com.mx</span>
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-[#3a3f58] border-b-2 border-[#e45441] pb-2">
                            ¿Cómo contactarnos?
                        </h2>
                        <div className="space-y-3 text-gray-700">
                            <p><strong>Dirección electrónica:</strong> <span className="text-[#e45441]">ris@correduria39.com.mx</span></p>
                            <p><strong>Dirección postal:</strong> Lic. Ricardo Iñiguez Segura, Gobernador José María Tornel No. 52, Colonia San Miguel Chapultepec, Delegación Miguel Hidalgo, Código Postal 11850, México, Distrito Federal.</p>
                            <p><strong>Teléfonos:</strong> 52.73.72.10 y 52.73.73.18</p>
                            <p><strong>Sitio web:</strong> <span className="text-[#e45441]">www.correduria39.com.mx</span></p>
                        </div>
                    </div>

                    {/* Firma */}
                    <div className="border-t-2 border-gray-300 pt-6 mt-8">
                        <div className="text-center space-y-2">
                            <p className="font-bold text-lg text-[#3a3f58]">Licenciado Ricardo Iñiguez Segura</p>
                            <p className="text-gray-600">Corredor Público Número 39</p>
                            <p className="text-gray-600">de la Plaza del Distrito Federal</p>
                            <p className="text-gray-500 text-sm mt-4">Gob. José Ma. Tornel No. 52, Col. San Miguel Chapultepec, 11850 México, D.F.</p>
                            <p className="text-gray-500 text-sm">Voz. 52.73.72.10</p>
                            <p className="text-gray-500 text-sm">www.correduria39.com.mx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvisoPrivacidad;