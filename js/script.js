function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        alert("Suscrito a la Newsletter de Dessense");
        document.form1.text1.focus();
        return true;
    }
    else{
        alert("¡Has ingresado una dirección de correo electrónico no válida!");
        document.form1.text1.focus();
        return false;
    }
}