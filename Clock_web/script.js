function carregar()
{
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var tit = window.document.querySelector('#titulo')

    var data = new Date()
    //var hora = data.getHours()
    //var min = data.getMinutes()
    var hora = 24
    var min = 53

    msg.innerHTML = `São ${hora}:${min}`

    if(hora >= 0 && hora <= 12){
        //bom dia
        img.src = "dia.png"
        document.body.style.background = '#3e3324'
        tit.innerHTML = "Bom dia"
    }else if(hora > 12 && hora < 18){
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = '#5d2b11'
        tit.innerHTML = "Boa tarde"
    }else{
        //boa noite
        img.src = "noite.png"
        document.body.style.background = '#0d1020'
        tit.innerHTML = "Boa noite"
    }
}

