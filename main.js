function tocaSom(idTagAaudio) {
    const elemento =  document.querySelector(idTagAaudio);
    if(elemento != null && elemento.localName ===  "audio" ){ //aqui esta verificando se o elemento nao e nulo e se o elemento a tag é audio 
        elemento.play();
    }else{
        alert('elemento não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const classe = tecla.classList[1];

    const idSom = `#som_${classe}`;

    console.log(idSom);


    //evento quanto clica 
    tecla.onclick = function () { //criada para nao chamar a funcao imediantamente
        tocaSom(idSom);
    };
    //evento quando preciona a tecla
    tecla.onkeydown = function (evento) {
        if (evento.code == "Enter" || evento.code == "Space") {
            listaDeTeclas[contador].classList.add('ativa');
        }
    }
    //evento quando solta a tecla
    tecla.onkeyup = function () {
        listaDeTeclas[contador].classList.remove('ativa');
    }
}

/*while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const classe = tecla.classList[1]

    const idSom = `#som_${classe}`

    console.log(idSom);
    
    tecla.onclick = function(){ //criada para nao chamar a funcao imediantamente
        tocaSom(idSom)
    };
    contador++
}*/