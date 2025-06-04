const trailer = document.querySelector('#trailer');
trailer.addEventListener('click', modalInteract);

const closeTrailer = document.querySelector('#closeTrailer');
closeTrailer.addEventListener('click', modalInteract);

function modalInteract() {
    const modal = document.querySelector('.modal');

    const styleModal = modal.style.display;

    if (styleModal === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}