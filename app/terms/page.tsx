import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TerminosDeServicio() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#0122F4] to-[#01148E] text-white">
      <header className="sticky top-0 z-10 backdrop-blur-sm border-b border-white/10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-white/80">
            <ArrowLeft className="h-6 w-6" />
            <span>Volver a Inicio</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>
        <div className="space-y-6 text-gray-200">
          <p>
            Bienvenidos a Academia Nova. A continuación, presentamos nuestros Términos de Servicio, diseñados para garantizar una experiencia justa, segura y satisfactoria para todos nuestros estudiantes. Al acceder o utilizar nuestra plataforma, aceptas cumplir con estos términos.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Público objetivo</h2>
            <p>
              Nuestra plataforma está destinada a estudiantes y trabajadores del sector tecnológico que desean adquirir o mejorar habilidades digitales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Acceso a los cursos</h2>
            <p>
              Los usuarios acceden a los cursos a través de nuestra plataforma en línea, que incluye materiales descargables y clases en vivo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Certificados y diplomas</h2>
            <p>
              Al completar un curso, otorgamos certificados sin costo adicional. Nos reservamos el derecho de modificar esta política en el futuro, lo cual será notificado con antelación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Modelos de pago</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modalidad grupal: El pago se realiza por módulos completos.</li>
              <li>Modalidad individual: Las sesiones privadas deben reservarse en bloques de 2 sesiones de 1 hora cada una, respetando el costo por hora indicado en nuestro calendario.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Política de reembolso</h2>
            <p>
              No ofrecemos reembolsos. Nuestro compromiso de calidad se refleja en los materiales educativos proporcionados y el acceso garantizado a nuestra plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Soporte técnico y académico</h2>
            <p>
              Proporcionamos soporte académico disponible 24/7 a través de WhatsApp y atención telefónica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Materiales del curso</h2>
            <p>
              Todos los materiales del curso y grabaciones de las clases son de libre acceso para los estudiantes inscritos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Propiedad intelectual</h2>
            <p>
              El contenido de los cursos, incluidos videos, documentos y otros recursos, está protegido por derechos de autor. Está estrictamente prohibido compartir el material fuera de la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Normas de conducta</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prohibición de plagio: No se permite copiar o reproducir actividades de otros estudiantes.</li>
              <li>Restricciones al uso de inteligencia artificial: Está prohibido el uso de herramientas de IA para completar tareas o actividades del curso.</li>
              <li>Comportamiento ético: Esperamos respeto mutuo entre estudiantes, instructores y el personal de soporte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Privacidad y seguridad de datos</h2>
            <p>
              Nos comprometemos a proteger la información personal de nuestros estudiantes. Todos los datos se almacenan en servidores encriptados para garantizar la seguridad y confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Modificaciones de los términos</h2>
            <p>
              Nos reservamos el derecho de actualizar estos Términos de Servicio en cualquier momento. Las modificaciones serán notificadas a través de nuestra plataforma.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-300">
        <p>© 2024 Academia Nova. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
