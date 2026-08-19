// ================================
// FLOATING HEARTS
// ================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);


// ================================
// SURPRISE BUTTON
// ================================

const loveButton =
    document.getElementById("loveButton");

const secretMessage =
    document.getElementById("secretMessage");

loveButton.addEventListener("click", () => {

    secretMessage.style.display = "block";

    loveButton.style.display = "none";

    createExplosion();

});


// ================================
// HEART EXPLOSION
// ================================

function createExplosion() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "55%";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "2000";

        document.body.appendChild(heart);

        const x =
            (Math.random() - 0.5) * 700;

        const y =
            (Math.random() - 0.5) * 600;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}


// ================================
// SCROLL REVEAL
// ================================

const cards =
    document.querySelectorAll(".reason-card");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },
        {
            threshold: 0.2
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "0.8s ease";

    observer.observe(card);

});