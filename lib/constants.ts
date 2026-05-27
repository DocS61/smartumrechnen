// Grammatisch korrekte deutsche Kompositanamen für alle Umrechner-Kategorien
export const COMPOUND_NAMES: Record<string, string> = {
  laenge: 'Längen-Umrechner',
  gewicht: 'Gewichts-Umrechner',
  temperatur: 'Temperatur-Umrechner',
  waehrung: 'Währungs-Umrechner',
  flaeche: 'Flächen-Umrechner',
  volumen: 'Volumen-Umrechner',
  geschwindigkeit: 'Geschwindigkeits-Umrechner',
  kleidergroessen: 'Kleidergrößen-Umrechner',
  schuhgroessen: 'Schuhgrößen-Umrechner',
  kochmasse: 'Kochmaß-Umrechner',
  vitamine: 'Vitamin-Umrechner',
  datengroessen: 'Datengrößen-Umrechner',
  kraftstoffverbrauch: 'Kraftstoffverbrauchs-Umrechner',
  druck: 'Druck-Umrechner',
  leistung: 'Leistungs-Umrechner',
}

// Verwandte Kategorien-Gruppen für intelligentere "Weitere Umrechner"-Vorschläge
export const RELATED_CATEGORIES: Record<string, string[]> = {
  laenge: ['flaeche', 'geschwindigkeit', 'volumen', 'druck'],
  gewicht: ['kochmasse', 'vitamine', 'druck', 'leistung'],
  temperatur: ['leistung', 'druck', 'kraftstoffverbrauch', 'geschwindigkeit'],
  waehrung: ['kraftstoffverbrauch', 'gewicht', 'kochmasse', 'datengroessen'],
  flaeche: ['laenge', 'volumen', 'geschwindigkeit', 'druck'],
  volumen: ['kochmasse', 'laenge', 'flaeche', 'kraftstoffverbrauch'],
  geschwindigkeit: ['laenge', 'kraftstoffverbrauch', 'leistung', 'temperatur'],
  kleidergroessen: ['schuhgroessen', 'laenge', 'gewicht', 'waehrung'],
  schuhgroessen: ['kleidergroessen', 'laenge', 'gewicht', 'waehrung'],
  kochmasse: ['volumen', 'gewicht', 'vitamine', 'temperatur'],
  vitamine: ['gewicht', 'kochmasse', 'datengroessen', 'temperatur'],
  datengroessen: ['leistung', 'geschwindigkeit', 'laenge', 'volumen'],
  kraftstoffverbrauch: ['geschwindigkeit', 'waehrung', 'volumen', 'leistung'],
  druck: ['leistung', 'temperatur', 'gewicht', 'laenge'],
  leistung: ['druck', 'geschwindigkeit', 'temperatur', 'datengroessen'],
}
