const images = [
    "halong.PNG", 
    "hanoiskyline.PNG", 
    "oldquarter.jpg",
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);



