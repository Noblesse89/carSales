import _ from 'lodash';

const mockData = {
	modelMark: [
		{
			id: 1,
			name: 'Audi',
			models: [
				{ id: 1, name: 'A3' },
				{ id: 2, name: 'A5' },
				{ id: 2, name: 'Q7' }
			]
		},
		{
			id: 2,
			name: 'BMW',
			models: [
				{ id: 1, name: 'F25 X3' },
				{ id: 2, name: 'X5' },
				{ id: 3, name: 'X6' }
			]
		},
		{
			id: 3,
			name: 'Mercedes-Benz',
			models: [
				{ id: 1, name: 'SL-Class' },
				{ id: 2, name: 'CLA-Class' }
			]
		}
	],
	fuelTypes: ['Benzin', 'Dizel', 'Electro', 'Hybrid', 'Gas LPG/CNG', 'Andere'], // Kraftstoffart
	transmission: ['Schaltgetriebe', 'Halbautomatik', 'Automatik'], //Getriebe
	power: [{id: 1, name: 50},{id: 2, name: 60},{ id:3, name: 70}],  // Liestung
	powerKw: [{id: 1, name: parseInt(50*1.3596)},{id: 2, name: parseInt(60*1.3596)},{ id:3, name: parseInt(70*1.3596)}],
	locations: ['Garching bei München', 'Nürnberg', 'Frankfurt auf Main', 'Berlin', 'Eching bei München'],
	availableTypes: [
		{ id: 'cabrio', name: 'Cabrio' },
		{ id: 'suv', name: 'Geländewagen' },
		{ id: 'mini', name: 'Klienwagen' },
		{ id: 'combi', name: 'Kombi' },
		{ id: 'limo', name: 'Limousine' },
		{ id: 'coupe', name: 'Coupé' },
		{ id: 'van', name: 'Van/Minibus' },
		{ id: 'transorter', name: 'Transporter' },
		{ id: 'other', name: 'Andere' }
	],
	numberOfSeats: _.range(2, 15).map((item, index) => ({id: index, name: item})), // Anzahl sitzplätze
	numberOfDoors: _.range(2, 8).map((item, index) => ({id: index, name: item})),// Anzahl türen
	availableColors: [
		{ id: 'black', name: 'Schwarz' },
		{ id: 'grey', name: 'Grau' },
		{ id: 'blue', name: 'Blau' },
		{ id: 'green', name: 'Grün' },
		{ id: 'brown', name: 'Braun' },
		{ id: 'beige', name: 'Beige' },
		{ id: 'yellow', name: 'Geld' },
		{ id: 'gold', name: 'Gold' },
		{ id: 'orange', name: 'Orange' },
		{ id: 'red', name: 'Rot' },
		{ id: 'purple', name: 'Violet' },
		{ id: 'silver', name: 'Silver' },
		{ id: 'white', name: 'Weiß' },
		{ id: 'metallic', name: 'Metallic' }
	],
	airCondition: ['Klimaanlage', 'Klimaautomatik'], //Klimatisierung
	interionDecorations: [
		'Bluetooth',
		'Bordercomputer',
		'Head-up Display',
		'Isofix (Kindersitzbefestigung)',
		'Multifunktionslenkrad',
		'Navigationsystem',
		'Regensensor',
		'Schiebedach',
		'Skisack',
		'Standheizung',
		'Start/Stopp-Automatik',
		'Tempomat'
	],
	electricalAdjustableSits: ['vorne', 'hinte'],
	heatedSits: ['vorne', 'hinte'],
	security: [
		'Allradantrieb',
		'ESP',
		'Kurvenlicht',
		'Lichtsensor',
		'Nebelscheinwerfer',
		'Tagfahrlicht',
		'Traktionskontrolle',
		'Xenonscheinwerfer'
	], // sicherheit
	sport: ['Sportfahrwerk', 'Sportpaket', 'Sportsitze'],
	extras: ['Anhängerkupplung', 'Leichtmetallfelgen', 'Panorama-Dach'],
	decor: ['Vollleder', 'Tielleder', 'Stoff', 'Alcantara', 'Andere'], // innenausstattung
	veihicleHistory: [
		'Nichtraucher-Fahrzeug',
		'Scheckheftgepflegt',
		'Jahreswagen',
		'Tageszulassung',
		'Gebrauchtwagen'
	] // Fahrzeughistorie
};
export default mockData;