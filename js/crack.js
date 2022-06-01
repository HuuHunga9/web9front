function lazyLoadThumb(e) {
    var t = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360">',
        a = '<div class="play"></div>';
    return t.replace("ID", e) + a
}

function lazyLoadYoutubeIframe() {
    var e = document.createElement("iframe"),
        t = "ID?autoplay=1";
    t += 0 === this.dataset.query.length ? '' : '&' + this.dataset.query;
    e.setAttribute("src", t.replace("ID", this.dataset.src)), e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "1"), e.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"), this.parentNode.replaceChild(e, this)
}
document.addEventListener("DOMContentLoaded", function() {
    var e, t, a = document.getElementsByClassName("rll-youtube-player");
    for (t = 0; t < a.length; t++) e = document.createElement("div"), e.setAttribute("data-id", a[t].dataset.id), e.setAttribute("data-query", a[t].dataset.query), e.setAttribute("data-src", a[t].dataset.src), e.innerHTML = lazyLoadThumb(a[t].dataset.id), e.onclick = lazyLoadYoutubeIframe, a[t].appendChild(e)
});

window.lazyLoadOptions = {
    elements_selector: "iframe[data-lazy-src]",
    data_src: "lazy-src",
    data_srcset: "lazy-srcset",
    data_sizes: "lazy-sizes",
    class_loading: "lazyloading",
    class_loaded: "lazyloaded",
    threshold: 300,
    callback_loaded: function(element) {
        if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") {
            if (element.classList.contains("lazyloaded")) {
                if (typeof window.jQuery != "undefined") {
                    if (jQuery.fn.fitVids) {
                        jQuery(element).parent().fitVids()
                    }
                }
            }
        }
    }
};
window.addEventListener('LazyLoad::Initialized', function(e) {
    var lazyLoadInstance = e.detail.instance;
    if (window.MutationObserver) {
        var observer = new MutationObserver(function(mutations) {
            var image_count = 0;
            var iframe_count = 0;
            var rocketlazy_count = 0;
            mutations.forEach(function(mutation) {
                for (i = 0; i < mutation.addedNodes.length; i++) {
                    if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') {
                        return
                    }
                    if (typeof mutation.addedNodes[i].getElementsByClassName !== 'function') {
                        return
                    }
                    images = mutation.addedNodes[i].getElementsByTagName('img');
                    is_image = mutation.addedNodes[i].tagName == "IMG";
                    iframes = mutation.addedNodes[i].getElementsByTagName('iframe');
                    is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                    rocket_lazy = mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');
                    image_count += images.length;
                    iframe_count += iframes.length;
                    rocketlazy_count += rocket_lazy.length;
                    if (is_image) {
                        image_count += 1
                    }
                    if (is_iframe) {
                        iframe_count += 1
                    }
                }
            });
            if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) {
                lazyLoadInstance.update()
            }
        });
        var b = document.getElementsByTagName("body")[0];
        var config = {
            childList: !0,
            subtree: !0
        };
        observer.observe(b, config)
    }
}, !1)

