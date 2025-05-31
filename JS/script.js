let swiper = new Swiper(".mySwiper1", {
    speed: 1200,
    loop: true,
    autoplay: {
      delay: 2000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const slider=document.querySelector(".slider-container .slider");
  const slide=document.querySelectorAll(".slider .slides");
  const backBtn=document.querySelector(".buttons .backBtn");

  let slideIndex=1;
  if(slideIndex==1){
    backBtn.classList.add("disable");
  }

  let interval;

  const nextSlider = ()=>{
    if(slideIndex < slide.length){
      // clearInterval(interval);
      slider.style.transform=`translateX(-${slideIndex*800}px)`;
      backBtn.classList.remove("disable");
      slideIndex++;
      console.log(slideIndex);
    }else{
      slideIndex=1;
      backBtn.classList.add("disable");
      slider.style.transform=`translateX(0px)`;
    } 
  }

  const prevSlider = ()=>{
    if(slideIndex > 1){
      slideIndex--;
      // clearInterval(interval);
      backBtn.classList.remove("disable");
      slider.style.transform=`translateX(-${(slideIndex-1)*800}px)`;
      console.log(slideIndex);
      if(slideIndex==1){
         backBtn.classList.add("disable");
       }
     }
  }

  setInterval(nextSlider,5000);

  
  const sliderBox=document.querySelector(".slider-wrapper .slider-box");
  const slides=document.querySelectorAll(".slider-box .slides");
  const slideBar=document.querySelector(".rightSect .bottomBar .scroll");

  let slideNumber=1;

  const showSlides = ()=>{
    if(slideNumber < slides.length){
      sliderBox.style.transform=`translateX(-${slideNumber*680}px)`;
      slideBar.style.left=`${slideNumber*170}px`;
      slideNumber++;
    }else{
      slideNumber=1;
      sliderBox.style.transform=`translateX(0px)`;
      slideBar.style.left=`0px`;
    } 
  }

  setInterval(showSlides,2500);