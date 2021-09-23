export function XF() {


	var sums = ["muerto", "ataúd",
		"foso",
		"cementerio",
		"tiempo",
		"suelo",
		"ritual",
		"pensamiento",
		"destino", "tiempo", "principio",
		"mundo"
	];

	var sump = ["deudos",

		"rituales",
		"muertos",
		"cementerios",
		"finales",
		"mundos"];


	var sufs = [
		"muerte",
		"vida",
		"eternidad", "morada"];

	var sufp = [
		"urnas",
		"pestañas",
		"nalgas",
		"rodillas",
		"venas",
		"lágrimas",
		"manos",
		"uñas",

		"palabras", "piernas", "mitades",
		"partes", "miradas", "hojas",
		"ramas", "calles", "veredas",
		"esquinas", "vidrieras",
		"luces", "ventanas", "avenidas"
	];



	var arms = ["el", "el", "el", "el", "el", "el",
		"el", "el", "mi", "tu", "este", "nuestro", "su"];

	var arfs = ["la", "mi", "tu", "esta", "nuestra",
		"la", "la", "la", "la", "la", "la", "la", "su"];

	var conj = ["de", "de", "en", "en", "en", "dentro de",
		"cerca de", "busca", "y", "encuentra", "y", "y",
		"come", "toma", "lastima", "acaricia",
		"sueña con", "golpea en", "busca",
		"pierde", "raspa", "se traga",
		"escupe", "abraza", "quema",
		"absorbe", "deshace",
		"pierde", "habla en",
		"se cae en", "surge de",
		"entiende", "comprende",
		"ve", "percibe", "huele", "siente"];

	var armp = ["los", "los", "los", "los", "mis",
		"tus", "estos", "nuestros", "sus"];

	var arfp = ["las", "mis", "tus", "estas",
		"nuestras", "las", "las", "las", "las", "las", "las", "sus"];

	var co_p = ["de", "de", "en", "en",
		"en", "dentro de", "sobre", "cerca de",
		"buscan", "y", "encuentran", "y", "y",
		"comen", "toman", "lastiman", "acarician",
		"sueñan con", "golpean en", "buscan",
		"pierden", "raspan", "se tragan",
		"escupen", "abrazan", "queman",
		"absorben", "deshacen", "pierden",
		"hablan en", "se caen en", "surgen de",
		"ven", "perciben", "huelen", "sienten"];



	var TYPES = [];
	TYPES["sums"] = sums;
	TYPES["sump"] = sump;
	TYPES["sufs"] = sufs;
	TYPES["sufp"] = sufp;
	TYPES["arms"] = arms;
	TYPES["armp"] = armp;
	TYPES["arfs"] = arfs;
	TYPES["arfp"] = arfp;





	function fn(gn) {
		var fr = gn ? gn[2] : [];
		var gen = gn ? gn[0] : rand([true, false]);
		var num = gn ? gn[1] : rand([true, false]);
		getSujeto([gen, num, fr]);
		if (num)
			fr.push(rand(conj));
		else
			fr.push(rand(co_p));

		gen = rand([true, false]);
		num = rand([true, false]);

		getSujeto([gen, num, fr]);

		///////////////
		var frr = fr.join(" ");
		frr = frr.substring(0, 1).toUpperCase() + frr.substring(1) + ".";
		logg(frr);

		frr = frr.split(" de el ").join(" del ");
		frr = frr.split(" y i").join(" e i");
		frr = frr.split(" o o").join(" u o");


		return frr;

	}

	function getSujeto(gn) {
		var fr = gn ? gn[2] : [];
		var gen = gn ? gn[0] : rand([true, false]);

		var num = gn ? gn[1] : rand([true, false]);
		var xx;

		if (gen) {
			if (num) {
				fr.push(rand(arms));
				fr.push(rand(sums));
			} else {
				fr.push(rand(armp));
				fr.push(rand(sump));
			}
		} else {
			if (num) {
				fr.push(rand(arfs));
				fr.push(rand(sufs));
			} else {
				fr.push(rand(arfp));
				fr.push(rand(sufp));
			}
		}

		return fr.join(' ');

	}




	function getfrase() {
		var fr = [];
		var gen = parseInt(Math.random() * (2)) == 0 ? true : false;
		var num = parseInt(Math.random() * (2)) == 0 ? true : false;
		var xx;
		getSujeto([gen, num, fr]);


		if (num)
			fr.push(rand(conj));
		else
			fr.push(rand(co_p));


		gen = parseInt(Math.random() * (2)) == 0 ? true : false;
		num = parseInt(Math.random() * (2)) == 0 ? true : false;

		if (gen) {

			if (num) {
				fr.push(arms[parseInt(Math.random() * (arms.length))]);
			} else {
				fr.push(armp[parseInt(Math.random() * (armp.length))]);
			}

			if (num)
				fr.push(sums[parseInt(Math.random() * (sums.length))]);
			else fr.push(sump[parseInt(Math.random() * (sump.length))]);

		}

		else {
			if (num) {
				fr.push(arfs[parseInt(Math.random() * (arfs.length))]);
				fr.push(sufs[parseInt(Math.random() * (sufs.length))]);
			} else {
				fr.push(arfp[parseInt(Math.random() * (arfp.length))]);
				fr.push(sufp[parseInt(Math.random() * (sufp.length))]);
			}
		}

		/////////////
		if (parseInt(Math.random() * (5)) == 0) {
			fr.push("de");//conj[parseInt(Math.random()*(conj.length))]);


			gen = parseInt(Math.random() * (2)) == 0 ? true : false;
			if (gen) {
				fr.push(arms[parseInt(Math.random() * (arms.length))]);




				fr.push(sums[parseInt(Math.random() * (sums.length))]);

			}

			else {
				fr.push(arfs[parseInt(Math.random() * (arfs.length))]);
				fr.push(sufs[parseInt(Math.random() * (sufs.length))]);

			}
		}

		///////////////
		var frr = fr.join(" ");
		frr = frr.substring(0, 1).toUpperCase() + frr.substring(1) + ".";
		logg(frr);

		frr = frr.split(" de el ").join(" del ");
		frr = frr.split(" y i").join(" e i");
		frr = frr.split(" o o").join(" u o");


		return frr;
	};

	return {
		frase: getfrase
	}
}
