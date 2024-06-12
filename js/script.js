document.addEventListener('DOMContentLoaded', function(event) {	

  if(document.querySelector('.actions__slider')){
      new Swiper('.actions__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 2,
        loop:false,
			  navigation: {
			    prevEl: '.actions__prev',
			    nextEl: '.actions__next',
			  },
			  breakpoints: {
			  	651:{
			  		slidesPerView: 2,
			  		spaceBetween: 20,
			  	},
			  	0:{
			  		slidesPerView: 1,
			  		spaceBetween: 12,
			  	},			  
			  }
      });
  }

  if(document.querySelector('.rates__slider')){
      new Swiper('.rates__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 3,
        loop:false,
			  navigation: {
			    prevEl: '.rates__prev',
			    nextEl: '.rates__next',
			  },
			  breakpoints: {
			  	1024:{
			  		slidesPerView: 3,
			  		spaceBetween: 20,
			  	},
			  	651:{
			  		slidesPerView: 2,
			  		spaceBetween: 20,
			  	},
			  	0:{
			  		slidesPerView: 1,
			  		spaceBetween: 12,
			  	},			  
			  }
      });
  }
  if(document.querySelector('.equipments__slider')){
      new Swiper('.equipments__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 3,
        loop:false,
			  navigation: {
			    prevEl: '.equipments__prev',
			    nextEl: '.equipments__next',
			  },
			  breakpoints: {
			  	1024:{
			  		slidesPerView: 3,
			  		spaceBetween: 20,
			  	},
			  	651:{
			  		slidesPerView: 2,
			  		spaceBetween: 20,
			  	},
			  	0:{
			  		slidesPerView: 1,
			  		spaceBetween: 12,
			  	},			  
			  }
      });
  }

  if(document.querySelector('.works__slider')){
      new Swiper('.works__slider', {
        speed: 600,
        spaceBetween: 12,
        slidesPerView: 1,
        loop:false,
			  navigation: {
			    prevEl: '.works__prev',
			    nextEl: '.works__next',
			  },
      });
  }

  if(document.querySelector('.doctors__slider')){
      new Swiper('.doctors__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 2,
        loop:false,
			  navigation: {
			    prevEl: '.doctors__prev',
			    nextEl: '.doctors__next',
			  },
			  breakpoints: {
			  	651:{
			  		slidesPerView: 2,
			  		spaceBetween: 20,
			  	},
			  	0:{
			  		slidesPerView: 1,
			  		spaceBetween: 12,
			  	},			  
			  }
      });
  }
  if(document.querySelector('.photos__slider')){
      new Swiper('.photos__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 2,
        loop:false,
			  navigation: {
			    prevEl: '.photos__prev',
			    nextEl: '.photos__next',
			  },
			  breakpoints: {
			  	651:{
			  		spaceBetween: 20,
			  	},
			  	0:{
			  		spaceBetween: 10,
			  	},			  
			  }
      });
  }
  if(document.querySelector('.licenses__slider')){
      new Swiper('.licenses__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 3,
        loop:false,
			  navigation: {
			    prevEl: '.licenses__prev',
			    nextEl: '.licenses__next',
			  },
			  breakpoints: {
			  	851:{
			  		slidesPerView: 3,
			  		spaceBetween: 20,
			  	},
			  	0:{
			  		slidesPerView: 2,
			  		spaceBetween: 10,
			  	},			  
			  }
      });
  }
	var reviewsMore = document.querySelectorAll('.reviews__text>a');
	if(reviewsMore){
		reviewsMore.forEach(function(reviewsMore) {
		    reviewsMore.addEventListener('click', function(event) {
		    	event.preventDefault();
		    		reviewsMore.parentNode.classList.toggle('show');
		    });
		});		
	}

	function slideToggle(element) {
	  var target = element.style;
	  target.transition = 'all 0.3s ease-in-out';
	  if (target.maxHeight) {
	    target.maxHeight = null;
	    element.classList.remove('active');
	  } else {
	    target.maxHeight = element.scrollHeight + 'px';
	    element.classList.add('active');
	  }
	}
	var body = document.body;
  const popupButton = document.querySelectorAll("[data-topopup]");
  if(popupButton){
	  popupButton.forEach(function (popupButton) {
	    popupButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataPopup = this.getAttribute("data-topopup");
	      const dataClassPopup = document.querySelector(`${dataPopup}`);
	      if (dataClassPopup !== null) {
	        dataClassPopup.classList.add("open");
	        body.classList.add('popuplock');	
	      }
	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		body.classList.remove('popuplock');	
		    		popupClose.closest('.popup').classList.remove('open');
		    });
		});		
	}
	var faqTop = document.querySelectorAll('.faq__arrow, .faq__top');
	if(faqTop){
		faqTop.forEach(function(faqTop) {
		    faqTop.addEventListener('click', function(event) {
		    		faqTop.closest('.faq__card').classList.toggle('active');
		    		var faqBody = faqTop.closest('.faq__card').querySelector('.faq__body');
		    		if(faqBody){
		    			slideToggle(faqBody);
		    		}
		    });
		});		
	}  

	const telmask = document.querySelectorAll("input[type='tel']");
	if(telmask){
	    telmask.forEach(function(input) {
	        const maskOptions = {
	          mask: '+{7} (000) 000 00 00',
	          lazy:true,
	        };
	       	const mask = IMask(input, maskOptions);
	    });
	}
});



