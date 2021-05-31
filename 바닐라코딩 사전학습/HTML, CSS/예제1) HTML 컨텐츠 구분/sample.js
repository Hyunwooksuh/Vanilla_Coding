
for (var y = 0; y<5; y++) {
    for (var x = 0; x<4-y; x++) {
      console.log(" ");
    }
    for (var x = 0; x< 2*y+1; x++) {
      console.log("*");
    }
    console.log('\n');
  }