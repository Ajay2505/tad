var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".left_arrow",
    },
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });


var swiper3 = new Swiper(".v_one", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    loop: true,
});

var swiper4 = new Swiper(".v_two", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
});

$(".dual_scroll_container").on("mousewheel DOMMouseScroll", function (e) {
  // Check if the device width is greater than 991px
  if (window.innerWidth > 991) {
    var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

    if (delta > 0) {
      swiper3.slideNext();
      swiper4.slidePrev();
    } else {
      swiper3.slidePrev();
      swiper4.slideNext();
    }

    return false;
  }
});


// Next button click event
$(".dual_next").on("click", function () {
  swiper3.slideNext();
  swiper4.slidePrev();
});

// Previous button click event
$(".dual_prev").on("click", function () {
  swiper3.slidePrev();
  swiper4.slideNext();
});



jQuery(document).ready(function ($) {
  let autoPlayDelay = 1500;

  let options = {
    init: true,
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,

    autoplay: {
      delay: autoPlayDelay,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },

    // If we need pagination
    /*pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },*/

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  var swiper2 = new Swiper(".our-services", options);

  let slidersCount = swiper2.params.loop
    ? swiper2.slides.length - 2
    : swiper2.slides.length;
  let widthParts = 100 / slidersCount;

  $(".swiper-counter .total").html(slidersCount);
  for (let i = 0; i < slidersCount; i++) {
    $(".swiper-progress-bar .progress-sections").append("<span></span>");
  }

  function initProgressBar() {
    let calcProgress =
      (slidersCount - 1) * (autoPlayDelay + swiper2.params.speed);
    calcProgress += autoPlayDelay;
    $(".swiper-progress-bar .progress").animate(
      {
        width: "100%",
      },
      calcProgress,
      "linear"
    );
  }

  initProgressBar();

  swiper2.on("slideChange", function () {
    let progress = $(".swiper-progress-bar .progress");

    $(".swiper-counter .current").html(this.activeIndex + 1);

    if (
      (this.progress == -0 || (this.progress == 1 && this.params.loop)) &&
      !progress.parent().is(".stopped")
    ) {
      progress.css("width", "0");
      if (this.activeIndex == 0) {
        initProgressBar();
      }
    }

    if (progress.parent().is(".stopped")) {
      progress.animate(
        {
          width: Math.round(widthParts * (this.activeIndex + 1)) + "%",
        },
        this.params.speed,
        "linear"
      );
    }
  });

  swiper2.on("touchMove", function () {
    $(".swiper-progress-bar .progress").stop().parent().addClass("stopped");
  });
});

$('.lines_wrapper, .close, .mobile li a').click(function() {
  $('.mb_opptions_wrapper').toggleClass('active');
});



// gsap-start

gsap.registerPlugin(ScrollTrigger);

  

    gsap.from("header", {
      opacity: 0,
      duration: 2,
    });

    gsap.from(".solider1", {
      y: 200,
      x: -200,
      duration: 0.5,
      opacity: 0,
      delay: 0.75
    });

    gsap.from(".hero_text", {
      delay:1.5,
      duration: 1,
      opacity: 0,
    });

    gsap.from(".sec_1 .one", {
      x: 200,
      duration: 0.5,
      opacity: 0,
    });

    gsap.from(".sec_1 .two", {
      x: -200,
      duration: 0.5,
      opacity: 0,
    });

    gsap.from(".sec_1 .three", {
      x: 200,
      duration: 0.5,
      opacity: 0,
    });


    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".horse1",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    timeline
      .add(gsap.to(".horse1", { x: -130 }))
      .add(gsap.to(".horse1", { y: 240 }));

    
    gsap.from(".sec2_ani1", {
      x: -200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec_2",
        start: "top 70%",
        end: "top center",
      },
    });

    gsap.from(".sec2_ani2", {
      x: 200,
      duration: 0.5,
      opacity: 0,
      delay:1,
      scrollTrigger: {
        trigger: ".sec_2",
        start: "top 70%",
        end: "top center",
      },
    });

    const elements = document.querySelectorAll(".ozerotoone");

    elements.forEach((element, index) => {
      gsap.from(element, {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".sec2_horse",
          start: "bottom 70%",
          end: "90% center",
          // scrub: true,
          stagger: 0.2 * index, // Adjust the stagger value based on the index
        },
      });
    });

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".horse2",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    

    timeline2
      .add(gsap.to(".horse2", { x: 210 }))
      .add(gsap.to(".horse2", { y: 110 }));

      const timeline6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".horse6",
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });
  
      
  
      timeline6
        .add(gsap.to(".horse6", { x: 210 }))
        .add(gsap.to(".horse6", { y: 110 }));


    const timeline5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".horse5",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    

    timeline5
      .add(gsap.to(".horse5", { x: 210 }))
      .add(gsap.to(".horse5", { y: 110 }));


    gsap.from(".horsetext", {
      opacity: 0,
      duration: 0.5,
      opacity: 0,
      delay:1,
      scrollTrigger: {
        trigger: ".horse2",
        start: "top center",
        end: "top top",
        scrub: true
      },
    });

    gsap.from(".sec3_heading", {
      x: -200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec_3",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec3_subheading", {
      x: 200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec_3",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec3_anipara", {
      opacity: 0,
      duration: 0.5,
      opacity: 0,
      delay: 0.75,
      scrollTrigger: {
        trigger: ".sec_3",
        start: "top center",
        end: "top top",
      },
    });


    gsap.from(".sec4_heading1", {
      x: -200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec_4",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec4_heading2", {
      x: 200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec_4",
        start: "top center",
        end: "top top",
      },
    });

    const subparani1 = document.querySelectorAll(".subparani1");

    subparani1.forEach((element) => {
      gsap.from(element, {
        x: -200,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "top top",
        },
      });
    });

    const subparani2 = document.querySelectorAll(".subparani2");

    subparani2.forEach((element) => {
      gsap.from(element, {
        y: 200,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top top",
        },
      });
    });



    gsap.to(".elephant1", {
      y: 310, 
      scrollTrigger: {
        trigger: ".elephant1",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to(".solider2", {
      y: 150, 
      x: -160,
      scrollTrigger: {
        trigger: ".solider2",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".horse3",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    timeline3
      .add(gsap.to(".horse3", { x: 110 }))
      .add(gsap.to(".horse3", { y: 200 }));

    const timeline4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".horse4",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    timeline4
      .add(gsap.to(".horse4", { x: 210 }))
      .add(gsap.to(".horse4", { y: 110 }));


    gsap.to(".solider3", {
      y: 160, 
      x: -160,
      scrollTrigger: {
        trigger: ".solider3",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    gsap.from(".sec6_heading1", {
      x: -200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec6_heading1",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec6_heading2", {
      x: 200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec6_heading1",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec7_heading1", {
      x: -200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec7_heading1",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec7_heading2", {
      x: 200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec7_heading1",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec7paraani", {
      duration: 0.5,
      opacity: 0,
      delay: 0.75,
      scrollTrigger: {
        trigger: ".sec7paraani",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec8_heading1", {
      x: -200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec8_heading1",
        start: "top center",
        end: "top top",
      },
    });

    gsap.from(".sec8_heading2", {
      x: 200,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec8_heading1",
        start: "top center",
        end: "top top",
      },
    });

    gsap.to(".newText25", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".newText25",
        start: "top center",
        end: "top top",
        scrub: true
      }
    })


    $(document).ready(function () {
      function setFontSize() {
        var containerWidth = $('.sec_1 .content_wrapper').width();
        var fontSize = containerWidth * 0.16; // 1% of container width

        $('.content_wrapper>h2').css('font-size', fontSize + 'px');
      }

      // Initial font size setting
      setFontSize();

      // Update font size on window resize
      $(window).on('resize', setFontSize);
    });


    
const jobsWrapper = document.getElementById("jobsWrapper");
const jobTogglers = jobsWrapper?.querySelectorAll("[job-target]");
const jobDesc = jobsWrapper?.querySelectorAll("[job-id]");
if (jobsWrapper && jobTogglers && jobDesc) {
    jobTogglers.forEach(toggler => {
        toggler.addEventListener("click", evt => {
            const target = evt.currentTarget.getAttribute("job-target");
            const activeTarget = jobsWrapper.querySelector(".job-toggler.active");
            evt.currentTarget.classList.add("active");
            if (activeTarget) {
              activeTarget.classList.remove("active");
              jobsWrapper.querySelector('[job-status="active"]')?.setAttribute("job-status", "inactive");
              setTimeout(() => {
                jobsWrapper.querySelector(`[job-id="${target}"]`)?.setAttribute("job-status", "active");
              }, 250);
              return;
            }
            jobsWrapper.querySelector(`[job-id="${target}"]`)?.setAttribute("job-status", "active");
        });
    });
}

const validatePhone = document.querySelectorAll(".validatePhone");
if (validatePhone && validatePhone.length) {
  validatePhone.forEach(input => {
    input.addEventListener("blur", evt => {
      const nextSibling = evt.currentTarget.nextElementSibling;      
      if (evt.currentTarget.value.length !== 10) {
          nextSibling.classList.add("active");
          nextSibling.querySelector(".message").innerText = "Please provide a valid Mobile Number!";
      } else {
        nextSibling.classList.remove("active");
      }
    })
  });
}

const contectForm = document.getElementById("contectForm");
if (contectForm) {
  contectForm.addEventListener("submit", async evt => {
    evt.preventDefault();
    if (evt.currentTarget.querySelector(".error_msg.active")) {
      return;
    }

    evt.target.button.disabled = true;

    const formData = new FormData(evt.target);
    const formDataObject = {};
  
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    const sendToEmail = "ajaykumar.tetramind@gmail.com";
    const clientName = "Ajay";
    const emailBody = "Will do!";
    const subject = "Tad Global";

    try {
      const res = await fetch("/assets/contact-form.php", {
        method: 'POST',
        body: JSON.stringify({email: sendToEmail, name: clientName, subject, emailBody }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (res.ok) {
        console.log(res);
      } else {
        console.error(res);
      }
    } catch (error) {
      console.log(error);
    }
    
    evt.target.button.disabled = false;
  });
}


const caseStudyPopUpBtns = document.querySelectorAll('[data-bs-target="#exampleModal"]');
let currentCasePath = "";
if (caseStudyPopUpBtns && caseStudyPopUpBtns.length) {
  caseStudyPopUpBtns.forEach(btn => {
    btn.addEventListener("click", evt => {
      currentCasePath = evt.currentTarget.getAttribute("data-case-study") || "/";   
    });
  })
}

const caseStudyForm = document.getElementById("caseStudyForm");
if (caseStudyForm) {
  caseStudyForm.addEventListener("submit", evt => {
    evt.preventDefault();   
    document.querySelector("#exampleModal .btn-close").click();
    window.open(currentCasePath);
  });
}
