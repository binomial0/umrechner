function Unit(name, abbrev, size, plural) {
  this.name = name;
  this.abbrev = abbrev;
  this.size = size;
  this.plural = (plural === undefined) ? name : plural;
}


var teta = 1.20227;
var piet = 0.335671;
var bris = 0.36516;

unitgroups = [
  {
    type: "time",
    units: [
      new Unit('Sekunde', 's', 1, 'Sekunden'),
      new Unit('Minute', 'min', 60, 'Minuten'),
      new Unit('Stunde', 'h', 60*60, 'Stunden'),
      new Unit('Tag', 'd', 24*60*60, 'Tage'),
      new Unit('Teta', 't', teta, 'Tetas'),
      new Unit('Tride', 'tri', 16*teta, 'Tetas'),
      new Unit('Deu', 'deu', 16*16*teta, 'Deuter'),
      new Unit('Prot', 'Pr', 16*16*16*teta, 'Protos'),
      new Unit('Sol', 'S', 16*16*16*16*teta, 'Sol')
    ]
  },
  {
    type: "length",
    units: [
      new Unit('Meter', 'm', 1),
      new Unit('Kilometer', 'km', 1000),
      new Unit('Zentimeter', 'cm', 0.01),
      new Unit('Millimeter', 'mm', 0.001),
      new Unit('Piet', 'p', piet),
      new Unit('Myle', 'my', 1024*piet, 'Mylen'),
      new Unit('Gyle', 'gy', 1024*1024*piet, 'Gylen')
    ]
  },
  {
    type: "mass",
    units: [
      new Unit('Kilogramm', 'kg', 1),
      new Unit('Gramm', 'g', 0.001),
      new Unit('Bris', 'b', bris),
      new Unit('Fas', 'f', 1024*bris)
    ]
  },
  {
    type: "energy",
    units: [
      new Unit('Joule', 'J', 1),
      new Unit('Jaul', 'j', 0.02846)
    ]
  },
  {
    type: "power",
    units: [
      new Unit('Watt', 'W', 1),
      new Unit('Heul', 'H', 0.02368)
    ]
  },
  {
    type: "charge",
    units: [
      new Unit('Coulomb', 'C', 1),
      new Unit('Zirr', 'Z', 0.00844671)
    ]
  },
  {
    type: "current",
    units: [
      new Unit('Ampere', 'A', 1),
      new Unit('Tell', 'T', 0.0070256)
    ]
  },
  {
    type: "voltage",
    units: [
      new Unit('Volt', 'V', 1),
      new Unit('Colt', 'c', 3.36992)
    ]
  },
  {
    type: "temperature",
    units: [
      new Unit('Kelvin', 'K', 1),
      new Unit('Ono', 'o', 0.87329)
    ]
  },
  {
    type: "chemical_amount",
    units: [
      new Unit('Mol', 'mol', 1),
      new Unit('Durr', 'dur', 1.00376)
    ]
  }
];
