let currentPage = window.location.pathname;
let navLinks = document.querySelectorAll('.nav-items a');
navLinks.forEach(function(link) {
    if (currentPage === link.pathname) {
        link.setAttribute('class', 'active');
    }
});

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

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let images = document.querySelectorAll('.gallery-image');
let windowWidth = window.innerWidth;
let currentImageName;
let lastImage;

images.forEach(function(image, index) {
    image.onclick = function() {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';

        // debugger
        let imageSource = image.getAttribute('src');
        let imageName = imageSource.substring(imageSource.lastIndexOf('/') + 1);

        lastImage = images.length - index - 1;
        console.log(index);
        console.log(`Last image: ${lastImage}`);

        let modal = document.createElement('div');
        modal.setAttribute('class', 'modal');
        document.body.appendChild(modal);

        let modalContainer = document.createElement('div');
        modalContainer.setAttribute('class', 'modal-container');
        modal.appendChild(modalContainer)

        let modalImage = document.createElement('img');
        modalImage.setAttribute('class', 'modal-image');
        modalImage.setAttribute('src', `./pictures/originals/${imageName}`);
        modalContainer.appendChild(modalImage);

        document.addEventListener('keydown', getKeys);
        
        modalImage.onload = function() {
            // debugger
            let closeBtn = document.createElement('div');
            closeBtn.textContent = '\u{000D7}';
            closeBtn.setAttribute('class', 'modal-btn-close');
            closeBtn.setAttribute('onclick', 'closeModal()');

            modalContainer.appendChild(closeBtn);

            let nextBtn = document.createElement('a');
            nextBtn.textContent = '\u{0276F}';
            nextBtn.setAttribute('class', 'modal-btn-next');
            nextBtn.setAttribute('onclick', 'changeImage(1)');
            
            
            let backBtn = document.createElement('a');
            backBtn.textContent = '\u{0276E}';
            backBtn.setAttribute('class', 'modal-btn-back');
            backBtn.setAttribute('onclick', 'changeImage(0)');

            modalContainer.appendChild(nextBtn);
            modalContainer.appendChild(backBtn);

        }

        modal.onload = window.onclick = function(event) {
            if (event.target == modal) {
                modal.remove();
                document.body.style.overflow = 'auto';
                document.body.style.height = 'auto';
            }
        }
    }
});

function closeModal() {
    document.querySelector('.modal').remove();
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';

    document.removeEventListener('keydown', preventTab);
}

function changeImage(direction) {
    // debugger
    document.querySelector('.modal-btn-next').remove();
    document.querySelector('.modal-btn-back').remove();
    document.querySelector('.modal-btn-close').remove();
    let image = document.querySelector('.modal-image');
    let newImage;

    console.log(`newImage: ${newImage}`);
    if (direction === 1) {
        newImage = --lastImage;
        if (lastImage < 0) {
            newImage = images.length - 1;
        }
    } else if (direction === 0){
        //back
        newImage = ++lastImage;
        if (lastImage > images.length - 1) {
            newImage = 0;
        }
    }
    console.log(`newImage: ${newImage}`);
    image.setAttribute('src', `./pictures/originals/${newImage}.jpg`);
    lastImage = newImage;
}

function getKeys(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        console.log('activated')
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    } else if (e.key === 'ArrowLeft') {
        changeImage(0);
    } else if (e.key === 'Escape') {
        closeModal();
    }
}