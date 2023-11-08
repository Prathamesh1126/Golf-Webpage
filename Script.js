var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration:0.5,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -60%",
        end: "top  -100%",
        scrub:1
    }
})

gsap.from("#about-us, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 68%",
        scrub:3
    }
})
gsap.from(".card",{
    // scal:0.8,
    opacity:0,
    duration:1,
    stagger:0.6,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from("#colen1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colen1",
        scroller:"body ",
        start:"top 55%",
        end:"top 45%"   ,
        scrub:4
    }
})

gsap.from("#colen2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colen1",
        scroller:"body ",
        start:"top 55%",
        end:"top 45%"   ,
        scrub:4
    }
})

gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page-4 h1",
        scroll:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})