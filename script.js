document.addEventListener('DOMContentLoaded', function() {
    
    const inputPohon = document.getElementById('inputPohon');
    const hasilPupuk = document.getElementById('hasilPupuk');

    if (inputPohon && hasilPupuk) {
        inputPohon.addEventListener('input', function() {
            let jumlahPohon = parseInt(inputPohon.value);

            // Logika: 1 karung per 100 pohon
            if (jumlahPohon > 0) {
                let hitungKarung = Math.ceil(jumlahPohon / 100);
                hasilPupuk.textContent = hitungKarung;
            } else {
                hasilPupuk.textContent = "0";
            }
        });
        
    } else {
        console.error("Elemen inputPohon atau hasilPupuk tidak ditemukan di HTML!");
    }
});