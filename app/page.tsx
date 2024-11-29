'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, BookOpen, Briefcase, Code2, FileText, Globe, Megaphone, Menu, MessageCircle, Palette, Shield, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from "@/components/ui/switch"
import NavButtons from '@/components/ui/navbtns';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isPhoneSelected, setIsPhoneSelected] = useState<boolean>(true);
  const handleSwitchChange = () => {
    setIsPhoneSelected(!isPhoneSelected); // Invierte el valor de isPhoneSelected
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'programacion', 'proximos-cursos'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#0122F4] to-[#01148E]">
      <header className="sticky top-0 z-10 backdrop-blur-sm border-b border-white/10">
        <div className="flex h-20 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Academia Nova Logo"
            className="pt-2"
            width={180}
            height={40}
          />

          {/* Botón Hamburguesa en Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex pl-64 justify-center w-full">
            <Tabs
              value={activeTab}
              onValueChange={(value) => {
                setActiveTab(value);
                scrollToSection(value);
              }}
              className="relative"
            >
              <TabsList className="flex bg-transparent h-10 items-center justify-center rounded-none p-0">
                <TabsTrigger
                  value="hero"
                  className="relative h-10 rounded-full px-4 pt-2 font-medium text-white transition-colors data-[state=active]:text-blue-700 data-[state=active]:font-bold hover:bg-white/10"
                >
                  Inicio
                </TabsTrigger>
                <TabsTrigger
                  value="programacion"
                  className="relative h-10 rounded-full px-4 pt-2 font-medium text-white transition-colors data-[state=active]:text-blue-700 data-[state=active]:font-bold hover:bg-white/10"
                >
                  Programación
                </TabsTrigger>
                <TabsTrigger
                  value="proximos-cursos"
                  className="relative h-10 rounded-full px-4 pt-2 font-medium text-white transition-colors data-[state=active]:text-blue-700 data-[state=active]:font-bold hover:bg-white/10"
                >
                  Próximos Cursos
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <NavButtons />
          </nav>
        </div>

        {/* Menú Desplegable Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-transparent backdrop-blur-sm border-t border-white/10">
            <nav className="flex flex-col items-start space-y-2 p-4 text-white">
              <button
                onClick={() => {
                  scrollToSection('hero');
                  setIsMenuOpen(false);
                }}
                className={`relative hover:text-blue-300 ${activeTab === 'hero' ? 'font-bold text-blue-500' : ''}`}
              >
                Inicio
                {activeTab === 'hero' && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500" />
                )}
              </button>
              <button
                onClick={() => {
                  scrollToSection('programacion');
                  setIsMenuOpen(false);
                }}
                className={`relative hover:text-blue-300 ${activeTab === 'programacion' ? 'font-bold text-blue-500' : ''}`}
              >
                Programación
                {activeTab === 'programacion' && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500" />
                )}
              </button>
              <button
                onClick={() => {
                  scrollToSection('proximos-cursos');
                  setIsMenuOpen(false);
                }}
                className={`relative hover:text-blue-300 ${activeTab === 'proximos-cursos' ? 'font-bold text-blue-500' : ''}`}
              >
                Próximos Cursos
                {activeTab === 'proximos-cursos' && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500" />
                )}
              </button>
              <NavButtons />
            </nav>
          </div>
        )}

      </header>
      {/* Secciones */}
      <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          {/* Hero content */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Domina la Programación con Academia Nova
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Especialízate en Python y Java con nuestra metodología única y mentores expertos. Prepárate para el futuro digital.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <p className="text-xs text-gray-300 italic">¿Ocupas WhatsApp?</p>
            <div className='flex space-x-2 items-center justify-center py-2'>
              <MessageCircle className="text-white" />
              <Switch
                checked={isPhoneSelected}
                onCheckedChange={handleSwitchChange}
              />

            </div>
            <form className="flex space-x-2">
              <div className="flex items-center">

              </div>
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 input-celeste-focus"
                placeholder={isPhoneSelected ? 'Ingresa tu teléfono' : 'Ingresa tu email'}
                type={isPhoneSelected ? 'tel' : 'email'}
              />
              <Button className="bg-white text-[#0122F4] hover:bg-white/90">
                Inscríbete
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-300">Cupos limitados - ¡Asegura tu lugar ahora!</p>
          </div>
        </div>
      </section>

      {/* Programación Section */}
      <section id="programacion" className="w-full py-12 md:py-24 lg:py-32 bg-white/5">
        <div className="px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-white">
            Nuestros Cursos de Programación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Image
                  src="courses/python.svg"
                  alt="Python Logo"
                  width={100}
                  height={100}
                  className="rounded-full bg-white p-2"
                />
                <h3 className="text-xl font-bold text-white">Python</h3>
                <p className="text-center text-gray-200">
                  Aprende el lenguaje más versátil y demandado en la industria. Ideal para principiantes y profesionales.
                </p>
                <Button
                  variant="outline"
                  className="border-white bg-white text-[#0122F4] hover:bg-[#0122F4] hover:text-white transition-colors duration-300 font-semibold"
                >
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Image
                  src="courses/java.svg"
                  alt="Java Logo"
                  width={100}
                  height={100}
                  className="rounded-full bg-white p-2"
                />
                <h3 className="text-xl font-bold text-white">Java</h3>
                <p className="text-center text-gray-200">
                  Domina el lenguaje empresarial por excelencia. Perfecto para desarrollo de aplicaciones robustas.
                </p>
                <Button
                  variant="outline"
                  className="border-white bg-white text-[#0122F4] hover:bg-[#0122F4] hover:text-white transition-colors duration-300 font-semibold"
                >
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Próximos Cursos Section */}
      <section id="proximos-cursos" className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-white">
            Próximos Cursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Megaphone className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Marketing Digital</h3>
                <p className="text-center text-gray-200">
                  Próximamente - Estrategias de marketing online y gestión de redes sociales
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Palette className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Arte Digital</h3>
                <p className="text-center text-gray-200">
                  Próximamente - Diseño gráfico, ilustración y creación de contenido visual
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Globe className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Tecnologías Web</h3>
                <p className="text-center text-gray-200">
                  Próximamente - Cloud computing, ciberseguridad y tecnologías emergentes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="flex flex-col gap-8 py-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/logo.svg"
                alt="Academia Nova Logo"
                width={120}
                height={30}
                className="mb-2"
              />
              <p className="text-sm text-gray-300">
                Formando el futuro digital
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#programacion" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                <span>Programación</span>
              </a>
              <a href="#proximos-cursos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Próximos Cursos</span>
              </a>
              <a href="/mesh" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Malla Curricular</span>
              </a>
              <a href="/trabaja-con-nosotros" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Trabaja con Nosotros</span>
              </a>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>© 2024 Academia Nova. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="/terms" className="hover:text-white transition-colors flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Términos de Servicio</span>
              </a>
              <a href="/privacy" className="hover:text-white transition-colors flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Política de Privacidad</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
