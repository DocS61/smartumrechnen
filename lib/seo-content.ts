// SEO Content: Erklärungstexte, Umrechnungstabellen und FAQs für alle 15 Kategorien

export interface ReferenceRow {
  from: string
  to: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface SEOContent {
  slug: string
  explanation: {
    title: string
    paragraphs: string[]
    formula?: string
  }
  table: {
    title: string
    fromLabel: string
    toLabel: string
    rows: ReferenceRow[]
  }
  faqs: FAQ[]
}

export const seoContentMap: Record<string, SEOContent> = {
  laenge: {
    slug: 'laenge',
    explanation: {
      title: 'Metrisch vs. Imperial: Zwei Weltsysteme der Längenmessung',
      paragraphs: [
        'Das metrische System wurde 1799 in Frankreich eingeführt und basiert auf dem Meter als Grundeinheit. Heute verwenden über 95 % aller Länder das metrische System. Die USA, Liberia und Myanmar nutzen hingegen weiterhin hauptsächlich das imperiale System mit Zoll (Inch), Fuß (Feet) und Meilen (Miles).',
        'Ein Meter wurde ursprünglich als der zehnmillionste Teil der Strecke vom Nordpol zum Äquator definiert. Seit 1983 ist ein Meter als die Strecke definiert, die Licht im Vakuum in 1/299.792.458 Sekunde zurücklegt – eine extrem präzise Definition.',
        'In Großbritannien werden Entfernungen offiziell in Meilen angegeben, Körpergrößen in Fuß und Zoll. In den USA ist das imperiale System im Alltag allgegenwärtig, während in der Wissenschaft und Medizin auch dort das metrische System verwendet wird.',
      ],
      formula: '1 Zoll = 2,54 cm · 1 Fuß = 30,48 cm · 1 Meile = 1,60934 km',
    },
    table: {
      title: 'Häufige Längenumrechnungen',
      fromLabel: 'Von',
      toLabel: 'Entspricht',
      rows: [
        { from: '1 Zoll (in)', to: '2,54 cm' },
        { from: '1 Fuß (ft)', to: '30,48 cm' },
        { from: '1 Yard (yd)', to: '0,9144 m' },
        { from: '1 Meile (mi)', to: '1,60934 km' },
        { from: '1 Seemeile (nmi)', to: '1,852 km' },
        { from: '1 Meter (m)', to: '3,281 Fuß' },
        { from: '1 Kilometer (km)', to: '0,6214 Meilen' },
        { from: '10 cm', to: '3,937 Zoll' },
      ],
    },
    faqs: [
      { question: 'Wie viel cm sind 1 Zoll?', answer: '1 Zoll (Inch) entspricht exakt 2,54 Zentimetern. Diese Umrechnung ist international standardisiert und gilt seit 1959.' },
      { question: 'Wie rechnet man Meilen in Kilometer um?', answer: '1 Meile entspricht 1,60934 Kilometer. Multiplizieren Sie die Meilenanzahl mit 1,60934, um den Wert in Kilometern zu erhalten. Beispiel: 10 Meilen = 16,09 km.' },
      { question: 'Was ist der Unterschied zwischen einer Meile und einer Seemeile?', answer: 'Eine Landmeile (statute mile) beträgt 1,60934 km, während eine Seemeile (nautical mile) 1,852 km entspricht. Die Seemeile basiert auf einer Bogenminute eines Breitengrads und wird in der Schifffahrt und Luftfahrt verwendet.' },
      { question: 'Warum verwenden die USA nicht das metrische System?', answer: 'Die USA haben das metrische System nie vollständig übernommen, obwohl es seit 1975 offiziell als „bevorzugtes Maßsystem" gilt. Der Hauptgrund ist die hohe Umstellungskosten und die tiefe Verwurzelung des imperialen Systems im Alltag, in der Industrie und in der Infrastruktur.' },
    ],
  },

  gewicht: {
    slug: 'gewicht',
    explanation: {
      title: 'Kilogramm, Pfund und Unze: Gewichtseinheiten weltweit',
      paragraphs: [
        'Das Kilogramm ist die SI-Basiseinheit der Masse und wird weltweit in Wissenschaft, Handel und Alltag verwendet. Seit 2019 wird es nicht mehr durch einen physischen Prototypen, sondern über die Planck-Konstante definiert – eine bahnbrechende Neuerung in der Metrologie.',
        'In den USA und Großbritannien ist das Pfund (Pound, lb) die gebräuchlichste Gewichtseinheit im Alltag. Ein Pfund entspricht exakt 453,592 Gramm. Die Unze (Ounce, oz) wird besonders für Lebensmittel und Körperpflegeprodukte verwendet: 1 Pfund = 16 Unzen.',
        'Eine Besonderheit ist das britische Stone (st): 1 Stone = 14 Pfund ≈ 6,35 kg. In Großbritannien wird das Körpergewicht häufig in Stone angegeben, z. B. „11 Stone 4 Pfund" statt „71,7 kg".',
      ],
      formula: '1 lb = 453,592 g · 1 oz = 28,3495 g · 1 st = 6,35029 kg',
    },
    table: {
      title: 'Häufige Gewichtsumrechnungen',
      fromLabel: 'Von',
      toLabel: 'Entspricht',
      rows: [
        { from: '1 Pfund (lb)', to: '453,592 g' },
        { from: '1 Unze (oz)', to: '28,3495 g' },
        { from: '1 Stone (st)', to: '6,35 kg' },
        { from: '1 Kilogramm', to: '2,205 lb' },
        { from: '100 Gramm', to: '3,527 oz' },
        { from: '1 Tonne (t)', to: '1.000 kg' },
        { from: '1 US-Tonne', to: '907,185 kg' },
        { from: '1 Karat', to: '0,2 g' },
      ],
    },
    faqs: [
      { question: 'Wie viel Kilogramm sind 1 Pfund?', answer: 'Ein Pfund (lb) entspricht exakt 0,453592 Kilogramm oder 453,592 Gramm. Um Pfund in Kilogramm umzurechnen, multiplizieren Sie mit 0,4536.' },
      { question: 'Was ist der Unterschied zwischen einer metrischen Tonne und einer US-Tonne?', answer: 'Eine metrische Tonne (t) entspricht 1.000 kg, eine US-Tonne (short ton) nur 907,185 kg. In Großbritannien gibt es zusätzlich die Long Ton mit 1.016,05 kg.' },
      { question: 'Was ist ein Stone und wo wird es verwendet?', answer: 'Ein Stone (st) entspricht 14 Pfund oder etwa 6,35 Kilogramm. Diese Einheit wird hauptsächlich in Großbritannien und Irland verwendet, um das Körpergewicht anzugeben.' },
    ],
  },

  temperatur: {
    slug: 'temperatur',
    explanation: {
      title: 'Celsius, Fahrenheit und Kelvin: Temperaturskalen erklärt',
      paragraphs: [
        'Die drei wichtigsten Temperaturskalen haben unterschiedliche Ursprünge: Celsius (°C) wurde 1742 von Anders Celsius entwickelt und orientiert sich am Gefrier- (0 °C) und Siedepunkt (100 °C) von Wasser. Fahrenheit (°F) wurde 1724 von Daniel Gabriel Fahrenheit eingeführt – hier gefriert Wasser bei 32 °F und siedet bei 212 °F.',
        'Kelvin (K) ist die SI-Einheit der Temperatur und beginnt beim absoluten Nullpunkt (0 K = −273,15 °C), der kältestmöglichen Temperatur. Kelvin verwendet die gleiche Schrittweite wie Celsius: Eine Differenz von 1 K entspricht einer Differenz von 1 °C.',
        'Im Alltag nutzen fast alle Länder Celsius. Die USA, einige Karibikstaaten und wenige Pazifikinseln verwenden Fahrenheit. In der Wissenschaft ist Kelvin der Standard, da es keine negativen Werte gibt.',
      ],
      formula: '°F = °C × 1,8 + 32 · °C = (°F − 32) ÷ 1,8 · K = °C + 273,15',
    },
    table: {
      title: 'Wichtige Temperatur-Referenzwerte',
      fromLabel: 'Celsius',
      toLabel: 'Fahrenheit',
      rows: [
        { from: '−40 °C', to: '−40 °F' },
        { from: '−18 °C (Gefrierschrank)', to: '0 °F' },
        { from: '0 °C (Gefrierpunkt)', to: '32 °F' },
        { from: '20 °C (Raumtemp.)', to: '68 °F' },
        { from: '37 °C (Körpertemp.)', to: '98,6 °F' },
        { from: '100 °C (Siedepunkt)', to: '212 °F' },
        { from: '180 °C (Backofen)', to: '356 °F' },
        { from: '−273,15 °C (abs. Null)', to: '−459,67 °F' },
      ],
    },
    faqs: [
      { question: 'Wie rechnet man Celsius in Fahrenheit um?', answer: 'Die Formel lautet: °F = °C × 1,8 + 32. Beispiel: 20 °C × 1,8 + 32 = 68 °F. Um Fahrenheit in Celsius umzurechnen: °C = (°F − 32) ÷ 1,8.' },
      { question: 'Warum verwenden die USA Fahrenheit?', answer: 'Die USA haben Fahrenheit beibehalten, weil die Skala 1724 – lange vor der Unabhängigkeitserklärung – eingeführt wurde und im Alltagsleben, in der Industrie und in der Infrastruktur tief verwurzelt ist. Umstellungsversuche scheiterten am öffentlichen Widerstand.' },
      { question: 'Was ist der absolute Nullpunkt?', answer: 'Der absolute Nullpunkt liegt bei 0 Kelvin (−273,15 °C / −459,67 °F). Bei dieser Temperatur kommen alle atomaren Bewegungen praktisch zum Stillstand. Es ist die tiefste physikalisch mögliche Temperatur.' },
      { question: 'Bei welcher Temperatur sind Celsius und Fahrenheit gleich?', answer: 'Celsius und Fahrenheit haben bei −40° den gleichen Wert: −40 °C = −40 °F. Dies ist der einzige Schnittpunkt der beiden Skalen.' },
    ],
  },

  waehrung: {
    slug: 'waehrung',
    explanation: {
      title: 'Wechselkurse verstehen: So funktioniert die Währungsumrechnung',
      paragraphs: [
        'Wechselkurse geben an, wie viel eine Währung in einer anderen wert ist. Sie ändern sich ständig aufgrund von Angebot und Nachfrage auf den Devisenmärkten, beeinflusst von Zinssätzen, Inflation, Handelsbilanzen und politischen Ereignissen.',
        'SmartUmrechnen verwendet Live-Kurse der Europäischen Zentralbank (EZB) über die Frankfurter API. Diese Kurse werden täglich aktualisiert und spiegeln die offiziellen Referenzkurse wider. Für Bankgeschäfte oder Überweisungen können die tatsächlichen Kurse aufgrund von Gebühren und Spreads abweichen.',
        'Der Euro (EUR) ist die gemeinsame Währung von 20 EU-Mitgliedsstaaten der Eurozone. Der US-Dollar (USD) ist die weltweit am meisten gehandelte Währung und dient als globale Reservewährung.',
      ],
    },
    table: {
      title: 'Wichtige Weltwährungen',
      fromLabel: 'Währung',
      toLabel: 'Verwendung',
      rows: [
        { from: 'EUR (€) – Euro', to: '20 EU-Länder (Eurozone)' },
        { from: 'USD ($) – US-Dollar', to: 'USA, globale Reservewährung' },
        { from: 'GBP (£) – Pfund Sterling', to: 'Großbritannien' },
        { from: 'CHF (Fr.) – Schweizer Franken', to: 'Schweiz, Liechtenstein' },
        { from: 'JPY (¥) – Japanischer Yen', to: 'Japan' },
        { from: 'CNY (¥) – Chinesischer Yuan', to: 'Volksrepublik China' },
        { from: 'TRY (₺) – Türkische Lira', to: 'Türkei' },
        { from: 'THB (฿) – Thailändischer Baht', to: 'Thailand' },
      ],
    },
    faqs: [
      { question: 'Wie aktuell sind die Wechselkurse auf SmartUmrechnen?', answer: 'SmartUmrechnen verwendet die offiziellen Referenzkurse der Europäischen Zentralbank (EZB), die an jedem Bankarbeitstag gegen 16:00 Uhr MEZ aktualisiert werden. Am Wochenende gelten die Freitagskurse.' },
      { question: 'Warum unterscheidet sich der Kurs von dem meiner Bank?', answer: 'Banken und Wechselstuben fügen einen Aufschlag (Spread) auf den Referenzkurs hinzu und erheben zusätzlich Gebühren. Der auf SmartUmrechnen angezeigte EZB-Kurs ist der Mittelkurs ohne Gebühren.' },
      { question: 'Was ist eine Reservewährung?', answer: 'Eine Reservewährung ist eine Fremdwährung, die von Zentralbanken als Teil ihrer Währungsreserven gehalten wird. Der US-Dollar ist mit über 58 % Anteil die wichtigste Reservewährung weltweit, gefolgt vom Euro mit ca. 20 %.' },
    ],
  },

  flaeche: {
    slug: 'flaeche',
    explanation: {
      title: 'Flächeneinheiten: Von Quadratmetern bis Acres',
      paragraphs: [
        'Die Fläche beschreibt die Ausdehnung einer zweidimensionalen Form. Im metrischen System ist der Quadratmeter (m²) die Basiseinheit. Für größere Flächen werden Ar (100 m²), Hektar (10.000 m²) und Quadratkilometer (1.000.000 m²) verwendet.',
        'In den USA und Großbritannien werden Flächen häufig in Quadratfuß (sq ft), Acres und Quadratmeilen angegeben. Ein Acre entspricht etwa 4.047 m² und stammt historisch von der Fläche, die ein Ochse an einem Tag pflügen konnte.',
        'Für Immobilien ist in Deutschland der Quadratmeter Standard, in den USA der Quadratfuß. Ein typisches deutsches Einfamilienhaus hat etwa 120–150 m² Wohnfläche, was 1.292–1.615 Quadratfuß entspricht.',
      ],
      formula: '1 Acre = 4.046,86 m² · 1 Hektar = 10.000 m² · 1 sq ft = 0,0929 m²',
    },
    table: {
      title: 'Häufige Flächenumrechnungen',
      fromLabel: 'Von',
      toLabel: 'Entspricht',
      rows: [
        { from: '1 Quadratfuß (sq ft)', to: '0,0929 m²' },
        { from: '1 Quadratyard (sq yd)', to: '0,8361 m²' },
        { from: '1 Acre', to: '4.046,86 m²' },
        { from: '1 Hektar (ha)', to: '10.000 m²' },
        { from: '1 Quadratmeile (sq mi)', to: '2,59 km²' },
        { from: '100 m²', to: '1.076,4 sq ft' },
        { from: '1 Ar', to: '100 m²' },
        { from: '1 km²', to: '247,1 Acres' },
      ],
    },
    faqs: [
      { question: 'Wie groß ist ein Acre in Quadratmetern?', answer: 'Ein Acre entspricht 4.046,86 Quadratmetern oder etwa 0,4047 Hektar. Ein Fußballfeld hat zum Vergleich eine Fläche von etwa 7.140 m² – also knapp 1,8 Acres.' },
      { question: 'Was ist der Unterschied zwischen Ar und Hektar?', answer: 'Ein Ar entspricht 100 Quadratmetern, ein Hektar 10.000 Quadratmetern – also 100 Ar. Der Hektar wird vor allem in der Landwirtschaft und Forstwirtschaft verwendet.' },
      { question: 'Wie rechne ich Quadratmeter in Quadratfuß um?', answer: 'Multiplizieren Sie die Quadratmeter mit 10,7639, um Quadratfuß zu erhalten. Beispiel: 50 m² × 10,7639 = 538,2 sq ft.' },
    ],
  },

  volumen: {
    slug: 'volumen',
    explanation: {
      title: 'Liter, Gallone und Kubik: Volumeneinheiten im Vergleich',
      paragraphs: [
        'Das Volumen misst den dreidimensionalen Raum, den ein Objekt oder eine Flüssigkeit einnimmt. Im metrischen System sind Liter (L) und Milliliter (ml) die gebräuchlichsten Einheiten. Ein Liter entspricht einem Kubikdezimeter (1 dm³ = 1.000 cm³).',
        'Achtung bei Gallonen: Die US-Gallone (3,785 Liter) und die britische Imperial-Gallone (4,546 Liter) sind nicht gleich! Eine britische Gallone ist rund 20 % größer. Das gilt auch für Pints und Quarts – ein britisches Pint (568 ml) ist größer als ein amerikanisches (473 ml).',
        'In der Küche sind besonders Tassen (Cups), Esslöffel (Tablespoons) und Teelöffel (Teaspoons) verbreitet. Auch hier gibt es Unterschiede: Ein US-Cup fasst 236,6 ml, ein metrischer Cup 250 ml. SmartUmrechnen bietet dafür einen eigenen Kochmaß-Umrechner.',
      ],
      formula: '1 US-Gallone = 3,785 L · 1 Imperial-Gallone = 4,546 L · 1 L = 1.000 ml',
    },
    table: {
      title: 'Häufige Volumenumrechnungen',
      fromLabel: 'Von',
      toLabel: 'Entspricht',
      rows: [
        { from: '1 US-Gallone', to: '3,785 Liter' },
        { from: '1 Imperial-Gallone', to: '4,546 Liter' },
        { from: '1 US-Pint', to: '473,2 ml' },
        { from: '1 Imperial-Pint', to: '568,3 ml' },
        { from: '1 Liter', to: '0,2642 US-Gallonen' },
        { from: '1 Kubikfuß', to: '28,317 Liter' },
        { from: '1 Kubikmeter', to: '1.000 Liter' },
        { from: '1 Fluid Ounce (US)', to: '29,574 ml' },
      ],
    },
    faqs: [
      { question: 'Was ist der Unterschied zwischen US-Gallone und Imperial-Gallone?', answer: 'Die US-Gallone fasst 3,785 Liter, die britische Imperial-Gallone 4,546 Liter. Die Imperial-Gallone ist also rund 20 % größer. Dieser Unterschied ist wichtig, wenn man z. B. Benzinverbrauch zwischen USA und UK vergleicht.' },
      { question: 'Wie viel Milliliter hat ein Liter?', answer: 'Ein Liter enthält exakt 1.000 Milliliter. Ein Milliliter entspricht einem Kubikzentimeter (1 ml = 1 cm³).' },
      { question: 'Wie rechne ich Kubikfuß in Liter um?', answer: 'Multiplizieren Sie Kubikfuß mit 28,3168, um Liter zu erhalten. Beispiel: 2 Kubikfuß = 56,63 Liter.' },
    ],
  },

  geschwindigkeit: {
    slug: 'geschwindigkeit',
    explanation: {
      title: 'km/h, mph und Knoten: Geschwindigkeitseinheiten erklärt',
      paragraphs: [
        'Die Geschwindigkeit gibt an, welche Strecke ein Objekt in einer bestimmten Zeit zurücklegt. Im metrischen System sind Kilometer pro Stunde (km/h) und Meter pro Sekunde (m/s) die gängigsten Einheiten. In den USA und Großbritannien werden Meilen pro Stunde (mph) verwendet.',
        'In der Schifffahrt und Luftfahrt werden Knoten (kn) verwendet – eine Seemeile pro Stunde. Ein Knoten entspricht 1,852 km/h. Die Mach-Zahl gibt die Geschwindigkeit relativ zur Schallgeschwindigkeit an: Mach 1 ≈ 1.235 km/h auf Meereshöhe bei 15 °C.',
        'Tempolimits variieren weltweit stark: In Deutschland gibt es auf vielen Autobahnabschnitten kein generelles Tempolimit (Richtgeschwindigkeit 130 km/h). In den USA liegt das Limit je nach Bundesstaat bei 55–85 mph (89–137 km/h).',
      ],
      formula: '1 mph = 1,60934 km/h · 1 kn = 1,852 km/h · 1 m/s = 3,6 km/h',
    },
    table: {
      title: 'Geschwindigkeits-Referenzwerte',
      fromLabel: 'km/h',
      toLabel: 'mph',
      rows: [
        { from: '30 km/h (Stadtzone)', to: '18,6 mph' },
        { from: '50 km/h (Innerorts)', to: '31,1 mph' },
        { from: '100 km/h (Landstraße)', to: '62,1 mph' },
        { from: '120 km/h (Autobahn EU)', to: '74,6 mph' },
        { from: '130 km/h (Richtgeschw. DE)', to: '80,8 mph' },
        { from: '200 km/h', to: '124,3 mph' },
        { from: '1.235 km/h (Mach 1)', to: '767,3 mph' },
        { from: '1 Knoten', to: '1,852 km/h' },
      ],
    },
    faqs: [
      { question: 'Wie rechnet man mph in km/h um?', answer: 'Multiplizieren Sie mph mit 1,60934, um km/h zu erhalten. Beispiel: 60 mph × 1,60934 = 96,56 km/h. Als Faustregel: mph × 1,6 ergibt einen guten Näherungswert.' },
      { question: 'Was sind Knoten und warum werden sie in der Seefahrt verwendet?', answer: 'Ein Knoten (kn) entspricht einer Seemeile pro Stunde (1,852 km/h). Die Einheit wird in der Seefahrt und Luftfahrt verwendet, weil Seemeilen direkt mit den Breitengraden auf Seekarten korrespondieren – eine Seemeile entspricht einer Bogenminute eines Breitengrads.' },
      { question: 'Wie schnell ist Mach 1?', answer: 'Mach 1 ist die Schallgeschwindigkeit und beträgt bei 15 °C auf Meereshöhe etwa 1.235 km/h (343 m/s). Die tatsächliche Geschwindigkeit hängt von Temperatur und Luftdruck ab – in großer Höhe ist die Schallgeschwindigkeit geringer.' },
    ],
  },

  kleidergroessen: {
    slug: 'kleidergroessen',
    explanation: {
      title: 'Kleidergrößen international: EU, US und UK im Vergleich',
      paragraphs: [
        'Kleidergrößen sind leider nicht weltweit standardisiert. Die EU-Größen basieren auf Körpermaßen in Zentimetern, US-Größen verwenden ein eigenständiges Nummernsystem, und UK-Größen weichen sowohl von EU als auch von US ab. Damengrößen unterscheiden sich dabei besonders stark zwischen den Systemen.',
        'In Europa orientieren sich die Größen an Brustumfang und Körpergröße. Die deutsche Größe 38 entspricht etwa einer US-Größe 8 und einer UK-Größe 10. Bei Herren ist die Zuordnung etwas einfacher, aber auch hier gibt es Abweichungen je nach Hersteller.',
        'Wichtig zu beachten: Auch innerhalb eines Größensystems können die tatsächlichen Maße je nach Marke, Schnitt und Kollektion variieren. SmartUmrechnen bietet daher Richtwerte, die als Orientierung dienen. Im Zweifel empfiehlt sich das Nachmessen oder Anprobieren.',
      ],
    },
    table: {
      title: 'Damen-Kleidergrößen im Vergleich',
      fromLabel: 'EU',
      toLabel: 'US / UK',
      rows: [
        { from: 'EU 34 (XS)', to: 'US 4 / UK 6' },
        { from: 'EU 36 (S)', to: 'US 6 / UK 8' },
        { from: 'EU 38 (M)', to: 'US 8 / UK 10' },
        { from: 'EU 40 (L)', to: 'US 10 / UK 12' },
        { from: 'EU 42 (L)', to: 'US 12 / UK 14' },
        { from: 'EU 44 (XL)', to: 'US 14 / UK 16' },
        { from: 'EU 46 (XXL)', to: 'US 16 / UK 18' },
        { from: 'EU 48 (3XL)', to: 'US 18 / UK 20' },
      ],
    },
    faqs: [
      { question: 'Welche US-Größe entspricht einer deutschen 38?', answer: 'Eine deutsche/EU-Größe 38 entspricht in etwa einer US-Größe 8 (Damen) bzw. einer US-Größe 38 (Herren). Beachten Sie, dass die Passform je nach Marke variieren kann.' },
      { question: 'Wie finde ich meine richtige Kleidergröße?', answer: 'Messen Sie Brustumfang, Taillenumfang und Hüftumfang mit einem Maßband. Vergleichen Sie die Werte mit der Größentabelle des jeweiligen Herstellers. Im Zweifel wählen Sie die größere Größe.' },
      { question: 'Sind Kindergrößen international einheitlich?', answer: 'Nein, auch bei Kindergrößen gibt es deutliche Unterschiede. EU-Kindergrößen basieren auf der Körpergröße in Zentimetern (z. B. 110/116 für ca. 5–6 Jahre), während US- und UK-Größen an Altersgruppen orientiert sind.' },
    ],
  },

  schuhgroessen: {
    slug: 'schuhgroessen',
    explanation: {
      title: 'Schuhgrößen: EU, US und UK – so findest du die richtige Größe',
      paragraphs: [
        'Schuhgrößensysteme sind weltweit verschieden. Das EU-System (Pariser Stich) misst in Einheiten von 6,67 mm und beginnt bei Größe 15. Das UK-System basiert auf Barleycorns (8,47 mm) ab Größe 0 für Kinder. Das US-System ähnelt dem UK-System, ist aber um 1–1,5 Größen verschoben.',
        'Die Fußlänge in Zentimetern ist der zuverlässigste Weg, die richtige Schuhgröße zu finden. Stellen Sie sich auf ein Blatt Papier, markieren Sie Ferse und längsten Zeh und messen Sie den Abstand. Addieren Sie 1–1,5 cm für Bewegungsspielraum.',
        'Tipp: Füße werden im Laufe des Tages länger und breiter. Schuhe sollten daher nachmittags oder abends anprobiert werden. Zwischen linkem und rechtem Fuß kann bis zu einer halben Größe Unterschied bestehen.',
      ],
    },
    table: {
      title: 'Häufige Schuhgrößen-Umrechnungen (Herren)',
      fromLabel: 'EU',
      toLabel: 'US / UK / cm',
      rows: [
        { from: 'EU 40', to: 'US 7,5 / UK 6,5 / 25,5 cm' },
        { from: 'EU 41', to: 'US 8 / UK 7 / 26 cm' },
        { from: 'EU 42', to: 'US 9 / UK 8 / 27 cm' },
        { from: 'EU 43', to: 'US 9,5 / UK 8,5 / 27,5 cm' },
        { from: 'EU 44', to: 'US 10,5 / UK 9,5 / 28,5 cm' },
        { from: 'EU 45', to: 'US 11 / UK 10 / 29 cm' },
        { from: 'EU 46', to: 'US 12 / UK 11 / 30 cm' },
        { from: 'EU 47', to: 'US 13 / UK 12 / 30,5 cm' },
      ],
    },
    faqs: [
      { question: 'Wie messe ich meine Schuhgröße richtig?', answer: 'Stellen Sie sich auf ein Blatt Papier und markieren Sie den hintersten Punkt der Ferse und die Spitze des längsten Zehs. Messen Sie den Abstand in Zentimetern und addieren Sie 1–1,5 cm Spielraum. Nutzen Sie dann unseren Umrechner für die passende EU/US/UK-Größe.' },
      { question: 'Was ist der Unterschied zwischen US- und UK-Schuhgrößen?', answer: 'US-Schuhgrößen sind bei Herren um etwa 0,5–1 Größe höher als UK-Größen. Bei Damen ist der Unterschied größer: Eine UK 6 entspricht etwa einer US 8. Beide Systeme verwenden unterschiedliche Nullpunkte.' },
      { question: 'Fallen Kinderschuhgrößen anders aus?', answer: 'Ja, Kinderschuhgrößen folgen einem anderen System. EU-Kindergrößen reichen von 18 bis 35 und überlappen teilweise mit den Erwachsenengrößen ab EU 36. US- und UK-Kindergrößen starten bei 0 und gehen bis 13, danach beginnt die Erwachsenenzählung bei 1.' },
    ],
  },

  kochmasse: {
    slug: 'kochmasse',
    explanation: {
      title: 'Kochmaße umrechnen: Cups, Esslöffel und Milliliter',
      paragraphs: [
        'Amerikanische Rezepte verwenden volumetrische Maße wie Cups (Tassen), Tablespoons (Esslöffel) und Teaspoons (Teelöffel), während europäische Rezepte typischerweise Gewichtsangaben in Gramm bevorzugen. Das kann beim Nachkochen internationaler Rezepte für Verwirrung sorgen.',
        'Ein US-Cup fasst 236,6 ml und ist damit etwas kleiner als der metrische Cup mit 250 ml. Ein Tablespoon (Esslöffel) entspricht 14,8 ml (US) bzw. 15 ml (metrisch), ein Teaspoon (Teelöffel) 4,9 ml (US) bzw. 5 ml (metrisch).',
        'Besonders bei Mehl, Zucker und anderen trockenen Zutaten ist die Umrechnung von Cups in Gramm nicht linear, da die Dichte variiert. 1 Cup Mehl wiegt etwa 125 g, 1 Cup Zucker hingegen 200 g. SmartUmrechnen bietet dafür spezielle Küchenumrechnungen.',
      ],
    },
    table: {
      title: 'Häufige Küchenumrechnungen',
      fromLabel: 'US-Maß',
      toLabel: 'Metrisch',
      rows: [
        { from: '1 Cup', to: '236,6 ml' },
        { from: '1 Tablespoon (EL)', to: '14,8 ml' },
        { from: '1 Teaspoon (TL)', to: '4,9 ml' },
        { from: '1 Fluid Ounce', to: '29,6 ml' },
        { from: '1 Cup Mehl', to: '≈ 125 g' },
        { from: '1 Cup Zucker', to: '≈ 200 g' },
        { from: '1 Cup Butter', to: '≈ 227 g' },
        { from: '1 Stick Butter', to: '≈ 113 g (½ Cup)' },
      ],
    },
    faqs: [
      { question: 'Wie viel Gramm ist 1 Cup Mehl?', answer: 'Ein US-Cup Allzweckmehl (All-Purpose Flour) wiegt etwa 125 Gramm. Bei Vollkornmehl sind es ca. 130 g, bei Mandelmehl ca. 96 g. Die genaue Menge hängt davon ab, wie locker das Mehl eingefüllt wird.' },
      { question: 'Was ist der Unterschied zwischen einem metrischen und einem US-Cup?', answer: 'Ein US-Cup fasst 236,6 ml, ein metrischer Cup (z. B. in Australien und Neuseeland) 250 ml. Der Unterschied von etwa 5,7 % kann bei größeren Mengen spürbar sein.' },
      { question: 'Wie rechne ich Esslöffel in Teelöffel um?', answer: 'Ein Esslöffel (Tablespoon) entspricht exakt 3 Teelöffeln (Teaspoons). Ein US-Esslöffel fasst 14,8 ml, ein Teelöffel 4,9 ml.' },
    ],
  },

  vitamine: {
    slug: 'vitamine',
    explanation: {
      title: 'Was sind IU (Internationale Einheiten) und warum gibt es sie nur für bestimmte Vitamine?',
      paragraphs: [
        'Internationale Einheiten (IU oder IE) sind eine standardisierte Maßeinheit für die biologische Wirksamkeit von Substanzen wie Vitaminen und Hormonen. Im Gegensatz zu Gewichtsangaben (mg, µg) berücksichtigen IU die tatsächliche biologische Aktivität im Körper. Das ist wichtig, weil verschiedene Formen desselben Vitamins unterschiedlich stark wirken können.',
        'IU werden nur für Vitamine verwendet, die in mehreren chemischen Formen vorkommen und deren biologische Aktivität sich je nach Form unterscheidet. Das betrifft Vitamin D (D2 vs. D3), Vitamin A (Retinol vs. Beta-Carotin) und Vitamin E (natürliches vs. synthetisches Alpha-Tocopherol). Für Vitamin C existiert zwar eine IU-Definition, sie wird aber kaum verwendet, da Vitamin C fast immer als reine Ascorbinsäure vorliegt.',
        'Ein konkretes Beispiel: 1 IU Vitamin D3 (Cholecalciferol) entspricht 0,025 µg, während 1 IU Vitamin A als Retinol 0,3 µg, aber als Beta-Carotin 0,6 µg entspricht – weil Beta-Carotin vom Körper nur halb so effizient in aktives Vitamin A umgewandelt wird.',
        'Warum bietet SmartUmrechnen nicht für alle Vitamine eine IU-Umrechnung an? Weil die meisten B-Vitamine und Mineralstoffe nur in einer relevanten chemischen Form auftreten. Dort reicht die einfache Gewichtsangabe in mg oder µg völlig aus. IU wären hier überflüssig und würden nur verwirren.',
      ],
    },
    table: {
      title: 'Vitamin-Umrechnungsfaktoren (IU ↔ µg)',
      fromLabel: 'Vitamin',
      toLabel: 'Umrechnung',
      rows: [
        { from: 'Vitamin D3 (Cholecalciferol)', to: '1 IU = 0,025 µg' },
        { from: 'Vitamin D2 (Ergocalciferol)', to: '1 IU = 0,025 µg' },
        { from: 'Vitamin A (Retinol)', to: '1 IU = 0,3 µg' },
        { from: 'Vitamin A (β-Carotin)', to: '1 IU = 0,6 µg' },
        { from: 'Vitamin E (nat. α-Tocopherol)', to: '1 IU = 0,67 mg' },
        { from: 'Vitamin E (synth. dl-α-Tocopherol)', to: '1 IU = 0,9 mg' },
        { from: 'Vitamin C (Ascorbinsäure)', to: '1 IU = 50 µg (selten verwendet)' },
        { from: 'Empfehlung Vitamin D (Erwachsene)', to: '800 IU = 20 µg/Tag' },
      ],
    },
    faqs: [
      { question: 'Was sind Internationale Einheiten (IU)?', answer: 'Internationale Einheiten (IU, auch IE) messen die biologische Wirksamkeit einer Substanz, nicht ihr Gewicht. Sie werden verwendet, wenn verschiedene chemische Formen eines Vitamins unterschiedlich stark wirken. 1 IU entspricht je nach Vitamin einer unterschiedlichen Menge in µg oder mg.' },
      { question: 'Warum gibt es IU nur für die Vitamine A, D und E?', answer: 'IU werden nur für Vitamine benötigt, die in mehreren Formen mit unterschiedlicher biologischer Aktivität vorkommen. Vitamin D existiert als D2 und D3, Vitamin A als Retinol und Beta-Carotin, Vitamin E als natürliches und synthetisches Tocopherol. Bei B-Vitaminen und Mineralstoffen gibt es diese Unterschiede nicht, weshalb einfache Gewichtsangaben ausreichen.' },
      { question: 'Wie viel µg Vitamin D sind 1.000 IU?', answer: '1.000 IU Vitamin D (sowohl D2 als auch D3) entsprechen 25 Mikrogramm (µg). Die Deutsche Gesellschaft für Ernährung empfiehlt für Erwachsene 800 IU (20 µg) pro Tag bei fehlender Eigenproduktion durch Sonnenlicht.' },
      { question: 'Ist natürliches Vitamin E besser als synthetisches?', answer: 'Natürliches Vitamin E (d-alpha-Tocopherol) hat eine höhere biologische Aktivität als synthetisches (dl-alpha-Tocopherol). Daher enthält 1 IU natürliches Vitamin E weniger Milligramm (0,67 mg) als 1 IU synthetisches (0,9 mg) – der Körper kann die natürliche Form besser verwerten.' },
    ],
  },

  datengroessen: {
    slug: 'datengroessen',
    explanation: {
      title: 'Byte, Kilobyte und Gigabyte: Digitale Speichereinheiten',
      paragraphs: [
        'Die kleinste digitale Informationseinheit ist das Bit (0 oder 1). Acht Bits ergeben ein Byte. Darauf aufbauend gibt es zwei verschiedene Systeme: das dezimale (SI) und das binäre (IEC). Im SI-System ist 1 Kilobyte = 1.000 Bytes, im binären System 1 Kibibyte = 1.024 Bytes.',
        'Festplattenhersteller verwenden das SI-System (dezimal), weshalb eine „500 GB"-Festplatte nur etwa 465 GiB (binär) bietet. Betriebssysteme zeigten traditionell binäre Werte an, was zu der bekannten Diskrepanz bei Speicherangaben führte.',
        'Für Internetgeschwindigkeiten werden Bits pro Sekunde (bps) verwendet, nicht Bytes. Ein „100 Mbit/s"-Anschluss überträgt also maximal 12,5 MB pro Sekunde (100 ÷ 8 = 12,5). Die Unterscheidung zwischen Bit und Byte ist hier besonders wichtig.',
      ],
      formula: '1 Byte = 8 Bit · 1 KB = 1.000 B · 1 MB = 1.000 KB · 1 GB = 1.000 MB',
    },
    table: {
      title: 'Datengrößen-Referenz',
      fromLabel: 'Einheit',
      toLabel: 'Entspricht',
      rows: [
        { from: '1 Kilobyte (KB)', to: '1.000 Bytes' },
        { from: '1 Megabyte (MB)', to: '1.000.000 Bytes' },
        { from: '1 Gigabyte (GB)', to: '1.000.000.000 Bytes' },
        { from: '1 Terabyte (TB)', to: '1.000 GB' },
        { from: '1 Petabyte (PB)', to: '1.000 TB' },
        { from: '1 Kibibyte (KiB)', to: '1.024 Bytes' },
        { from: '1 Mebibyte (MiB)', to: '1.048.576 Bytes' },
        { from: '1 Gibibyte (GiB)', to: '1.073.741.824 Bytes' },
      ],
    },
    faqs: [
      { question: 'Warum hat meine Festplatte weniger Speicher als angegeben?', answer: 'Festplattenhersteller rechnen dezimal (1 GB = 1.000.000.000 Bytes), während Betriebssysteme oft binär rechnen (1 GiB = 1.073.741.824 Bytes). Dadurch zeigt eine „500 GB"-Festplatte im System nur ca. 465 GiB an – der Speicher ist aber tatsächlich vorhanden.' },
      { question: 'Was ist der Unterschied zwischen Megabit und Megabyte?', answer: 'Ein Megabyte (MB) besteht aus 8 Megabit (Mbit). Internetgeschwindigkeiten werden in Mbit/s angegeben, Dateigrößen in MB. Ein 100 Mbit/s-Anschluss kann also maximal 12,5 MB pro Sekunde herunterladen.' },
      { question: 'Was ist ein Petabyte?', answer: 'Ein Petabyte (PB) sind 1.000 Terabyte oder eine Billiarde Bytes (10¹⁵). Zum Vergleich: Netflix speichert schätzungsweise 60 Petabyte an Videodaten. Die Library of Congress umfasst etwa 15 Petabyte an digitalen Inhalten.' },
    ],
  },

  kraftstoffverbrauch: {
    slug: 'kraftstoffverbrauch',
    explanation: {
      title: 'l/100 km und mpg: Kraftstoffverbrauch richtig vergleichen',
      paragraphs: [
        'In Europa wird der Kraftstoffverbrauch in Litern pro 100 Kilometer (l/100 km) angegeben – je niedriger, desto sparsamer. In den USA und Großbritannien wird stattdessen Miles per Gallon (mpg) verwendet – hier bedeutet ein höherer Wert weniger Verbrauch.',
        'Achtung: US-mpg und UK-mpg sind nicht gleich! Die US-Gallone (3,785 L) ist kleiner als die britische Imperial-Gallone (4,546 L). Ein Auto mit 35 UK-mpg verbraucht also weniger als eines mit 35 US-mpg. SmartUmrechnen unterscheidet zwischen beiden Systemen.',
        'Die Umrechnung ist nicht linear: Ein Sprung von 15 auf 10 l/100 km (33 % weniger) spart mehr Kraftstoff als ein Sprung von 5 auf 3,3 l/100 km (ebenfalls 33 % weniger), weil die absolute Einsparung bei höherem Verbrauch größer ist.',
      ],
      formula: 'l/100 km = 235,215 ÷ US-mpg · US-mpg = 235,215 ÷ l/100 km',
    },
    table: {
      title: 'Verbrauchsvergleich',
      fromLabel: 'l/100 km',
      toLabel: 'US mpg / UK mpg',
      rows: [
        { from: '3 l/100 km (Hybrid)', to: '78,4 mpg (US) / 94,2 mpg (UK)' },
        { from: '5 l/100 km (sparsam)', to: '47,0 mpg (US) / 56,5 mpg (UK)' },
        { from: '7 l/100 km (Durchschnitt)', to: '33,6 mpg (US) / 40,4 mpg (UK)' },
        { from: '9 l/100 km', to: '26,1 mpg (US) / 31,4 mpg (UK)' },
        { from: '12 l/100 km (SUV)', to: '19,6 mpg (US) / 23,5 mpg (UK)' },
        { from: '15 l/100 km (Sportwagen)', to: '15,7 mpg (US) / 18,8 mpg (UK)' },
      ],
    },
    faqs: [
      { question: 'Wie rechne ich l/100 km in mpg um?', answer: 'Teilen Sie 235,215 durch den Wert in l/100 km für US-mpg, oder 282,481 für UK-mpg. Beispiel: 7 l/100 km = 235,215 ÷ 7 = 33,6 US-mpg.' },
      { question: 'Was ist der Unterschied zwischen US-mpg und UK-mpg?', answer: 'US-mpg basieren auf der US-Gallone (3,785 L), UK-mpg auf der Imperial-Gallone (4,546 L). Ein Fahrzeug mit 30 UK-mpg hat daher einen niedrigeren Verbrauch als eines mit 30 US-mpg. UK-mpg-Werte sind immer etwa 20 % höher.' },
      { question: 'Was ist ein guter Kraftstoffverbrauch?', answer: 'Für einen Benziner gilt ein Verbrauch unter 6 l/100 km als sparsam, unter 5 l/100 km als sehr sparsam. Diesel liegen typischerweise 1–2 l/100 km niedriger. Hybride schaffen oft 3–4 l/100 km.' },
    ],
  },

  druck: {
    slug: 'druck',
    explanation: {
      title: 'Bar, PSI und Pascal: Druckeinheiten verstehen',
      paragraphs: [
        'Druck ist die Kraft pro Fläche. Die SI-Einheit ist Pascal (Pa), benannt nach dem französischen Mathematiker Blaise Pascal. Da Pascal sehr klein ist (der Luftdruck beträgt ca. 101.325 Pa), werden im Alltag oft größere Einheiten verwendet: Bar (100.000 Pa), Millibar/Hektopascal (Wetter) oder PSI (Reifendruck in den USA).',
        'PSI (Pounds per Square Inch) ist die wichtigste Druckeinheit im angloamerikanischen Raum. In den USA wird der Reifendruck in PSI angegeben, in Europa in Bar. Die Umrechnung: 1 Bar ≈ 14,5 PSI. Ein typischer Autoreifen hat 2,0–2,5 Bar (29–36 PSI).',
        'In der Wissenschaft und Medizin werden mmHg (Millimeter Quecksilbersäule, auch Torr) verwendet, z. B. für Blutdruck: Ein normaler Blutdruck beträgt etwa 120/80 mmHg. In der Meteorologie ist Hektopascal (hPa) der Standard: normaler Luftdruck ≈ 1.013 hPa.',
      ],
      formula: '1 Bar = 100.000 Pa = 14,5038 PSI · 1 atm = 101.325 Pa = 1,01325 Bar',
    },
    table: {
      title: 'Häufige Druckumrechnungen',
      fromLabel: 'Von',
      toLabel: 'Entspricht',
      rows: [
        { from: '1 Bar', to: '14,5038 PSI' },
        { from: '1 PSI', to: '0,06895 Bar' },
        { from: '1 Atmosphäre (atm)', to: '1,01325 Bar' },
        { from: '1 atm', to: '101.325 Pa' },
        { from: '1 atm', to: '760 mmHg (Torr)' },
        { from: '2,3 Bar (Reifen)', to: '33,4 PSI' },
        { from: '120 mmHg (Blutdruck)', to: '0,158 atm' },
        { from: '1.013 hPa (Normaldruck)', to: '1 atm' },
      ],
    },
    faqs: [
      { question: 'Wie rechne ich Bar in PSI um?', answer: 'Multiplizieren Sie Bar mit 14,5038, um PSI zu erhalten. Beispiel: 2,5 Bar × 14,5038 = 36,3 PSI. Als Faustregel: Bar × 14,5 ergibt einen guten Näherungswert.' },
      { question: 'Was ist der normale Luftdruck?', answer: 'Der Normaldruck auf Meereshöhe beträgt 1 Atmosphäre (atm), was 1,01325 Bar, 101.325 Pascal oder 1.013,25 Hektopascal entspricht. In der Wettervorhersage wird Luftdruck in hPa (Hektopascal) angegeben.' },
      { question: 'Wie viel PSI brauchen Autoreifen?', answer: 'Die meisten PKW-Reifen benötigen 2,0–2,5 Bar (29–36 PSI). Der genaue Wert steht in der Bedienungsanleitung oder auf einem Aufkleber im Türrahmen der Fahrerseite. Zu wenig Druck erhöht den Verschleiß und Spritverbrauch.' },
    ],
  },

  leistung: {
    slug: 'leistung',
    explanation: {
      title: 'Watt, PS und Horsepower: Leistungseinheiten erklärt',
      paragraphs: [
        'Die Leistung gibt an, wie viel Energie pro Zeiteinheit umgewandelt wird. Die SI-Einheit ist Watt (W), benannt nach dem schottischen Erfinder James Watt. Ein Watt entspricht einem Joule pro Sekunde. Im Alltag begegnen uns Kilowatt (kW) bei Elektrogeräten und Motoren.',
        'Die Pferdestärke (PS) wurde von James Watt eingeführt, um die Leistung seiner Dampfmaschinen anschaulich mit der Zugkraft von Pferden zu vergleichen. In Deutschland und vielen europäischen Ländern wird die Motorleistung von Autos traditionell in PS angegeben, obwohl die offizielle EU-Einheit Kilowatt ist. 1 PS = 0,7355 kW.',
        'Die britisch-amerikanische Horsepower (hp) unterscheidet sich leicht von der metrischen Pferdestärke: 1 hp = 0,7457 kW, während 1 PS = 0,7355 kW. Der Unterschied ist gering (ca. 1,4 %), kann aber bei hohen Leistungswerten auffallen.',
      ],
      formula: '1 PS = 735,5 W = 0,7355 kW · 1 hp = 745,7 W · 1 kW = 1,3596 PS',
    },
    table: {
      title: 'Leistungs-Referenzwerte',
      fromLabel: 'PS',
      toLabel: 'kW / hp',
      rows: [
        { from: '75 PS (Kleinwagen)', to: '55,2 kW / 74,0 hp' },
        { from: '100 PS', to: '73,5 kW / 98,6 hp' },
        { from: '150 PS (Mittelklasse)', to: '110,3 kW / 147,9 hp' },
        { from: '200 PS', to: '147,1 kW / 197,2 hp' },
        { from: '300 PS (Sportwagen)', to: '220,7 kW / 295,8 hp' },
        { from: '500 PS', to: '367,8 kW / 493,0 hp' },
        { from: '1.000 PS (Hypercar)', to: '735,5 kW / 986,0 hp' },
        { from: '1 kW (Elektrogerät)', to: '1,36 PS' },
      ],
    },
    faqs: [
      { question: 'Was ist der Unterschied zwischen PS und Horsepower (hp)?', answer: 'PS (Pferdestärke) und Horsepower (hp) sind ähnlich, aber nicht identisch. 1 PS = 735,5 W, während 1 hp = 745,7 W. Der Unterschied beträgt ca. 1,4 %. PS wird in Europa verwendet, hp in den USA und UK.' },
      { question: 'Wie rechne ich PS in kW um?', answer: 'Multiplizieren Sie PS mit 0,7355, um Kilowatt zu erhalten. Beispiel: 150 PS × 0,7355 = 110,3 kW. Umgekehrt: kW × 1,3596 = PS.' },
      { question: 'Warum werden Autos in Europa immer noch in PS angegeben?', answer: 'Obwohl die EU seit 2010 Kilowatt als offizielle Leistungseinheit vorschreibt, dürfen Hersteller PS weiterhin zusätzlich angeben. Da PS in der Bevölkerung tief verankert ist und höhere Zahlen liefert (1 kW = 1,36 PS), wird es von der Automobilindustrie weiterhin bevorzugt in der Werbung verwendet.' },
    ],
  },
}

// Homepage FAQ
export const homeFAQs: FAQ[] = [
  { question: 'Ist SmartUmrechnen kostenlos?', answer: 'Ja, SmartUmrechnen ist vollständig kostenlos und ohne Registrierung nutzbar. Alle 15 Umrechner stehen ohne Einschränkungen zur Verfügung.' },
  { question: 'Funktioniert SmartUmrechnen auch offline?', answer: 'Ja, SmartUmrechnen kann als Progressive Web App (PWA) auf dem Homescreen installiert werden und funktioniert dann auch ohne Internetverbindung. Ausnahme: Für Live-Währungskurse ist eine Verbindung nötig.' },
  { question: 'Wie aktuell sind die Wechselkurse?', answer: 'Die Wechselkurse stammen von der Europäischen Zentralbank (EZB) und werden an jedem Bankarbeitstag aktualisiert. Am Wochenende gelten die Freitagskurse.' },
  { question: 'Welche Einheiten werden unterstützt?', answer: 'SmartUmrechnen bietet 15 Umrechner-Kategorien: Länge, Gewicht, Temperatur, Währung, Fläche, Volumen, Geschwindigkeit, Kleidergrößen, Schuhgrößen, Kochmaße, Vitamine, Datengrößen, Kraftstoffverbrauch, Druck und Leistung.' },
  { question: 'Kann ich SmartUmrechnen auf meinem Handy installieren?', answer: 'Ja! Auf iOS öffne Safari, tippe auf das Teilen-Symbol und wähle „Zum Home-Bildschirm". Auf Android tippe auf das Dreipunkt-Menü und wähle „Zum Startbildschirm hinzufügen" oder „App installieren".' },
]

// Häufige Umrechnungen für die Startseite
export const popularConversions = [
  { from: '1 Meile', to: '1,609 km', slug: 'laenge' },
  { from: '1 Pfund (lb)', to: '453,6 g', slug: 'gewicht' },
  { from: '1 Zoll (in)', to: '2,54 cm', slug: 'laenge' },
  { from: '0 °C', to: '32 °F', slug: 'temperatur' },
  { from: '1 Gallone (US)', to: '3,785 L', slug: 'volumen' },
  { from: '100 mph', to: '160,9 km/h', slug: 'geschwindigkeit' },
  { from: '1 Acre', to: '4.047 m²', slug: 'flaeche' },
  { from: '1 PS', to: '0,736 kW', slug: 'leistung' },
  { from: '1 Bar', to: '14,5 PSI', slug: 'druck' },
  { from: '1 Cup', to: '236,6 ml', slug: 'kochmasse' },
]
