function forLoop(array8) {
    // var array8 = [];
    for (let i=0; i<25; i++) {
      if (i === 1) {
        array8.push (`I am 1 strange loop.`);
      }
      else {
        array8.push (`I am ${i} strange loops.`);
      }
    }
    return array8
}


function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(countdown--)
  }
  return ('done')
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());
  return array
}
