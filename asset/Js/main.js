document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("input");
  const jumlahInput = document.getElementById("jumlah");
  const hargaInput = document.getElementById("harga");
  const resultDiv = document.getElementById("result");
  const totalPenjualanElem = document.getElementById("total-penjualan");
  const kategoriPenjualanElem = document.getElementById("kategori-penjualan");

  // Fungsi untuk menghitung total penjualan
  function hitungTotal() {
    const jumlah = parseFloat(jumlahInput.value) || 0;
    const harga = parseFloat(hargaInput.value) || 0;
    return jumlah * harga;
  }

  // Fungsi untuk menentukan kategori penjualan
  function tentukanKategori(jumlah) {
    return jumlah < 100 ? "Rendah" : "Tinggi";
  }

  // Event listener untuk menentukan kategori ketika formulir dikirim
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const totalPenjualan = hitungTotal();
    const jumlah = parseFloat(jumlahInput.value) || 0;
    const kategoriPenjualan = tentukanKategori(jumlah);

    totalPenjualanElem.textContent = "Total Penjualan: " + totalPenjualan;
    kategoriPenjualanElem.textContent =
      "Kategori Penjualan: " + kategoriPenjualan;

    resultDiv.style.display = "block";
  });
});
