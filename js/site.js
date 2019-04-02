console.log('page loaded')

var nonMobile = window.matchMedia("(min-width: 900px)")

window.addEventListener('load', function(){
  var scrollTop = 0;
  var isFixed = false;
  var navBar  = document.getElementById("main-nav")

  window.addEventListener('scroll',function(e){
    {
      scrollTop = window.pageYOffset
      if (scrollTop >= 280){
        if(!isFixed){
          navBar.style = "position:fixed; top:0;"
          // content.style = "margin-top:55px;"
          isFixed= true;

          if (nonMobile.matches){
            document.getElementById('nav-logo').style.display='block';  
          }
        }
      }else{
        if (isFixed){
          navBar.style = "position:relative;"
          // content.style = "margin-top:0px;"
          isFixed=false;

          if (nonMobile.matches){
            document.getElementById('nav-logo').style.display='none';  
          }
        }
      }
    }
  })
})