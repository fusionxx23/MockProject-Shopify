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