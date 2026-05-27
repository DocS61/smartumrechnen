// Umfassender Suchindex für die Volltextsuche
// Enthält: Umrechner-Namen, Kürzel, Original-Bezeichnungen, deutsche Bezeichnungen

export interface SearchEntry {
  label: string           // Anzeige-Text
  description: string     // Beschreibungstext
  slug: string            // Link-Ziel (/umrechner/slug)
  keywords: string[]      // Suchbegriffe
}

export const searchIndex: SearchEntry[] = [
  // === KATEGORIEN ===
  { label: 'Länge', description: 'Meter, Kilometer, Zoll, Fuß, Meilen und mehr', slug: 'laenge', keywords: ['länge', 'length', 'entfernung', 'distanz', 'abstand'] },
  { label: 'Gewicht & Masse', description: 'Kilogramm, Gramm, Pfund, Unzen, Tonnen', slug: 'gewicht', keywords: ['gewicht', 'masse', 'weight', 'mass'] },
  { label: 'Temperatur', description: 'Celsius, Fahrenheit und Kelvin', slug: 'temperatur', keywords: ['temperatur', 'temperature', 'wärme', 'kälte', 'grad'] },
  { label: 'Währung', description: 'Live-Wechselkurse für über 20 Währungen', slug: 'waehrung', keywords: ['währung', 'currency', 'geld', 'wechselkurs', 'devisen'] },
  { label: 'Fläche', description: 'Quadratmeter, Hektar, Acre und mehr', slug: 'flaeche', keywords: ['fläche', 'area', 'grundstück'] },
  { label: 'Volumen', description: 'Liter, Milliliter, Gallonen, Kubik', slug: 'volumen', keywords: ['volumen', 'volume', 'rauminhalt', 'hohlmaß'] },
  { label: 'Geschwindigkeit', description: 'km/h, m/s, mph, Knoten, Mach', slug: 'geschwindigkeit', keywords: ['geschwindigkeit', 'speed', 'tempo', 'schnelligkeit'] },
  { label: 'Kleidergrößen', description: 'EU, US und UK Größen für Damen, Herren & Kinder', slug: 'kleidergroessen', keywords: ['kleidergrößen', 'clothing', 'konfektionsgröße', 'kleidung', 'mode'] },
  { label: 'Schuhgrößen', description: 'EU, US, UK und cm Schuhgrößen', slug: 'schuhgroessen', keywords: ['schuhgrößen', 'shoes', 'schuhe', 'fußgröße'] },
  { label: 'Kochmaße', description: 'Tassen, Esslöffel, Teelöffel, Gramm, ml', slug: 'kochmasse', keywords: ['kochmaße', 'kochen', 'backen', 'küche', 'cooking', 'rezept'] },
  { label: 'Vitamin-Umrechnung', description: 'IU, mg und µg für Vitamin D3, A, E und mehr', slug: 'vitamine', keywords: ['vitamin', 'vitamine', 'nahrungsergänzung', 'supplement', 'dosierung'] },
  { label: 'Datengrößen', description: 'Byte, KB, MB, GB, TB, Bit', slug: 'datengroessen', keywords: ['datengrößen', 'daten', 'speicher', 'data', 'storage', 'digital'] },
  { label: 'Kraftstoffverbrauch', description: 'l/100km, mpg, km/l mit Kostenberechnung', slug: 'kraftstoffverbrauch', keywords: ['kraftstoff', 'verbrauch', 'benzin', 'diesel', 'sprit', 'fuel', 'tanken'] },
  { label: 'Druck', description: 'Bar, PSI, Pascal, Atmosphäre, Torr', slug: 'druck', keywords: ['druck', 'pressure', 'reifendruck', 'luftdruck'] },
  { label: 'Leistung', description: 'Watt, Kilowatt, PS, Horsepower', slug: 'leistung', keywords: ['leistung', 'power', 'energie', 'motor'] },

  // === LÄNGE ===
  { label: 'Meter (m)', description: 'Längeneinheit – SI-Basiseinheit', slug: 'laenge', keywords: ['meter', 'm', 'länge'] },
  { label: 'Kilometer (km)', description: '1.000 Meter', slug: 'laenge', keywords: ['kilometer', 'km'] },
  { label: 'Zentimeter (cm)', description: '1/100 Meter', slug: 'laenge', keywords: ['zentimeter', 'cm'] },
  { label: 'Millimeter (mm)', description: '1/1.000 Meter', slug: 'laenge', keywords: ['millimeter', 'mm'] },
  { label: 'Zoll / Inch (in)', description: '1 Zoll = 2,54 cm', slug: 'laenge', keywords: ['zoll', 'inch', 'in', '"'] },
  { label: 'Fuß / Foot (ft)', description: '1 Fuß = 30,48 cm', slug: 'laenge', keywords: ['fuß', 'fuss', 'foot', 'feet', 'ft'] },
  { label: 'Yard (yd)', description: '1 Yard = 0,9144 m', slug: 'laenge', keywords: ['yard', 'yd'] },
  { label: 'Meile / Mile (mi)', description: '1 Meile = 1,609 km', slug: 'laenge', keywords: ['meile', 'mile', 'mi', 'meilen'] },
  { label: 'Seemeile / Nautical Mile (nmi)', description: '1 Seemeile = 1,852 km', slug: 'laenge', keywords: ['seemeile', 'nautical mile', 'nmi', 'nautisch'] },
  { label: 'Mikrometer (µm)', description: '1/1.000.000 Meter', slug: 'laenge', keywords: ['mikrometer', 'µm', 'mikron'] },

  // === GEWICHT ===
  { label: 'Kilogramm (kg)', description: 'SI-Basiseinheit der Masse', slug: 'gewicht', keywords: ['kilogramm', 'kg', 'kilo'] },
  { label: 'Gramm (g)', description: '1/1.000 Kilogramm', slug: 'gewicht', keywords: ['gramm', 'g'] },
  { label: 'Milligramm (mg)', description: '1/1.000.000 Kilogramm', slug: 'gewicht', keywords: ['milligramm', 'mg'] },
  { label: 'Tonne (t)', description: '1.000 Kilogramm', slug: 'gewicht', keywords: ['tonne', 't', 'metrische tonne'] },
  { label: 'Pfund / Pound (lb)', description: '1 Pfund = 0,4536 kg', slug: 'gewicht', keywords: ['pfund', 'pound', 'lb', 'lbs'] },
  { label: 'Unze / Ounce (oz)', description: '1 Unze = 28,35 g', slug: 'gewicht', keywords: ['unze', 'ounce', 'oz'] },
  { label: 'Stone (st)', description: '1 Stone = 6,35 kg (brit.)', slug: 'gewicht', keywords: ['stone', 'st', 'britisch'] },
  { label: 'Karat (ct)', description: 'Edelsteingewicht – 1 ct = 0,2 g', slug: 'gewicht', keywords: ['karat', 'carat', 'ct', 'edelstein', 'diamant'] },

  // === TEMPERATUR ===
  { label: 'Celsius (°C)', description: 'Metrische Temperatureinheit', slug: 'temperatur', keywords: ['celsius', '°c', 'grad'] },
  { label: 'Fahrenheit (°F)', description: 'US-amerikanische Temperatureinheit', slug: 'temperatur', keywords: ['fahrenheit', '°f'] },
  { label: 'Kelvin (K)', description: 'SI-Basiseinheit der Temperatur', slug: 'temperatur', keywords: ['kelvin', 'k'] },

  // === WÄHRUNG ===
  { label: 'Euro (EUR, €)', description: 'Europäische Gemeinschaftswährung', slug: 'waehrung', keywords: ['euro', 'eur', '€'] },
  { label: 'US-Dollar (USD, $)', description: 'Vereinigte Staaten', slug: 'waehrung', keywords: ['us-dollar', 'dollar', 'usd', '$'] },
  { label: 'Britisches Pfund (GBP, £)', description: 'Vereinigtes Königreich', slug: 'waehrung', keywords: ['britisches pfund', 'pfund sterling', 'gbp', '£', 'pound'] },
  { label: 'Japanischer Yen (JPY, ¥)', description: 'Japan', slug: 'waehrung', keywords: ['japanischer yen', 'yen', 'jpy', '¥'] },
  { label: 'Schweizer Franken (CHF)', description: 'Schweiz', slug: 'waehrung', keywords: ['schweizer franken', 'franken', 'chf'] },
  { label: 'Kanadischer Dollar (CAD, C$)', description: 'Kanada', slug: 'waehrung', keywords: ['kanadischer dollar', 'cad', 'c$'] },
  { label: 'Australischer Dollar (AUD, A$)', description: 'Australien', slug: 'waehrung', keywords: ['australischer dollar', 'aud', 'a$'] },
  { label: 'Chinesischer Yuan (CNY, ¥)', description: 'Volksrepublik China', slug: 'waehrung', keywords: ['chinesischer yuan', 'yuan', 'renminbi', 'cny'] },
  { label: 'Indische Rupie (INR, ₹)', description: 'Indien', slug: 'waehrung', keywords: ['indische rupie', 'rupie', 'inr', '₹'] },
  { label: 'Brasilianischer Real (BRL, R$)', description: 'Brasilien', slug: 'waehrung', keywords: ['brasilianischer real', 'real', 'brl', 'r$'] },
  { label: 'Südkoreanischer Won (KRW, ₩)', description: 'Südkorea', slug: 'waehrung', keywords: ['südkoreanischer won', 'won', 'krw', '₩'] },
  { label: 'Mexikanischer Peso (MXN)', description: 'Mexiko', slug: 'waehrung', keywords: ['mexikanischer peso', 'peso', 'mxn'] },
  { label: 'Schwedische Krone (SEK)', description: 'Schweden', slug: 'waehrung', keywords: ['schwedische krone', 'sek', 'krona'] },
  { label: 'Norwegische Krone (NOK)', description: 'Norwegen', slug: 'waehrung', keywords: ['norwegische krone', 'nok'] },
  { label: 'Dänische Krone (DKK)', description: 'Dänemark', slug: 'waehrung', keywords: ['dänische krone', 'dkk'] },
  { label: 'Polnischer Złoty (PLN, zł)', description: 'Polen', slug: 'waehrung', keywords: ['polnischer zloty', 'zloty', 'złoty', 'pln', 'zł'] },
  { label: 'Tschechische Krone (CZK, Kč)', description: 'Tschechien', slug: 'waehrung', keywords: ['tschechische krone', 'czk', 'kč', 'koruna'] },
  { label: 'Ungarischer Forint (HUF, Ft)', description: 'Ungarn', slug: 'waehrung', keywords: ['ungarischer forint', 'forint', 'huf', 'ft'] },
  { label: 'Türkische Lira (TRY, ₺)', description: 'Türkei', slug: 'waehrung', keywords: ['türkische lira', 'lira', 'try', '₺'] },
  { label: 'Thailändischer Baht (THB, ฿)', description: 'Thailand', slug: 'waehrung', keywords: ['thailändischer baht', 'baht', 'thb', '฿'] },
  { label: 'Singapur-Dollar (SGD, S$)', description: 'Singapur', slug: 'waehrung', keywords: ['singapur-dollar', 'sgd', 's$'] },
  { label: 'Hongkong-Dollar (HKD, HK$)', description: 'Hongkong', slug: 'waehrung', keywords: ['hongkong-dollar', 'hkd', 'hk$'] },
  { label: 'Neuseeland-Dollar (NZD, NZ$)', description: 'Neuseeland', slug: 'waehrung', keywords: ['neuseeland-dollar', 'nzd', 'nz$'] },
  { label: 'Südafrikanischer Rand (ZAR, R)', description: 'Südafrika', slug: 'waehrung', keywords: ['südafrikanischer rand', 'rand', 'zar'] },

  // === FLÄCHE ===
  { label: 'Quadratmeter (m²)', description: 'SI-Flächeneinheit', slug: 'flaeche', keywords: ['quadratmeter', 'm²', 'qm'] },
  { label: 'Quadratkilometer (km²)', description: '1.000.000 m²', slug: 'flaeche', keywords: ['quadratkilometer', 'km²', 'qkm'] },
  { label: 'Hektar (ha)', description: '10.000 m²', slug: 'flaeche', keywords: ['hektar', 'ha'] },
  { label: 'Ar (a)', description: '100 m²', slug: 'flaeche', keywords: ['ar', 'a'] },
  { label: 'Acre (ac)', description: '1 Acre = 4.046,86 m²', slug: 'flaeche', keywords: ['acre', 'ac', 'morgen'] },
  { label: 'Quadratfuß / Square Foot (ft²)', description: '1 ft² = 0,0929 m²', slug: 'flaeche', keywords: ['quadratfuß', 'square foot', 'ft²', 'sq ft'] },
  { label: 'Quadratzoll / Square Inch (in²)', description: '1 in² = 6,45 cm²', slug: 'flaeche', keywords: ['quadratzoll', 'square inch', 'in²', 'sq in'] },

  // === VOLUMEN ===
  { label: 'Liter (L)', description: 'Metrische Volumeneinheit', slug: 'volumen', keywords: ['liter', 'l'] },
  { label: 'Milliliter (mL)', description: '1/1.000 Liter', slug: 'volumen', keywords: ['milliliter', 'ml'] },
  { label: 'Kubikmeter (m³)', description: '1.000 Liter', slug: 'volumen', keywords: ['kubikmeter', 'm³', 'cbm'] },
  { label: 'US-Gallone (gal)', description: '1 US-Gallone = 3,785 L', slug: 'volumen', keywords: ['us-gallone', 'gallone', 'gallon', 'gal'] },
  { label: 'UK-Gallone (gal)', description: '1 UK-Gallone = 4,546 L', slug: 'volumen', keywords: ['uk-gallone', 'imperial gallon'] },
  { label: 'Tasse / Cup (cup)', description: '1 US-Cup = 236,6 mL', slug: 'volumen', keywords: ['tasse', 'cup'] },
  { label: 'Flüssigunze / Fluid Ounce (fl oz)', description: '1 fl oz = 29,57 mL', slug: 'volumen', keywords: ['flüssigunze', 'fluid ounce', 'fl oz'] },
  { label: 'Kubikzentimeter (cm³)', description: '= 1 Milliliter', slug: 'volumen', keywords: ['kubikzentimeter', 'cm³', 'ccm'] },

  // === GESCHWINDIGKEIT ===
  { label: 'Kilometer pro Stunde (km/h)', description: 'Metrische Geschwindigkeitseinheit', slug: 'geschwindigkeit', keywords: ['kilometer pro stunde', 'km/h', 'kmh', 'stundenkilometer'] },
  { label: 'Meter pro Sekunde (m/s)', description: 'SI-Geschwindigkeitseinheit', slug: 'geschwindigkeit', keywords: ['meter pro sekunde', 'm/s'] },
  { label: 'Meilen pro Stunde / Miles per Hour (mph)', description: '1 mph = 1,609 km/h', slug: 'geschwindigkeit', keywords: ['meilen pro stunde', 'miles per hour', 'mph'] },
  { label: 'Knoten / Knots (kn)', description: '1 Knoten = 1,852 km/h', slug: 'geschwindigkeit', keywords: ['knoten', 'knots', 'kn', 'nautisch'] },
  { label: 'Mach (Ma)', description: 'Schallgeschwindigkeit', slug: 'geschwindigkeit', keywords: ['mach', 'ma', 'schallgeschwindigkeit', 'Überschall'] },

  // === KOCHMASSE ===
  { label: 'Teelöffel / Teaspoon (TL)', description: '1 TL = 5 mL', slug: 'kochmasse', keywords: ['teelöffel', 'teaspoon', 'tl', 'tsp'] },
  { label: 'Esslöffel / Tablespoon (EL)', description: '1 EL = 15 mL', slug: 'kochmasse', keywords: ['esslöffel', 'tablespoon', 'el', 'tbsp'] },
  { label: 'Tasse US / Cup (cup)', description: '1 US-Cup = 236,6 mL', slug: 'kochmasse', keywords: ['tasse', 'cup', 'us-tasse'] },
  { label: 'Tasse DE (150 mL)', description: 'Deutsche Tasse = 150 mL', slug: 'kochmasse', keywords: ['deutsche tasse', 'tasse de'] },
  { label: 'Pint US (pt)', description: '1 US-Pint = 473 mL', slug: 'kochmasse', keywords: ['pint', 'pt'] },
  { label: 'Quart US (qt)', description: '1 US-Quart = 946 mL', slug: 'kochmasse', keywords: ['quart', 'qt'] },

  // === VITAMINE ===
  { label: 'Vitamin D3 (Cholecalciferol)', description: '1 IU = 0,025 µg', slug: 'vitamine', keywords: ['vitamin d3', 'cholecalciferol', 'd3', 'sonnenvitamin'] },
  { label: 'Vitamin D2 (Ergocalciferol)', description: '1 IU = 0,025 µg', slug: 'vitamine', keywords: ['vitamin d2', 'ergocalciferol', 'd2'] },
  { label: 'Vitamin A – Retinol', description: '1 IU = 0,3 µg', slug: 'vitamine', keywords: ['vitamin a', 'retinol'] },
  { label: 'Vitamin A – β-Carotin (Beta-Carotin)', description: '1 IU = 0,6 µg', slug: 'vitamine', keywords: ['beta-carotin', 'β-carotin', 'betacarotin', 'provitamin a'] },
  { label: 'Vitamin E – α-Tocopherol', description: '1 IU = 0,67 mg', slug: 'vitamine', keywords: ['vitamin e', 'α-tocopherol', 'alpha-tocopherol', 'tocopherol'] },
  { label: 'Vitamin C (Ascorbinsäure)', description: '1 IU = 50 µg', slug: 'vitamine', keywords: ['vitamin c', 'ascorbinsäure', 'ascorbic acid'] },
  { label: 'IU (Internationale Einheiten)', description: 'International Units – Vitamin-Dosierung', slug: 'vitamine', keywords: ['iu', 'internationale einheiten', 'international units'] },
  { label: 'Mikrogramm (µg / mcg)', description: '1/1.000 Milligramm', slug: 'vitamine', keywords: ['mikrogramm', 'µg', 'mcg'] },

  // === DATENGRÖSSEN ===
  { label: 'Byte (B)', description: 'Grundeinheit der Datenmenge', slug: 'datengroessen', keywords: ['byte', 'b'] },
  { label: 'Kilobyte (KB)', description: '1.024 Byte', slug: 'datengroessen', keywords: ['kilobyte', 'kb'] },
  { label: 'Megabyte (MB)', description: '1.024 KB', slug: 'datengroessen', keywords: ['megabyte', 'mb'] },
  { label: 'Gigabyte (GB)', description: '1.024 MB', slug: 'datengroessen', keywords: ['gigabyte', 'gb'] },
  { label: 'Terabyte (TB)', description: '1.024 GB', slug: 'datengroessen', keywords: ['terabyte', 'tb'] },
  { label: 'Petabyte (PB)', description: '1.024 TB', slug: 'datengroessen', keywords: ['petabyte', 'pb'] },
  { label: 'Bit (bit)', description: '1/8 Byte', slug: 'datengroessen', keywords: ['bit'] },
  { label: 'Kilobit (Kbit)', description: '1.024 Bit', slug: 'datengroessen', keywords: ['kilobit', 'kbit'] },
  { label: 'Megabit (Mbit)', description: '1.024 Kbit', slug: 'datengroessen', keywords: ['megabit', 'mbit'] },

  // === KRAFTSTOFFVERBRAUCH ===
  { label: 'Liter pro 100 km (l/100km)', description: 'Europäische Verbrauchseinheit', slug: 'kraftstoffverbrauch', keywords: ['liter pro 100km', 'l/100km', 'verbrauch'] },
  { label: 'Meilen pro Gallone / Miles per Gallon (mpg)', description: 'US/UK Verbrauchseinheit', slug: 'kraftstoffverbrauch', keywords: ['meilen pro gallone', 'miles per gallon', 'mpg'] },
  { label: 'Kilometer pro Liter (km/l)', description: 'Alternative Verbrauchsangabe', slug: 'kraftstoffverbrauch', keywords: ['kilometer pro liter', 'km/l'] },

  // === DRUCK ===
  { label: 'Bar (bar)', description: 'Metrische Druckeinheit', slug: 'druck', keywords: ['bar'] },
  { label: 'Pascal (Pa)', description: 'SI-Druckeinheit', slug: 'druck', keywords: ['pascal', 'pa'] },
  { label: 'Hektopascal (hPa)', description: 'Wetterdruck – 1 hPa = 1 mbar', slug: 'druck', keywords: ['hektopascal', 'hpa', 'millibar', 'mbar', 'wetter'] },
  { label: 'PSI (psi)', description: 'Pound per Square Inch – Pfund pro Quadratzoll', slug: 'druck', keywords: ['psi', 'pound per square inch', 'pfund pro quadratzoll'] },
  { label: 'Atmosphäre (atm)', description: 'Physikalische Atmosphäre', slug: 'druck', keywords: ['atmosphäre', 'atm', 'atmosphere'] },
  { label: 'Torr / mmHg (Torr)', description: 'Millimeter Quecksilbersäule', slug: 'druck', keywords: ['torr', 'mmhg', 'millimeter quecksilbersäule', 'quecksilber'] },
  { label: 'Kilopascal (kPa)', description: '1.000 Pascal', slug: 'druck', keywords: ['kilopascal', 'kpa'] },

  // === LEISTUNG ===
  { label: 'Watt (W)', description: 'SI-Leistungseinheit', slug: 'leistung', keywords: ['watt', 'w'] },
  { label: 'Kilowatt (kW)', description: '1.000 Watt', slug: 'leistung', keywords: ['kilowatt', 'kw'] },
  { label: 'Megawatt (MW)', description: '1.000.000 Watt', slug: 'leistung', keywords: ['megawatt', 'mw'] },
  { label: 'Pferdestärke (PS)', description: 'Metrische Pferdestärke', slug: 'leistung', keywords: ['pferdestärke', 'ps'] },
  { label: 'Horsepower (HP)', description: 'Mechanische Pferdestärke (brit./US)', slug: 'leistung', keywords: ['horsepower', 'hp', 'bhp'] },
  { label: 'BTU pro Stunde (BTU/h)', description: 'British Thermal Unit/Stunde', slug: 'leistung', keywords: ['btu', 'btu/h', 'british thermal unit'] },

  // === KLEIDER- & SCHUHGRÖSSEN ===
  { label: 'Kindergrößen Kleidung', description: 'EU/US/UK für Kinder nach Alter & Höhe', slug: 'kleidergroessen', keywords: ['kindergrößen', 'kinder', 'babygröße', 'kinderbekleidung'] },
  { label: 'Kindergrößen Schuhe', description: 'EU/US/UK/cm für Kinder', slug: 'schuhgroessen', keywords: ['kinderschuhe', 'kinderschuhgrößen', 'babyschuhe'] },
  { label: 'Damengrößen', description: 'EU/US/UK Kleidergrößen für Damen', slug: 'kleidergroessen', keywords: ['damengrößen', 'damen', 'frauengrößen'] },
  { label: 'Herrengrößen', description: 'EU/US/UK Kleidergrößen für Herren', slug: 'kleidergroessen', keywords: ['herrengrößen', 'herren', 'männergrößen'] },
]
