// letter flicker effect will occur to elements currently on screen
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

    //elements hidden before scrolled to
    const aboutElement = document.querySelector('#about');
    const project1Element = document.querySelector('#projects');
    const project2Element = document.querySelector('#projects');
    const contactElement = document.querySelector('#projects');

    // Define the options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    function loadAboutElement(target) {
        document.querySelector(".typed-cursor").remove();
            new Typed('#about-title', {
                strings: ["About Me"],
                typeSpeed: -100,
                onComplete() {
                    document.querySelector(".profile-pic").classList.add("shown");
                    document.querySelector(".typed-cursor").remove();
                    new Typed('#about-p1', {
                        strings: ["Hello, Isa here. I'm an aspiring gameplay programmer and a game designer. I've been coding since I was 12 when I recreated a ping pong game in Python. Recently graduated with a high-distinction Computer Science degree, a track record in application development and a versitile skill set in programming languages including C++/C#, Python, JavaScript, and Java."],
                        typeSpeed: -100,
                        showCursor: true,
                        onComplete() {
                            document.querySelector(".typed-cursor").remove();
                            new Typed('#about-p2', {
                                strings: ["Outside of my professional life, I am a professional Jiu-Jitsu athlete. Some of my accomplishments I'm proud to share include winning UAE Jiu-Jitsu Federation Professional World Championships and achieving the title Master of Sport of Russia. I'm also known to be an exceptional DnD dungeon master."],
                                typeSpeed: -100,
                                onComplete() {
                                    
                                },
                            });
                        },
                    });
                },
            });
    }

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(callbackFunction, options);

    function callbackFunction(entries) {
        entries.forEach(entry => {
            let target = entry.target;
            if (entry.isIntersecting && target.dataset.callback) {
                window[target.dataset.callback](target);
                observer.unobserve(entry.target);
            }
        });
    }

    // Start observing the element
    observer.observe(aboutElement);
}