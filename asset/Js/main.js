document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("input");
  const jumlahInput = document.getElementById("jumlah");
  const hargaInput = document.getElementById("harga");
  const totalInput = document.getElementById("total");
  const kategoriInput = document.getElementById("kategori");

  // Fungsi untuk menghitung total penjualan
  function hitungTotal() {
    const jumlah = parseFloat(jumlahInput.value) || 0;
    const harga = parseFloat(hargaInput.value) || 0;
    const total = jumlah * harga;
    totalInput.value = total;
  }

  // Fungsi untuk menentukan kategori penjualan
  function tentukanKategori() {
    const jumlah = parseFloat(jumlahInput.value) || 0;
    let kategori = "Tinggi";
    if (jumlah < 100) {
      kategori = "Rendah";
    }
    kategoriInput.value = kategori;
  }

  // Event listener untuk menghitung total ketika jumlah atau harga berubah
  jumlahInput.addEventListener("input", hitungTotal);
  hargaInput.addEventListener("input", hitungTotal);

  // Event listener untuk menentukan kategori ketika formulir dikirim
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hitungTotal();
    tentukanKategori();
    alert(
      "Formulir dikirim dengan total penjualan: " +
        totalInput.value +
        " dan kategori: " +
        kategoriInput.value
    );
  });
});
