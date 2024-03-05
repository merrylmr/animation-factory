import {g as t, D as u, w as m, S as p, C as d, b as x} from "./index-763d49ba.js";
import {D as g} from "./DrawSVGPlugin-c9943948.js";
import {S as n} from "./SplitText-7307e934.js";
import {M as y} from "./MorphSVGPlugin-2e4190da.js";
import {M as _} from "./MotionPathPlugin-5c10eab1.js";

t.registerPlugin(g);

class P extends u {
    init() {
        this.DOM = {
            heading1: this.block.querySelector(".home-hero__animate"),
            heading2: this.block.querySelector(".home-hero__anything"),
            button: this.block.querySelector(".home-hero__button"),
            squiggle: this.block.querySelector("#home-hero-squiggle")
        },
            this.selector = {
                animate: t.utils.selector(this.DOM.heading1),
                anything: t.utils.selector(this.DOM.heading2)
            },
            this.defaults = {
                ease: "power2.out",
                duration: .6
            },
            this.createTimeline(),
            this.initSquiggleMouseMovement()
    }

    initSquiggleMouseMovement() {
        let e, r;
        const s = () => {
                e = window.innerWidth,
                    r = window.innerHeight
            }
        ;
        s();
        const o = t.quickTo(this.DOM.squiggle, "xPercent", {
            duration: 1,
            ease: "power3"
        })
            , a = t.quickTo(this.DOM.squiggle, "yPercent", {
            duration: 1,
            ease: "power3"
        })
            , i = t.quickTo(this.DOM.squiggle, "rotation", {
            duration: 1,
            ease: "power3"
        });
        window.addEventListener("resize", () => {
                s()
            }
        ),
            window.addEventListener("mousemove", l => {
                    const c = t.utils.mapRange(0, e, -20, 20, l.x)
                        , f = t.utils.mapRange(0, r, -20, 20, l.y)
                        , w = t.utils.clamp(-1, 1, t.utils.mapRange(e * .25, e * .75, 1, -1, l.x));
                    i(f * 1 * w),
                        o(c),
                        a(f)
                }
            )
    }

