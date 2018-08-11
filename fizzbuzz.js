// Joshua Fluke video: https://goo.gl/KvTTiB
// if number divisible by 3 fizz
// if number divisible by 5 buzz
// if number divisible by both fizz buzz

var i;
for (i=0; i<=100; i++) {
    // the 'gotcha' is to check for both first
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("fizzbuzz " + i);
    }

    else if (i % 3 == 0) {
        console.log("fizz " + i);
    }

    else if (i % 5 == 0) {
        console.log("buzz " + i);
    }
}