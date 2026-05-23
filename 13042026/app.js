function generarQR() {
    let input1 = document.getElementById("nombre").value.trim();
    let input2 = document.getElementById("telefono").value.trim();
    let input3 = document.getElementById("correo").value.trim();
    let input4 = document.getElementById("institucion").value.trim();
    const textoCompleto = input1 + "," + input2 + "," + input3 + "," + input4;
    console.log(textoCompleto);
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(textoCompleto);

    let qrContainer = document.getElementById("qr");
    qrContainer.innerHTML = "";

    let qrImage = document.createElement("img");
    qrImage.id = "qrImage";
    qrImage.style.cursor = "pointer";   
    qrImage.onclick = generarQR;
    qrImage.src = url; 
    qrImage.alt = "Código QR generado";

    document.getElementById("qr").appendChild(qrImage);

}


