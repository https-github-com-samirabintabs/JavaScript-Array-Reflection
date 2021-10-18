// Apply image onload
$(document).ready(() => {
    newImage();
})

// When new image button clicked
$('.new-img').on('click', (e) => {
    e.preventDefault();
    newImage();
})

// Change image
let source;

function newImage() {

    let width = Math.round($('.image-container').innerWidth());

    source = `https://picsum.photos/${width}/?random&t=${new Date().getTime()}`;
    $('#image-holder').attr("src", source);
}


// Email verification
function emailValidate(input) {
    const mailFormat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)$/;

    if (mailFormat.test(input)) {
        return true;
    } else {
        return false;
    }