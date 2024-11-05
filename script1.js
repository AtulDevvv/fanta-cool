 var tl=gsap.timeline({scrollTrigger:{
    trigger:".container2",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true,

}})


tl.to(".fanta-f",{
    top:"120%",
    left:"5%",
})
tl.to(".img-orange",{
    top:"148%",
    left:"20%",
})
tl.to(".orange-feel",{
    top:"170%",
    right:"-80%",

})
tl.to(".leaf1",{
    top:"112%",
    rotate:"130deg",
    left:"70%",

})


var tl2=gsap.timeline({scrollTrigger:{
    trigger:".container3",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true,

}})
// tl2.from(".cola",{
//     // rotate:"-90deg",
//     right:"-100%",
//     top:"110%",
// },'ca')
tl2.to(".img-orange",{
    left:"35%",
    top:"190%",
    
},'ca')
tl2.to(".fanta-f",{
    left:"30%",
    top:"210%",

},'ca')