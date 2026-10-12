// Program hitung transaksi Kedai Senja
// const namaKedai = "Kedai Senja";
// const HARGA_KOPI = 18000;
// const HARGA_ROTI = 15000;
// const TARIF_PAJAK = 0.11;
// let jumlahKopi = 3;
// let jumlahRoti = "2";
// let transaksiSelesai = 0;

// // Jumlah seluruh item. Seharusnya: 5
// let jumlahItem = jumlahKopi + jumlahRoti;

// // Subtotal. Seharusnya: 84000
// let subtotal = HARGA_KOPI * jumlahkopi + HARGA_ROTI * jumlahRoti;

// // Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
// let pajak = subtotal - 10000 * TARIF_PAJAK;

// // Total bayar. Seharusnya: 82140
// let totalBayar = subtotal - 10000 + pajak

// // Pelanggan membayar 100000. Cukup? Seharusnya: true
// let uangBayar = 100000;
// let uangCukup = uangBayar = totalBayar;

// // Kembalian. Seharusnya: 17860
// let kembalian = totalBayar - uangBayar;

// // Jumlah item genap? Seharusnya: false
// let itemGenap = jumlahItem % 2 === 1;

// // Transaksi selesai bertambah 1. Seharusnya: 1
// transaksiSelesai + 1;

// // Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// let namaKedai = "Kedai Senja Baru";

// // Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// TARIF_PAJAK = 0.12;

// Console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);

// ===============jawaban=================

//langkah ke empat
//Program hitung transaksi Kedai Senja
let namaKedai = "Kedai Senja baru ";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2;
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;
// FIX:merubah nilai jumlah jumlah roti menjadi number agar bisa menjadi operasi hitung bilangan yg benar

// FIX:Subtotal. Seharusnya: 84000
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;
// FIX:memperbaiki huruf k pada harga kopi

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK;
// FIX:menambahkan kurung di awal

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak;
// FIX:menambahkann titik koma pada akhir statmen

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar;
// FIX:memberikan compare pada  variabel

// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar;
// FIX:membalikan variabel

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0;
// FIX:merubah menjadi nol agar false

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai ++;
// FIX:menambahkan tanda plus

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
let = "Kedai Senja baru ";
// FIX:merubah conts menjadi let

// tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
TARIF_PAJAK
//FIX:hanya mnulis ulang TARIF_PAJAK

console.log("Nama Kedai: " + namaKedai);
console.log("Jumlah Item: " + jumlahItem);
console.log("Subtotal: " + subtotal);   
console.log("Pajak: " + pajak);
console.log("Total Bayar: " + totalBayar);
console.log("Uang Cukup: " + uangCukup);
console.log("Kembalian: " + kembalian);
console.log("Item Genap: " + itemGenap);
console.log("Transaksi Selesai: " + transaksiSelesai);
console.log("Tarif Pajak: " + TARIF_PAJAK * 100 + "%");

console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);