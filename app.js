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
    const project1Element = document.querySelector('#project1');
    const project2Element = document.querySelector('#project2');
    const contactElement = document.querySelector('#contact');

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

    function loadProject1Element(target) {
        document.querySelector(".typed-cursor").remove();
        new Typed('#projects-title', {
            strings: ["Projects"],
            typeSpeed: -100,
            onComplete() {
                document.querySelector(".typed-cursor").remove();
                document.querySelector("#project1-thumbnail").classList.add("shown");
                new Typed('#project1-title', {
                    strings: ["RPGDungeon"],
                    typeSpeed: -100,
                    onComplete() {
                        document.querySelector(".typed-cursor").remove();
                        document.querySelector("#project1-tags").classList.add("shown");
                        new Typed('#project1-description', {
                            strings: ["A 2D RPG platformer that I'm currently working on using Unity."],
                            typeSpeed: -100,
                            onComplete() {
                                document.querySelector(".typed-cursor").remove();
                                new Typed('#project1-highlights', {
                                    strings: ["Highlights:"],
                                    typeSpeed: -100,
                                    onComplete() {
                                        new Typed('#project1-highlight1', {
                                            strings: ["+ Inventory System"],
                                            typeSpeed: -100,
                                            showCursor: false,
                                        });
                                        new Typed('#project1-highlight2', {
                                            strings: ["+ Platformer A* Pathfinding"],
                                            typeSpeed: -100,
                                            showCursor: false,
                                        });
                                        new Typed('#project1-highlight3', {
                                            strings: ["+ Combat System"],
                                            typeSpeed: -100,
                                            showCursor: false,
                                        });
                                        new Typed('#project1-highlight4', {
                                            strings: ["+ Finite State Machines"],
                                            typeSpeed: -100,
                                            showCursor: false,
                                        });
                                        new Typed('#project1-highlight5', {
                                            strings: ["+ Custom projectile physics"],
                                            typeSpeed: -100,
                                            showCursor: false,
                                        });
                                        new Typed('#project1-highlight6', {
                                            strings: ["+ Custom Shader with Stencil Buffer"],
                                            typeSpeed: -100,
                                            showCursor: false,
                                        });
                                        new Typed('#project1-highlight7', {
                                            strings: ["+ Custom pixel art for sprite sheets and animations"],
                                            typeSpeed: -100,
                                            showCursor: false,
                                            onComplete() {
                                                document.querySelector("#project1-readmore").classList.add("shown");
                                            },
                                        });
                                    },
                                });
                            },
                        });
                    },
                });
            }
        });
    }

    function loadProject2Element(target) {
        document.querySelector(".typed-cursor").remove();
        document.querySelector("#project2-thumbnail").classList.add("shown");
        new Typed('#project2-title', {
            strings: ["Foenix"],
            typeSpeed: -100,
            onComplete() {
                document.querySelector(".typed-cursor").remove();
                document.querySelector("#project2-tags").classList.add("shown");
                new Typed('#project2-description', {
                    strings: ["Collaboratively developed a web platform that allows users to organize, annotate, share, and create ideas together. The platform features teleconferencing functionalities, office suites with simultaneous content editing, and social tools for creating and managing communities."],
                    typeSpeed: -100,
                    onComplete() {
                        document.querySelector(".typed-cursor").remove();
                        new Typed('#project2-highlights', {
                            strings: ["Contributions:"],
                            typeSpeed: -100,
                            onComplete() {
                                document.querySelector(".typed-cursor").remove();
                                new Typed('#project2-highlight1', {
                                    strings: ["+ Front-end development using JavaScript"],
                                    typeSpeed: -100,
                                    showCursor: false,
                                });
                                new Typed('#project2-highlight2', {
                                    strings: ["+ Worked using Scrum methodology"],
                                    typeSpeed: -100,
                                    showCursor: false,
                                });
                                new Typed('#project2-highlight3', {
                                    strings: ["+ Website Responsiveness"],
                                    typeSpeed: -100,
                                    showCursor: false,
                                });
                                new Typed('#project2-highlight4', {
                                    strings: ["+ User interface design"],
                                    typeSpeed: -100,
                                    showCursor: false,
                                });
                                new Typed('#project2-highlight5', {
                                    strings: ["+ Assistance in back-end systems"],
                                    typeSpeed: -100,
                                    showCursor: false,
                                    onComplete() {
                                        document.querySelector("#project2-readmore").classList.add("shown");
                                    },
                                });
                            },
                        });
                    },
                });
            },
        });    
    }

    function loadContactElement(target) {
        document.querySelector(".typed-cursor").remove();
        new Typed('#contact-title', {
            strings: ["Contact Me"],
            typeSpeed: -100,
            onComplete() {
                document.querySelector(".typed-cursor").remove();
                new Typed('#contact-element1', {
                    strings: ["I'm currently open to new and exciting opportunities. So if you're trying to reach me for whatever reason, you can do so here:"],
                    typeSpeed: -100,
                    onComplete() {
                        document.querySelector(".typed-cursor").remove();
                        new Typed('#contact-element2', {
                            strings: ["isaisaev.ru@gmail.com"],
                            typeSpeed: -100,
                            onComplete() {
                                document.querySelector(".contact-social-media-icons").classList.add("shown");
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
    observer.observe(project1Element);
    observer.observe(project2Element);
    observer.observe(contactElement);
}