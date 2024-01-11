function establecer_colores() {
    document.getElementById("contenedor_citrica").style.backgroundColor = "#323285";
    document.getElementById("contenedor_floral").style.backgroundColor = "#ff2f00";
    document.getElementById("contenedor_amaderada").style.backgroundColor = "#71a162";
}

function establecer_colores_esencias() {
    var esencias = document.getElementsByClassName("esencias_citricas_contenedor");
    for (i = 0; i < esencias.length; i++) {
        esencias[i].style.backgroundColor = "#323285";
    }
    esencias = document.getElementsByClassName("esencias_florales_contenedor");
    for (i = 0; i < esencias.length; i++) {
        esencias[i].style.backgroundColor = "#ff2f00";
    }
    esencias = document.getElementsByClassName("esencias_amaderadas_contenedor");
    for (i = 0; i < esencias.length; i++) {
        esencias[i].style.backgroundColor = "#71a162";
    }
}

function mostrar_esencias(cod_esencia)
{
    var esencias = document.getElementsByClassName(cod_esencia);
    for (i = 0; i < esencias.length; i++) {
        esencias[i].style.display = "flex";
    }
}

function ocultar_esencias(cod_esencia) {
    var esencias = document.getElementsByClassName(cod_esencia);
    for (i = 0; i < esencias.length; i++) {
        esencias[i].style.display = "none";
    }
}

function seleccionar_esencia(cod_base) {
    establecer_colores();
    if (cod_base == 'c') {
        document.getElementById("base_aplicada").innerHTML = "CITRICA";
        document.getElementById("base_aplicada").style.backgroundColor = "#323285";
        document.getElementById("base_aplicada").style.color = "white";
        document.getElementById("contenedor_citrica").style.backgroundColor = "#a5a5e9";
        mostrar_esencias("esencias_citricas");
        ocultar_esencias("esencias_florales");
        ocultar_esencias("esencias_amaderadas");
    }
    else if (cod_base == 'f') {
        document.getElementById("base_aplicada").innerHTML = "FLORAL";
        document.getElementById("base_aplicada").style.backgroundColor = "#ff2f00";
        document.getElementById("base_aplicada").style.color = "white";
        document.getElementById("contenedor_floral").style.backgroundColor = "#e9927e";
        ocultar_esencias("esencias_citricas");
        mostrar_esencias("esencias_florales");
        ocultar_esencias("esencias_amaderadas");
    }
    else if (cod_base == 'a') {
        document.getElementById("base_aplicada").innerHTML = "AMADERADA";
        document.getElementById("base_aplicada").style.backgroundColor = "#71a162";
        document.getElementById("base_aplicada").style.color = "white";
        document.getElementById("contenedor_amaderada").style.backgroundColor = "#9ebf94";
        ocultar_esencias("esencias_citricas");
        ocultar_esencias("esencias_florales");
        mostrar_esencias("esencias_amaderadas");
    }
    
}

function aplicar_esencia(cod_esencia) {
    document.getElementById("img_perfume").src = "img/" + cod_esencia + ".png";
    var codigo = cod_esencia.substring(0, 1);
    establecer_colores_esencias();
    if (codigo == 'c') {                            
        document.getElementById(cod_esencia).style.backgroundColor = "#a5a5e9";
    }
    if (codigo == 'f') {
        document.getElementById(cod_esencia).style.backgroundColor = "#e9927e";
    }
    if (codigo == 'a') {
        document.getElementById(cod_esencia).style.backgroundColor = "#9ebf94";
    }

}