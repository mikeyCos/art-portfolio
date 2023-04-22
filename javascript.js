// Article helped me figure out current scoll location
    // https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc
let topButton = document.getElementById('top-btn');
topButton.addEventListener('click', goTop);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function goTop()  {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let galleryImages = document.querySelectorAll('.gallery-image');
let getLatestOpenedImage;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementSRC = image.getAttribute('src');
            let getFilePath = getElementSRC.split('./pictures/thumbnails/');
            let getFileName = getFilePath[1];

            console.log(index);
            getLatestOpenedImage = index;
            console.log(getLatestOpenedImage);

            let container = document.body;
            let newImageWindow = document.createElement('div');
            container.appendChild(newImageWindow);
            newImageWindow.setAttribute('class', 'image-window');
            newImageWindow.setAttribute('onclick', 'closeImage()');

            let newImage = document.createElement('img');
            newImageWindow.appendChild(newImage);
            newImage.setAttribute('src', './pictures/originals/' + getFileName);
            newImage.setAttribute('id', 'current-image');

            newImage.onload = function() {
                let imageWidth = this.width;
                let imageWindowDifference = ((windowWidth - imageWidth) / 2) - 80;

                let newNextBtn = document.createElement('a');
                let btnNextText = document.createTextNode('NEXT');
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute('class', 'img-btn-next');
                newNextBtn.setAttribute('onclick', 'changeImage(1)');
                newNextBtn.style.cssText = `right: ${imageWindowDifference}px`;

                let newBackBtn = document.createElement('a');
                let btnBackText = document.createTextNode('BACK');
                newBackBtn.appendChild(btnBackText);
                container.appendChild(newBackBtn);
                newBackBtn.setAttribute('class', 'img-btn-back');
                newBackBtn.setAttribute('onclick', 'changeImage(0)');
                newBackBtn.style.cssText = `left: ${imageWindowDifference}px`;
            }
        }
    });
}

function closeImage() {
    document.querySelector('.image-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-back').remove();
}

function changeImage(changeDirection) {
    document.querySelector('#current-image').remove();
    let getImageWindow = document.querySelector('.image-window');
    let newImage = document.createElement('img');
    getImageWindow.appendChild(newImage);

    let calcNewImage;
    if (changeDirection) {
        //to the right
        calcNewImage = getLatestOpenedImage + 1;
        if (calcNewImage > galleryImages.length - 1) {
            calcNewImage = 0;
        }
    } else {
        //to the left
        calcNewImage = getLatestOpenedImage - 1;
        if (calcNewImage < 0) {
            calcNewImage = galleryImages.length - 1;
        }
    }

    newImage.setAttribute('src', `./pictures/originals/${calcNewImage}.jpg`);
    newImage.setAttribute('id', 'current-image');

    getLatestOpenedImage = calcNewImage;

    newImage.onload = function() {
        let imageWidth = this.width;
        let imageWindowDifference = ((windowWidth - imageWidth) / 2) - 80;
        
        let nextBtn = document.querySelector('.img-btn-next');
        nextBtn.style.cssText = `right: ${imageWindowDifference}px`;

        let backBtn = document.querySelector('.img-btn-back');
        backBtn.style.cssText = `left: ${imageWindowDifference}px`;
    }
}