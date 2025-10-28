import { Cocktail } from "@/types/cocktail";
import bacardi from "@/assets/cocktails/bacardi.png";
import daiquiri from "@/assets/cocktails/daiquiri.png";
import darkStormy from "@/assets/cocktails/dark-stormy.png";
import unnamed from "@/assets/cocktails/unnamed.png";
import french75 from "@/assets/cocktails/french75.png";
import gimlet from "@/assets/cocktails/gimlet.png";
import basilSmash from "@/assets/cocktails/basil-smash.png";
import maiTai from "@/assets/cocktails/mai-tai.png";
import mudslide from "@/assets/cocktails/mudslide.png";
import oldCuban from "@/assets/cocktails/old-cuban.png";
import rumSour from "@/assets/cocktails/rum-sour.png";
import pineappleSour from "@/assets/cocktails/pineapple-sour.png";
import margarita from "@/assets/cocktails/margarita.png";
import moscowMule from "@/assets/cocktails/moscow-mule.png";

export const cocktails: Cocktail[] = [
  {
    id: "bacardi",
    name: "Bacardi Cocktail",
    ingredients: "rum, grenadina, limeta",
    base: ["rum"],
    intensity: "silný",
    taste: "sladký",
    story: "Tento drink vznikl ve zlaté éře prohibition a stal se tak slavným, že firma Bacardi musela v roce 1936 bojovat u soudu o to, aby se mohl připravovat pouze z jejich rumu. Sladká grenadina dokonale vyvažuje kyselost limetky a vytváří elegantní růžový nápoj, který si zamilovala celá Havana.",
    image: bacardi
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    ingredients: "rum, limeta",
    base: ["rum"],
    intensity: "silný",
    taste: "kyselý",
    story: "Narodil se v kubánském městečku Daiquirí kolem roku 1898, kde ho vynalezl americký inženýr Jennings Cox. Ernest Hemingway si ho zamiloval natolik, že se jeho oblíbená varianta dodnes jmenuje Hemingway Daiquiri. Dokonalá jednoduchost – jen tři ingredience, ale nekonečné možnosti.",
    image: daiquiri
  },
  {
    id: "dark-stormy",
    name: "Dark 'n' Stormy",
    ingredients: "rum, ginger beer, limeta",
    base: ["rum"],
    intensity: "lehký",
    taste: "kyselý",
    story: "Oficiální národní drink Bermud má zajímavou historii – podle bermudského zákona se smí nazývat Dark 'n' Stormy pouze pokud obsahuje Gosling's Black Seal rum. Název vznikl podle bouřlivě tmavého vzhledu, který tmavý rum vytváří v ginger beeru. Osvěžující a pikantní jako bermudská bouře.",
    image: darkStormy
  },
  {
    id: "unnamed",
    name: "Drink, co ještě nemá název",
    ingredients: "rum, kokos, kyselý",
    base: ["rum"],
    intensity: "lehký",
    taste: "kyselý",
    story: "Experimentální kokosová kreace našeho baru, která zatím čeká na své křestní jméno. Kombinace rumu s kokosem a kyselými tóny vytváří tropický zážitek, který si ještě hledá svou identitu. Možná právě ty vymyslíš ten správný název!",
    image: unnamed
  },
  {
    id: "french75",
    name: "French 75",
    ingredients: "gin, citron, šumivé víno",
    base: ["gin"],
    intensity: "lehký",
    taste: "kyselý",
    story: "Pojmenovaný po francouzském 75mm polním děle z první světové války, protože měl mít stejně silný efekt. Vznikl v Paříži v Harry's New York Baru a rychle si získal pověst nejelegantnějšího koktejlu Art Deco éry. Šampaňské bubliny ho povyšují na skutečnou celebraci.",
    image: french75
  },
  {
    id: "gimlet",
    name: "Gimlet Fresh",
    ingredients: "gin, limeta",
    base: ["gin"],
    intensity: "silný",
    taste: "kyselý",
    story: "Podle legendy ho vynalezl chirurg Britského královského námořnictva Sir Thomas Gimlette, aby námořníci vypili svou každodenní dávku limetky proti kurději. Gin s limetkou se stal ikonickým párem a Raymond Chandler ho v knize \"Dlouhé sbohem\" nazval \"skutečným gimletem\". Jednoduchý, osvěžující, nadčasový.",
    image: gimlet
  },
  {
    id: "basil-smash",
    name: "Basil Smash",
    ingredients: "gin, citron, bazalka",
    base: ["gin"],
    intensity: "silný",
    taste: "kyselý",
    story: "Tento moderní klasik vznikl teprve v roce 2008 v hamburském baru Le Lion. Jeho tvůrce Jörg Meyer chtěl dokázat, že bylinkové koktejly nemusí být komplikované. Fresh bazalka s ginem a citrónem vytváří aromatický zážitek, který dobyl celý svět během pár let.",
    image: basilSmash
  },
  {
    id: "mai-tai",
    name: "Mai Tai",
    ingredients: "rum, pomeranč, mandle, limeta",
    base: ["rum"],
    intensity: "silný",
    taste: "sladký",
    story: "\"Maita'i roa a'e\" znamená v tahitštině \"mimo tento svět – to nejlepší!\" a přesně to vykřikla první osoba, která ochutnala tento drink v roce 1944 v Trader Vic's v Oaklandu. Navzdory mnoha imitacím je originální Mai Tai komplexní rumovou symfonií, která zachycuje ducha Polynésie.",
    image: maiTai
  },
  {
    id: "mudslide",
    name: "Mudslide",
    ingredients: "vodka, kahlua, baileys",
    base: ["vodka"],
    intensity: "silný",
    taste: "sladký",
    story: "Narodil se na Kajmanských ostrovech v 70. letech v beach baru Wreck Bar. Tento dekadentní dezertní koktejl je jako tekutý cheesecake – sladký, krémový a nebezpečně příjemný. Perfektní pro milovníky kávy a čokolády, kteří chtějí něco extra.",
    image: mudslide
  },
  {
    id: "old-cuban",
    name: "Old Cuban",
    ingredients: "rum, limeta, šumivé víno",
    base: ["rum"],
    intensity: "lehký",
    taste: "kyselý",
    story: "Moderní klasik od legendárního Audrey Saundersa z Pegu Clubu v New Yorku (2001). Elegantní fúze Mojita a French 75 – kubánský rum potkává francouzské šampaňské. Kombinace máty, rumu a bublin vytváří sofistikovaný drink, který spojuje starou Havanu s moderním stylem.",
    image: oldCuban
  },
  {
    id: "rum-sour",
    name: "Rum Sour",
    ingredients: "rum, limeta, vejce",
    base: ["rum"],
    intensity: "silný",
    taste: "kyselý",
    story: "Sour koktejly patří mezi nejstarší kategorie mixovaných drinků – jejich základní vzorec spirit + citrus + sladidlo + vaječný bílek je známý už od 19. století. Vaječný bílek vytváří hedvábnou pěnu a jemnou texturu, která z jednoduchého kyselého drinku dělá luxusní zážitek.",
    image: rumSour
  },
  {
    id: "pineapple-sour",
    name: "Pineapple Sour",
    ingredients: "rum / bourbon, ananas, vejce",
    base: ["rum"],
    intensity: "silný",
    taste: "sladký",
    story: "Tropická variace klasického Souru, která přináší exotickou sladkost ananasu do tradiční kyselé struktury. Flexibilita použít rum nebo bourbon ukazuje, jak dobře ananas funguje s různými destiláty. Vaječná pěna korunuje zlatý elixír plný slunečního Karibiku.",
    image: pineappleSour
  },
  {
    id: "margarita",
    name: "Margarita",
    ingredients: "tequila, pomeranč, limeta",
    base: ["tequila"],
    intensity: "silný",
    taste: "kyselý",
    story: "Nejslavnější tequilový koktejl světa má desítky legend o svém původu, ale všechny se shodují na jednom – vznikl v Mexiku kolem 40. let 20. století. Dokonalá rovnováha tequily, triple sec a limetky z něj udělala globální fenomén. Solný okraj je podpis jeho ikonického charakteru.",
    image: margarita
  },
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    ingredients: "vodka, limeta, ginger beer",
    base: ["vodka"],
    intensity: "lehký",
    taste: "kyselý",
    story: "Marketingový génius z roku 1941 – vznikl ze spolupráce výrobce vodky, majitele baru a dovozce ginger beeru, kteří všichni potřebovali prodat své produkty. Podáván v ikonickém měděném hrnečku se stal symbolem 50. let. Jednoduchý, osvěžující a americká ikona.",
    image: moscowMule
  }
];
