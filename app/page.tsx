"use client";

import {
  Menu, X, TrendingUp, Shield, Cpu,
  ArrowRight, CheckCircle2, Target, Users,
  Award, Lightbulb, Mail, Phone, MapPin,
  Linkedin, Facebook, Instagram
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-white">

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md h-20 border-b border-slate-100'
            : 'bg-transparent h-24 border-b border-white/10'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <Image
                src="/logo-vagupe.png"
                alt="VAGUPE Consulting"
                width={180}
                height={54}
                className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert opacity-90'}`}
                priority
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              {['Início', 'Serviços', 'Sobre', 'Contacto'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace('í', 'i').replace('ç', 'c')}`}
                  className={`font-semibold text-sm tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-[#1e4b85]' : 'text-blue-100 hover:text-white'
                    }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link
                href="#contact"
                className={`px-6 py-2.5 rounded-lg font-bold shadow-lg transition-all transform hover:-translate-y-0.5 duration-200 text-sm ${isScrolled
                    ? 'bg-[#1e4b85] text-white hover:bg-[#163a66]'
                    : 'bg-white text-[#1e4b85] hover:bg-blue-50'
                  }`}
              >
                Fale Connosco
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className={isScrolled ? 'text-slate-700' : 'text-white'}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link href="#home" onClick={toggleMenu} className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Início</Link>
              <Link href="#services" onClick={toggleMenu} className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Serviços</Link>
              <Link href="#about" onClick={toggleMenu} className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Sobre</Link>
              <Link href="#contact" onClick={toggleMenu} className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Contacto</Link>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="h-screen bg-[#1e4b85] flex flex-col justify-center relative overflow-hidden pt-16">
        {/* Subtle white gradient from bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center h-full">

          <div className="flex-1 flex flex-col justify-center items-center w-full max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-5 py-1.5 mb-6 border border-white/20 shadow-lg">
              <span className="text-blue-50 text-xs font-semibold tracking-wider uppercase">Consultoria | Seguros | Tecnologia</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
              Desbloqueamos <br /> o Seu Potencial
            </h1>

            <p className="text-blue-100/90 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Soluções integradas de consultoria estratégica, seguros personalizados e automação tecnológica.
            </p>

            <div className="flex flex-row gap-4 justify-center mb-10 w-full">
              <Link href="#services" className="bg-white text-[#1e4b85] px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm transform duration-300">
                Descobrir Serviços <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link href="#contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm transform duration-300">
                Fale Connosco
              </Link>
            </div>

            {/* Bottom Cards in Hero - Highly Compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 flex items-center justify-center gap-3 text-white hover:bg-white/20 transition cursor-default group hover:scale-[1.01] duration-300 shadow-md">
                <TrendingUp size={18} className="text-blue-200 group-hover:text-white transition" />
                <span className="font-semibold text-sm tracking-wide">Consultoria</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 flex items-center justify-center gap-3 text-white hover:bg-white/20 transition cursor-default group hover:scale-[1.01] duration-300 shadow-md">
                <Shield size={18} className="text-blue-200 group-hover:text-white transition" />
                <span className="font-semibold text-sm tracking-wide">Seguros</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 flex items-center justify-center gap-3 text-white hover:bg-white/20 transition cursor-default group hover:scale-[1.01] duration-300 shadow-md">
                <Cpu size={18} className="text-blue-200 group-hover:text-white transition" />
                <span className="font-semibold text-sm tracking-wide">Tecnologia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1e4b85] font-semibold text-sm tracking-wider uppercase">Os Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Soluções Integradas para o Seu Sucesso</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Combinamos experiência em consultoria, seguros e tecnologia para oferecer soluções completas que impulsionam o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1e4b85] transition-colors">
                <TrendingUp className="text-[#1e4b85] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Consultoria Estratégica</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Análise profunda do seu negócio para identificar oportunidades de crescimento e otimização de processos.
              </p>
              <ul className="space-y-3 mb-8">
                {['Análise de mercado', 'Planeamento estratégico', 'Otimização de processos', 'Gestão de mudança'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-[#1e4b85]" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-[#1e4b85] font-semibold flex items-center gap-2 text-sm hover:gap-3 transition-all">
                Saber Mais <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1e4b85] transition-colors">
                <Shield className="text-[#1e4b85] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Seguros Empresariais</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Soluções de proteção personalizadas que garantem a segurança e continuidade do seu negócio.
              </p>
              <ul className="space-y-3 mb-8">
                {['Responsabilidade Civil', 'Proteção de ativos', 'Seguros de saúde', 'Gestão de riscos'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-[#1e4b85]" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-[#1e4b85] font-semibold flex items-center gap-2 text-sm hover:gap-3 transition-all">
                Saber Mais <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition duration-300 bg-white group">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1e4b85] transition-colors">
                <Cpu className="text-[#1e4b85] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Soluções Tecnológicas</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Automação e digitalização de processos para aumentar a eficiência e competitividade da sua empresa.
              </p>
              <ul className="space-y-3 mb-8">
                {['Automação (RPA)', 'Integração de sistemas', 'Desenvolvimento', 'Inteligência Artificial'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-[#1e4b85]" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-[#1e4b85] font-semibold flex items-center gap-2 text-sm hover:gap-3 transition-all">
                Saber Mais <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="text-[#1e4b85] font-semibold text-sm tracking-wider uppercase mb-2 block">Sobre a VAGUPE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Desbloqueamos Potencial. <br /> Entregamos Clareza.
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A VAGUPE é uma empresa de consultoria integrada que combina expertise em estratégia empresarial, gestão de riscos e inovação tecnológica para ajudar organizações a alcançar o seu máximo potencial.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Com uma abordagem holística e orientada para resultados, oferecemos soluções personalizadas que respondem aos desafios específicos de cada cliente.
              </p>

              <div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-3xl font-bold text-[#1e4b85] mb-1">10+</div>
                  <div className="text-sm text-slate-500">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1e4b85] mb-1">200+</div>
                  <div className="text-sm text-slate-500">Clientes Satisfeitos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1e4b85] mb-1">95%</div>
                  <div className="text-sm text-slate-500">Taxa de Retenção</div>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Foco em Resultados", desc: "Cada estratégia é desenhada para gerar impacto mensurável." },
                { icon: Users, title: "Parceria Duradoura", desc: "Construímos relações de confiança baseadas na transparência." },
                { icon: Award, title: "Excelência", desc: "Entregamos soluções de qualidade superior com equipas especializadas." },
                { icon: Lightbulb, title: "Inovação", desc: "Aplicamos as mais recentes tecnologias e metodologias." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mb-4 text-[#1e4b85]">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info Side */}
            <div>
              <span className="text-[#1e4b85] font-semibold text-sm tracking-wider uppercase mb-2 block">Contacto</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Vamos Conversar Sobre <br /> o Seu Projeto
              </h2>
              <p className="text-slate-600 mb-10 text-lg">
                Estamos prontos para ouvir os seus desafios e apresentar soluções personalizadas. Agende uma consulta gratuita hoje.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#1e4b85] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@vagupe.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#1e4b85] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Telefone</h4>
                    <p className="text-slate-600">+351 21X XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#1e4b85] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Localização</h4>
                    <p className="text-slate-600">Lisboa, Portugal</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#1e4b85]" /> Resposta em 24h</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#1e4b85]" /> Consulta Gratuita</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#1e4b85]" /> 100% Confidencial</div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Envie-nos uma Mensagem</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nome Completo</label>
                    <input type="text" placeholder="O seu nome" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1e4b85] focus:ring-1 focus:ring-[#1e4b85] outline-none transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input type="email" placeholder="email@empresa.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1e4b85] focus:ring-1 focus:ring-[#1e4b85] outline-none transition" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Empresa</label>
                  <input type="text" placeholder="Nome da empresa" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1e4b85] focus:ring-1 focus:ring-[#1e4b85] outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Mensagem</label>
                  <textarea rows={4} placeholder="Descreva o seu projeto..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#1e4b85] focus:ring-1 focus:ring-[#1e4b85] outline-none transition resize-none"></textarea>
                </div>
                <button className="w-full bg-[#1e4b85] text-white font-bold py-4 rounded-lg hover:bg-[#163a66] transition flex items-center justify-center gap-2">
                  Enviar Mensagem <ArrowRight size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#112233] text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Column 1 */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-bold">V</div>
                <span className="font-bold text-xl">VAGUPE</span>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Soluções integradas de consultoria, seguros e tecnologia para impulsionar o crescimento sustentável do seu negócio.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-[#1e4b85] transition"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-[#1e4b85] transition"><Mail size={18} /></a>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-bold mb-6">Serviços</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Consultoria Estratégica</a></li>
                <li><a href="#" className="hover:text-white transition">Seguros Empresariais</a></li>
                <li><a href="#" className="hover:text-white transition">Soluções Tecnológicas</a></li>
                <li><a href="#" className="hover:text-white transition">Automação</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Empresa</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2026 VAGUPE Consulting. Todos os direitos reservados.</p>
            <p>Unlocking Potential. Delivering Clarity.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}