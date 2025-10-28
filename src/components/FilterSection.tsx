import { Base, Intensity, Taste } from "@/types/cocktail";

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
    <div className="space-y-6 mb-8">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Základ</h3>
        <div className="flex flex-wrap gap-2">
          {bases.map((base) => (
            <button
              key={base}
              onClick={() => onBaseToggle(base)}
              className={`filter-chip ${
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
        <h3 className="text-sm font-semibold mb-3 text-foreground">Intenzita</h3>
        <div className="flex flex-wrap gap-2">
          {intensities.map((intensity) => (
            <button
              key={intensity}
              onClick={() => onIntensityToggle(intensity)}
              className={`filter-chip ${
                selectedIntensities.includes(intensity)
                  ? "filter-chip-active"
                  : "filter-chip-inactive"
              }`}
            >
              {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Chuť</h3>
        <div className="flex flex-wrap gap-2">
          {tastes.map((taste) => (
            <button
              key={taste}
              onClick={() => onTasteToggle(taste)}
              className={`filter-chip ${
                selectedTastes.includes(taste)
                  ? "filter-chip-active"
                  : "filter-chip-inactive"
              }`}
            >
              {taste.charAt(0).toUpperCase() + taste.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