    char1() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.animate(".a > span")
            , s = this.selector.animate(".a > span > span");
        return e.set(r, {
            transformOrigin: "50% 100%"
        }),
            e.from(s, {
                yPercent: 100
            }),
            e.from(r, {
                rotationX: -180,
                ease: "back.out(1.7)",
                duration: 1
            }, "-=.4"),
            e
    }

    char2() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.animate(".home-hero__flair--circles")
            , s = this.selector.animate(".home-hero__flair--circles svg")
            , o = this.selector.animate(".home-hero__flair--windmill")
            , a = this.selector.animate(".n > span > span")
            , i = this.selector.animate(".n > span > span > span");
        return e.set(i[1], {
            autoAlpha: 1
        }),
            e.set(r, {
                autoAlpha: 1,
                yPercent: 100
            }),
            e.from(s, {
                scale: 0,
                ease: "back.out(1.7)"
            }),
            e.to(r, {
                yPercent: -200,
                autoAlpha: 0,
                duration: 1.5,
                ease: "power4.out"
            }),
            e.from(a, {
                yPercent: 100,
                duration: .4
            }, "<"),
            e.from(o, {
                x: () => window.innerWidth / -2,
                rotationZ: -360,
                duration: 1
            }, "<"),
            e.from(i[0], {
                rotationY: -180,
                duration: .3
            }, "+=.4"),
            e.to(i[1], {
                rotationY: 180,
                duration: .3
            }, "<"),
            e.to(o, {
                rotationZ: 90,
                duration: .3,
                repeat: -1,
                repeatDelay: 1
            }, "<"),
            e
    }

    char3() {
        const e = this.selector.animate(".i > span");
        return t.from(e, {
            yPercent: -100,
            ease: "back.out(1.4)",
            duration: 1
        })
    }

    char4() {
        const e = this.selector.animate(".m > span");
        return t.from(e, {
            xPercent: -100,
            ...this.defaults
        })
    }

    char5() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.animate(".a2")
            , s = this.selector.animate(".home-hero__flair--star")
            , o = this.selector.animate(".home-hero__flair--star svg")
            , a = this.selector.animate(".a2 > span > span");
        return e.set(s, {
            xPercent: -150,
            autoAlpha: 1
        }),
            e.from(o, {
                scale: 0,
                duration: .4
            }),
            e.add(this.char4(), "+=.6"),
            e.to(s, {
                xPercent: 0
            }, "<"),
            e.set(r, {
                overflow: "hidden"
            }),
            e.to(s, {
                yPercent: 130,
                ease: "power2.in"
            }, "+=.5"),
            e.from(a, {
                yPercent: 100
            }, "-=.3"),
            e.to(o, {
                rotationZ: 360,
                ease: "none",
                repeat: 2,
                duration: 2
            }, 0),
            e
    }

    char6() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.animate(".t > span > span")[0]
            , s = this.selector.animate(".t > span > span")
            , o = this.selector.animate(".t > span > span > span");
        return e.set(s, {
            autoAlpha: 1
        }),
            e.from(o[0], {
                yPercent: 100,
                duration: .4
            }, "<"),
            e.fromTo([o[1], o[2]], {
                yPercent: 100
            }, {
                yPercent: -100,
                duration: .9,
                stagger: .1,
                ease: "power2.inOut"
            }, "+=.2"),
            e.to(o[0], {
                yPercent: -100
            }, "-=.6"),
            e.from(r, {
                yPercent: 100,
                duration: .9
            }, "<"),
            e.add(this.char7(), "<"),
            e
    }

    char7() {
        const e = this.selector.animate(".e > span");
        return t.from(e, {
            yPercent: 100,
            duration: .9
        })
    }

    char8to9() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.anything(".a span:first-of-type, .n span:first-of-type")
            , s = this.selector.anything(".a span:last-of-type, .n span:last-of-type");
        return e.fromTo(s, {
            yPercent: 100
        }, {
            keyframes: {
                yPercent: [100, 0, 100, 0],
                ease: "power1.out"
            },
            duration: 3,
            stagger: .4
        }),
            e.fromTo(r, {
                yPercent: -100
            }, {
                keyframes: {
                    yPercent: [-100, -100, 20, -100],
                    ease: "power1.out"
                },
                duration: 3,
                stagger: .4
            }, "<"),
            e
    }

    char10() {
        const e = this.selector.anything(".y > span");
        return t.from(e, {
            rotationY: -180,
            duration: 1,
            scale: 0
        })
    }

    char11() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.anything(".home-hero__flair--bolt")
            , s = this.selector.anything(".home-hero__flair--bolt #bolt-path")
            , o = this.selector.anything(".home-hero__flair--bolt #bolt-rect")
            , a = this.selector.anything(".t span");
        return e.set(r, {
            autoAlpha: 1
        }),
            e.from(s, {
                drawSVG: "0",
                duration: 1,
                ease: "power3.inOut"
            }),
            e.from(o, {
                yPercent: 100,
                transformOrigin: "50% 100%",
                duration: 3.5,
                ease: "power4.out"
            }, "<.5"),
            e.from(r, {
                keyframes: {
                    scale: [1, 1.1, .6, .7, .2, .3, 0],
                    duration: 2
                }
            }, "-=2"),
            e.from(a, {
                scale: 0,
                ease: "back.out(1.4)"
            }, "<.5"),
            e
    }

    char12() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.anything(".home-hero__flair--worm img")
            , s = this.selector.anything(".h span span");
        return e.from(r, {
            autoAlpha: 0,
            duration: 1.5,
            yPercent: 100,
            rotationZ: 180,
            ease: "back.out(1.6)"
        }),
            e.from(s, {
                yPercent: -100
            }, "<.2"),
            e
    }

    char13() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.anything(".i > span");
        return e.from(r, {
            autoAlpha: 0,
            duration: .1
        }, "<"),
            e.from(r, {
                rotationX: -450,
                duration: 1.3
            }, "<.14"),
            e.add(this.char14(), "<+=.5"),
            e.to(r, {
                rotationX: 540,
                duration: 1.5,
                repeat: -1,
                repeatDelay: 3,
                yoyo: !0,
                yoyoEase: "power2.out"
            }, "+=2"),
            e
    }

    char14() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.anything(".n2 span");
        return e.from(r, {
            xPercent: -100
        }),
            e
    }

    char15() {
        const e = t.timeline({
            defaults: this.defaults
        })
            , r = this.selector.anything(".g span");
        return e.from(r, {
            autoAlpha: 0,
            rotationZ: -120,
            duration: 2,
            ease: "elastic.out(1, 0.4)"
        }, "<.6"),
            e
    }

    buttonIn() {
        return t.from(this.DOM.button, {
            autoAlpha: 0,
            yPercent: 30,
            ...this.defaults
        })
    }

    createTimeline() {
        const e = t.timeline({
            id: "home-hero",
            defaults: this.defaults
        });
        e.set([this.DOM.heading1, this.DOM.heading2], {
            autoAlpha: 1
        })
        m(() => {
                e.add(this.char1()),
                    e.add(this.char2(), .4),
                    e.add(this.char3(), 1),
                    e.add(this.char5(), .8),
                    e.add(this.char6(), 1.1),
                    e.add(this.char8to9(), 1.5),
                    e.add(this.char10(), 1.7),
                    e.add(this.char11(), 2),
                    e.add(this.char12(), 1.9),
                    e.add(this.char13(), 2.4),
                    e.add(this.char15(), 2.2),
                    e.add(this.buttonIn(), 1)
            }
        )
    }
}

