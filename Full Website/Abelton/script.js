console.log("script running...");
// document.getElementById("nav-more").addEventListener("click", openMore);
// function openMore(){
//     console.log("open more runing")
//     // let more =document.getElementById("nav-more");
//     let hiddenNav = document.getElementsByClassName("hidden-nav")[0];
//     console.log("before toggle ",hiddenNav);
//     hiddenNav.classList.toggle("nav-hid-active");
//     console.log("after toggle ",hiddenNav);
// }

$(document).ready(function(){
    $("#nav-more").click(function(){
      $(".hidden-nav").slideToggle();
    });
  });

