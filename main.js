const prompt = require('prompt-sync')(); //baris ini untuk mengimpor 'prompt-sync' perpustakaan.

let score = 0; //menginisialisasi variabel untuk melacak skor keseluruhan
let jawaban_benar = 0; //menginisialisasi variabel untuk menghitung jawaban yang benar.
let jawaban_salah = 0; //menginisialisasi variabel untuk menghitung jawaban yang salah.
let point_per_soal = 1; //menetapkan skor yang diperoleh untuk setiap jawaban yang benar.

let soal = [ //array (soal),mewakili pertanyaan ('q'), pilihannya ('o'),dan index jawaban yang benar ('a').
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    //tambahkan 3 soal lainnya
    {
        "q": "Nama ayah luffy adalah...",
        "o": [
            'Monky D. Dragon',
            'Monky D. Grap',
            'Ivan Gunawan',
            'Crocodile',
        ],
        "a": 0
    },
    {
        "q": "Nasi Padang berasal dari...",
        "o": [
            'Bali',
            'Maluku',
            'Padang',
            'Sulawesi',
        ],
        "a": 2
    },
    {
        "q": "Siapa nama Navigator di Mugiwara Crew...",
        "o": [
            'Nami',
            'Robin',
            'Zoro',
            'Chopper',
        ],
        "a": 0
    },
]

let nama = prompt('Input nama: '); //digunakan untuk meminta pengguna untuk memasukkan namanya.
    for (let u = 0; u < soal.length; u++){// for disini digunakan untuk mengulangi setiap pertanyaan 
    console.log (soal[u].q);
    for (let j = 0; j < soal[u].o.length; j++) { //for disini digunakan untuk menampilkan opsi petrtanyaan.
        console.log (j + ". " + soal[u].o[j]);
    };

    let jawaban = prompt ("Jawab : ");// let disini digunakan untuk pengguna disuruh jawaban.

    if (jawaban == soal[u].a){
        score += point_per_soal;
        jawaban_benar += 1;
    } else {
        jawaban_salah += 1;
    } //if dan else disini digunakan untuk memeriksa jawaban benar dan memperbharui skor serta penghitung jawaban benar/salah.
};
// Lengkapi code program yang belum selesai

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)

//kode ini membuat quizz sederhana yang menerima masukanpengguna,memeriksa jawaban,dan memberikan umpan balik di akhir.
//pertanyaanya terkait berbagai topik, seperti JKT45,Upin Ipin, One piece,dan Nasi Padang.