t.registerPlugin(g, p, n);

class T extends u {
    init() {
        this.selector = t.utils.selector(this.block);
        const e = {
            stem: this.selector(".stem"),
            flower: this.selector(".flower"),
            highlightSections: this.selector(".home-intro__highlight"),
            flairOne: this.selector(".home-intro__flair-one"),
            flairTwo: this.selector(".home-intro__flair-two"),
            flairThree: this.selector(".home-intro__flair-three")
        };
        this.DOM = e,
            this.createTimelines()
    }

    staggerWord(e) {
        return t.to(e, {
            color: "#0ae448",
            ease: "power3.inOut",
            duration: .8,
            stagger: {
                each: .075,
                repeat: 1,
                yoyo: !0
            }
        })
    }

    wordOne() {
        const r = this.DOM.highlightSections[0].querySelectorAll(".home-intro__highlight-word")
            , s = new n(r[0], {
            type: "chars"
        })
            , o = new n(r[1], {
            type: "chars"
        })
            , a = t.timeline();
        return t.set(this.DOM.stem, {
            drawSVG: "0"
        }),
            t.set(this.DOM.flower, {
                scale: 0,
                transformOrigin: "50% 50%"
            }),
            a.add(this.staggerWord([s.chars, o.chars])),
            a.to(this.DOM.stem, {
                keyframes: [{
                    drawSVG: "0% 100%",
                    ease: "power4.inOut",
                    duration: 1
                }, {
                    drawSVG: "100% 100%",
                    ease: "power4.inOut",
                    duration: 1,
                    delay: .8
                }]
            }, 0),
            a.to(this.DOM.flower, {
                keyframes: [{
                    scale: 1,
                    ease: "power2.out",
                    duration: .6
                }, {
                    scale: 0,
                    ease: "power2.inOut",
                    rotateZ: 360,
                    duration: .6,
                    delay: 1.2
                }]
            }, .8),
            a.fromTo([this.DOM.flairOne, this.DOM.flairTwo, this.DOM.flairThree], {
                y: 100,
                scale: 0,
                rotate: -180,
                transformOrigin: "50% 50%"
            }, {
                y: 0,
                scale: 1,
                rotate: 0,
                ease: "back.out(1.3)",
                duration: .8,
                stagger: .2
            }, .6),
            a.to([this.DOM.flairOne, this.DOM.flairTwo, this.DOM.flairThree], {
                autoAlpha: 0,
                y: -50,
                ease: "power2.in",
                duration: .6,
                stagger: .1
            }, "-=1.4"),
            a
    }

    wordTwo() {
        const r = this.DOM.highlightSections[1].querySelectorAll(".home-intro__highlight-word")
            , s = new n(r[0], {
            type: "chars"
        })
            , o = new n(r[1], {
            type: "chars"
        })
            , a = new n(r[2], {
            type: "chars"
        })
            , i = t.timeline();
        return i.add(this.staggerWord([s.chars, o.chars, a.chars])) + i.to([s.chars, o.chars, a.chars], {
            rotateX: 360,
            duration: 2,
            stagger: .075,
            ease: "power3.inOut"
        }, 0),
            i
    }

    wordThree() {
        const r = this.DOM.highlightSections[2].querySelectorAll(".home-intro__highlight-word")
            , s = new n(r[0], {
            type: "chars"
        })
            , o = new n(r[1], {
            type: "chars"
        })
            , a = t.timeline();
        return a.add(this.staggerWord([s.chars, o.chars])) + a.from([s.chars, o.chars], {
            opacity: 0,
            y: 100,
            duration: 1,
            scale: .6,
            stagger: .125,
            ease: "elastic.out(1, 0.4)"
        }, 0),
            a
    }

