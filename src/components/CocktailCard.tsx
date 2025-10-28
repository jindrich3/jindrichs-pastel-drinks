import { Cocktail } from "@/types/cocktail";
import { Card, CardContent } from "@/components/ui/card";

interface CocktailCardProps {
  cocktail: Cocktail;
  onClick: () => void;
}

export const CocktailCard = ({ cocktail, onClick }: CocktailCardProps) => {
  return (
    <Card 
      className="hover-lift cursor-pointer overflow-hidden bg-card border-2"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={cocktail.image}
          alt={cocktail.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-3">
        <h3 className="text-sm font-bold mb-1 text-foreground line-clamp-2">{cocktail.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{cocktail.ingredients}</p>
      </CardContent>
    </Card>
  );
};
