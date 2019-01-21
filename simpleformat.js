/**********
*simpleformat.js
*A simple formatting program
*v1.4
**********/

var simpleFormatData = {
  exponent: 1,
  mantissa: 1,
  engExponent: 1,
  engRemainder: 1,
  norType: 1,
  letter1: 1,
  letter2: 1,
  mantissaMult: 1,
  let2: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  nor: ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quattrodecillion', 'Quindecillion', 'Sexdecillion', 'Septendecillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Unvigintillion', 'Duovigintillion', 'Tresvigintillion', 'Quattuorvigintillion', 'Quinquavigintillion', 'Sesvigintillion', 'Septemvigintillion', 'Octovigintillion', 'Novemvigintillion', 'Trigintillion', 'Untrigintillion', 'Duotrigintillion', 'Trestrigintillion', 'Quattuortrigintillion', 'Quinquatrigintillion', 'Sestrigintillion', 'Septentrigintillion', 'Octotrigintillion', 'Noventrigintillion', 'Quadragintillion', 'Unquadragintillion', 'Duoquadragintillion', 'Trequadragintillion', 'Quattuorquadragintillion', 'Quinquadragintillion', 'Sexquadragintillion', 'Septenquadragintillion', 'Octoquadragintillion', 'Novemquadragintillion', 'Quinquagintillion', 'Unquinquagintillion', 'Duoquinquagintillion', 'Trequinquagintillion', 'Quattuorquinquagintillion', 'Quinquinquagintillion', 'Sexquinquagintillion', 'Septenquinquagintillion', 'Octoquinquagintillion','Novemquinquagintillion','Sexagintillion','Unsexagintillion','Duosexagintillion','tresexagintillion','Quattuorsexagintillion','Quinsexagintillion','Sexsexagintillion','Septensexagintillion','Octosexagintillion','Novemsexagintillion','Septuagintillion','Unseptuagintillion','Duoseptuagintillion','Treseptuagintillion','Quattuorseptuagintillion','Quinseptuagintillion','Sexseptuagintillion','Septenseptuagintillion', 'Octoseptuagintillion', 'Novemseptuagintillion', 'Octogintillion', 'Unoctogintillion', 'Duooctogintillion', 'Treoctogintillion', 'Quattuoroctogintillion', 'Quinoctogintillion', 'Sexoctogintillion', 'Septenoctogintillion', 'Octooctogintillion', 'Novemoctogintillion', 'Nonagintillion', 'Unnonagintillion', 'Duononagintillion', 'Trenonagintillion', 'Quattuornonagintillion', 'Quinnonagintillion', 'Sexnonagintillion', 'Septennonagintillion', 'Octononagintillion', 'Novemnonagintillion', 'Centillion']
};

function format(number, type) {
	simpleFormatData.exponent = Math.floor(Math.log10(number));
	simpleFormatData.mantissa = number / Math.pow(10, simpleFormatData.exponent);
  if (simpleFormatData.exponent < 3) return(number.toFixed(1));
	if (type == 'sci') {
		return(simpleFormatData.mantissa.toFixed(2) + 'e' + simpleFormatData.exponent);
	} else if (type == 'eng') {
		simpleFormatData.engExponent = Math.floor(simpleFormatData.exponent / 3) * 3;
    simpleFormatData.engRemainder = Math.floor(simpleFormatData.exponent % 3);
		return(getEngMantissa().toFixed(2) + 'e' + simpleFormatData.engExponent);
	} else if (type == 'nor') {
    simpleFormatData.engExponent = Math.floor(simpleFormatData.exponent / 3) * 3;
    simpleFormatData.engRemainder = Math.floor(simpleFormatData.exponent % 3);
    simpleFormatData.norType = Math.floor(simpleFormatData.exponent / 3) - 1;
    return(getEngMantissa().toFixed(2) + ' ' + simpleFormatData.nor[simpleFormatData.norType]);
  } else if (type == 'let2') {
    simpleFormatData.letter1 = simpleFormatData.exponent - 3;
    simpleFormatData.letter2 = 0;
    while (simpleFormatData.letter1 >= 26) {
      simpleFormatData.letter1 -= 26;
      simpleFormatData.letter2 += 1;
    }
    return(simpleFormatData.mantissa.toFixed(2) + simpleFormatData.let2[simpleFormatData.letter2] + simpleFormatData.let2[simpleFormatData.letter1]);
  } else if (type == 'let') {
    simpleFormatData.letter1 = simpleFormatData.exponent - 3;
    simpleFormatData.letter2 = -1;
    while (simpleFormatData.letter1 >= 26) {
      simpleFormatData.letter1 -= 26;
      simpleFormatData.letter2 += 1;
    }
    if (simpleFormatData.letter2 >= 0) return(simpleFormatData.mantissa.toFixed(2) + let2[letter2] + simpleFormatData.let2[simpleFormatData.letter1]);
    return(simpleFormatData.mantissa.toFixed(2) + simpleFormatData.let2[simpleFormatData.letter1]);
  }
}

function getEngMantissa() {
  simpleFormatData.mantissaMult = 1;
  if (simpleFormatData.engRemainder == 1) simpleFormatData.mantissaMult = 10;
  if (simpleFormatData.engRemainder == 2) simpleFormatData.mantissaMult = 100;
  return(simpleFormatData.mantissa * simpleFormatData.mantissaMult);
}
