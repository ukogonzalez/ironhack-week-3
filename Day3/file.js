var exampleArray = [ 2, -5, 10, 5, 4, -10, 0];

// var results = process(exampleArray);

function process (data){
  var positions = [];
  data.forEach (function (a, i) {
    data.forEach (function (b, j) {
      if (a + b === 0) {positions.push (i +","+ j )}
    });
  });
  positions.forEach (function (a){
  console.log ("You can sum these pairs of numbers and get zero:" + a);
  // console.log (positions);
});
}
process(exampleArray);
