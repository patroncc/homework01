document.addEventListener("DOMContentLoaded", function() {
    let hedefMiktar = 800000; // Belirlenen hedef miktar (örneğin 800000 TL)
    let toplananYardimMiktari = 200000; // Başlangıçta toplanan toplam yardım miktarı (örneğin 15000 TL)

    // Yüzdeyi hesapla ve güncelle
    updatePercentage();

    function updatePercentage() {
        let yuzde = (toplananYardimMiktari / hedefMiktar) * 100;

        // Yüzde metnini güncelle
        document.querySelector(".percentage-text").textContent = yuzde.toFixed(2) + "%";
    }

    // Örneğin bir düğme tıklamasıyla toplanan yardım miktarını arttırabiliriz
    document.getElementById("arttir-button").addEventListener("click", function() {
        toplananYardimMiktari += 5000; // Örneğin 5000 TL artış
        updatePercentage(); // Yüzdeyi güncelle
    });
});
