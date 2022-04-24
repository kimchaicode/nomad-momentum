const images = [];
for (let i = 0; i < 12; i++) {
    images.push(`${i}.jpeg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
const bgImage = document.body.style;
bgImage.backgroundImage = `url(img/${chosenImage})`;