// load ảnh
document.addEventListener("DOMContentLoaded", (function() {
    var e = document.getElementsByClassName("accordions-title");
    for (t = 0; t < e.length; t++) e[t].addEventListener("click", (function() {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
    }));
    var t;
    e = document.getElementsByClassName("accordions_lv-title");
    for (t = 0; t < e.length; t++) e[t].addEventListener("click", (function() {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
    }));
    let l = document.querySelectorAll("ul.tabs li");
    document.querySelectorAll("ul.tabs li.tab-link");
    for (let e of l) e.addEventListener("click", t => {
        let l = t.target.getAttribute("data-tab"),
            s = t.target.parentElement.children;
        for (let e of s) e.classList.remove("current");
        let c = t.target.parentElement.parentElement.children;
        for (let e of c) e.classList.remove("current");
        let n = document.getElementById(l);
        e.classList.add("current"), n.classList.add("current")
    });
    const s = document.querySelectorAll(".tabs .tab");
    for (let e of s) e.addEventListener("click", t => {
        let l = t.target.parentElement.children;
        for (let e of l) e.classList.remove("active");
        e.classList.add("active")
    });
    const c = document.querySelectorAll(".tabs .tab img");
    for (let e of c) e.addEventListener("click", t => {
        let l = t.target.parentElement.parentElement.children;
        for (let e of l) e.classList.remove("active");
        e.classList.add("active")
    });
    let n = document.getElementsByClassName("modal-btn"),
        o = document.getElementsByClassName("modal"),
        a = document.getElementsByClassName("modal-close"),
        i = document.getElementsByClassName("modal-closePic"),
        r = document.getElementsByClassName("modal-bg");
    for (let e = 0; e < n.length; e++)
        for (let t = 0; t < o.length; t++) {
            let l = n[e].getAttribute("data-modal"),
                s = o[t].getAttribute("id"),
                c = function() {
                    if (l == s) return !0
                };
            n[e].addEventListener("click", () => {
                c() && (o[t].style.display = "block")
            });
            let d = function(e) {
                for (let l = 0; l < e.length; l++) e[l].addEventListener("click", () => {
                    c() && (o[t].style.display = "none")
                })
            };
            d(a), d(r), d(i)
        }
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeEnd", '<div class="modal modal-clipBox" id="modal-clip">\n    <div class="modal-closePic">&times;</div>\n    <div class="modal-bg"></div>\n    <div class="modal-box modal-box-video animate-zoom">\n        <div class="modal-video">\n            <iframe id="youtube" src="" frameborder="0" allowfullscreen></iframe>\n        </div>\n    </div>\n</div>');
    let d = document.getElementsByClassName("modal-clip");
    for (let e of d) {
        let t = e.getAttribute("data-video");
        t = `//www.youtube-nocookie.com/embed/${t}?rel=0&controls=1&autoplay=1&nocookie=true`;
        let l = document.getElementsByClassName("modal-clipBox"),
            s = document.getElementById("youtube");
        e.addEventListener("click", () => {
            s.setAttribute("src", t), setTimeout(() => {
                l[0].style.display = "block"
            }, 200)
        });
        for (let e of i)
            for (let t of l) e.addEventListener("click", () => {
                t.style.display = "none"
            });
        for (let e of r)
            for (let t of l) e.addEventListener("click", () => {
                t.style.display = "none"
            })
    }
}));
var Accordion = function(e) {
    var t = "string" == typeof e.element ? document.getElementById(e.element) : e.element,
        l = e.openTab,
        s = e.oneOpen || !1,
        c = "accordion-title",
        n = "accordion-content";

    function o(e) {
        var l, n; - 1 !== e.target.className.indexOf(c) && (s ? (a(), [].forEach.call(t.querySelectorAll("." + c), (function(e) {
            e.classList.remove("active")
        })), e.target.classList.add("active")) : e.target.classList.toggle("active"), l = e.target.nextElementSibling, n = l.scrollHeight, "0px" === l.style.height || "" === l.style.height ? l.style.height = n + "px" : l.style.height = 0)
    }

    function a() {
        [].forEach.call(t.querySelectorAll("." + n), (function(e) {
            e.style.height = 0
        }))
    }

    function i(e) {
        return t.querySelectorAll("." + n)[e - 1]
    }

    function r(e) {
        var t = i(e);
        t && (s && a(), t.style.height = t.scrollHeight + "px")
    }
    return [].forEach.call(t.querySelectorAll("button"), (function(e) {
        e.classList.add(c), e.nextElementSibling.classList.add(n)
    })), t.addEventListener("click", o), a(), l && r(l), {
        open: r,
        close: function(e) {
            var t = i(e);
            t && (t.style.height = 0)
        },
        destroy: function() {
            t.removeEventListener("click", o)
        }
    }
};

function onScroll() {
    const e = document.querySelectorAll(".menu a");
    let t = document.documentElement.scrollTop,
        l = document.querySelectorAll(".temp"),
        s = 0;
    l.forEach((function(l) {
        let c = l.offsetTop - 70,
            n = document.querySelectorAll(".menu a.active");
        c <= t && (n[0].classList.remove("active"), e[s].classList.add("active")), s < e.length - 1 && s++
    }))
}

function myLoad(e, t) {
    const l = document.querySelectorAll(e);
    let s = document.documentElement.scrollTop;
    for (let e = 0; e < l.length; e++) {
        l[e].offsetTop < s + 600 && l[e].classList.add(t)
    }
}

function addClass(e, t, l) {
    let s = document.querySelectorAll(e),
        c = document.querySelectorAll(t);
    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", () => {
        for (let e = 0; e < c.length; e++) c[e].classList.add(l)
    })
}

function removeClass(e, t, l) {
    let s = document.querySelectorAll(e),
        c = document.querySelectorAll(t);
    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", () => {
        for (let e = 0; e < c.length; e++) c[e].classList.remove(l)
    })
}