    createTimelines() {
        const e = t.timeline({
            scrollTrigger: {
                trigger: this.block,
                start: "top 60%",
                once: !0
            }
        });
        t.set(this.block, {
            autoAlpha: 1
        }),
            t.matchMedia().add(["(prefers-reduced-motion: no-preference)", "(min-width: 1240px)"], () => {
                    e.add(this.wordOne()),
                        e.add(this.wordTwo(), "-=1"),
                        e.add(this.wordThree(), "-=.5")
                }
            )
    }
}

t.registerPlugin(n, g, p, y, d);

class S extends u {
    init() {
        this.selectors = {
            block: t.utils.selector(this.block),
            intro: t.utils.selector(".home-animate__intro-flair"),
            nice: t.utils.selector(".home-animate__text-group--nice"),
            add: t.utils.selector(".home-animate__text-group--add"),
            super: t.utils.selector(".home-animate__text-group--super"),
            eases: t.utils.selector(".home-animate__text-group--eases"),
            choreograph: t.utils.selector(".home-animate__text-group--choreograph"),
            snap: t.utils.selector(".home-animate__text-group--snap")
        },
            this.DOM = {
                trigger: this.selectors.block("#home-animate-trigger")[0],
                intro: this.selectors.block(".home-animate__intro-flair")[0],
                super: this.selectors.block(".home-animate__text-group--super")[0],
                choreograph: this.selectors.block(".home-animate__text-group--choreograph")[0]
            },
            this.triggerDefaults = {
                start: "left 70%",
                horizontal: !0
            },
            this.createTimelines()
    }

    basicWord(e) {
        t.from(e, {
            autoAlpha: 0,
            yPercent: 100,
            ease: "power2.out",
            duration: .6,
            scrollTrigger: {
                trigger: e,
                containerAnimation: this.scrollTween,
                start: "left 70%",
                horizontal: !0
            }
        })
    }

