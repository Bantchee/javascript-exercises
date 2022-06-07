/*
  Function converse fahrenheit to celsius and rounds to nearest
      tenth decemial palce
  Input > Output : Int > Int
  Conversion Formula :
    C = (F - 32) * 5 / 9
  Psuedocode : 
    Create variable called Cel
      Set Cel equal to `(Fah - 32) * 5 / 9`
    Round cel to the nearest tenth decemial place
    Return Cel
*/
const ftoc = function(fah) {
  let cel = (fah - 32)  * 5 / 9;
  cel = parseFloat(cel.toFixed(1));
  return cel;
};

/*
  Function converse celsius to fahrenheit and rounds to nearest
      tenth decemial palce
  Input > Output : Int > Int
  Conversion Formula :
    F = C * 9 / 5 + 32
  Psuedocode : 
      Create variable called fah
        Set fah equal to `cel * 9 / 5 + 32`
      Round fah to the nearest tenth decemial place
      Return fah
*/
const ctof = function(cel) {
  let fah = cel * 9 / 5 + 32;
  fah = parseFloat(fah.toFixed(1));
  return fah;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
