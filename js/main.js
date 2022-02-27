'use strict';

// アコーディオン
const slideUp = (el, duration = 300) => {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
      el.classList.remove("is-open");
    }, duration);
  };
  
  const slideDown = (el, duration = 300) => {
    el.classList.add("is-open");
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  };
  
  const slideToggle = (el, duration = 600) => {
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, duration);
    } else {
      return slideUp(el, duration);
    }
  };
  const accordions = document.querySelectorAll(".js-accordion");
  const accordionsArr = Array.prototype.slice.call(accordions);
  
  accordionsArr.forEach((accordion) => {
 
    const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
    const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);
  
    accordionTriggersArr.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        accordionTriggersArr.forEach((trigger) => {
          if (trigger !== e.target.parentElement) {
            trigger.classList.remove("is-active");
            const openedContent = trigger.querySelector(".accordion-content");
            slideUp(openedContent);
          }
        });
        trigger.classList.toggle("is-active");
        const content = trigger.querySelector(".accordion-content");
        slideToggle(content);
      });
    });


  });

  function showElementAnimation() {
    const elements = document.getElementsByClassName('fuwa');
  
    const showTiming = window.innerHeight > 768 ? 200 : 50; 
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;
  
    for (let i=0;i<elements.length;i++) {
      const clientRect = elements[i].getBoundingClientRect();
      const elemY = scrollY + clientRect.top;
      if(scrollY + windowH - showTiming > elemY) {
        elements[i].classList.add('show');
      } else if(scrollY + windowH < elemY) {
        elements[i].classList.remove('show');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);



// ハンバーガーメニュー
  function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('line4').classList.toggle('line_4');
    document.getElementById('line5').classList.toggle('line_5');
    document.getElementById('nav-menu').classList.toggle('in');
  }
  document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
  } );

