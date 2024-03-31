function loadingAnimation() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.6,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.6,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display:"none",
  });
}
loadingAnimation();


const scroll = new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth:true
})

document.querySelector("#footer h2").addEventListener("click",()=>{
  console.log("world");
  scroll.scrollTo(0)
})


var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
  ele.addEventListener("mouseenter",function(){
    // console.log(ele);
    var bgimg = ele.getAttribute("data-img")
    page2.style.backgroundImage = `url(${bgimg})` 
    console.log(bgimg);

  })
}) 