// Array
// penulisan arrray ke 1
const arrayMahasiswa = ['siti', 'arga', 1, 'sigit']

console.log(arrayMahasiswa) //untuk menampilkan array

//penulisan array ke 2
const varianBunga = []
varianBunga[0] = 'Anggrek'
varianBunga[1] = 'Mawar'
varianBunga[2] = 'Matahari'

console.log(varianBunga)

//penulisan array ke 3
const heroMage = new Array()
heroMage[0] = 'valentina'
heroMage[1] = 'Aurora'
heroMage[5] = 'Odette'
heroMage[3] = 'Liliya'
console.log(heroMage[3]) //menampilkan array ke n
/* jika array yang dipanggil belum ada/kosong maka akan muncul undefined**/




//checking index
const varianBuah = ['anggur', 'strorberry', 'nanas', 'pisang', 'nangka']
console.info(varianBuah)
const nanas = varianBuah.includes('nanas') //apakah didalam array tersebut ada nilai n, jika ada maka true, jika tidak ada maka false
const posisiIndexNanas = varianBuah.lastIndexOf('nanas') //untuk mencari posisi index ke n

if (nanas) {
    console.info(
        `buah nanas itu ada, dan dia berada di posisi index ke-${posisiIndexNanas}`
    )
} else {
    console.info(
        'saya tidak tahu posisinya dimana'
    )
}




//mengetahui posisi index ke n sebelum dan setelahnya
const indexBefore = posisiIndexNanas - 1 //untuk mencari index sebelum n
const indexAfter = posisiIndexNanas + 1 //untuk mencari index setelah n
const before = varianBuah[indexBefore]
const After = varianBuah[indexAfter]
console.log(`buah sebelum nanas adalah ${before}`)
console.log(`buah setelah nanas adalah ${After}`)

//short hand mengetahui index pertama dan terakhir
const buahAwal = varianBuah.shift() //untuk mengetahui index pertama
console.log(`Buah awal adalah buah ${buahAwal}`)
const buahAkhir = varianBuah.pop() //untuk mengetahui index terakhir
console.log(`Buah akhir adalah buah ${buahAkhir}`)



/* didalam aray juga kita bisa membuat Q secara custom
yang dimana biasanya index itu dimulai dari 0,1,2,3,.. n.
['anggrek', 'mawar', 'matahari']
0="anggrek"
1="mawar"
2="matahari"
kita bisa meng customnya, bahkan tidak harus dengan angka. 
dan jika kita meng customnya maka nilai lengt nya akan bernilai nol karena array tersebut sebenarnya adalah array asosiatif atau objek dengan properti yang dinamis**/
//🍌🍇🍓🍉🍎🍒🍋
const buahAnyar = []
buahAnyar['pisang'] = '🍌'
buahAnyar['anggur'] = '🍇'
buahAnyar['strowbery'] = '🍓'
buahAnyar['semangka'] = '🍉'
console.log(buahAnyar)
console.log(buahAnyar['strowbery'])

//Namun, jika kamu ingin membuat objek yang memiliki sifat-sifat dengan nama yang berubah-ubah, kamu bisa menulisnya dengan cara seperti ini:
const buahAnyar2 = {
  pisang: '🍌',
  anggur: '🍇',
  strowbery: '🍓',
  semangka: '🍉'
};
console.log(Object.keys(buahAnyar2).length); // Output: 4
console.log(buahAnyar2.pisang); // Output: 🍌
console.log(buahAnyar2['anggur']); // Output: 🍇
/**Perlu diingat bahwa menambahkan properti baru pada objek bawaan JavaScript seperti Array dapat menyebabkan masalah,
sehingga lebih baik menggunakan objek yang cocok untuk merepresentasikan jenis data yang Anda inginkan. */



//🚀🚁🚆🚲🚎🏎️🚓🚑⌚📱💻
//"shallow copy" dan "deep copy"
/** Analogi pertama ini adalah deep copy, di mana Anda membuat salinan yang sama persis dengan objek atau array asli, termasuk semua properti atau elemen yang ada di dalamnya. 
 * Analogi kedua adalah shallow copy, di mana Anda hanya menyalin properti atau elemen yang berada di level terluar objek atau array, dan tidak menyalin properti atau elemen yang lebih dalam di dalam objek atau array. 
 *  jika Anda mengubah nilai pada sebuah objek atau array di dalam deep copy, perubahan tersebut hanya akan mempengaruhi objek atau array dalam salinan, dan tidak mempengaruhi objek atau array asli.
 * Jika Anda mengubah nilai pada sebuah objek atau array di dalam shallow copy, maka perubahan tersebut juga akan mempengaruhi objek atau array asli, karena keduanya masih menggunakan referensi yang sama ke objek atau array dalam level yang lebih dalam.*/

//contoh shallow copy, secara singkat yang akan berubbah itu keduanya baik itu salinan array nya ataupun array utama nya
const teknologi = ['🚀', '🚁', '🚆', '🚲', '🚎'] //original
const anyarTK = teknologi //KW

anyarTK[0] = '🍇'

