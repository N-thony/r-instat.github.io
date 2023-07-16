// document.addEventListener("DOMContentLoaded", function() {
//     var scrollToTopButton = document.querySelector(".scroll-to-top-btn");
  
//     // Show the button when user scrolls down the page
//     window.addEventListener("scroll", function() {
//       if (window.scrollY > 50) {
//         scrollToTopButton.classList.add("show");
//       } else {
//         scrollToTopButton.classList.remove("show");
//       }
//     });
  
//     // Scroll to top when button is clicked
//     scrollToTopButton.addEventListener("click", function() {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     });
//  });
  
  const scrollToTopButton = document.querySelector(".scroll-to-top-btn");

  window.addEventListener("scroll", () => {
    if(this.window.pageYOffset > 100){
      scrollToTopButton.classList.add("active");
    }else{
        scrollToTopButton.classList.remove("active");
      }
  });