// Rumus BMI
function hitungbmi() {
    let berat = document.getElementById("bmiWeight").value;
    let tinggi = document.getElementById("bmiHeight").value / 100;
    let umur = document.getElementById("bmiAge").value;
  
    if (berat === "" || tinggi === "" || umur === "") {
      alert("Masukkan angka yang valid untuk tinggi, berat, dan usia.");
      return;
    }
  
    // Information
    let bmi = berat / (tinggi * tinggi);
    document.getElementById("contenthasil").style.display = "block";
    document.getElementById("contentunderweight").style.display = "none";
    document.getElementById("contentoverweight").style.display = "none";
    document.getElementById("contentnormalweight").style.display = "none";
    document.getElementById("resultsBMI").innerHTML = bmi.toFixed(1).toString();
  
    if (bmi < 18.5) {
      document.getElementById("qualityResults").innerHTML = "Kekurangan Berat Badan";
      document.getElementById("resultsInformation").innerHTML = "Anda kekurangan berat badan";
      document.getElementById("suggestionBMI").innerHTML = "Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
      document.getElementById("qualityBMI").innerHTML = "Hasil BMI < 18.5";
      document.getElementById("contentunderweight").style.display = "block";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      document.getElementById("qualityResults").innerHTML = "Normal (ideal)";
      document.getElementById("resultsInformation").innerHTML = "Anda memiliki berat badan ideal";
      document.getElementById("suggestionBMI").innerHTML = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
      document.getElementById("qualityBMI").innerHTML = "Hasil BMI diantara 18.5 dan 24.9";
      document.getElementById("contentnormalweight").style.display = "block";
    } else if (bmi >= 25 && bmi < 29.9) {
      document.getElementById("qualityResults").innerHTML = "Kelebihan Berat Badan";
      document.getElementById("resultsInformation").innerHTML = "Anda memiliki berat badan berlebih";
      document.getElementById("suggestionBMI").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      document.getElementById("qualityBMI").innerHTML = "Hasil BMI diantara 25 dan 29.9";
      document.getElementById("contentoverweight").style.display = "block";
    } else if (bmi >= 30) {
      document.getElementById("qualityResults").innerHTML = "Kegemukan (Obesitas)";
      document.getElementById("resultsInformation").innerHTML = "Anda berada dalam kategori obesitas";
      document.getElementById("suggestionBMI").innerHTML = "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
      document.getElementById("qualityBMI").innerHTML = "Hasil BMI lebih dari 30";
      document.getElementById("contentoverweight").style.display = "block";
    }
  }
  
  // function button reset
  function clearbmi() {
    document.getElementById("frmbmi").reset();
    document.getElementById("contenthasil").style.display = "none";
    document.getElementById("contentoverweight").style.display = "none";
    document.getElementById("contentunderweight").style.display = "none";
    document.getElementById("contentnormalweight").style.display = "none";
    document.getElementById("qualityResults").innerHTML = "";
    document.getElementById("resultsInformation").innerHTML = "";
    document.getElementById("suggestionBMI").innerHTML = "";
    document.getElementById("qualityBMI").innerHTML = "";
    document.getElementById("resultsBMI").innerHTML = "";
    window.location.href = "#datapengguna";
  }
  