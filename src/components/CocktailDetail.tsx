import { Cocktail } from "@/types/cocktail";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Flame, Droplet, Candy, Citrus } from "lucide-react";

interface CocktailDetailProps {
  cocktail: Cocktail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CocktailDetail = ({ cocktail, open, onOpenChange }: CocktailDetailProps) => {
  if (!cocktail) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[calc(100%-2rem)] sm:w-full">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold">{cocktail.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-lg">
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
              {cocktail.intensity === "silný" ? (
                <>
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Silný</span>
                </>
              ) : (
                <>
                  <Droplet className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">Lehký</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
              {cocktail.taste === "sladký" ? (
                <>
                  <Candy className="w-5 h-5 text-pink-500" />
                  <span className="font-medium">Sladký</span>
                </>
              ) : (
                <>
                  <Citrus className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">Kyselý</span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Ingredience</h4>
            <p className="text-muted-foreground leading-relaxed">{cocktail.ingredients}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Příběh</h4>
            <p className="text-foreground leading-relaxed">{cocktail.story}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
