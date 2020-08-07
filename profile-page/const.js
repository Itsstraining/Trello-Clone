const primary = '#7c4dff'; // the vao header 
const secondary = '3d5afe'; // button
const text = '##eeeeee' // the vao text 
function initFocusButton() {
    let buttonarr = document.getElementsByClassName("bnt-tag");

    console.log(buttonarr);


    buttonarr[0].focus();
}

initFocusButton();