    introMobile() {
        const e = this.selectors.block(".home-animate__intro-heading")
            , r = this.selectors.block(".home-animate__intro-heading--orange")
            , s = this.selectors.block(".diamond-mob")
            , o = this.selectors.block(".timer-mob")
            , a = this.selectors.block(".home-animate__intro-text")
            , i = this.selectors.block(".flower-mob")
            , l = t.timeline({
            scrollTrigger: {
                trigger: e,
                start: "top 70%"
            }
        });
        l.from(r, {
            rotateX: -95,
            duration: 4,
            ease: "elastic.out(1, 0.3)"
        }),
            l.from(s, {
                xPercent: -300,
                yPercent: 300,
                rotateZ: 360,
                scale: 0,
                duration: .8,
                ease: "power3.out"
            }, .1),
            l.from(o, {
                xPercent: 300,
                yPercent: -200,
                rotateZ: -180,
                scale: 0,
                duration: .9,
                ease: "power4.out"
            }, .2),
            t.from(i, {
                rotateZ: -360,
                xPercent: 300,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: a,
                    start: "top 70%"
                }
            })
    }

    intro() {
        const e = this.selectors.block(".home-animate__intro-heading")
            , r = this.selectors.block(".home-animate__intro-heading--orange")
            , s = this.selectors.intro(".flower")
            , o = this.selectors.intro(".half-circle")
            , a = this.selectors.intro(".diamond")
            , i = this.selectors.intro(".circle")
            , l = this.selectors.intro(".timer");
        t.from(r, {
            rotateX: -95,
            duration: 4,
            ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
                trigger: e,
                start: "top 70%"
            }
        });
        const c = t.timeline({
            scrollTrigger: {
                trigger: this.DOM.intro,
                start: "top 70%"
            }
        });
        c.from(s, {
            xPercent: 300,
            rotateZ: 360,
            scale: .4,
            duration: 1,
            ease: "power4.out"
        }),
            c.from(o, {
                xPercent: 18,
                yPercent: -80,
                rotateZ: -180,
                scale: 0,
                duration: 1,
                ease: "power4.out"
            }, .45),
            c.from(l, {
                xPercent: 550,
                yPercent: -140,
                rotateZ: 120,
                scale: 0,
                duration: 1.6,
                ease: "elastic.out(1, 0.5)"
            }, .55),
            c.from(i, {
                xPercent: 350,
                yPercent: 100,
                rotateZ: 720,
                scale: 0,
                duration: 2,
                ease: "elastic.out(1, 0.7)"
            }, .65),
            c.from(a, {
                xPercent: -250,
                yPercent: 200,
                rotateZ: 180,
                scale: 0,
                duration: 1.3,
                ease: "elastic.out(1, 0.6)"
            }, .75)
    }

    basicWords() {
        this.selectors.block(".home-animate__text-group > span:not([class])").forEach(r => {
                this.basicWord(r)
            }
        )
    }

    niceAndEasyEasing() {
        const e = this.selectors.nice(".home-animate__text--green-gradient")
            , r = this.selectors.nice(".home-animate__text--purple-gradient")
            , s = this.selectors.nice(".home-animate__text--orange-gradient")
            , o = t.timeline({
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        });
        o.from([e, r], {
            autoAlpha: 0,
            rotateZ: -20,
            yPercent: -300,
            ease: "elastic.out(1, 0.75)",
            duration: .7,
            stagger: .3
        }),
            o.from(s, {
                autoAlpha: 0,
                rotateZ: 90,
                yPercent: -200,
                ease: "elastic.out(1, 0.75)",
                delay: .6,
                duration: .7
            }, "<")
    }

    hand() {
        const e = this.selectors.add(".home-animate__icon--hand")
            , r = this.selectors.add(".home-animate__icon--hand svg");
        t.from(e, {
            autoAlpha: 0,
            yPercent: 100,
            ease: "bounce.out",
            duration: 1,
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        }),
            t.to(r, {
                keyframes: [{
                    scale: 1.2,
                    rotateZ: "40deg",
                    ease: "bounce.out",
                    duration: 1
                }, {
                    scale: 1,
                    rotateZ: "0deg",
                    ease: "bounce.out",
                    delay: 2,
                    duration: 1
                }],
                repeat: -1,
                repeatDelay: 2,
                scrollTrigger: {
                    trigger: e,
                    ...this.triggerDefaults
                }
            })
    }

    semicircle() {
        const e = this.selectors.add(".home-animate__icon--circle");
        t.from(e, {
            autoAlpha: 0,
            scale: .2,
            rotateZ: -450,
            yPercent: -100,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        })
    }

    personality() {
        const e = this.selectors.add(".home-animate__personality")
            , r = new n(e, {
            type: "chars"
        });
        t.from(r.chars, {
            autoAlpha: 0,
            yPercent: () => t.utils.random([-150, 150]),
            duration: () => t.utils.random(1, 2),
            ease: "elastic.out(1, 0.75)",
            stagger: .1,
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        })
    }

    huge() {
        const e = this.selectors.add(".home-animate__huge")
            , r = this.selectors.add(".home-animate__huge span");
        t.from(r, {
            autoAlpha: 0,
            scale: 4,
            duration: 1,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        })
    }

    superPlugAndPlay() {
        const e = this.selectors.super(".home-animate__text--green")
            , r = this.selectors.super(".home-animate__text--pink")
            , s = this.selectors.super(".home-animate__text--pink span span")
            , o = t.timeline({
            scrollTrigger: {
                trigger: this.DOM.super,
                ...this.triggerDefaults
            }
        });
        o.from(e, {
            autoAlpha: 0,
            rotateY: -25,
            rotateX: -85,
            ease: "back.out(1.4)",
            duration: 1.4
        }),
            o.from(r, {
                autoAlpha: 0,
                duration: .7,
                ease: "power3.out"
            }, .6),
            o.from(s, {
                autoAlpha: 0,
                width: 0,
                scale: 0,
                ease: "power3.out",
                duration: .7,
                stagger: .5
            }, .6)
    }

    asterisk() {
        const e = this.selectors.super(".home-animate__icon--asterisk svg")
            , r = t.timeline({
            repeat: -1,
            repeatDelay: .2,
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        });
        return r.to(e, {
            rotate: "360deg",
            repeat: 2,
            duration: 2,
            ease: "circ.inOut"
        }),
            r.to(e, {
                scale: 1.15,
                duration: .3,
                ease: "power3.inOut"
            }),
            r.to(e, {
                scale: 1,
                duration: .3,
                ease: "power3.inOut"
            }),
            r
    }

    asteriskScrub() {
        const e = this.selectors.super(".home-animate__icon--asterisk");
        t.timeline({
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults,
                start: "center center",
                end: "+=600",
                scrub: 1
            }
        }).to(e, {
            xPercent: "500",
            ease: "none"
        })
    }

    customCurves() {
        const e = this.selectors.eases(".home-animate__custom")
            , r = new n(e, {
                type: "chars"
            })
            , s = this.selectors.eases(".home-animate__curves")
            , o = new n(s, {
                type: "chars"
            })
            ,
            a = d.create("custom", "M0,0 C0,0.408 0.11,0.712 0.222,0.712 0.35,0.712 0.37,0.506 0.498,0.532 0.658,0.564 0.582,0.911 0.736,1.024 0.784,1.059 0.826,1.054 0.89,1.024 0.916,1.011 0.946,1 1,1 ")
            ,
            i = d.create("custom", "M0,0 C0,0 0.014,0.136 0.021,0.226 0.04,0.48 0.046,0.612 0.065,0.867 0.072,0.966 0.075,1.017 0.085,1.115 0.091,1.186 0.096,1.224 0.106,1.293 0.109,1.314 0.112,1.327 0.118,1.346 0.121,1.356 0.125,1.364 0.13,1.371 0.131,1.372 0.135,1.373 0.136,1.372 0.139,1.371 0.143,1.366 0.145,1.362 0.152,1.346 0.157,1.334 0.161,1.316 0.185,1.207 0.194,1.143 0.218,1.03 0.225,0.995 0.23,0.975 0.24,0.941 0.245,0.922 0.25,0.91 0.258,0.892 0.261,0.886 0.264,0.882 0.268,0.877 0.271,0.874 0.273,0.87 0.277,0.869 0.281,0.868 0.288,0.868 0.292,0.869 0.298,0.872 0.303,0.876 0.307,0.882 0.336,0.928 0.353,0.965 0.383,1.012 0.389,1.022 0.396,1.028 0.405,1.035 0.412,1.04 0.419,1.043 0.428,1.046 0.433,1.047 0.437,1.046 0.443,1.045 0.448,1.044 0.453,1.043 0.458,1.041 0.486,1.025 0.503,1.012 0.531,0.996 0.539,0.992 0.545,0.99 0.554,0.987 0.562,0.985 0.568,0.984 0.576,0.983 0.587,0.983 0.595,0.983 0.606,0.985 0.702,1 0.712,1.035 0.77,1.034 0.82,1.032 0.838,1 1,1 ");
        t.from(r.chars, {
            autoAlpha: 0,
            rotateX: 90,
            duration: 2.3,
            ease: i,
            stagger: .175,
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        }),
            t.from(o.chars, {
                autoAlpha: 0,
                rotateX: 90,
                duration: 1.4,
                ease: a,
                stagger: .175,
                scrollTrigger: {
                    trigger: s,
                    ...this.triggerDefaults
                }
            })
    }

    curvedLineToggle() {
        const e = this.selectors.super(".home-animate__icon--curve")
            , r = this.selectors.super("#home-animate__icon--curve-path")
            , s = this.selectors.super("#curved-line-toggle-one")
            , o = this.selectors.super("#curved-line-toggle-two")
            , a = {
            duration: 2,
            ease: "power3.inOut"
        }
            , i = t.timeline({
            defaults: a,
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults,
                start: "center center",
                scrub: 1
            }
        });
        i.to(r, {
            morphSVG: "M188 33.0001C188 160 2.99953 161 2.99955 33.0001"
        }),
            i.to(e, {
                xPercent: "750",
                ease: "none"
            }, "<"),
            i.to(s, {
                xPercent: -7,
                yPercent: 120,
                rotate: -90,
                transformOrigin: "top right"
            }, "<"),
            i.to(o, {
                xPercent: -4,
                yPercent: -586,
                rotate: 90,
                transformOrigin: "bottom left"
            }, "<")
    }

    animationSequences() {
        const e = this.selectors.choreograph(".home-animate__text--green")
            , r = this.selectors.choreograph(".home-animate__text--orange")
            , s = this.selectors.choreograph(".home-animate__icon--key")
            , o = {
            duration: .5,
            ease: "power3.inOut"
        }
            , a = t.timeline({
            defaults: o,
            scrollTrigger: {
                trigger: this.DOM.choreograph,
                ...this.triggerDefaults
            }
        });
        t.set(e, {
            yPercent: -102.5,
            xPercent: -52.5
        }),
            t.set(r, {
                xPercent: -140
            }),
            t.set(s, {
                autoAlpha: 0,
                scale: .3
            }),
            a.to(e, {
                yPercent: 0
            }),
            a.to(e, {
                xPercent: 0
            }),
            a.to(r, {
                keyframes: [{
                    xPercent: -110,
                    ...o
                }, {
                    xPercent: 0,
                    ...o
                }]
            }, "-=.2"),
            a.to(s, {
                autoAlpha: 1,
                scale: 1,
                ease: "back.out(2.7)"
            }, "-=.2")
    }

    snap() {
        const e = this.selectors.snap(".home-animate__diamond")
            , r = this.selectors.snap(".home-animate__snap")
            , s = this.selectors.snap(".home-animate__snap span")
            , o = {
            duration: .6,
            ease: "elastic.out(1, 0.75)"
        }
            , a = t.timeline({
            defaults: o,
            scrollTrigger: {
                trigger: e,
                ...this.triggerDefaults
            }
        });
        a.from(e, {
            autoAlpha: 0
        }, 0),
            a.to(e, {
                keyframes: [{
                    rotationZ: 90,
                    ...o
                }, {
                    rotationZ: 180,
                    delay: 1,
                    ...o
                }, {
                    rotationZ: 270,
                    delay: 1,
                    ...o
                }, {
                    rotationZ: 360,
                    delay: 1,
                    ...o
                }],
                repeat: -1,
                repeatDelay: 1
            }, 0),
            a.fromTo(r, {
                autoAlpha: 0,
                rotationZ: -60
            }, {
                autoAlpha: 1,
                rotationZ: 0
            }, 0),
            a.fromTo(s[0], {
                autoAlpha: 0,
                rotationZ: -60
            }, {
                autoAlpha: 1,
                rotationZ: 0,
                repeat: -1,
                repeatDelay: 1
            }, 1.6),
            a.fromTo(s[1], {
                autoAlpha: 1,
                rotationZ: 0
            }, {
                autoAlpha: 0,
                duration: .4,
                rotationZ: 60,
                repeat: -1,
                repeatDelay: 1.2,
                ease: "power4.out"
            }, 1.6)
    }

    createTimelines() {
        t.set(this.DOM.trigger, {
            autoAlpha: 1
        });
        const e = t.matchMedia();
        e.add("(prefers-reduced-motion: no-preference) and (min-width: 1240px)", () => {
                const r = t.to(this.DOM.trigger, {
                    x: () => -this.DOM.trigger.clientWidth + window.innerWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: this.DOM.trigger,
                        pin: !0,
                        scrub: 1,
                        end: "+=3000px"
                    }
                });
                this.scrollTween = r,
                    this.triggerDefaults.containerAnimation = this.scrollTween,
                    this.intro(),
                    this.basicWords(),
                    this.niceAndEasyEasing(),
                    this.hand(),
                    this.semicircle(),
                    this.personality(),
                    this.huge(),
                    this.superPlugAndPlay(),
                    this.asterisk(),
                    this.asteriskScrub(),
                    this.curvedLineToggle(),
                    this.customCurves(),
                    this.animationSequences(),
                    this.snap()
            }
        ),
            e.add("(prefers-reduced-motion: no-preference) and (max-width: 1239px)", () => {
                    this.introMobile()
                }
            )
    }
}