function addImgDefault(e, t) {
    const l = document.querySelectorAll(e);
    let s = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAARACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKAP/2Q==";
    for (let e = 0; e < l.length; e++) switch (t) {
        case "src":
            l[e].src = s;
            break;
        case "srcset":
            l[e].srcset = s;
            break;
        default:
    }
}

function myLazy(e, t) {
    const l = document.querySelectorAll(e);
    let s = window.innerHeight;
    for (let e = 0; e < l.length; e++) {
        let c = l[e].getBoundingClientRect().top,
            n = l[e].getBoundingClientRect().bottom;
        if (c <= s && n >= 0) switch (t) {
            case "src":
                l[e].src = l[e].dataset.src, l[e].classList.remove("lazy");
                break;
            case "srcset":
                l[e].srcset = l[e].dataset.srcset, l[e].classList.remove("lazy");
                break;
            case "img-bg":
                l[e].classList.remove("lazy-bg"), l[e].classList.add("img-bg");
                break;
            default:
        }
    }
}

function autoLazy(e, t) {
    const l = document.querySelectorAll(e);
    for (let e = 0; e < l.length; e++) setTimeout(() => {
        switch (t) {
            case "src":
                l[e].src = l[e].dataset.src, l[e].classList.remove("lazy");
                break;
            case "srcset":
                l[e].srcset = l[e].dataset.srcset, l[e].classList.remove("lazy");
                break;
            case "img-bg":
                l[e].classList.remove("lazy-bg"), l[e].classList.add("img-bg");
                break;
            default:
        }
    }, 5e3)
}

// js tiếp
document.addEventListener("DOMContentLoaded", (function() {
    var e = document.getElementsByClassName("accordions-title");
    for (t = 0; t < e.length; t++) e[t].addEventListener("click", (function() {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
    }));
    var t;
    e = document.getElementsByClassName("accordions_lv-title");
    for (t = 0; t < e.length; t++) e[t].addEventListener("click", (function() {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
    }));
    let l = document.querySelectorAll("ul.tabs li");
    document.querySelectorAll("ul.tabs li.tab-link");
    for (let e of l) e.addEventListener("click", t => {
        let l = t.target.getAttribute("data-tab"),
            s = t.target.parentElement.children;
        for (let e of s) e.classList.remove("current");
        let c = t.target.parentElement.parentElement.children;
        for (let e of c) e.classList.remove("current");
        let n = document.getElementById(l);
        e.classList.add("current"), n.classList.add("current")
    });
    const s = document.querySelectorAll(".tabs .tab");
    for (let e of s) e.addEventListener("click", t => {
        let l = t.target.parentElement.children;
        for (let e of l) e.classList.remove("active");
        e.classList.add("active")
    });
    const c = document.querySelectorAll(".tabs .tab img");
    for (let e of c) e.addEventListener("click", t => {
        let l = t.target.parentElement.parentElement.children;
        for (let e of l) e.classList.remove("active");
        e.classList.add("active")
    });
    let n = document.getElementsByClassName("modal-btn"),
        o = document.getElementsByClassName("modal"),
        a = document.getElementsByClassName("modal-close"),
        i = document.getElementsByClassName("modal-closePic"),
        r = document.getElementsByClassName("modal-bg");
    for (let e = 0; e < n.length; e++)
        for (let t = 0; t < o.length; t++) {
            let l = n[e].getAttribute("data-modal"),
                s = o[t].getAttribute("id"),
                c = function() {
                    if (l == s) return !0
                };
            n[e].addEventListener("click", () => {
                c() && (o[t].style.display = "block")
            });
            let d = function(e) {
                for (let l = 0; l < e.length; l++) e[l].addEventListener("click", () => {
                    c() && (o[t].style.display = "none")
                })
            };
            d(a), d(r), d(i)
        }
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeEnd", '<div class="modal modal-clipBox" id="modal-clip">\n    <div class="modal-closePic">&times;</div>\n    <div class="modal-bg"></div>\n    <div class="modal-box modal-box-video animate-zoom">\n        <div class="modal-video">\n            <iframe id="youtube" src="" frameborder="0" allowfullscreen></iframe>\n        </div>\n    </div>\n</div>');
    let d = document.getElementsByClassName("modal-clip");
    for (let e of d) {
        let t = e.getAttribute("data-video");
        t = `//www.youtube-nocookie.com/embed/${t}?rel=0&controls=1&autoplay=1&nocookie=true`;
        let l = document.getElementsByClassName("modal-clipBox"),
            s = document.getElementById("youtube");
        e.addEventListener("click", () => {
            s.setAttribute("src", t), setTimeout(() => {
                l[0].style.display = "block"
            }, 200)
        });
        for (let e of i)
            for (let t of l) e.addEventListener("click", () => {
                t.style.display = "none"
            });
        for (let e of r)
            for (let t of l) e.addEventListener("click", () => {
                t.style.display = "none"
            })
    }
}));
var Accordion = function(e) {
    var t = "string" == typeof e.element ? document.getElementById(e.element) : e.element,
        l = e.openTab,
        s = e.oneOpen || !1,
        c = "accordion-title",
        n = "accordion-content";

    function o(e) {
        var l, n; - 1 !== e.target.className.indexOf(c) && (s ? (a(), [].forEach.call(t.querySelectorAll("." + c), (function(e) {
            e.classList.remove("active")
        })), e.target.classList.add("active")) : e.target.classList.toggle("active"), l = e.target.nextElementSibling, n = l.scrollHeight, "0px" === l.style.height || "" === l.style.height ? l.style.height = n + "px" : l.style.height = 0)
    }

    function a() {
        [].forEach.call(t.querySelectorAll("." + n), (function(e) {
            e.style.height = 0
        }))
    }

    function i(e) {
        return t.querySelectorAll("." + n)[e - 1]
    }

    function r(e) {
        var t = i(e);
        t && (s && a(), t.style.height = t.scrollHeight + "px")
    }
    return [].forEach.call(t.querySelectorAll("button"), (function(e) {
        e.classList.add(c), e.nextElementSibling.classList.add(n)
    })), t.addEventListener("click", o), a(), l && r(l), {
        open: r,
        close: function(e) {
            var t = i(e);
            t && (t.style.height = 0)
        },
        destroy: function() {
            t.removeEventListener("click", o)
        }
    }
};

