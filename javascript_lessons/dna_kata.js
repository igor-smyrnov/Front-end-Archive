function DNAStrand(dna){
var str = "";
  for(i=0; i<dna.length; i++){
    switch(dna[i]){
		case "A":
			str +="T";
			break;
		case "T":
			str += "A";
			break;
		case "C":
			str += "G";
			break;
		case "G":
			str += "C";
			break;
	}
  }
  return str;
}

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"),"CATA","String GTAT is");