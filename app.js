// enable hidden nav bar
{
    function replaceCharAtID(id, index, char) {
        const textInDocument = document.querySelector(id);
        
        textInDocument.textContent = textInDocument.textContent.substring(0, index) + char + textInDocument.textContent.substring(index + char.length);
    }

    

    var typedInstance = new Typed('#element', {
    strings: ["Hi! ^2000 I'm"],
    typeSpeed: 25,
    startDelay: 1000,
    onComplete() {
        document.querySelector(".typed-cursor").remove();
        new Typed('#element2', {
            strings: ["Isa"],
            typeSpeed: 25,
            onComplete() {
                document.querySelector(".typed-cursor").remove();
                new Typed('#element3', {
                    strings: ["Isaev.^2000"],
                    typeSpeed: 25,
                    onComplete() {
                        document.querySelector(".typed-cursor").remove();
                        new Typed('#element4', {
                            strings: ["I'm an inquisitive software engineer with a passion for game programming and design."],
                            typeSpeed: -100,
                        });
                    },
                });
            },
        });
    },
    });

    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("nav--hidden");
        } else {
            nav.classList.remove("nav--hidden");
            replaceCharAtID("#element2", 1, "a");
        }

        lastScrollY = window.scrollY;
    });
}