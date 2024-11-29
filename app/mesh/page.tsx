// MallaCurricularPage.tsx
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

const pdfFiles = [
  { name: 'Malla Curricular - Python Basico', file: '/pdfs/curricula-python-basico.pdf' },
  { name: 'Malla Curricular - Java Basico', file: '/pdfs/curricula-java-basico.pdf' },
  { name: 'Malla Curricular - Java Intermedio I', file: '/pdfs/curricula-java-intermedio-1.pdf' },
]

export default function MallaCurricularPage() {
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
        <h1 className="text-3xl font-bold mb-6 text-[#0122F4]">Malla Curricular</h1>
        <p className="mb-6 text-gray-700">
          Explora nuestra malla curricular para conocer en detalle los cursos y programas que ofrecemos en Academia Nova.
          Selecciona un documento para visualizarlo:
        </p>

        {/* Tarjetas de descarga */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfFiles.map((pdf) => (
            <div key={pdf.file} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <h3 className="text-xl font-semibold mb-4">{pdf.name}</h3>
              <p className="text-gray-600 mb-4">
                Haz clic en el botón de abajo para descargar el PDF de la malla curricular.
              </p>
              <Link href={pdf.file} passHref>
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Descargar PDF
                </Button>
              </Link>
            </div>
          ))}
        </div>

      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        <p>© 2024 Academia Nova. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
