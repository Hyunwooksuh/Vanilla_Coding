const prevBtn = document.getElementById("btn-move-left");
const nextBtn = document.getElementById("btn-move-right");
const currentSlide = document.getElementById("current-img");

let currentIdx = 1;

function prevSlide() {
    currentIdx--;
    if (currentIdx == 0) {
        currentIdx += 5;
    }
    SlideOnDisplay();
}

function nextSlide() {
    currentIdx++;
    if (currentIdx == 6) {
        currentIdx -= 5;
    }
    SlideOnDisplay();
}

//dot 버튼별로: 1,2,3,4,5
function dotSlide(index) {
    currentIdx = index;
    SlideOnDisplay();
}

function SlideOnDisplay() {
    currentSlide.setAttribute("src", "images/image-" + currentIdx + ".png");
}

//prev 버튼 누르면: 1->5->4->3->2->1
prevBtn.addEventListener("click", prevSlide);

//next 버튼 누르면: 1->2->3->4>-5>-1
nextBtn.addEventListener("click", nextSlide);