console.log({teknologi})
console.log({anyarTK})

//contoh deep copy, secara singkat yang akan berubah itu duplikat array nya atau salinannya
//cara 1
const teknologiDua = ['🚀', '🚁', '🚆', '🚲', '🚎'] //original
const anyarTKDua = [...teknologiDua] //KW

anyarTKDua[0] = '🍇'

console.log({teknologiDua})
console.log({anyarTKDua})
//cara 2
const teknologiTiga = ['🚀', '🚁', '🚆', '🚲', '🚎'] //original
const anyarTiga = teknologiTiga.slice(teknologiTiga) //KW

anyarTiga[1] = '🍌'

console.log({teknologiTiga})
console.log({anyarTiga})
//cara 3
const teknologiSemangka = ['🚀', '🚁', '🚆', '🚲', '🚎'] //original
const anyarSemangka = Array.from(teknologiSemangka) //KW

anyarSemangka[2] = '🍉'

console.log({teknologiSemangka})
console.log({anyarSemangka})
//cara 4
const teknologiStrowbery = ['🚀', '🚁', '🚆', '🚲', '🚎'] //original
const anyarStorbery = JSON.parse(JSON.stringify(teknologiStrowbery)) //KW

anyarStorbery[3] = '🍓'

console.log({teknologiStrowbery})
console.log({anyarStorbery})



// pemanggilan array campuran
const arrayCampuran = ['🍉', 
6, 
{tomator:true}, 
['matematika', 'PAI', 1], 
{
  motor: function () {
  console.log(`ini merupakan motor mio M3 saya yang ke dua hancur karena kecelakaan`)
  },
}, 7]
console.log(arrayCampuran) //output: arrayCampuran[xxxx]
console.log(arrayCampuran[0]) //output: semangka
console.log(arrayCampuran[2]) //output: {tomator:true}
console.log(arrayCampuran[3][1]) //output: PAI
arrayCampuran[4].motor() //output: ini merupakan motor mio M3 saya yang ke dua hancur karena kecelakaan




//menggabungkan dua array atau lebih menjadi satu
const bumbuahan = ['🍌', '🍇', '🍓', '🍉', '🍎']
const kendaraan = ['🚀', '🚁', '🚆', '🚲', '🚎']
const kenBum = bumbuahan.concat(kendaraan)//menggabungkan array
console.log(kenBum) //output: kedua array akan menyatu

for (list of kenBum) console.log(list) //mengurutkan isi didalam array. output: array akan terurut
for (list in kenBum) console.log(list) //mengurutkan index didalam array. output: index akan terurut
kenBum.map((value,index) => console.log(value,index)) //output: memunculkan value dan indexnya




//terdapat data mahasiwa dari berbagai kampus ayam
const mahasiwa = [
  {
    nama: 'Udin',
    kampus: 'UNIGA',
    usia: 20,
    jenisKelamin: 'laki-laki'
  },
  {
    nama: 'Asep Codet',
    kampus: 'UNSIL',
    usia: 23,
    jenisKelamin: 'laki-laki'
  },
  {
    nama: 'Endah',
    kampus: 'Bhakti Kencana',
    usia: 21,
    jenisKelamin: 'perempuan'
  },
  {
    nama: 'Rohayah',
    kampus: 'UNIGA',
    usia: 25,
    jenisKelamin: 'perempuan'
  },
  {
    nama: 'Tatang',
    kampus: 'IPI',
    usia: 22,
    jenisKelamin: 'laki-laki'
  }
]
// menampilkan nama saja
mahasiwa.map((values, index) => {
  console.log(values.nama)
}) //Menggunakan map() method dan destructuring

for (const data of mahasiwa) {
  console.log(data.nama)
} //Menggunakan for...of loop

mahasiwa.forEach(data => console.log(data.nama)) //Menggunakan forEach() method

for (const i in mahasiwa) {
  console.log(mahasiwa[i].nama)
} //Menggunakan for...in loop

mahasiwa.reduce((_, { usia }) => {
  console.log(usia)
}, null) //Menggunakan reduce() method

mahasiwa.sort((a,b) => b.usia - a.usia) .map((values) => console.log(values)) //menampilkan usia secara berurutan (dari yang terbesar sampai terkecil)
mahasiwa.sort((a,b) => a.usia - b.usia) .map((values) => console.log(values)) //menampilkan usia secara berurutan (dari yang terkecil sampai terbesar)
mahasiwa.filter((x) => x.usia > 22) .map((values) => console.log(values)) //menampilkan usia yang diatas 22 tahun
mahasiwa.filter((x) => x.usia >= 22) .map((values) => console.log(values)) //menampilkan usia 22 tahun keatas
mahasiwa.sort((a,b) => a.usia - b.usia).filter((x) => x.usia >= 22) .map((values) => console.log(values)) //menampilkan usia 22 tahun keatas dengan berurutan
mahasiwa.sort((a,b) => a.usia - b.usia).filter((x) => x.usia < 22) .map((values) => console.log(values)) //menampilkan usia dibawah 22 tahun keatas dengan berurutan
