// Buat program sederhana (function) untuk membuat sebuah segitiga. Inputannya adalah tinggi segitiganya.
// Jawaban : 
const input = 2
for(let i = 1; i <= input; i++) {
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ");
    }
    console.log('\n')
}