t.registerPlugin(g, y, _, p);

class b extends u {
    init() {
        const e = {
            scrollRow: this.block.querySelector("#home-tools-scroll"),
            scrollCurve: this.block.querySelector("#home-tools-scroll-curve"),
            scrollBall: this.block.querySelector("#home-tools-scroll-ball"),
            scrollPath: this.block.querySelector("#home-tools-scroll-path"),
            scrollMask: this.block.querySelector("#home-tools-scroll-mask"),
            svgRow: this.block.querySelector("#home-tools-svg"),
            svgSquare: this.block.querySelectorAll(".home-tools-svg-square"),
            svgSquareLarge: this.block.querySelector("#home-tools-svg-square-large"),
            svgCircle: this.block.querySelectorAll(".home-tools-svg-circle"),
            svgCircleSmall: this.block.querySelector(".home-tools-svg-circle-small"),
            textRow: this.block.querySelector("#home-tools-text"),
            textCircleWrapper: this.block.querySelector("#home-tools-text-circle-wrapper"),
            textCircle: this.block.querySelector("#home-tools-text-circle"),
            textTe: this.block.querySelector("#home-tools-text-te"),
            textXt: this.block.querySelector("#home-tools-text-xt"),
            textSquareWrapper: this.block.querySelector("#home-tools-text-square-wrapper"),
            textSquare: this.block.querySelector("#home-tools-text-square"),
            uiRow: this.block.querySelector("#home-tools-ui"),
            uiSquare: this.block.querySelectorAll(".home-tools-ui-square")
        };
        this.el = e,
            this.initIndexTools()
    }

