var words2 = [
  "January", "lacks", "caveats",
  "hazardous", "DOORS", "crying",
  "arrogantly", "climate", "proponent",
  "rebuttal"
]

function decoder (words) {
  var index = 0;
  var secretMessage = "";
  for (var i = 0; i < words.length; i++) {
    secretMessage += words[i].charAt(index);
    index = (index + 1) % 5;
  }
  return secretMessage
}
