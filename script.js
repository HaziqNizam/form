$(document).ready(function() {
    $("semak").click(function() 
    {
        let ic = $("#ic").val();

        if (ic == "") {
            alert("Sila masukkan nombor kad pengenalan.");
        }
        else if (isNaN(ic)) {
            alert("Kad pengenalan mestilah nombor sahaja.");
        }
        else if (ic.length != 12) {
            alert("Kad pengenalan mestilah 12 digit.");
        }
        else {
            alert("Kad pengenalan sah.");
        }
    });
});