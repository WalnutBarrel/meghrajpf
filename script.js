/* -------------------- Typing Effect -------------------- */
const texts = ["Software Developer", "Creative Developer", "UI/UX Designer"];
let count = 0, idx = 0;
const speed = 120;
const typingText = document.getElementById("typingText");

function typingEffect() {
    if (idx < texts[count].length) {
        typingText.innerHTML += texts[count][idx];
        idx++;
        setTimeout(typingEffect, speed);
    } else {
        setTimeout(() => {
            typingText.innerHTML = "";
            idx = 0;
            count = (count + 1) % texts.length;
            typingEffect();
        }, 1500);
    }
}
typingEffect();

/* -------------------- Roadmap Scroll Animation -------------------- */
const steps = document.querySelectorAll(".step");
window.addEventListener("scroll", () => {
    steps.forEach(step => {
        const pos = step.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) step.classList.add("visible");
    });
});

/* -------------------- Dark / Light Mode -------------------- */
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

/* -------------------- Particle Background -------------------- */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];
let mouse = { x: undefined, y: undefined };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;

    for (let i = 0; i < 5; i++) particles.push(new Particle(mouse.x, mouse.y));
});

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = "rgba(0, 234, 255, 0.8)";
}

Particle.prototype.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size -= 0.05;
};

Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
};

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => p.size > 0.2);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
