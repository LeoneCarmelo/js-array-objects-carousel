/* Consegna:
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. */
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* Milestone 0:

Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider. */

// create img tag
//const imageEl = document.createElement('img') 
// set src of the tag selecting the first image of the images Array
//image.src = `./assets/${images[0].image}` 
//import container from DOM
const containerEl = document.querySelector('.container')
//append the iage on the container
//containerEl.append(image)


//Milestone 1 e 2


// Select the active image
let activeImage = 0
let image = ''
let title = ''
let text = ''
const pictures = images.forEach((element, index) => {
    //get image
    image += `<img src="./assets/${element.image}" class="${index === activeImage ? 'visible' : ''}">`
    //get title
    title += `<span class="${index === activeImage ? 'visible' : ''}">${element.title}</span>`
    //get text
    text += `<span  class="text ${index === activeImage ? 'visible' : ''}">${element.text}</span>`
    //print all to DOM
    containerEl.innerHTML = image
    containerEl.insertAdjacentHTML('afterbegin', title)
    containerEl.insertAdjacentHTML('beforeend', text)
});

// create arrow Left
const arrowLeft = document.createElement('button')
arrowLeft.style.top = '50%'
arrowLeft.style.left = '0'
arrowLeft.style.zIndex = '1'
arrowLeft.style.rotate = '-90deg'
arrowLeft.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
containerEl.insertAdjacentElement('afterbegin', arrowLeft)

// create arrow Right
const arrowRight = document.createElement('button')
arrowRight.style.top = '50%'
arrowRight.style.right = '0'
arrowRight.style.zIndex = '1'
arrowRight.style.rotate = '90deg'
arrowRight.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
containerEl.insertAdjacentElement('beforeend', arrowRight)


//listen for click Right
arrowRight.addEventListener('click', function() {
    //select all the image
    const contImage = document.querySelectorAll('.container > img')
    //select the current image
    const currentImage = contImage[activeImage]
    //remove visible class
    currentImage.classList.remove('visible')
    // select the title tag
    const titleTag = document.querySelectorAll('.container > span')
    // select the current title
    const currentTitle = titleTag[activeImage]
    //remove visible class
    currentTitle.classList.remove('visible')
    // select the text tag
    const textTag = document.querySelectorAll('.container > span.text')
    //select the current text
    const currentText = textTag[activeImage]
    //remove visible class
    currentText.classList.remove('visible')
    //select all the container of the tiny image
    const allContImages = document.querySelectorAll('#thumbnails > .cont-tiny-images')
    //select the current container of the tiny image
    let currentContImages = allContImages[activeImage]
    //remove selected class
    currentContImages.classList.remove('selected')
    //increase activeImage variable
    if(activeImage === images.length - 1){
        activeImage = 0
    } else {
        activeImage++
    }
    //create another variable for the next image
    const nextImage = contImage[activeImage]
    // add visible class to nextImage
    nextImage.classList.add('visible')
    //create another cariable for the text
    const nextText = textTag[activeImage]
    //add visible class
    nextText.classList.add('visible')
    //create another variable for the title text
    const nextTitle = titleTag[activeImage]
    //add visible class
    nextTitle.classList.add('visible')
    //create another variable for the next contImage
    const nextContImage = allContImages[activeImage]
    // add selected class to the nextContImage
    nextContImage.classList.add('selected')
})

//listen for click Left
arrowLeft.addEventListener('click', function(){     
    //select all the image
    const contImage = document.querySelectorAll('.container > img')
    //select the current image
    const currentImage = contImage[activeImage]
    //remove visible class
    currentImage.classList.remove('visible')
    // select the title tag
    const titleTag = document.querySelectorAll('.container > span')
    // select the current title
    const currentTitle = titleTag[activeImage]
    //remove visible class
    currentTitle.classList.remove('visible')
    // select the text tag
    const textTag = document.querySelectorAll('.container > span.text')
    //select the current text
    const currentText = textTag[activeImage]
    //remove visible class
    currentText.classList.remove('visible')
    //select all the container of the tiny image
    const allContImages = document.querySelectorAll('#thumbnails > .cont-tiny-images')
    //select the current container of the tiny image
    let currentContImages = allContImages[activeImage]
    //remove selected class
    currentContImages.classList.remove('selected')
    //Decraese activeImage
    if (activeImage === 0) {
        activeImage = images.length - 1
    } else {
        activeImage--
    }
    //create another variable for the next image
    const nextImage = contImage[activeImage]
    // add visible class to nextImage
    nextImage.classList.add('visible')
    //create another cariable for the text
    const nextText = textTag[activeImage]
    //add visible class
    nextText.classList.add('visible')
    //create another variable for the title text
    const nextTitle = titleTag[activeImage]
    //add visible class
    nextTitle.classList.add('visible')
    //create another variable for the next contImage
    const nextContImage = allContImages[activeImage]
    // add selected class to the nextContImage
    nextContImage.classList.add('selected')
})

//create thumbnails
const thumbnails = document.createElement('div')
thumbnails.id = 'thumbnails'
containerEl.insertAdjacentElement('afterbegin', thumbnails)


//create container tiny images
let tinyPictures = images.forEach(element => {
    const contTinyImages = document.createElement('div')
    contTinyImages.classList.add('cont-tiny-images')
    contTinyImages.style.backgroundImage = `url(../assets/${element.image})`
    thumbnails.insertAdjacentElement('beforeend', contTinyImages)
});

//select all the container of the tiny image
const allContImages = document.querySelectorAll('#thumbnails > .cont-tiny-images')
//select the current container of the tiny image
let currentContImages = allContImages[activeImage]
currentContImages.classList.add('selected')


//Add Bonus 2
let autoplay = setInterval(function() {
    arrowRight.click()
}, 3000)

//Add Bonus 3
//create button to stop autoplay
const btnStop = document.createElement('button')
btnStop.textContent = 'Stop'
btnStop.classList.add('stop')
//print button to Dom
containerEl.insertAdjacentElement('afterend', btnStop)


//create button for reverse autoplay
const reverse = document.createElement('button')
reverse.textContent = 'Reverse Autoplay'
reverse.classList.add('reverse')
//print button to DOM
containerEl.insertAdjacentElement('afterend', reverse)

let reverseAutoplay
reverse.addEventListener('click', function() {
    reverseAutoplay = setInterval(function() {
        arrowLeft.click()
    }, 3000)
})


btnStop.addEventListener('click', function() {
    clearInterval(autoplay)
    clearInterval(reverseAutoplay)
})