import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NotebookPen } from 'lucide-react';

interface NavButtonsProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>; // Propiedad obligatoria para manejar el clic
}

export default function NavButtons({ onClick }: NavButtonsProps) {
  return (
    <div className="relative md:pl-44 top-4 md:top-0">
      <Button
        onClick={onClick} // Asignamos la función pasada como prop
        className="bg-white text-[#0122F4] hover:bg-white/90 flex items-center"
      >
        Aula Virtual
        <NotebookPen className="ml-2 h-4 w-4" />
      </Button>
      <Badge
        variant="default"
        color="red"
        className="absolute bottom-8 right-24 bg-red-500"
      >
        Nuevo
      </Badge>
    </div>
  );
}
