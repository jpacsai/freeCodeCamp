/*
Convert the given number into a roman numeral.

*/


function convertToRoman(num) {
    var arr = [];
    var str = num.toString();
    var zero = 1;
    for (var i = str.length-1; i >= 0; i--) {
      var n = (str[i]*zero);
      var rom = "";
      if (n === 0) {
        rom = "";
      }
      else if (n > 0 & n < 10) {
        switch(n) {
          case 1:
            rom = "I";
            break;
          case 2:
            rom = "II";
            break;
          case 3:
            rom = "III";
            break;
          case 4:
            rom = "IV";
            break;
          case 5:
            rom = "V";
            break;
          case 6:
            rom = "VI";
            break;
          case 7:
            rom = "VII";
            break;
          case 8:
            rom = "VIII";
            break;
          case 9:
            rom = "IX";
        }
      }
      else if ( n >= 10 && n < 100) {
        switch(n) {
          case 10:
            rom = "X";
            break;
          case 20:
            rom = "XX";
            break;
          case 30:
            rom = "XXX";
            break;
          case 40:
            rom = "XL";
            break;
          case 50:
            rom = "L";
            break;
          case 60:
            rom = "LX";
            break;
          case 70:
            rom = "LXX";
            break;
          case 80:
            rom = "LXXX";
            break;
          case 90:
            rom = "XC";
        }
      }
      else if (n >= 100 && n < 1000) {
        switch(n) {
          case 100:
            rom = "C";
            break;
          case 200:
            rom = "CC";
            break;
          case 300:
            rom = "CCC";
            break;
          case 400:
            rom = "CD";
            break;
          case 500:
            rom = "D";
            break;
          case 600:
            rom = "DC";
            break;
          case 700:
            rom = "DCC";
            break;
          case 800:
            rom = "DCCC";
            break;
          case 900:
            rom = "CM";
            break;
        }
      }
      else if (n >= 1000) {
        for (var j = 0; j < n/1000; j++) {
          rom += "M";
        }
      }
      arr.unshift(rom);
      zero *= 10;
    }
    return arr.join("");
  }
  
  convertToRoman(36);
  