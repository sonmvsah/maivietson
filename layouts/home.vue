<template>
    <div class="1bg-pattem">

        <Mheader />
        
            <Nuxt />

        <Mfooter />
    </div>
</template>


<script>
// import TweenMax from "~/assets/js/TweenMax.min.js";
import TweenLite from "~/assets/js/TweenLite.min.js";
export default {

    data() {
        return {
            clientX: -100,
            clientY: -100,
            isStuck: !1,
            showCursor: !1,
            innerCursor: null,
            outerCursor: null,
            innerCursorSpeed: 0,
            cursor: null
        }
    },
    mounted: function() {
        this.initCursor();
        this.initHovers();
        //   this.initClientOnlyComp();

    },
    methods: {
        initCursor() {
            var t = this;
            if ("undefined" != typeof navigator && this.isMobile()) return null;
            this.innerCursor = document.querySelector(".cursor");
            var e = function() {
                TweenLite.set(t.innerCursor, {
                    x: t.clientX,
                    y: t.clientY
                }), t.innerCursorSpeed = 0, setTimeout((function() {
                    t.innerCursorSpeed = .3
                }), 100), t.showCursor = !0
            };
            document.addEventListener("mousemove", e), document.addEventListener("mousemove", (function(e) {
                t.clientX = e.clientX, t.clientY = e.clientY
            }));
            requestAnimationFrame((function r() {
                t.isStuck || TweenLite.to(t.innerCursor, t.innerCursorSpeed, {
                    x: t.clientX,
                    y: t.clientY
                }), t.showCursor && document.removeEventListener("mousemove", e), requestAnimationFrame(r)
            }))
        },
        initHovers: function() {
            var t = this;
            if ("undefined" != typeof navigator && this.isMobile()) return null;
            this.cursor = document.querySelector(".cursor");
            var e = this.activeSelectors().map((function(t) {
                return t.selector + ":not([data-cursor-none])"
            }));
            document.querySelectorAll(e.join(",")).forEach((function(e) {
                if (!("IMG" === e.tagName && e.offsetWidth < 200)) {
                    var r = e.getAttribute("data-cursor-size");
                    r = null !== r && "" !== r ? r : t.getCursorSizeOfSelector(e), e.addEventListener("click", (function() {
                        t.triggerMouseLeave()
                    })), e.addEventListener("mousemove", (function() {
                        return t.triggerMouseEnter(r)
                    })), e.addEventListener("mouseleave", (function() {
                        return t.triggerMouseLeave()
                    }))
                }
            }))
        },
        activeSelectors: function() {
            return [{
                selector: "[data-cursor-size]",
                size: "sm"
            }, {
                selector: 'a[href][target="_blank"]',
                size: "sm"
            }, {
                selector: 'a[href]:not([target="_blank"])',
                size: "md"
            }, {
                selector: ".link",
                size: "md"
            }, {
                selector: "h1",
                size: "md"
            }, {
                selector: ".h1",
                size: "sm"
            }, {
                selector: "h2",
                size: "sm"
            }, {
                selector: ".h2",
                size: "sm"
            }, {
                selector: "h4",
                size: "sm"
            }, {
                selector: ".h4",
                size: "sm"
            }, {
                selector: ".input",
                size: "sm"
            }, {
                selector: "button",
                size: "md"
            }, {
                selector: ".btn",
                size: "md"
            }, {
                selector: "img",
                size: "md"
            }, {
                selector: "picture",
                size: "md"
            }, {
                selector: "[data-video-size]",
                size:"md"
            },{
                selector: ".expand",
                size:"md"
            }]
        },
        getCursorSizeOfSelector: function(element) {
            var t = this.activeSelectors().find((function(t) {
                return element.matches(t.selector)
            }));
            return t ? t.size : "sm"
        },
        triggerMouseEnter: function(t) {
            document.querySelector(".cursor .cursor-inner").classList.add(t)
        },
        triggerMouseLeave: function() {
            document.querySelector(".cursor .cursor-inner").classList.remove("sm", "md", "lg")
        },
        isMobile () {
            var t = navigator.userAgent;
            return /Android|Mobi/i.test(t)
        },


    }


}
</script>

<style>
    /** */
    html {
   scroll-behavior: smooth;
    }
</style>