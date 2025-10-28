import { Cocktail } from "@/types/cocktail";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CocktailDetailProps {
  cocktail: Cocktail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CocktailDetail = ({ cocktail, open, onOpenChange }: CocktailDetailProps) => {
  if (!cocktail) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{cocktail.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Ingredience</h4>
            <p className="text-muted-foreground">{cocktail.ingredients}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Příběh</h4>
            <p className="text-foreground leading-relaxed">{cocktail.story}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
