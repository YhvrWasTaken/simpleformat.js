// simpleformat.js
// a simple formatting program
// v2.1

// Copyright (C) 2019  Yhvr | YhvrWasTaken | YhvrTheSecond
// Reddit: https://reddit.com/u/YhvrTheSecond
// Discord: Yhvr#0001

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

// added in v2.1:
// Create your own notations with format.create()!
// Fixed tresexagintillion from first letter being lowercase.
// format.normal() handling for NaN, undefined, Infinity, anad -Infinity

var format = {
  normal: function(number, type) {
    // normal
    // ------
    // Normal formatting.
    // ex:
    // format.normal(1e4, "nor")
    //
    // Params:
    // number: number,
    // type: string
    if (number == Infinity) return "Infinity"
    if (number == -Infinity) return "-Infinity"
    if (typeof number != "number") return "Not A Number"
    if (number == undefined) return "Undefined"
    if (number == NaN) return "NaN"
    if (number == null) return "Null"
    var exponent = Math.floor(Math.log10(number));
    var mantissa = number / Math.pow(10, exponent);
    var customFormat = null // Please, tell me if there is a better way to do this
    if (exponent < 3) return(number.toFixed(1));
  	if (type == 'sci') return (mantissa.toFixed(2) + 'e' + exponent);
  	if (type == 'eng') return (Math.pow(10, exponent % 3) * mantissa.toFixed(2) + "e" + (Math.floor(exponent / 3) * 3))
    if (type == 'nor') return (Math.pow(10, exponent % 3) * mantissa.toFixed(2) + ' ' + format.nor[Math.floor(exponent / 3) - 1]);
    if (type == 'let2') {
      var letter1 = exponent - 3;
  	  var letter2 = Math.floor(letter1 / 26)
  	  letter1 -= letter2 * 26
      return (mantissa.toFixed(2) + format.let2[letter2] + format.let2[letter1]);
    }
    if (type == 'let') {
      var letter1 = exponent - 3;
  	  var letter2 = Math.floor(letter1 / 26) - 1
  	  letter1 -= (letter2 * 26) + 26
      if (letter2 >= 0) return (mantissa.toFixed(2) + format.let2[letter2] + format.let2[letter1]);
      return (mantissa.toFixed(2) + format.let2[letter1]);
    }
    format.customTypes.forEach(function(notation) {
      // custom type stuff
      if (type == notation.name && notation.type == "sci") {
        customFormat = (mantissa.toFixed(2) + (notation.notation[exponent - 3] != undefined ? notation.notation[exponent - 3] : " Unknown"))
      } else if (type == notation.name && notation.type == "eng") {
        customFormat = ((Math.pow(10, exponent % 3) * mantissa.toFixed(2)) + (notation.notation[Math.floor((exponent - 3) / 3)] != undefined ? notation.notation[Math.floor((exponent - 3) / 3) ] : " Unkown"))
      }
    })

    if (customFormat != null) return customFormat
  },
  mixed: function(number, config) {
    // mixed
    // ------
    // Equiveulant of IvarK's format.js mixed scientific and mixed engineering.
    // ex:
    // format.mixed(1e5, {
    //   limit: 1e4,
    //   type1: "sci", // You can use custom notations!
    //   type2: "nor"
    //})
    //
    // Params:
    // number: number,
    // config: object
    //   limit: number,
    //   type1: string,
    //   type2: string
    if (number >= config.limit) {
      return (format.normal(number, config.type2))
    } else {
      return (format.normal(number, config.type1))
    }
  },
  create: function(name, notation, type) {
    // create
    // ------
    // Create a notation.
    // ex:
    // format.create("cool", [
    //   " A little",
    //   " A lot"
    // ], "sci")
    // 
    // Params:
    // name: string,
    // notation: array,
    // type: string
    if (type == "sci" || type == "eng") {
      this.customTypes.push({
        "name": name,
        "notation": notation,
        "type": type
      })
      console.log("Created Notation:\n" + name + "\nType:\n" + type)
    } else {
      console.error("format.create() - type paramater must be 'sci' or 'eng.'")
    }
  },
  customTypes: [],
  //customTypes: [
  //  {
  //    name: "example",
  //    notation: ["A little", "A lot"],
  //    type: "sci"|"eng" //sci increments array every exponent, while eng increments every 3 exponents
  //  }
  //]
  let2: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  nor: ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quattrodecillion', 'Quindecillion', 'Sexdecillion', 'Septendecillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Unvigintillion', 'Duovigintillion', 'Tresvigintillion', 'Quattuorvigintillion', 'Quinquavigintillion', 'Sesvigintillion', 'Septemvigintillion', 'Octovigintillion', 'Novemvigintillion', 'Trigintillion', 'Untrigintillion', 'Duotrigintillion', 'Trestrigintillion', 'Quattuortrigintillion', 'Quinquatrigintillion', 'Sestrigintillion', 'Septentrigintillion', 'Octotrigintillion', 'Noventrigintillion', 'Quadragintillion', 'Unquadragintillion', 'Duoquadragintillion', 'Trequadragintillion', 'Quattuorquadragintillion', 'Quinquadragintillion', 'Sexquadragintillion', 'Septenquadragintillion', 'Octoquadragintillion', 'Novemquadragintillion', 'Quinquagintillion', 'Unquinquagintillion', 'Duoquinquagintillion', 'Trequinquagintillion', 'Quattuorquinquagintillion', 'Quinquinquagintillion', 'Sexquinquagintillion', 'Septenquinquagintillion', 'Octoquinquagintillion','Novemquinquagintillion','Sexagintillion','Unsexagintillion','Duosexagintillion','Tresexagintillion','Quattuorsexagintillion','Quinsexagintillion','Sexsexagintillion','Septensexagintillion','Octosexagintillion','Novemsexagintillion','Septuagintillion','Unseptuagintillion','Duoseptuagintillion','Treseptuagintillion','Quattuorseptuagintillion','Quinseptuagintillion','Sexseptuagintillion','Septenseptuagintillion', 'Octoseptuagintillion', 'Novemseptuagintillion', 'Octogintillion', 'Unoctogintillion', 'Duooctogintillion', 'Treoctogintillion', 'Quattuoroctogintillion', 'Quinoctogintillion', 'Sexoctogintillion', 'Septenoctogintillion', 'Octooctogintillion', 'Novemoctogintillion', 'Nonagintillion', 'Unnonagintillion', 'Duononagintillion', 'Trenonagintillion', 'Quattuornonagintillion', 'Quinnonagintillion', 'Sexnonagintillion', 'Septennonagintillion', 'Octononagintillion', 'Novemnonagintillion', 'Centillion']
}