function onScroll() {
    const e = document.querySelectorAll(".menu a");
    let t = document.documentElement.scrollTop,
        l = document.querySelectorAll(".temp"),
        s = 0;
    l.forEach((function(l) {
        let c = l.offsetTop - 70,
            n = document.querySelectorAll(".menu a.active");
        c <= t && (n[0].classList.remove("active"), e[s].classList.add("active")), s < e.length - 1 && s++
    }))
}

function myLoad(e, t) {
    const l = document.querySelectorAll(e);
    let s = document.documentElement.scrollTop;
    for (let e = 0; e < l.length; e++) {
        l[e].offsetTop < s + 600 && l[e].classList.add(t)
    }
}

function addClass(e, t, l) {
    let s = document.querySelectorAll(e),
        c = document.querySelectorAll(t);
    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", () => {
        for (let e = 0; e < c.length; e++) c[e].classList.add(l)
    })
}

function removeClass(e, t, l) {
    let s = document.querySelectorAll(e),
        c = document.querySelectorAll(t);
    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", () => {
        for (let e = 0; e < c.length; e++) c[e].classList.remove(l)
    })
}

function addImgDefault(e, t) {
    const l = document.querySelectorAll(e);
    let s = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAARACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKAP/2Q==";
    for (let e = 0; e < l.length; e++) switch (t) {
        case "src":
            l[e].src = s;
            break;
        case "srcset":
            l[e].srcset = s;
            break;
        default:
    }
}

function myLazy(e, t) {
    const l = document.querySelectorAll(e);
    let s = window.innerHeight;
    for (let e = 0; e < l.length; e++) {
        let c = l[e].getBoundingClientRect().top,
            n = l[e].getBoundingClientRect().bottom;
        if (c <= s && n >= 0) switch (t) {
            case "src":
                l[e].src = l[e].dataset.src, l[e].classList.remove("lazy");
                break;
            case "srcset":
                l[e].srcset = l[e].dataset.srcset, l[e].classList.remove("lazy");
                break;
            case "img-bg":
                l[e].classList.remove("lazy-bg"), l[e].classList.add("img-bg");
                break;
            default:
        }
    }
}

function autoLazy(e, t) {
    const l = document.querySelectorAll(e);
    for (let e = 0; e < l.length; e++) setTimeout(() => {
        switch (t) {
            case "src":
                l[e].src = l[e].dataset.src, l[e].classList.remove("lazy");
                break;
            case "srcset":
                l[e].srcset = l[e].dataset.srcset, l[e].classList.remove("lazy");
                break;
            case "img-bg":
                l[e].classList.remove("lazy-bg"), l[e].classList.add("img-bg");
                break;
            default:
        }
    }, 5e3)
}

//