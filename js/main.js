const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if(currentScroll > 50){
    /* Überarbeitet (deshalb ein großes if außend)
    if(currentScroll <= 0){
      body.classList.remove("scroll-up")
    }
    */
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
      body.classList.remove("scroll-up")
      body.classList.add("scroll-down")

    }

    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
      body.classList.remove("scroll-down")
      body.classList.add("scroll-up")

   }
  }else{
    body.classList.remove("scroll-up")
    
  }
  console.log(window.pageYOffset)
  lastScroll = currentScroll;

})






//arrow anzeigen und verschwinden lassen
const arrow = document.querySelector("#arrow-up");

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if(currentScroll > 50){
    arrow.classList.remove("arrow-invisible")
    arrow.classList.add("arrow-visible")

  }
  if(!(currentScroll > 50)){
    arrow.classList.remove("arrow-visible")
    arrow.classList.add("arrow-invisible")

  }
})
