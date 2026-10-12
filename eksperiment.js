/* =========================================================================
   Nama        : (isi namamu)
   Tanggal     : 2026-10-12
   Tujuan      : Mencatat data kedai, menu, dan transaksi pelanggan,
                 lalu menghitung total bayar, kembalian, dan laporan harian
                 untuk Kedai Senja. Semua perhitungan dilakukan inline
                 tanpa memakai function.
   ========================================================================= */

// =========================================================================
// === BAGIAN 2: DATA KEDAI ===
// =========================================================================

const kedai = {
    nama: "Kedai Senja",
    pemilik: "Ibu Rina",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    sedangBuka: true,
    nomorWhatsApp: "08123456789",
    website: null,
    jamOperasional: { buka: "08:00", tutup: "22:00" }
};

const menu = [
    { nama: "Kopi Susu",     kategori: "Minuman", harga: 18000, stok: 20, tersedia: true  },
    { nama: "Es Teh Manis",  kategori: "Minuman", harga: 7500,  stok: 30, tersedia: true  },
    { nama: "Roti Bakar",    kategori: "Makanan", harga: 15000, stok: 15, tersedia: true  },
    { nama: "Nasi Goreng",   kategori: "Makanan", harga: 25000, stok: 10, tersedia: true  },
    { nama: "Matcha Latte",  kategori: "Minuman", harga: 22000, stok: 0,  tersedia: false },
    { nama: "Pisang Goreng", kategori: "Makanan", harga: 10000, stok: 25, tersedia: true  }
];

const transaksi = [
    {
        kode: "TRX-001",
        pelanggan: "Budi",
        sudahMember: true,
        uangBayar: 100000,          // cukup
        catatan: "Tanpa gula",
        pesanan: [
            { indeksMenu: 0, jumlah: 2 },
            { indeksMenu: 2, jumlah: 1 }
        ]
    },
    {
        kode: "TRX-002",
        pelanggan: "Sari",
        sudahMember: false,
        uangBayar: 60000,           // cukup
        catatan: null,
        pesanan: [
            { indeksMenu: 1, jumlah: 3 },
            { indeksMenu: 3, jumlah: 1 }
        ]
    },
    {
        kode: "TRX-003",
        pelanggan: "Andi",
        sudahMember: false,
        uangBayar: 20000,           // kurang
        catatan: null,
        pesanan: [
            { indeksMenu: 3, jumlah: 2 },
            { indeksMenu: 5, jumlah: 1 }
        ]
    }
];

// --- Cetak data dasar (Bagian 2) ---
console.log("Nama kedai (dot)      :", kedai.nama);
console.log("Kota (bracket)        :", kedai["kota"]);
console.log("Jam tutup             :", kedai.jamOperasional.tutup);
console.log("Menu pertama          :", menu[0].nama);
console.log("Menu terakhir         :", menu[menu.length - 1].nama);
console.log("Pelanggan trx kedua   :", transaksi[1].pelanggan);
console.log("Menu item-2 trx-3     :", menu[transaksi[2].pesanan[1].indeksMenu].nama);
console.log("typeof tahunBerdiri   :", typeof kedai.tahunBerdiri);
console.log("typeof sedangBuka     :", typeof kedai.sedangBuka);
console.log("typeof website        :", typeof kedai.website);
console.log("typeof jamOperasional :", typeof kedai.jamOperasional);
console.log("typeof menu           :", typeof menu);
console.log("typeof catatan trx[0] :", typeof transaksi[0].catatan);

let catatanKasir;
console.log("catatanKasir          :", catatanKasir);

// =========================================================================
// === BAGIAN 3: PERHITUNGAN TRANSAKSI (INLINE, TANPA FUNCTION) ===
// =========================================================================

// ---------- TRX-001 ----------
// Subtotal: jumlahkan harga × jumlah tiap pesanan secara manual.
const subtotal1 = (menu[0].harga * 2) + (menu[2].harga * 1);
// = (18000 × 2) + (15000 × 1) = 36000 + 15000 = 51000

const potongan1 = transaksi[0].sudahMember ? subtotal1 * 0.10 : 0;
// = 51000 × 0.10 = 5100

