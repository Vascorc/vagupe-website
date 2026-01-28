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
          : 'bg-transparent h-24 border-none'
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
              {['Início', 'Serviços', 'Sobre', 'Contacto'].map((item) => {
                const href = item === 'Início' ? '#inicio'
                  : item === 'Serviços' ? '#services'
                    : item === 'Sobre' ? '#about'
                      : '#contact';
                return (
                  <Link
                    key={item}
                    href={href}
                    className={`font-semibold text-sm tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-[#1e4b85]' : 'text-blue-100 hover:text-white'
                      }`}
                  >
                    {item}
                  </Link>
                );
              })}
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
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,hsl(207,65%,25%)_0%,hsl(207,55%,40%)_100%)]">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        </div>

        {/* Animated Shapes (CSS version) */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse delay-700" />

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col justify-center h-full">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 shadow-lg hover:bg-white/20 transition-colors cursor-default scale-90">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <span className="text-white/90 text-xs font-medium tracking-wide">
                Consultoria | Seguros | Tecnologia
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
              Desbloqueamos
              <br />
              <span className="text-white/80">o Seu Potencial</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
              Soluções integradas de consultoria estratégica, seguros personalizados
              e automação tecnológica para impulsionar o crescimento do seu negócio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="#services"
                className="group px-6 py-3 bg-white text-[#1e4b85] rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                Descobrir Serviços
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-sm"
              >
                Agendar Consulta
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: TrendingUp, label: "Consultoria Estratégica" },
                { icon: Shield, label: "Seguros Personalizados" },
                { icon: Cpu, label: "Automação Inteligente" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                >
                  <item.icon className="w-4 h-4 text-blue-200" />
                  <span className="text-white/80 text-xs font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll Indicator - Made smaller and closer */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-1 rounded-full bg-white/50" />
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