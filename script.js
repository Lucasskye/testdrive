// ===============================
// ELEMENT
// ===============================

const gift = document.getElementById("gift");
const lid = document.querySelector(".lid");
const opening = document.getElementById("opening");
const gallery = document.getElementById("gallery");
const music = document.getElementById("bgMusic");
const petals = document.getElementById("petals");

// ===============================
// BACKGROUND PETALS
// ===============================

function createBackgroundPetal(){

    const p = document.createElement("div");

    p.className = "petal";

    p.style.left = Math.random()*100 + "vw";

    p.style.animationDuration =
        (6 + Math.random()*6) + "s";

    p.style.opacity =
        0.4 + Math.random()*0.5;

    p.style.transform =
        `scale(${0.5 + Math.random()})`;

    petals.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },12000);

}

setInterval(createBackgroundPetal,350);

// ===============================
// GIFT CLICK
// ===============================

gift.addEventListener("click",()=>{

    gift.style.pointerEvents="none";

    // Tutup kotak terbang

    lid.classList.add("open");

    // Musik

    music.play().catch(()=>{});

    // Bunga keluar

    launchFlowers();

    // Masuk galeri

    setTimeout(()=>{

        opening.style.opacity="0";
        opening.style.transition="1s";

    },1700);

    setTimeout(()=>{

        opening.style.display="none";

        gallery.classList.add("show");

        revealPhotos();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },2500);

});

// ===============================
// FLOWER BURST
// ===============================

function launchFlowers(){

    for(let i=0;i<18;i++){

        const flower =
        document.createElement("div");

        flower.innerHTML="🌸";

        flower.style.position="fixed";

        const rect=
        gift.getBoundingClientRect();

        flower.style.left=
        rect.left+80+"px";

        flower.style.top=
        rect.top+40+"px";

        flower.style.fontSize=
        (18+Math.random()*18)+"px";

        flower.style.pointerEvents="none";

        flower.style.zIndex="999";

        document.body.appendChild(flower);

        const angle=Math.random()*Math.PI*2;

        const distance=
        120+Math.random()*180;

        const x=
        Math.cos(angle)*distance;

        const y=
        Math.sin(angle)*distance-120;

        flower.animate([

            {
                transform:"translate(0,0) scale(.5)",
                opacity:1
            },

            {
                transform:`translate(${x}px,${y}px) rotate(${Math.random()*360}deg) scale(1.3)`,
                opacity:0
            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            flower.remove();

        },1800);

    }

}

// ===============================
// PHOTO ANIMATION
// ===============================

function revealPhotos(){

    const photos=document.querySelectorAll(".photo");

    const observer=
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    photos.forEach(photo=>{

        observer.observe(photo);

    });

}