    setIndexTools() {
        m(() => {
                this.setIndexToolsScroll(),
                    this.setIndexToolsText(),
                    this.setIndexToolsUi()
            }
        )
    }

    playIndexTools() {
        m(() => {
                this.playIndexToolsScroll(),
                    this.playIndexToolsSvg(),
                    this.playIndexToolsText(),
                    this.playIndexToolsUi()
            }
        )
    }

    setIndexToolsScroll() {
        t.set(this.el.scrollMask, {
            drawSVG: "0% 100%"
        })
    }

    playIndexToolsScroll() {
        t.timeline({
            defaults: {
                duration: 1.25,
                ease: "power3.inOut"
            },
            scrollTrigger: {
                trigger: this.el.scrollRow,
                start: "top 75%",
                end: "top 50%",
                once: !0
            }
        }).to(this.el.scrollBall, {
            motionPath: {
                path: this.el.scrollPath,
                align: this.el.scrollPath,
                alignOrigin: [.5, .5]
            }
        }).to(this.el.scrollMask, {
            drawSVG: "85% 100%"
        }, "<")
    }

    playIndexToolsSvg() {
        t.timeline({
            defaults: {
                duration: 1.25,
                ease: "power3.inOut"
            },
            scrollTrigger: {
                trigger: this.el.svgRow,
                start: "top 75%",
                end: "top 50%"
            }
        }).to(this.el.svgCircle, {
            morphSVG: this.el.svgSquareLarge
        }, 0).fromTo(this.el.svgCircleSmall, {
            transformOrigin: "80% 20%",
            scale: .3
        }, {
            scale: 1
        }, 0)
    }

