/**********
*simpleformat.js
*A simple formatting program
*v2.0
**********/

var simpleFormatData = {
  let2: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  nor: ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quattrodecillion', 'Quindecillion', 'Sexdecillion', 'Septendecillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Unvigintillion', 'Duovigintillion', 'Tresvigintillion', 'Quattuorvigintillion', 'Quinquavigintillion', 'Sesvigintillion', 'Septemvigintillion', 'Octovigintillion', 'Novemvigintillion', 'Trigintillion', 'Untrigintillion', 'Duotrigintillion', 'Trestrigintillion', 'Quattuortrigintillion', 'Quinquatrigintillion', 'Sestrigintillion', 'Septentrigintillion', 'Octotrigintillion', 'Noventrigintillion', 'Quadragintillion', 'Unquadragintillion', 'Duoquadragintillion', 'Trequadragintillion', 'Quattuorquadragintillion', 'Quinquadragintillion', 'Sexquadragintillion', 'Septenquadragintillion', 'Octoquadragintillion', 'Novemquadragintillion', 'Quinquagintillion', 'Unquinquagintillion', 'Duoquinquagintillion', 'Trequinquagintillion', 'Quattuorquinquagintillion', 'Quinquinquagintillion', 'Sexquinquagintillion', 'Septenquinquagintillion', 'Octoquinquagintillion','Novemquinquagintillion','Sexagintillion','Unsexagintillion','Duosexagintillion','tresexagintillion','Quattuorsexagintillion','Quinsexagintillion','Sexsexagintillion','Septensexagintillion','Octosexagintillion','Novemsexagintillion','Septuagintillion','Unseptuagintillion','Duoseptuagintillion','Treseptuagintillion','Quattuorseptuagintillion','Quinseptuagintillion','Sexseptuagintillion','Septenseptuagintillion', 'Octoseptuagintillion', 'Novemseptuagintillion', 'Octogintillion', 'Unoctogintillion', 'Duooctogintillion', 'Treoctogintillion', 'Quattuoroctogintillion', 'Quinoctogintillion', 'Sexoctogintillion', 'Septenoctogintillion', 'Octooctogintillion', 'Novemoctogintillion', 'Nonagintillion', 'Unnonagintillion', 'Duononagintillion', 'Trenonagintillion', 'Quattuornonagintillion', 'Quinnonagintillion', 'Sexnonagintillion', 'Septennonagintillion', 'Octononagintillion', 'Novemnonagintillion', 'Centillion']
};

var format = {
  normal: function(number, type) {
    var exponent = Math.floor(Math.log10(number));
  	var mantissa = number / Math.pow(10, exponent);
    if (simpleFormatData.exponent < 3) return(number.toFixed(1));
  	if (type == 'sci') return (mantissa.toFixed(2) + 'e' + exponent);
  	if (type == 'eng') return (Math.pow(10, exponent % 3) * mantissa.toFixed(2) + "e" + (Math.floor(exponent / 3) * 3))
  	if (type == 'nor') return (Math.pow(10, exponent % 3) * mantissa.toFixed(2) + ' ' + simpleFormatData.nor[Math.floor(exponent / 3) - 1]);
    if (type == 'let2') {
      var letter1 = exponent - 3;
  	  var letter2 = Math.floor(letter1 / 26)
  	  letter1 -= letter2 * 26
      return (mantissa.toFixed(2) + simpleFormatData.let2[letter2] + simpleFormatData.let2[letter1]);
    }
    if (type == 'let') {
      var letter1 = exponent - 3;
  	  var letter2 = Math.floor(letter1 / 26) - 1
  	  letter1 -= (letter2 * 26) + 26
      if (letter2 >= 0) return (mantissa.toFixed(2) + simpleFormatData.let2[letter2] + simpleFormatData.let2[letter1]);
      return (mantissa.toFixed(2) + simpleFormatData.let2[letter1]);
    }
  },
  mixed: function(number, config) {
    if (number >= config.limit) {
      return (format.normal(number, config.type2))
    } else {
      return (format.normal(number, config.type1))
    }
  }
}
