import { useState } from 'react';

// SVG Icons
const EmailIcon = () => (
    <svg className="w-5 h-5" fill="#41475f" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="#41475f" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1A1.5 1.5 0 016 3.5v1A1.5 1.5 0 014.5 6h-1A1.5 1.5 0 012 4.5v-1zM3.5 10a1.5 1.5 0 01-1.5-1.5v-1A1.5 1.5 0 013.5 6h1A1.5 1.5 0 016 7.5v1A1.5 1.5 0 014.5 10h-1zM8 3.5A1.5 1.5 0 019.5 2h1A1.5 1.5 0 0112 3.5v1A1.5 1.5 0 0110.5 6h-1A1.5 1.5 0 018 4.5v-1zM9.5 10a1.5 1.5 0 01-1.5-1.5v-1A1.5 1.5 0 019.5 6h1a1.5 1.5 0 011.5 1.5v1A1.5 1.5 0 0110.5 10h-1zM16 3.5A1.5 1.5 0 0117.5 2h1A1.5 1.5 0 0120 3.5v1A1.5 1.5 0 0118.5 6h-1A1.5 1.5 0 0116 4.5v-1zm1.5 6.5a1.5 1.5 0 00-1.5 1.5v1a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-1a1.5 1.5 0 00-1.5-1.5h-1z" clipRule="evenodd" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-5 h-5" fill="#41475f" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

const SubjectIcon = () => (
    <svg className="w-5 h-5" fill="#41475f" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);

const MessageIcon = () => (
    <svg className="w-5 h-5" fill="#41475f" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:ris@correduria39.com.mx,gina.ayala@correduria39.com.mx,alejandra.santoyo@correduria39.com.mx?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
        window.location.href = mailtoLink;

        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contacto" className="pt-20 pb-5 bg-white w-full">
            <div className="w-full px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#41475f] uppercase">
                            Contáctanos
                        </h2>
                        <p className="text-[#87888a] mt-4 max-w-2xl mx-auto">
                            Estamos aquí para atenderte. Escríbenos y te responderemos a la brevedad.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Formulario - Ocupa 2/3 */}
                        <div className="lg:col-span-2 bg-[#41475f] rounded-2xl shadow-xl p-8 lg:p-12">
                            <div className="mb-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#f3efec] mb-4">
                                    Envíanos un Mensaje
                                </h3>
                                <p className="text-[#f3efec] opacity-90">
                                    Completa el formulario y nos pondremos en contacto contigo.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#f3efec] font-semibold mb-2">
                                            Nombre completo *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <UserIcon />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 bg-[#f3efec] border border-[#87888a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87888a] focus:border-transparent text-[#41475f]"
                                                placeholder="Tu nombre completo"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[#f3efec] font-semibold mb-2">
                                            Teléfono *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <PhoneIcon />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 bg-[#f3efec] border border-[#87888a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87888a] focus:border-transparent text-[#41475f]"
                                                placeholder="Tu número telefónico"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#f3efec] font-semibold mb-2">
                                            Correo electrónico *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <EmailIcon />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 bg-[#f3efec] border border-[#87888a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87888a] focus:border-transparent text-[#41475f]"
                                                placeholder="tu@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[#f3efec] font-semibold mb-2">
                                            Asunto *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <SubjectIcon />
                                            </div>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 bg-[#f3efec] border border-[#87888a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87888a] focus:border-transparent text-[#41475f]"
                                                required
                                            >
                                                <option value="">Selecciona un asunto</option>
                                                <option value="Consulta general">Consulta general</option>
                                                <option value="Servicios notariales">Servicios notariales</option>
                                                <option value="Asesoría jurídica">Asesoría jurídica</option>
                                                <option value="Cotización">Cotización</option>
                                                <option value="Otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[#f3efec] font-semibold mb-2">
                                        Mensaje *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                            <MessageIcon />
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="w-full pl-10 pr-4 py-3 bg-[#f3efec] border border-[#87888a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87888a] focus:border-transparent text-[#41475f] resize-none"
                                            placeholder="Describe tu consulta o requerimiento..."
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#87888a] text-[#f3efec] py-4 px-6 rounded-lg border border-[#87888a] hover:bg-[#f3efec] hover:text-[#87888a] transition duration-300 font-semibold text-lg uppercase flex items-center justify-center space-x-2"
                                    >
                                        <span>Enviar mensaje</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Correos - Ocupa 1/3 */}
                        <div className="space-y-6">
                            {/* Card 1 - Ris */}
                            <div className="bg-[#f3efec] rounded-2xl shadow-xl p-6 border-2 border-[#87888a] border-opacity-20">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="shrink-0 w-12 h-12 bg-[#41475f] rounded-full flex items-center justify-center">
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#41475f]">Ris</h4>
                                        <p className="text-[#87888a] text-sm">Contacto principal</p>
                                    </div>
                                </div>
                                <p className="text-[#41475f] font-semibold text-xs text-center bg-white py-2 px-4 rounded-lg border border-[#87888a] border-opacity-20">
                                    ris@correduria39.com.mx
                                </p>
                            </div>

                            {/* Card 2 - Gina Ayala */}
                            <div className="bg-[#f3efec] rounded-2xl shadow-xl p-6 border-2 border-[#87888a] border-opacity-20">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="shrink-0 w-12 h-12 bg-[#41475f] rounded-full flex items-center justify-center">
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#41475f]">Gina Ayala</h4>
                                        <p className="text-[#87888a] text-sm">Asesora jurídica</p>
                                    </div>
                                </div>
                                <p className="text-[#41475f] font-semibold text-xs text-center bg-white py-2 px-4 rounded-lg border border-[#87888a] border-opacity-20">
                                    gina.ayala@correduria39.com.mx
                                </p>
                            </div>

                            {/* Card 3 - Alejandra Santoyo */}
                            <div className="bg-[#f3efec] rounded-2xl shadow-xl p-6 border-2 border-[#87888a] border-opacity-20">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="shrink-0 w-12 h-12 bg-[#41475f] rounded-full flex items-center justify-center">
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#41475f]">Alejandra Santoyo</h4>
                                        <p className="text-[#87888a] text-sm">Especialista notarial</p>
                                    </div>
                                </div>
                                <p className="text-[#41475f] font-semibold text-xs text-center bg-white py-2 px-4 rounded-lg border border-[#87888a] border-opacity-20">
                                    alejandra.santoyo@correduria39.com.mx
                                </p>
                            </div>

                            {/* Información adicional */}
                            <div className="bg-[#87888a] rounded-2xl p-4 text-center">
                                <p className="text-[#f3efec] text-sm">
                                    <span className="font-semibold">Tiempo de respuesta:</span><br />
                                    24 horas hábiles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;