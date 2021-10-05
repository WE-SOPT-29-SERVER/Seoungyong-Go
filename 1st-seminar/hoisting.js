function hoisting() {
  console.log(x);
  var x = 'var';
  console.log(x);
}

hoisting();
