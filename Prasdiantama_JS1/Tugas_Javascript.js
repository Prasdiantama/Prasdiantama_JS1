//if-else:
let nilai = 60;

if (nilai >= 90) {
  console.log("Selamat Anda Mendapatkan Nilai A");
} else if (nilai >= 80) {
  console.log("Selamat Anda Mendapatkan Nilai B");
} else if (nilai >= 70) {
  console.log("Selamat Anda Mendapatkan Nilai C");
} else {
  console.log("Selamat Anda Mendapatkan Nilai D");
}



//switch case:
let bulan = "Oktober";

switch (hari) {
  case "Agustus":
    console.log("Sekarang bulan Agustus");
    break;
  case "September":
    console.log("Sekarang bulan September");
    break;
  case "Oktober":
    console.log("Sekarang bulan Oktober");
    break;
  default:
    console.log("Bulan tidak dapat terindentifikasi");
}



//for statement:
for (let i = 1; i <= 5; i++) {
    console.log("Nomor urut ke-" + i);
  }
  

//while:
let angka = 1;
while (angka <= 5) {
  console.log("Angka Anda: " + angka);
  angka++;
}


//do-while
let x = 1;
do {
  console.log("Nilai dari variabel x: " + x);
  x++;
} while (x <= 5);



//function:
function kali(a, b) {
    return a * b;
  }
  
  var hasil = kali(5, 3);
  console.log("Hasil dari perkalian: " + hasil);