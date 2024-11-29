import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NotebookPen } from 'lucide-react';

export default function NavButtons() {
  const handleClick = () => {
    window.location.href = 'https://homework.academia-nova.com';
  };

  return (
    <div className="relative md:pl-44 top-4 md:top-0">
      <Button onClick={handleClick} className="bg-white text-[#0122F4] hover:bg-white/90 flex items-center">
      
        HomeWork Space
        <NotebookPen className="ml-2 h-4 w-4" />
      </Button>
      <Badge
        variant="default"
        color="red"
        className="absolute bottom-8 right-32 bg-red-500"
      >
        Nuevo
      </Badge>
    </div>
  );
}