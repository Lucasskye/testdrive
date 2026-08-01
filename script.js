// =========================
// ELEMENT
// =========================

const gift = document.getElementById("gift");
const hero = document.querySelector(".hero");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");
const loading = document.getElementById("loading");

// =========================
// LOADING
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.transition = ".5s";

        setTimeout(() => {

            loading.style.display = "none";

        }, 500);

    }, 800);

});

// =========================
// BUKA KADO
// =========================

gift.addEventListener("click", () => {

    // Animasi gift

    gift.style.transition = ".6s";

    gift.style.transform = "scale(1.2) rotate(10deg)";

    gift.style.opacity = "0";

    // Musik

    music.play().catch(() => {});

    setTimeout(() => {

        hero.style.display = "none";

        content.classList.remove("hidden");

        content.classList.add("fade");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },700);

});

// =========================
// ANIMASI FOTO SAAT SCROLL
// =========================

const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const index = [...cards].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }, index * 180);

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    observer.observe(card);

});

// =========================
// PARALLAX HALUS
// =========================

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    document.body.style.backgroundPositionY = -(y*0.2)+"px";

});
