//mengubah title
document.title = 'FOX | DOM | Document Object Model'

//mengedit bagian body
const body = document.body

body.append('Saya ingin memelihara FOX') //append berfungsi untuk mengisikan sesuatu kedalam body

//membuat/mengisi element
const h1 = document.createElement('h1')
h1.textContent = '<marquee>Cara pertama untuk menuliskan element h1</marquee>'
body.append(h1) //untuk memanggil h1

const hh1 = document.createElement('h1')
hh1.innerText ='<marquee>Cara kedua untuk menuliskan element h1</marquee>'
body.append(hh1) 

const hz1 = document.createElement('h1')
hz1.innerHTML ='<marquee>Cara ketiga untuk menuliskan element h1</marquee>'
body.append(hz1) 
//innerText dan textConten hanya menerima sebuah isi content yang berupa text, sedangkan innerHTML bisa menambahkan tag html dalam string tersebut

const cc = document.querySelector('body')
cc.insertAdjacentHTML('beforeend', '<h1>Cara keempat untuk menuliskan element h1</h1>')

const asd = document.querySelector('body')
const ff = document.createElement('h1')
ff.textContent = 'Cara kelima untuk menuliskan element h1'
asd.appendChild(ff)

document.write("<h1>Cara keenam untuk menuliskan element h1</h1>") //tidak disarankan untuk menggunakan cara ini 

const ghj = document.createElement('div')
document.body.appendChild(ghj)
ghj.innerHTML = "<h1>Cara ketujuh untuk menuliskan element h1</h1>"



//tombol
const go = document.getElementById('go') //getElementById hanya untuk id, jadi tidak perlu pakai "#"
const go2 = document.querySelector('#go2') //querySelector universal, bisa untuk id atau class, namun harus menambahkan "#" atau "."
const go3 = document.querySelector('.go3') 
const go4 = document.querySelector('.go4') 

go.style.border = 'outset 10px yellow'
go.style.fontSize = '30px'
go.style.padding = '10px'
go.style.backgroundColor = 'orange'
go.style.color = 'blue'



function gantiWarna() {
    go2.style.background = 'aqua' //mengganti warna ketika sudah di klik, mirip seperti visited di css 2
    alert('Anda sudah menekan tombol kirim, data tidak bisa dirubah!!!')
}

function gantiText() {
    go3.style.background = 'aqua' //ketika kursor berada pada button, warna dan text akan berubah, 
    go3.innerText ='Send' //mirip seperti hover hanya saja ketika kursor sudah digeser kembali(keluar) tidak berubah seperti semula
}

const oriKata = 'Kirim4' //alangkah baiknya pakai seperti ini, jadi textnya berada didalam js bukan di html
go4.innerText = oriKata
function gantiTeks() {
    go4.innerText ='Send' //mirip seperti hover hanya saja ketika kursor sudah digeser kembali(keluar) tidak berubah seperti semula
}
function oriTeks() {//ketika kursor berada pada button, Teks akan berubah, 
    go4.innerText = oriKata
}
function gantiWarna2() {
    go4.style.background = 'aqua' //mengganti warna ketika sudah di klik, mirip seperti visited di css 2
}



// tugass
/** munculkan sebuah element html baru, dengan isi brupakan teks nama kalian, ketika kursor berada diatas tombol munculkan sebuah text,
 * pas kursor keluar ubah warna teks nya
 */

const tgss = document.createElement('div') //digunakan untuk membuat sebuah elemen <div> baru di dalam dokumen HTML.
const tugas = document.querySelector('#tugas')
const work = 'Tugas'
tugas.innerText = work

function teksKW() {
  tugas.innerText = 'Task'
  document.body.appendChild(tgss)
  tgss.innerHTML = '<h1>Aku adalah alex, si bunglon</h1>'
}

function teksOri() {
  tugas.innerText = work
  tgss.querySelector('h1').style.color = 'lightgreen'
  tgss.querySelector('h1').style.background = 'black'
  //Fungsi dari tgss.querySelector('h1') adalah untuk mencari elemen HTML yang memiliki tag h1 pada elemen HTML yang disimpan dalam variabel tgss.
}

tugas.addEventListener('mouseover', teksKW)
tugas.addEventListener('mouseout', teksOri)