    setIndexToolsText() {
        t.set(this.el.textCircleWrapper, {
            transformOrigin: "0% 0%"
        }),
            t.set(this.el.textCircle, {
                transformOrigin: "50% 50%"
            }),
            t.set(this.el.textSquareWrapper, {
                transformOrigin: "100% 100%"
            }),
            t.set(this.el.textSquare, {
                transformOrigin: "50% 50%",
                rotateX: 180
            }),
            t.set(this.el.textTe, {
                transformOrigin: "50% 50%",
                rotateX: 540
            })
    }

    playIndexToolsText() {
        const e = t.timeline({
            scrollTrigger: {
                trigger: this.el.textRow,
                start: "top 75%",
                end: "top 50%",
                once: !0
            }
        });
        e.to([this.el.textCircleWrapper, this.el.textSquareWrapper], {
            rotate: 180,
            duration: 1,
            ease: "Power4.inOut"
        }),
            e.to(this.el.textTe, {
                rotateX: 0,
                duration: 1.5,
                ease: "Power4.inOut"
            }, "<"),
            e.to(this.el.textXt, {
                rotateX: 180,
                duration: .75,
                ease: "Power4.inOut"
            }, "-=0.5"),
            e.to(this.el.textSquare, {
                rotateX: 0,
                duration: .75,
                ease: "Power4.inOut"
            }, "<"),
            e.to(this.el.textXt, {
                rotateX: 0,
                duration: .75,
                ease: "Power4.inOut"
            }),
            e.to(this.el.textSquare, {
                rotate: 180,
                duration: .75,
                ease: "Power4.inOut"
            }, "<")
    }

    setIndexToolsUi() {
        t.set([this.el.uiSquare[0], this.el.uiSquare[2], this.el.uiSquare[4], this.el.uiSquare[6], this.el.uiSquare[8]], {
            opacity: 0
        })
    }

    playIndexToolsUi() {
        const e = "<+0.1"
            , r = this.el.uiSquare[1]
            , s = this.el.uiSquare[3]
            , o = this.el.uiSquare[4]
            , a = this.el.uiSquare[5]
            , i = this.el.uiSquare[7];
        t.timeline({
            defaults: {
                duration: .4,
                ease: "power3.inOut"
            },
            scrollTrigger: {
                trigger: this.el.uiRow,
                start: "top 75%",
                end: "top 50%",
                once: !0
            }
        }).to(r, {
            yPercent: 100
        }).to(s, {
            xPercent: 100
        }, e).to(a, {
            xPercent: -100
        }, e).to(i, {
            yPercent: -100
        }, e).set(o, {
            opacity: 1
        }).to(i, {
            yPercent: "+=100",
            xPercent: "+=100"
        }).to(a, {
            yPercent: "+=100",
            xPercent: "-=100"
        }, e).to(s, {
            yPercent: "-=100",
            xPercent: "-=100"
        }, e).to(r, {
            yPercent: "-=100",
            xPercent: "+=100"
        }, e)
    }

    initIndexTools() {
        this.setIndexTools(),
            this.playIndexTools()
    }
}

class O extends x {
    createBlock(e, r) {
        switch (e) {
            case "home-hero":
                return new P(r);
            case "home-intro":
                return new T(r);
            case "home-animate":
                return new S(r);
            case "home-tools":
                return new b(r);
            default:
                return null
        }
    }
}

new O;
//# sourceMappingURL=index-d81b8a80.js.map
