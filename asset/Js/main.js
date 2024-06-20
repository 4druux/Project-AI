document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("input");
  const jumlahInput = document.getElementById("jumlah");
  const hargaInput = document.getElementById("harga");
  const resultDiv = document.getElementById("result");
  const totalPenjualanElem = document.getElementById("total-penjualan");
  const kategoriPenjualanElem = document.getElementById("kategori-penjualan");

  // Fungsi untuk menghitung total penjualan
  function hitungTotal() {
    const jumlah = parseFloat(jumlahInput.value.replace(/\./g, '')) || 0;
    const harga = parseFloat(hargaInput.value.replace(/\./g, '')) || 0;
    return jumlah * harga;
  }

  // Fungsi untuk menentukan kategori penjualan
  function tentukanKategori(jumlah) {
    return jumlah < 100 ? "Rendah" : "Tinggi";
  }

  // Fungsi untuk memformat angka ke format ribuan
  function formatNumber(number) {
    return number.toLocaleString('id-ID');
  }

  // Event listener untuk memformat input jumlah
  jumlahInput.addEventListener('input', function (event) {
    const value = event.target.value.replace(/\./g, '');
    if (!isNaN(value) && value !== '') {
      event.target.value = formatNumber(parseInt(value, 10));
    } else {
      event.target.value = '';
    }
  });

  // Event listener untuk memformat input harga
  hargaInput.addEventListener('input', function (event) {
    const value = event.target.value.replace(/\./g, '');
    if (!isNaN(value) && value !== '') {
      event.target.value = formatNumber(parseInt(value, 10));
    } else {
      event.target.value = '';
    }
  });

  // Event listener untuk menentukan kategori ketika formulir dikirim
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const totalPenjualan = hitungTotal();
    const jumlah = parseFloat(jumlahInput.value.replace(/\./g, '')) || 0;
    const kategoriPenjualan = tentukanKategori(jumlah);

    totalPenjualanElem.textContent = "Total Penjualan: " + totalPenjualan.toLocaleString('id-ID');
    kategoriPenjualanElem.textContent = "Kategori Penjualan: " + kategoriPenjualan;

    resultDiv.style.display = "block";
  });
});