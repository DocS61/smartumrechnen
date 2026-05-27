import {
  Ruler, Weight, Thermometer, Banknote, Square, Beaker, Gauge,
  Shirt, Footprints, CookingPot, Pill, HardDrive, Fuel, ArrowDownUp, Zap
} from 'lucide-react'

export interface UnitDef {
  id: string
  name: string
  symbol: string
  toBase: (v: number) => number
  fromBase: (v: number) => number
}

export interface ConverterCategory {
  slug: string
  name: string
  shortName: string
  description: string
  icon: any
  color: string
  units: UnitDef[]
  defaultFrom: string
  defaultTo: string
  isSpecial?: boolean
}

const lengthUnits: UnitDef[] = [
  { id: 'meter', name: 'Meter', symbol: 'm', toBase: (v) => v, fromBase: (v) => v },
  { id: 'kilometer', name: 'Kilometer', symbol: 'km', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: 'zentimeter', name: 'Zentimeter', symbol: 'cm', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
  { id: 'millimeter', name: 'Millimeter', symbol: 'mm', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: 'zoll', name: 'Zoll (Inch)', symbol: 'in', toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
  { id: 'fuss', name: 'Fuß', symbol: 'ft', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
  { id: 'yard', name: 'Yard', symbol: 'yd', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
  { id: 'meile', name: 'Meile', symbol: 'mi', toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
  { id: 'seemeile', name: 'Seemeile', symbol: 'nmi', toBase: (v) => v * 1852, fromBase: (v) => v / 1852 },
  { id: 'mikrometer', name: 'Mikrometer', symbol: 'µm', toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
]

const weightUnits: UnitDef[] = [
  { id: 'kilogramm', name: 'Kilogramm', symbol: 'kg', toBase: (v) => v, fromBase: (v) => v },
  { id: 'gramm', name: 'Gramm', symbol: 'g', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: 'milligramm', name: 'Milligramm', symbol: 'mg', toBase: (v) => v / 1e6, fromBase: (v) => v * 1e6 },
  { id: 'tonne', name: 'Tonne', symbol: 't', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: 'pfund', name: 'Pfund (lb)', symbol: 'lb', toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
  { id: 'unze', name: 'Unze', symbol: 'oz', toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
  { id: 'stone', name: 'Stone', symbol: 'st', toBase: (v) => v * 6.35029, fromBase: (v) => v / 6.35029 },
  { id: 'karat', name: 'Karat', symbol: 'ct', toBase: (v) => v * 0.0002, fromBase: (v) => v / 0.0002 },
]

const temperatureUnits: UnitDef[] = [
  { id: 'celsius', name: 'Celsius', symbol: '°C', toBase: (v) => v, fromBase: (v) => v },
  { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F', toBase: (v) => (v - 32) * 5 / 9, fromBase: (v) => v * 9 / 5 + 32 },
  { id: 'kelvin', name: 'Kelvin', symbol: 'K', toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
]

const areaUnits: UnitDef[] = [
  { id: 'qm', name: 'Quadratmeter', symbol: 'm²', toBase: (v) => v, fromBase: (v) => v },
  { id: 'qkm', name: 'Quadratkilometer', symbol: 'km²', toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6 },
  { id: 'hektar', name: 'Hektar', symbol: 'ha', toBase: (v) => v * 10000, fromBase: (v) => v / 10000 },
  { id: 'ar', name: 'Ar', symbol: 'a', toBase: (v) => v * 100, fromBase: (v) => v / 100 },
  { id: 'acre', name: 'Acre', symbol: 'ac', toBase: (v) => v * 4046.86, fromBase: (v) => v / 4046.86 },
  { id: 'qfuss', name: 'Quadratfuß', symbol: 'ft²', toBase: (v) => v * 0.092903, fromBase: (v) => v / 0.092903 },
  { id: 'qzoll', name: 'Quadratzoll', symbol: 'in²', toBase: (v) => v * 0.00064516, fromBase: (v) => v / 0.00064516 },
]

const volumeUnits: UnitDef[] = [
  { id: 'liter', name: 'Liter', symbol: 'L', toBase: (v) => v, fromBase: (v) => v },
  { id: 'milliliter', name: 'Milliliter', symbol: 'mL', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: 'kubikmeter', name: 'Kubikmeter', symbol: 'm³', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: 'gallone_us', name: 'US-Gallone', symbol: 'gal (US)', toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
  { id: 'gallone_uk', name: 'UK-Gallone', symbol: 'gal (UK)', toBase: (v) => v * 4.54609, fromBase: (v) => v / 4.54609 },
  { id: 'tasse', name: 'Tasse (US)', symbol: 'cup', toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
  { id: 'fl_oz', name: 'Flüssigunze', symbol: 'fl oz', toBase: (v) => v * 0.0295735, fromBase: (v) => v / 0.0295735 },
  { id: 'kubikzentimeter', name: 'Kubikzentimeter', symbol: 'cm³', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
]

const speedUnits: UnitDef[] = [
  { id: 'kmh', name: 'Kilometer pro Stunde', symbol: 'km/h', toBase: (v) => v, fromBase: (v) => v },
  { id: 'ms', name: 'Meter pro Sekunde', symbol: 'm/s', toBase: (v) => v * 3.6, fromBase: (v) => v / 3.6 },
  { id: 'mph', name: 'Meilen pro Stunde', symbol: 'mph', toBase: (v) => v * 1.60934, fromBase: (v) => v / 1.60934 },
  { id: 'knoten', name: 'Knoten', symbol: 'kn', toBase: (v) => v * 1.852, fromBase: (v) => v / 1.852 },
  { id: 'mach', name: 'Mach', symbol: 'Ma', toBase: (v) => v * 1234.8, fromBase: (v) => v / 1234.8 },
]

const dataUnits: UnitDef[] = [
  { id: 'byte', name: 'Byte', symbol: 'B', toBase: (v) => v, fromBase: (v) => v },
  { id: 'kilobyte', name: 'Kilobyte', symbol: 'KB', toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
  { id: 'megabyte', name: 'Megabyte', symbol: 'MB', toBase: (v) => v * 1024 ** 2, fromBase: (v) => v / 1024 ** 2 },
  { id: 'gigabyte', name: 'Gigabyte', symbol: 'GB', toBase: (v) => v * 1024 ** 3, fromBase: (v) => v / 1024 ** 3 },
  { id: 'terabyte', name: 'Terabyte', symbol: 'TB', toBase: (v) => v * 1024 ** 4, fromBase: (v) => v / 1024 ** 4 },
  { id: 'petabyte', name: 'Petabyte', symbol: 'PB', toBase: (v) => v * 1024 ** 5, fromBase: (v) => v / 1024 ** 5 },
  { id: 'bit', name: 'Bit', symbol: 'bit', toBase: (v) => v / 8, fromBase: (v) => v * 8 },
  { id: 'kilobit', name: 'Kilobit', symbol: 'Kbit', toBase: (v) => v * 128, fromBase: (v) => v / 128 },
  { id: 'megabit', name: 'Megabit', symbol: 'Mbit', toBase: (v) => v * 131072, fromBase: (v) => v / 131072 },
]

const pressureUnits: UnitDef[] = [
  { id: 'bar', name: 'Bar', symbol: 'bar', toBase: (v) => v, fromBase: (v) => v },
  { id: 'pascal', name: 'Pascal', symbol: 'Pa', toBase: (v) => v / 100000, fromBase: (v) => v * 100000 },
  { id: 'hpa', name: 'Hektopascal', symbol: 'hPa', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
  { id: 'psi', name: 'PSI', symbol: 'psi', toBase: (v) => v * 0.0689476, fromBase: (v) => v / 0.0689476 },
  { id: 'atm', name: 'Atmosphäre', symbol: 'atm', toBase: (v) => v * 1.01325, fromBase: (v) => v / 1.01325 },
  { id: 'torr', name: 'Torr (mmHg)', symbol: 'Torr', toBase: (v) => v * 0.00133322, fromBase: (v) => v / 0.00133322 },
  { id: 'kpa', name: 'Kilopascal', symbol: 'kPa', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
]

const powerUnits: UnitDef[] = [
  { id: 'watt', name: 'Watt', symbol: 'W', toBase: (v) => v, fromBase: (v) => v },
  { id: 'kilowatt', name: 'Kilowatt', symbol: 'kW', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
  { id: 'megawatt', name: 'Megawatt', symbol: 'MW', toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6 },
  { id: 'ps', name: 'Pferdestärke', symbol: 'PS', toBase: (v) => v * 735.49875, fromBase: (v) => v / 735.49875 },
  { id: 'hp', name: 'Horsepower', symbol: 'HP', toBase: (v) => v * 745.7, fromBase: (v) => v / 745.7 },
  { id: 'btu_h', name: 'BTU/Stunde', symbol: 'BTU/h', toBase: (v) => v * 0.293071, fromBase: (v) => v / 0.293071 },
]

export const categories: ConverterCategory[] = [
  { slug: 'laenge', name: 'Länge', shortName: 'Länge', description: 'Meter, Kilometer, Zoll, Fuß, Meilen und mehr', icon: Ruler, color: '#0EA5E9', units: lengthUnits, defaultFrom: 'meter', defaultTo: 'zentimeter' },
  { slug: 'gewicht', name: 'Gewicht & Masse', shortName: 'Gewicht', description: 'Kilogramm, Gramm, Pfund, Unzen, Tonnen', icon: Weight, color: '#8B5CF6', units: weightUnits, defaultFrom: 'kilogramm', defaultTo: 'pfund' },
  { slug: 'temperatur', name: 'Temperatur', shortName: 'Temperatur', description: 'Celsius, Fahrenheit und Kelvin', icon: Thermometer, color: '#EF4444', units: temperatureUnits, defaultFrom: 'celsius', defaultTo: 'fahrenheit' },
  { slug: 'waehrung', name: 'Währung', shortName: 'Währung', description: 'Live-Wechselkurse für über 30 Währungen', icon: Banknote, color: '#10B981', units: [], defaultFrom: 'EUR', defaultTo: 'USD', isSpecial: true },
  { slug: 'flaeche', name: 'Fläche', shortName: 'Fläche', description: 'Quadratmeter, Hektar, Acre und mehr', icon: Square, color: '#F59E0B', units: areaUnits, defaultFrom: 'qm', defaultTo: 'qkm' },
  { slug: 'volumen', name: 'Volumen', shortName: 'Volumen', description: 'Liter, Milliliter, Gallonen, Kubik', icon: Beaker, color: '#06B6D4', units: volumeUnits, defaultFrom: 'liter', defaultTo: 'milliliter' },
  { slug: 'geschwindigkeit', name: 'Geschwindigkeit', shortName: 'Speed', description: 'km/h, m/s, mph, Knoten, Mach', icon: Gauge, color: '#EC4899', units: speedUnits, defaultFrom: 'kmh', defaultTo: 'mph' },
  { slug: 'kleidergroessen', name: 'Kleidergrößen', shortName: 'Kleider', description: 'EU, US und UK Größen für Damen & Herren', icon: Shirt, color: '#A855F7', units: [], defaultFrom: '', defaultTo: '', isSpecial: true },
  { slug: 'schuhgroessen', name: 'Schuhgrößen', shortName: 'Schuhe', description: 'EU, US, UK und cm Schuhgrößen', icon: Footprints, color: '#F97316', units: [], defaultFrom: '', defaultTo: '', isSpecial: true },
  { slug: 'kochmasse', name: 'Kochmaße', shortName: 'Kochen', description: 'Tassen, Esslöffel, Teelöffel, Gramm, ml', icon: CookingPot, color: '#84CC16', units: [], defaultFrom: '', defaultTo: '', isSpecial: true },
  { slug: 'vitamine', name: 'Vitamin-Umrechnung', shortName: 'Vitamine', description: 'IU, mg und µg für Vitamin D3, A, E und mehr', icon: Pill, color: '#14B8A6', units: [], defaultFrom: '', defaultTo: '', isSpecial: true },
  { slug: 'datengroessen', name: 'Datengrößen', shortName: 'Daten', description: 'Byte, KB, MB, GB, TB, Bit', icon: HardDrive, color: '#6366F1', units: dataUnits, defaultFrom: 'megabyte', defaultTo: 'gigabyte' },
  { slug: 'kraftstoffverbrauch', name: 'Kraftstoffverbrauch', shortName: 'Kraftstoff', description: 'l/100km, mpg, km/l mit Kostenberechnung', icon: Fuel, color: '#D946EF', units: [], defaultFrom: '', defaultTo: '', isSpecial: true },
  { slug: 'druck', name: 'Druck', shortName: 'Druck', description: 'Bar, PSI, Pascal, Atmosphäre, Torr', icon: ArrowDownUp, color: '#0891B2', units: pressureUnits, defaultFrom: 'bar', defaultTo: 'psi' },
  { slug: 'leistung', name: 'Leistung', shortName: 'Leistung', description: 'Watt, Kilowatt, PS, Horsepower', icon: Zap, color: '#EA580C', units: powerUnits, defaultFrom: 'kilowatt', defaultTo: 'ps' },
]

export function getCategoryBySlug(slug: string): ConverterCategory | undefined {
  return categories?.find((c: ConverterCategory) => c?.slug === slug)
}
