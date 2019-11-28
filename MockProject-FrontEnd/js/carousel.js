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
