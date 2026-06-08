function semakIC() {
    let ic = document.getElementById("ic").value;

    if(ic == "") {
        alert("Sila masukkan nombor kad pengenalan.");
    }

    else if (isNaN(ic)) {
        alert("Kad pengenalan mesti nombor sahaja.");
    }

    else if (ic.length != 12) {
        alert("Kad pengenalan mesti 12 digit.");
    }
    else {
        alert("Kad pengenalan sah.");
    }
}