const pajak1 = (subtotal1 - potongan1) * 0.11;
// = (51000 − 5100) × 0.11 = 45900 × 0.11 = 5049

const totalBayar1 = subtotal1 - potongan1 + pajak1;
// = 51000 − 5100 + 5049 = 50949

const kembalian1 = transaksi[0].uangBayar - totalBayar1;
// = 100000 − 50949 = 49051

const uangCukup1 = transaksi[0].uangBayar >= totalBayar1;
// = 100000 >= 50949 → true

const item1 = 2 + 1;   // jumlah item TRX-001 = 3
const gratisAntar1 = subtotal1 >= 100000 || item1 >= 5;
// = 51000 >= 100000 || 3 >= 5 = false || false = false

const semuaTersedia1 = menu[0].tersedia && menu[2].tersedia;
// = true && true = true

const sisaSetelah50rb_1 = kembalian1 >= 0 ? kembalian1 % 50000 : null;
// = 49051 % 50000 = 49051
const sisaSetelah20rb_1 = sisaSetelah50rb_1 !== null ? sisaSetelah50rb_1 % 20000 : null;
// = 49051 % 20000 = 9051

// ---------- TRX-002 ----------
const subtotal2 = (menu[1].harga * 3) + (menu[3].harga * 1);
// = (7500 × 3) + (25000 × 1) = 22500 + 25000 = 47500

const potongan2 = transaksi[1].sudahMember ? subtotal2 * 0.10 : 0;
// = 0 (bukan member)

const pajak2 = (subtotal2 - potongan2) * 0.11;
// = 47500 × 0.11 = 5225

const totalBayar2 = subtotal2 - potongan2 + pajak2;
// = 47500 + 5225 = 52725

const kembalian2 = transaksi[1].uangBayar - totalBayar2;
// = 60000 − 52725 = 7275

const uangCukup2 = transaksi[1].uangBayar >= totalBayar2;
// = 60000 >= 52725 → true

const item2 = 3 + 1;   // = 4
const gratisAntar2 = subtotal2 >= 100000 || item2 >= 5;
// = false || false = false

const semuaTersedia2 = menu[1].tersedia && menu[3].tersedia;
// = true && true = true

const sisaSetelah50rb_2 = kembalian2 >= 0 ? kembalian2 % 50000 : null;
// = 7275 % 50000 = 7275
const sisaSetelah20rb_2 = sisaSetelah50rb_2 !== null ? sisaSetelah50rb_2 % 20000 : null;
// = 7275 % 20000 = 7275

// ---------- TRX-003 ----------
const subtotal3 = (menu[3].harga * 2) + (menu[5].harga * 1);
// = (25000 × 2) + (10000 × 1) = 50000 + 10000 = 60000

const potongan3 = transaksi[2].sudahMember ? subtotal3 * 0.10 : 0;
// = 0 (bukan member)

const pajak3 = (subtotal3 - potongan3) * 0.11;
// = 60000 × 0.11 = 6600

const totalBayar3 = subtotal3 - potongan3 + pajak3;
// = 60000 + 6600 = 66600

const kembalian3 = transaksi[2].uangBayar - totalBayar3;
// = 20000 − 66600 = −46600 (negatif → uang kurang)

const uangCukup3 = transaksi[2].uangBayar >= totalBayar3;
// = false

const item3 = 2 + 1;   // = 3
const gratisAntar3 = subtotal3 >= 100000 || item3 >= 5;
// = false || false = false

const semuaTersedia3 = menu[3].tersedia && menu[5].tersedia;
// = true && true = true

// Kembalian negatif → sisa dianggap null (tidak dihitung pecahan).
const sisaSetelah50rb_3 = kembalian3 >= 0 ? kembalian3 % 50000 : null;
const sisaSetelah20rb_3 = sisaSetelah50rb_3 !== null ? sisaSetelah50rb_3 % 20000 : null;

// =========================================================================
// === LAPORAN HARIAN ===
// =========================================================================

