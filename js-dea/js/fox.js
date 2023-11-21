// soal:
// 1. Buat prompt untuk mengetahui saldo akhir dari apa yang di inputkan oleh user
// 2. Menentukan hari dari tanggal yang ada saat ini di pc kalian

// penyelesaian:
// no 1
alert ('Kali ini kita akan menghitung saldo akhir kita, klik \"ok\" untuk memulai menghitung saldo kita :)')
let saldoAwal = prompt ('Masukan saldo awal kamu!')
saldoAwal = parseInt (saldoAwal) //mengkonversi data string ke integer/number (bilangan bulat)

let saldoTambahan = prompt ('Tambhakan saldo anda!')
saldoTambahan = parseInt (saldoTambahan)

// hasil saldo sementara/akhir 
const hasilSaldo = saldoAwal + saldoTambahan
alert (`Kamu memiliki saldo awal sebesar Rp.${saldoAwal},- dan menambahkan saldo nya sebesar Rp.${saldoTambahan},- maka saldo yang kamu punya saat ini adalah Rp.${hasilSaldo},- `)

// jika memiliki hutang
let hutang = prompt ('Apakah kamu memliki hutang? Jika punya ketik \"ya\", jika tidak ketik \"tidak\"!')
switch (hutang) {
    case "ya":
        hutang = prompt ('Berapa hutang yang kamu punya?')
        hutang = parseInt (hutang)
        const punyaHutang = hasilSaldo - hutang
        alert (`Saldo kamu Rp.${hasilSaldo},- dan hutang kamu Rp.${hutang},-. Maka saldo kamu saat ini adalah Rp.${punyaHutang},-`)
        break
    case "tidak":
        hutang = alert (`Kamu tidak memiliki hutang, maka saldo kamu Rp.${hasilSaldo},-`)
        break
    default:
        hutang = alert (`Kata yang kamu masukan SALAH, saldo kamu saat ini Rp.${hasilSaldo},-`)
        break
}

// no 2
alert ('Hari apa sekarang?')
let hari = new Date().getDay()
switch (hari) {
    case 1:
        alert (`Ya sekarang hari Senin.`)
        break
    case 2:
        alert (`Ya sekarang hari Selasa.`)
        break
    case 3:
        alert (`Ya sekarang hari Rabu.`)
        break
    case 4:
        alert (`Ya sekarang hari Kamis.`)
        break
    case 5:
        alert (`Ya sekarang hari Jum'at.`)
        break
    case 6:
        alert ('Ya sekarang hari weekend tepatnya hari Sabtu.')
        break
    case 7: 
        alert (`Ya sekarang hari weekend tepatnya hari Minggu.`)
        break
}


//jangan lupa follow ig saya:
//ig: @z-index