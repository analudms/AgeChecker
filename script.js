const button = document.getElementById('button')


function verificar() {
    let data = new Date()
    let year = data.getFullYear()
    let formYear = document.getElementById('txtAno')
    let res = document.querySelector('div#res')

    if(formYear.value.length == 0 || formYear.value > year){
        alert('teste')
    } else {
        let formSex = document.getElementsByName('radSex')
        let age = year - Number(formYear.value)

        let sex = ''

        let img =document.createElement('img')
        img.setAttribute('id', 'foto')

        if(formSex[0].checked){
            sex = 'man'
            if(age >= 0 && age < 10){
                img.setAttribute('src', './assets/menino-crianca.jpg')
            }else if (age < 21){
                img.setAttribute('src', './assets/jovem-homem.jpg')
            }else if (age < 50){
                img.setAttribute('src', './assets/homem-adulto.jpg')
            } else {
                img.setAttribute('src', './assets/idoso.jpg')
            }

        }else if(formSex[1].checked){
            sex = 'woman'
            if(age >= 0 && age < 10){
                img.setAttribute('src', './assets/menina-crianca.jpg')
            }else if (age < 21){
                img.setAttribute('src', './assets/jovem-mulher.jpg')
            }else if (age < 50){
                img.setAttribute('src', './assets/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', './assets/idosa.jpg')
            }
        }
        res.innerHTML = `We detected a ${age} year old ${sex}!`
        res.appendChild(img)
    }
}
 button.addEventListener('click', verificar)
