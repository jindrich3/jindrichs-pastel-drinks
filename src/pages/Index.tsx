import { useState } from "react";
import { cocktails } from "@/data/cocktails";
import { CocktailCard } from "@/components/CocktailCard";
import { CocktailDetail } from "@/components/CocktailDetail";
import { FilterSection } from "@/components/FilterSection";
import { Base, Intensity, Taste, Cocktail } from "@/types/cocktail";
import logo from "@/assets/logo.png";

const Index = () => {
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  
  const [selectedBases, setSelectedBases] = useState<Base[]>([]);
  const [selectedIntensities, setSelectedIntensities] = useState<Intensity[]>([]);
  const [selectedTastes, setSelectedTastes] = useState<Taste[]>([]);

  const handleBaseToggle = (base: Base) => {
    setSelectedBases((prev) =>
      prev.includes(base) ? prev.filter((b) => b !== base) : [...prev, base]
    );
  };

  const handleIntensityToggle = (intensity: Intensity) => {
    setSelectedIntensities((prev) =>
      prev.includes(intensity) ? prev.filter((i) => i !== intensity) : [...prev, intensity]
    );
  };

  const handleTasteToggle = (taste: Taste) => {
    setSelectedTastes((prev) =>
      prev.includes(taste) ? prev.filter((t) => t !== taste) : [...prev, taste]
    );
  };

  const filteredCocktails = cocktails.filter((cocktail) => {
    const baseMatch = selectedBases.length === 0 || 
      cocktail.base.some((b) => selectedBases.includes(b));
    const intensityMatch = selectedIntensities.length === 0 || 
      selectedIntensities.includes(cocktail.intensity);
    const tasteMatch = selectedTastes.length === 0 || 
      selectedTastes.includes(cocktail.taste);
    
    return baseMatch && intensityMatch && tasteMatch;
  });

  const handleCardClick = (cocktail: Cocktail) => {
    setSelectedCocktail(cocktail);
    setDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="py-8 px-4 text-center border-b border-border">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Bar u Jindřicha logo" className="h-20 w-20" />
        </div>
        <h1 className="text-4xl font-bold mb-3 text-foreground">Bar u Jindřicha</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Vítejte v našem útulném baru, kde pro vás mícháme ty nejlepší koktejly s láskou a historií.
          Každý drink má svůj příběh – přijďte si ten váš poslechnout!
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <FilterSection
          selectedBases={selectedBases}
          selectedIntensities={selectedIntensities}
          selectedTastes={selectedTastes}
          onBaseToggle={handleBaseToggle}
          onIntensityToggle={handleIntensityToggle}
          onTasteToggle={handleTasteToggle}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredCocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              cocktail={cocktail}
              onClick={() => handleCardClick(cocktail)}
            />
          ))}
        </div>

        {filteredCocktails.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Bohužel jsme nenašli žádný koktejl odpovídající vašim filtrům.
            </p>
          </div>
        )}
      </main>

      <footer className="py-8 text-center border-t border-border mt-16">
        <p className="text-lg font-semibold text-foreground">Bar u Jindřicha</p>
      </footer>

      <CocktailDetail
        cocktail={selectedCocktail}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  );
};

export default Index;
