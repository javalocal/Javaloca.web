// Menyeleksi beberapa inputan textfield
const nama = document.getElementById("nama");
const destinasi = document.getElementById("destinasi");
const status = document.getElementById("status");
const jumlah = document.getElementById("jumlah");
const subtotal = document.getElementById("subtotal");
const diskon = document.getElementById("diskon");
const total = document.getElementById("total");
const cetakPesanan = document.querySelector(".output");

// Menyeleksi bagian tombol dan menjalnkan apabila tombol pesan di klik
const tombolPesan = document.getElementById("pesan");
tombolPesan.addEventListener("click", function (e) {
  e.preventDefault();

  // Pengecekan jika inputan-nya kosong atau tidak diisi
  if (nama.value == "" || destinasi.value == "" || status.value == "" || jumlah.value == "") {
    alert("Inputan nilai harus diisi terlebih dahulu!");
  } else {
    // Mengecek jika inputan nama nya sudah tidak kosong
    if (nama.value != "") {
      document.getElementById("namaOutput").innerText = nama.value;
    }

    // Mengecek inputan destinasi sesuai 3 Pilihan: Bromo, Jakarta dan Surabaya
    if (destinasi.value == "Bromo") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else if (destinasi.value == "Borobudur") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else if (destinasi.value == "Gedung Sate") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    }else if (destinasi.value == "Lawang Sewu") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else {
      alert("Pilihan Destinasi hanya Bromo, Borobudur, Gedung Sate, dan Lawang Sewu");
    }

    // Mengecek inputan status sesuai 2 pilihan: Dewasa dan Anak-anak
    if (status.value == "Dewasa") {
      document.getElementById("statusOutput").innerText = status.value;
    } else if (status.value == "Anak-anak") {
      document.getElementById("statusOutput").innerText = status.value;
    } else {
      alert("Pilihan status hanya untuk Dewasa dan Anak-anak saja!");
    }

    let harga = 0;
    let hargaPerTiket = document.getElementById("hargaTiket");

    // Mengecek antara status dan destinasi
    if (destinasi.value == "Bromo" && status.value == "Dewasa") {
      harga = 200000;
      hargaPerTiket.innerText = harga + " (Dua Ratus Ribu)";
    } else if (destinasi.value == "Bromo" && status.value == "Anak-anak") {
      harga = 100000;
      hargaPerTiket.innerText = harga + " (Seratus Ribu)";
    } else if (destinasi.value == "Borobudur" && status.value == "Dewasa") {
      harga = 300000;
      hargaPerTiket.innerText = harga + " (Tiga Ratus Ribu)";
    } else if (destinasi.value == "Borobudur" && status.value == "Anak-anak") {
      harga = 200000;
      hargaPerTiket.innerText = harga + " (Dua Ratus Ribu)";
    } else if (destinasi.value == "Gedung Sate" && status.value == "Dewasa") {
      harga = 400000;
      hargaPerTiket.innerText = harga + " (Empat Ratus Ribu)";
    } else if (destinasi.value == "Gedung Sate" && status.value == "Anak-anak") {
      harga = 300000;
      hargaPerTiket.innerText = harga + " (Tiga Ratus Ribu)";
    } else if (destinasi.value == "Lawang Sewu" && status.value == "Dewasa") {
      harga = 500000;
      hargaPerTiket.innerText = harga + " (Lima Ratus Ribu)";
    } else if (destinasi.value == "Lawang Sewu" && status.value == "Anak-anak") {
      harga = 400000;
      hargaPerTiket.innerText = harga + " (Empat Ratus Ribu)";
    }

    // Mengecek inputan jumlah / tiket jika lebih dari 5 maka akan dikasih diskon, jika dibawah 5 tidak dapat diskon
    // Ubah dulu yang tipe data nya string menjadi number
    const convertToNumber = Number(jumlah.value);
    subtotal.value = harga * convertToNumber;
    document.getElementById("subtotalOutput").innerText = harga * convertToNumber;

    let discount = 0;
    if (convertToNumber >= 6) {
      discount = (subtotal.value / 100) * 15;
    } else if (convertToNumber <= 6) {
      discount = 0;
    }

    document.getElementById("jumlahOutput").innerText = convertToNumber;
    diskon.value = discount;
    document.getElementById("diskonOutput").innerText = discount;

    let totalPaid = subtotal.value - discount;
    total.value = totalPaid;
    document.getElementById("totalOutput").innerText = totalPaid;

    if (nama.value != "" || destinasi.value != "" || status.value != "" || jumlah.value != "") {
      // Mengecek jika user memasukkan nilai 0 pada inputan jumlah tiket
      if (jumlah.value == 0) {
        alert("Jumlah tiket tidak boleh 0");
        cetakPesanan.classList.remove("tampil");
      } else {
        cetakPesanan.classList.add("tampil");
      }
    }
  }
});

// Menyeleksi bagian tombol dan menjalankan apabila tombol hapus di klik
const hapus = document.getElementById("hapus");
hapus.addEventListener("click", function () {
  // Menghapus bagian output pada html
  if (nama.value == "" && destinasi.value == "" && status.value == "" && jumlah.value == "") {
    alert("Data masih kosong, apa yang mau dihapus?");
  } else if (nama.value != "" || destinasi.value != "" || status.value != "" || jumlah.value != "") {
    nama.value = "";
    destinasi.value = "";
    status.value = "";
    jumlah.value = "";
    subtotal.value = "";
    diskon.value = "";
    total.value = "";
    cetakPesanan.classList.remove("tampil");
  }
});