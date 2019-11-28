class Slider {
    constructor() {
        this.slideOne = $('#img1'); 
        this.slideTwo = $('#img2'); 
        this.slideThree = $('#img3'); 
        this.next = $('#button2'); 
        this.prev = $('#button1'); 
        this.tracker = 1; // Tracks what image starting with 1 
        this.bannerTimer = 10000; // Banner Timer in ms 
        this.start = null; 
        this.events(); 
        this.startBannerLoop(); 
    }
    events() {
        this.next.click(this.nextImg.bind(this)); 
        this.prev.click(this.prevImg.bind(this)); 
    }

    startBannerLoop() {
		this.start = setInterval(function() {
			this.nextImg(); 
		}.bind(this), this.bannerTimer); 
	}
    nextImg() {
        clearInterval(this.start); 
        if(this.tracker === 3) {
            this.slideThree.removeClass('slide-display'); 
            this.slideOne.addClass('slide-display'); 
            this.tracker = 1; 
            this.startBannerLoop(); 
        } 
        else if(this.tracker === 1) {
            this.slideOne.removeClass('slide-display'); 
            this.slideTwo.addClass('slide-display'); 
            this.tracker = 2; 
            this.startBannerLoop(); 
            
        }
        else if (this.tracker === 2) {
            this.slideTwo.removeClass('slide-display'); 
            this.slideThree.addClass('slide-display'); 
            this.tracker = 3; 
            this.startBannerLoop(); 
        }
        
    }
    prevImg() {
        clearInterval(this.start); 
        if(this.tracker == 1) {
            this.slideOne.removeClass('slide-display'); 
            this.slideThree.addClass('slide-display'); 
            this.tracker = 3; 
            console.log('1 triggered on prev'); 
            this.startBannerLoop(); 
        }
       else if(this.tracker === 2) {
            this.slideTwo.removeClass('slide-display'); 
            this.slideOne.addClass('slide-display'); 
            this.tracker = 1; 
            console.log('2 triggered on prev'); 
            this.startBannerLoop(); 
        }
        else if(this.tracker === 3)  {
            this.slideThree.removeClass('slide-display'); 
            this.slideTwo.addClass('slide-display'); 
            this.tracker = 2; 
            console.log('3 triggered on prev'); 
            this.startBannerLoop(); 
        }
    } 


}
var start = new Slider(); 
const $triggerButton = $('.search_button');
const $searchBar = $('.search__bar'); 
$(document).mouseup(function (e) {
   if (!$searchBar.is(e.target) // if the target of the click isn't the container...
   && $searchBar.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $searchBar.removeClass('display');
  }
 });
$triggerButton.on('click', () => {
  $searchBar.toggleClass('display');
});

class downScroll {
      constructor() {
        this.window = $(window); 
        this.secondContainer = $('.second_container');
        this.navBar = $('#dynamic_nav'); 
        this.events(); 
        this.isOpen = false; 
      }

      events() {
        this.window.scroll(() => {
          this.scrollEvent(); 
        }); 
      }

      scrollEvent() {
        if(!(this.isOpen)) {
          if(this.window.scrollTop() >= this.secondContainer.position().top - 100) {
            this.navBar.removeClass('display_none'); 
            
              this.navBar.removeClass('nav__display_none'); 
              this.navBar.addClass('nav__display'); 
              this.isOpen = true; 
            
            
          }
        }else if(this.isOpen) {
          if(this.window.scrollTop() <= this.secondContainer.position().top - 100) {
            this.navBar.removeClass('nav__display'); 
            this.navBar.addClass('nav__display_none'); 
            // this.navBar.addClass('display_none'); 
            this.isOpen = false; 
      
          }
        }
      }
}
class sideNav {
    constructor() {
        this.toggle = $('.togglerIcon'); 
        this.togglers = $('.toggle_up'); 
        this.isOpen = false; 
        this.events();  
    }

    events() {
        this.togglers.click(() => {
          if(this.isOpen) {
            this.closeEvent(); 
          } else if(!this.isOpen) {
            this.openEvent(); 
          }
        })
    }
    openEvent() {
      this.toggle.addClass('fa-times'); 
      this.toggle.removeClass('fa-bars'); 
      
      this.isOpen = true; 
    } 
    closeEvent () {
      this.toggle.addClass('fa-bars'); 
      this.toggle.removeClass('fa-times'); 
      this.isOpen = false; 
    }
}

var pageScroll = new downScroll(); 
var SideNavbar = new sideNav(); 