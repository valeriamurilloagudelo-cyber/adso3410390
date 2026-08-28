/* =====================================================
   MENÚ LATERAL PARA CELULAR
===================================================== */

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


/* Cerrar menú al seleccionar una opción */

const menuLinks = document.querySelectorAll(
    ".sidebar a, .navbar a"
);

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("open");

    });

});



/* =====================================================
   MENSAJES EMERGENTES
===================================================== */

const toast = document.getElementById("toast");


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}



/* =====================================================
   BOTÓN DE CÓMICS
===================================================== */

const comicBtn = document.getElementById("comicBtn");

comicBtn.addEventListener("click", () => {

    showToast(
        "🐾 ¡Pronto habrá muchos más cómics para explorar!"
    );

});



/* =====================================================
   BOTÓN DE TIENDA
===================================================== */

const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", () => {

    showToast(
        "🛍️ La tienda está preparando nuevas sorpresas."
    );

});



/* =====================================================
   TARJETAS DE PERSONAJES
===================================================== */

const characterCards =
    document.querySelectorAll(".character-card");


characterCards.forEach(card => {

    card.addEventListener("click", () => {

        /* Quitamos la selección anterior */

        characterCards.forEach(item => {

            item.classList.remove("selected");

        });


        /* Seleccionamos la tarjeta */

        card.classList.add("selected");


        /* Obtenemos el nombre */

        const characterName =
            card.querySelector("h3").textContent;


        showToast(
            "✨ " + characterName + " seleccionado"
        );

    });

});



/* =====================================================
   FORMULARIO DEL BOLETÍN
===================================================== */

const newsletter =
    document.getElementById("newsletter");


newsletter.addEventListener("submit", (event) => {

    event.preventDefault();


    const email =
        newsletter.querySelector("input").value;


    showToast(
        "♡ ¡Gracias! " +
        email +
        " quedó registrado."
    );


    newsletter.reset();

});



/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const revealItems =
    document.querySelectorAll(
        ".character-card, " +
        ".comic-panel, " +
        ".news-panel, " +
        ".gallery-card, " +
        ".shop"
    );


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);



/* Preparar elementos */

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(18px)";

    item.style.transition =
        "opacity .6s ease, transform .6s ease";


    observer.observe(item);

});



/* =====================================================
   NAVEGACIÓN ACTIVA
===================================================== */

const sections =
    document.querySelectorAll("main section");

const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});