import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PoliticaDePrivacidad() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" passHref>
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a Inicio</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-[#0122F4]">Política de Privacidad</h1>
        <p className="text-sm text-gray-600 mb-6">Última actualización: 22 de noviembre de 2024</p>
        
        <div className="space-y-6 text-gray-700">
          <p>
            En Academia Nova, nos comprometemos a proteger la privacidad y la seguridad de tus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información al interactuar con nuestra plataforma.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">1. Información que recopilamos</h2>
            <p>Recopilamos información personal necesaria para ofrecerte nuestros servicios. Esto incluye:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Datos de registro: Nombre, correo electrónico, número de teléfono, y contraseña.</li>
              <li>Datos académicos: Cursos inscritos, progreso, calificaciones y certificaciones obtenidas.</li>
              <li>Datos de pago: Información necesaria para procesar pagos (no almacenamos datos de tarjetas de crédito).</li>
              <li>Datos técnicos: Dirección IP, tipo de dispositivo, navegador y datos de uso para mejorar la experiencia del usuario.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">2. Cómo usamos tu información</h2>
            <p>La información recopilada se utiliza para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Proveer acceso a los cursos, materiales y servicios contratados.</li>
              <li>Emitir certificados y diplomas al completar cursos.</li>
              <li>Mejorar nuestra plataforma y personalizar tu experiencia.</li>
              <li>Comunicarnos contigo para temas relacionados con soporte, actualizaciones y promociones.</li>
              <li>Cumplir con nuestras obligaciones legales y fiscales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">3. Cómo protegemos tu información</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Toda la información se almacena en servidores encriptados.</li>
              <li>Utilizamos protocolos de seguridad como HTTPS para proteger la transmisión de datos.</li>
              <li>Limitamos el acceso a tu información a personal autorizado y capacitado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">4. Compartir información con terceros</h2>
            <p>No compartimos tu información personal con terceros, salvo en las siguientes circunstancias:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Procesadores de pago: Solo para completar transacciones.</li>
              <li>Cumplimiento legal: Si es requerido por ley o para proteger nuestros derechos legales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">5. Uso de cookies y tecnologías similares</h2>
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Facilitar la navegación y personalizar el contenido.</li>
              <li>Analizar el tráfico y comportamiento en nuestra plataforma para mejorar nuestros servicios.</li>
            </ul>
            <p className="mt-2">Puedes desactivar las cookies en la configuración de tu navegador, aunque esto podría afectar algunas funcionalidades de nuestra plataforma.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">6. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Acceder a tu información personal almacenada.</li>
              <li>Solicitar la corrección o eliminación de tus datos.</li>
              <li>Retirar tu consentimiento para el uso de tus datos en cualquier momento, sujeto a nuestras obligaciones legales.</li>
            </ul>
            <p className="mt-2">Para ejercer estos derechos, contáctanos a través de los medios indicados abajo.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">7. Conservación de datos</h2>
            <p>Almacenamos tus datos únicamente mientras sea necesario para ofrecerte nuestros servicios y cumplir con nuestras obligaciones legales.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">8. Cambios en esta política</h2>
            <p>Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios importantes a través de nuestra plataforma.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#0122F4]">9. Contacto</h2>
            <p>Si tienes dudas sobre nuestra Política de Privacidad o deseas ejercer tus derechos, comunícate con nosotros:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Correo electrónico: contacto@academia-nova.com</li>
              <li>WhatsApp: +52 5581315111</li>
            </ul>
          </section>

          <p className="font-semibold mt-8">Gracias por confiar en Academia Nova!</p>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        <p>© 2024 Academia Nova. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

