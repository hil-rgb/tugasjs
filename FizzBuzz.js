//Buatlah sebuah program sederhana untuk menampilkan angka 1 - 50,
// tetapi untuk angka kelipatan 5 => fizz, kalau kelipatan 3 => buzz 
// kalau kelipatan 5 dan 3 => fizz buzz
// Jawaban : 
//for Loop
for (let i = 1; i <= 50; i++){
    if ((i % 3 == 0 ) && (i % 5 == 0)){ // looping 3, kelipatan 3 false, kelipatan 5 false
        console.log ("Fizz Buzz");
    }
    else if (i % 3 == 0){ // looping 3, kelipatan 3 true
        console.log ("Fizz");
    }
    else if (i % 5 == 0){ // looping 2, kelipatan 5 false
        console.log ("Buzz"); 
        
    }
    else{ // looping 1, cetak 1
        console.log (i);
    }
}
