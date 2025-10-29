import { Base, Intensity, Taste } from "@/types/cocktail";
import { Flame, Droplet, Candy, Citrus } from "lucide-react";

interface FilterSectionProps {
  selectedBases: Base[];
  selectedIntensities: Intensity[];
  selectedTastes: Taste[];
  onBaseToggle: (base: Base) => void;
  onIntensityToggle: (intensity: Intensity) => void;
  onTasteToggle: (taste: Taste) => void;
}

export const FilterSection = ({
  selectedBases,
  selectedIntensities,
  selectedTastes,
  onBaseToggle,
  onIntensityToggle,
  onTasteToggle,
}: FilterSectionProps) => {
  const bases: Base[] = ["gin", "rum", "vodka", "tequila"];
  const intensities: Intensity[] = ["silný", "lehký"];
  const tastes: Taste[] = ["sladký", "kyselý"];

  const baseLabels: Record<Base, string> = {
    gin: "Gin",
    rum: "Rum",
    vodka: "Vodka",
    tequila: "Tequila",
  };

  return (
    <div className="bg-card border rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <h3 className="text-xs font-semibold mb-2 text-foreground">Základ</h3>
          <div className="flex flex-wrap gap-1.5">
            {bases.map((base) => (
              <button
                key={base}
                onClick={() => onBaseToggle(base)}
                className={`filter-chip text-xs px-2 py-1 ${
                  selectedBases.includes(base)
                    ? "filter-chip-active"
                    : "filter-chip-inactive"
                }`}
              >
                {baseLabels[base]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold mb-2 text-foreground flex items-center gap-2">
            Intenzita
            <span className="flex gap-1 text-muted-foreground">
              <Flame className="w-3 h-3 text-orange-500" />
              <Droplet className="w-3 h-3 text-blue-500" />
            </span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {intensities.map((intensity) => (
              <button
                key={intensity}
                onClick={() => onIntensityToggle(intensity)}
                className={`filter-chip text-xs px-2 py-1 flex items-center gap-1 ${
                  selectedIntensities.includes(intensity)
                    ? "filter-chip-active"
                    : "filter-chip-inactive"
                }`}
              >
                {intensity === "silný" ? (
                  <Flame className="w-3 h-3" />
                ) : (
                  <Droplet className="w-3 h-3" />
                )}
                {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold mb-2 text-foreground flex items-center gap-2">
            Chuť
            <span className="flex gap-1 text-muted-foreground">
              <Candy className="w-3 h-3 text-pink-500" />
              <Citrus className="w-3 h-3 text-yellow-500" />
            </span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {tastes.map((taste) => (
              <button
                key={taste}
                onClick={() => onTasteToggle(taste)}
                className={`filter-chip text-xs px-2 py-1 flex items-center gap-1 ${
                  selectedTastes.includes(taste)
                    ? "filter-chip-active"
                    : "filter-chip-inactive"
                }`}
              >
                {taste === "sladký" ? (
                  <Candy className="w-3 h-3" />
                ) : (
                  <Citrus className="w-3 h-3" />
                )}
                {taste.charAt(0).toUpperCase() + taste.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