let pendapatanHarian = 0;
pendapatanHarian += totalBayar1;
pendapatanHarian += totalBayar2;
pendapatanHarian += totalBayar3;
// = 50949 + 52725 + 66600 = 170274

let jumlahTransaksi = 0;
jumlahTransaksi++;
jumlahTransaksi++;
jumlahTransaksi++;
// = 3

const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;
// = 170274 / 3 = 56758

const selisihTerbesar =
    Math.max(totalBayar1, totalBayar2, totalBayar3) -
    Math.min(totalBayar1, totalBayar2, totalBayar3);
// = 66600 − 50949 = 15651

const persentaseTransaksiPertama = (totalBayar1 / pendapatanHarian) * 100;
// = (50949 / 170274) × 100 ≈ 29.92%

const hargaKopiTigaBulan = menu[0].harga * (1.05 ** 3);
// = 18000 × 1.157625 = 20837.25

// =========================================================================
// === CETAK LAPORAN ===
// =========================================================================

console.log("\n===== RINGKASAN TRANSAKSI =====");

console.log(`Kode       : ${transaksi[0].kode}`);
console.log(`Pelanggan  : ${transaksi[0].pelanggan} (${transaksi[0].sudahMember ? "Member" : "Non-Member"})`);
console.log(`Subtotal   : Rp ${subtotal1}`);
console.log(`Potongan   : Rp ${potongan1}`);
console.log(`Pajak 11%  : Rp ${pajak1}`);
console.log(`Total Bayar: Rp ${totalBayar1}`);
console.log(`Kembalian  : Rp ${kembalian1}`);
console.log(`Uang Cukup : ${uangCukup1}`);
console.log(`Gratis Antar: ${gratisAntar1}`);
console.log(`Semua Menu Tersedia: ${semuaTersedia1}`);
console.log(`Sisa setelah 50rb: ${sisaSetelah50rb_1}, setelah 20rb: ${sisaSetelah20rb_1}`);

console.log("\n--- TRX-002 ---");
console.log(`Pelanggan  : ${transaksi[1].pelanggan} | Subtotal: ${subtotal2} | Total: ${totalBayar2} | Kembalian: ${kembalian2} | Cukup: ${uangCukup2} | GratisAntar: ${gratisAntar2} | Sisa50rb: ${sisaSetelah50rb_2} | Sisa20rb: ${sisaSetelah20rb_2}`);

console.log("\n--- TRX-003 ---");
console.log(`Pelanggan  : ${transaksi[2].pelanggan} | Subtotal: ${subtotal3} | Total: ${totalBayar3} | Kembalian: ${kembalian3} | Cukup: ${uangCukup3} | GratisAntar: ${gratisAntar3}`);

console.log("\n===== LAPORAN HARIAN KEDAI SENJA =====");
console.log(`Nama Kedai          : ${kedai.nama}`);
console.log(`Pendapatan Harian   : Rp ${pendapatanHarian}`);
console.log(`Jumlah Transaksi    : ${jumlahTransaksi}`);
console.log(`Rata-rata/Transaksi : Rp ${rataRataPendapatan}`);
console.log(`Selisih Terbesar    : Rp ${selisihTerbesar}`);
console.log(`% Transaksi Pertama : ${persentaseTransaksiPertama.toFixed(2)}%`);
console.log(`Harga Kopi 3 Bulan  : Rp ${hargaKopiTigaBulan}`);
console.log("=====================================");


// =========================================================================
// CATATAN
// =========================================================================
// Versi ini TIDAK memakai function sama sekali. Subtotal tiap transaksi
// dihitung dengan mengalikan harga menu × jumlah secara manual, berdasarkan
// indeksMenu yang sudah ditentukan di data transaksi.

// Konsekuensi:
// - Jika data pesanan berubah (misal jumlah atau indeks menu), subtotal
//   harus dihitung ulang MANUAL.
// - Semua "semuaTersedia" juga dicek dengan && manual berdasarkan menu
//   yang dipesan.

// Kalau ingin lebih ringkas, gunakan function (lihat versi sebelumnya).
// Tapi versi ini membuktikan kita benar-benar paham alur perhitungannya.
