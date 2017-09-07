var ccImgs = document.querySelectorAll(".card-holder .card");
for (let i = 0; i < ccImgs.length; i++) {
    ccImgs[i].className += " t" + (i + 1);
    ccImgs[i].onmouseover = function() {
        ccImgs[i].classList.add("h1");
        for (let k = 1; k < ccImgs.length; k++) {
            if (ccImgs[i + k]) {
                ccImgs[i + k].classList.add("h" + (k + 1));
            }
            if (ccImgs[i - k]) {
                ccImgs[i - k].classList.add("h" + (k + 1));
            }
        }
    }
    ccImgs[i].onmouseout = function() {
        for (let j = 0; j < ccImgs.length; j++) {
            ccImgs[j].className = ccImgs[j].className.replace(/\bh.*?\b/g, '');
        }
    }
}
