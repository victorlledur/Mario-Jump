const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector("h1")
const avisoGameOver = document.querySelector(".aviso-restart")



const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const cloudsPosition = clouds.offsetLeft;

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        clouds.style.left = `${cloudsPosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        gameOver.style.display = "block"

        avisoGameOver.style.display = "block"

        music.pause()
        gameoverSound.play();
        clearInterval(loop)
    }
}, 10);

document.addEventListener("keydown", jump);

document.addEventListener("keydown", event => {
    const { key } = event
    if (key.toLowerCase() === "s") {
      location.reload()
    }
  })

const music = new Audio('./audio/music.mp3');
music.play();
music.loop = true;

const gameoverSound = new Audio('./audio/gameover.mp3');