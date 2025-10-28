export type Base = "gin" | "rum" | "vodka" | "tequila";
export type Intensity = "silný" | "lehký";
export type Taste = "sladký" | "kyselý";

export interface Cocktail {
  id: string;
  name: string;
  ingredients: string;
  base: Base[];
  intensity: Intensity;
  taste: Taste;
  story: string;
  image: string;
}
