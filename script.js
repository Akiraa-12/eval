//M fariz Ash Syuhada
//10/10/2026
//membuat data tentang warung mae
const kedai = {
    nama: "warungMae",
    pemilik: "MaeSarijem",
    kota: "Bojonegoro",
    tahunBerdiri: 2010,
    sedangBuka: "Buka",
    nomorWhatsapp: "08123456789",
    website: null,
    jamOperasional: "08.00 - 22.00",
    jamBuka: "08.00",
    buka: "true",
    jamTutup: "22.00",
    tutup: "false",
}

//menu
let minuman = ["Kopi", "Teh", "Susu"];
let hargaMinuman = [15000, 10000, 12000];
let maknan = ["Roti Bakar", "Nasi Goreng", "Mie Ayam"];
let hargaMaknan = [20000, 25000, 22000];
let tersedia = false;
let stok = 0;




// =============bagian transaksi=================

const transaksi = [
    {
        kode: "TRX-001",
        pelanggan: "ujang",
        sudahMember: true,
        uangBayar: 100000,          
        catatan: "Tanpa gula",
        pesanan: [
                     { indeksMenu: 0, jumlah: 2 },
                    { indeksMenu: 2, jumlah: 1 }
                 ]
    },
    {
        kode: "TRX-002",
        pelanggan: "lala",
        sudahMember: false,
        uangBayar: 50000,         
        catatan: null,
        pesanan: [
                    { indeksMenu: 1, jumlah: 3 },
                    { indeksMenu: 3, jumlah: 1 }
                 ]
    },
    {
        kode: "TRX-003",
        pelanggan: "neneng",
        sudahMember: false,
        uangBayar: 20000,           
        catatan: null,
        pesanan: [
                     { indeksMenu: 3, jumlah: 2 },
                     { indeksMenu: 5, jumlah: 1 }
                 ]
    }
];

let catatanKasir;

// ============pencatatan=============

console.log("Nama Kedai: " + kedai.nama);
console.log("Pemilik: " + kedai.pemilik);
console.log("Kota: " + kedai["kota"]);
console.log(typeof kedai.tahunBerdiri);
console.log("Usia Kedai: " + (2026 - kedai.tahunBerdiri));
console.log( typeof kedai.sedangBuka);
console.log("Nomor WhatsApp: " + kedai.nomorWhatsapp);
console.log(typeof kedai.website);
console.log(typeof kedai.jamOperasional);
console.log("Jam Buka: " + kedai.jamBuka);
console.log("Jam Tutup: " + kedai.jamTutup);
console.log(typeof {buka: kedai.buka});
console.log( typeof {status: kedai.tutup});

// ====================menu==================

console.log("minuman 1: " + minuman[0] + " - Harga: " + hargaMinuman[0]);
console.log("minuman 2: " + minuman[1] + " - Harga: " + hargaMinuman[1]);
console.log("minuman 3: " + minuman[2] + " - Harga: " + hargaMinuman[2]);
console.log("makanan 1: " + maknan[0] + " - Harga: " + hargaMaknan[0]);
console.log("makanan 2: " + maknan[1] + " - Harga: " + hargaMaknan[1]);
console.log("makanan 3: " + maknan[2] + " - Harga: " + hargaMaknan[2]); 
console.log("Roti Bakar: " + tersedia + "  Stok: " + stok);

//===================transakasi=================

const indeksItem2Trx3 = transaksi[2].pesanan[1].indeksMenu;
console.log("Menu item-2 trx-3     :", [indeksItem2Trx3].nama);

console.log("typeof tahunBerdiri   :", typeof kedai.tahunBerdiri);
console.log("typeof sedangBuka     :", typeof kedai.sedangBuka);
console.log("typeof website        :", typeof kedai.website);
console.log("typeof jamOperasional :", typeof kedai.jamOperasional);
console.log("typeof menu           :", typeof menu);
console.log("typeof catatan trx[0] :", typeof transaksi[0].catatan);
console.log("catatanKasir          :", catatanKasir);

// =============jawaban pertanyaan===========

// 1. nomorWhatsApp disimpan sebagai string karena nomor telepon tidak pernah
//    dihitung secara matematis, dan bisa diawali "0" atau "+62". Jika disimpan sebagai
//    number, "0" di depan akan hilang dan tanda "+" tidak valid.

// 2. website diisi null karena properti itu memang ada tapi belum diisi
//    (disengaja). catatanKasir dibiarkan tanpa nilai karena kita belum tahu
//    isinya (nilai default undefined). null = sengaja dikosongkan;
//    undefined = belum diberi nilai sama sekali.

// 3. menu[6] menghasilkan undefined, karena array hanya berisi 6 elemen
//    dengan indeks 0–5. Mengakses indeks di luar jangkauan tidak error,
//    hanya mengembalikan undefined.

// 4. typeof menu = "object". Array di JavaScript adalah object khusus
//    dengan perilaku tambahan (length, method push, dsb).

// 5. Menu dibuat array karena berisi BANYAK item sejenis dengan urutan
//    indeks. Kedai dibuat object karena mewakili SATU entitas dengan
//    properti bernama (nama, kota, dsb).

// ============= bagian 3 Perhitungan Transaksi dan Laporan Harian =============

