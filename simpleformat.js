/**********
*simpleformat.js
*A simple formatting program
*v1.1
**********/

function format(number, type) {
	var exponent = Math.floor(Math.log10(number));
	var mantissa = number / Math.pow(10, exponent);
  if (exponent < 3) return(number.toFixed(1))
	if (type == 'sci') {
		return(mantissa.toFixed(2) + 'e' + exponent)
	} else if (type == 'eng') {
		var engExponent = Math.floor(exponent / 3) * 3;
    var engRemainder = Math.floor(exponent % 3);
		return(getEngMantissa(mantissa, engRemainder).toFixed(2) + 'e' + engExponent)
	} else if (type == 'nor') {
    var engExponent = Math.floor(exponent / 3) * 3;
    var engRemainder = Math.floor(exponent % 3);
    var norType = Math.floor(exponent / 3) - 1
    return(getEngMantissa(mantissa, engRemainder).toFixed(2) + ' ' + nor[norType])
  }
}

function getEngMantissa(mantissa, engRemainder) {
  if (engRemainder == 0) var mantissaMult = 1;
  if (engRemainder == 1) var mantissaMult = 10;
  if (engRemainder == 2) var mantissaMult = 100;
  return(mantissa * mantissaMult)
}

var nor = ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quattrodecillion', 'Quindecillion', 'Sexdecillion', 'Septendecillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Unvigintillion', 'Duovigintillion', 'Tresvigintillion', 'Quattuorvigintillion', 'Quinquavigintillion', 'Sesvigintillion', 'Septemvigintillion', 'Octovigintillion', 'Novemvigintillion', 'Trigintillion', 'Untrigintillion', 'Duotrigintillion', 'Trestrigintillion', 'Quattuortrigintillion', 'Quinquatrigintillion', 'Sestrigintillion', 'Septentrigintillion', 'Octotrigintillion', 'Noventrigintillion', 'Quadragintillion', 'Unquadragintillion', 'Duoquadragintillion', 'Trequadragintillion', 'Quattuorquadragintillion', 'Quinquadragintillion', 'Sexquadragintillion', 'Septenquadragintillion', 'Octoquadragintillion', 'Novemquadragintillion', 'Quinquagintillion', 'Unquinquagintillion', 'Duoquinquagintillion', 'Trequinquagintillion', 'Quattuorquinquagintillion', 'Quinquinquagintillion', 'Sexquinquagintillion', 'Septenquinquagintillion', 'Octoquinquagintillion','Novemquinquagintillion','Sexagintillion','Unsexagintillion','Duosexagintillion','tresexagintillion','Quattuorsexagintillion','Quinsexagintillion','Sexsexagintillion','Septensexagintillion','Octosexagintillion','Novemsexagintillion','Septuagintillion','Unseptuagintillion','Duoseptuagintillion','Treseptuagintillion','Quattuorseptuagintillion','Quinseptuagintillion','Sexseptuagintillion','Septenseptuagintillion', 'Octoseptuagintillion', 'Novemseptuagintillion', 'Octogintillion', 'Unoctogintillion', 'Duooctogintillion', 'Treoctogintillion', 'Quattuoroctogintillion', 'Quinoctogintillion', 'Sexoctogintillion', 'Septenoctogintillion', 'Octooctogintillion', 'Novemoctogintillion', 'Nonagintillion', 'Unnonagintillion', 'Duononagintillion', 'Trenonagintillion', 'Quattuornonagintillion', 'Quinnonagintillion', 'Sexnonagintillion', 'Septennonagintillion', 'Octononagintillion', 'Novemnonagintillion', 'Centillion']
