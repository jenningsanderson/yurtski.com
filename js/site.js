console.log('Page loaded; kicking off Javascript...')


// Going Stateful; this is where defaults should be defined
var STATE = {}

function loadState(){
  console.log('Loading state')
  var urlParams = new URLSearchParams(window.location.search);

  Object.keys(STATE).forEach(function(k){
    if (urlParams.get(k)){
      STATE[k] = JSON.parse(urlParams.get(k))  
    }
  })
}

function updateState(){

  var urlParams = new URLSearchParams(window.location.search);
  var getString = "?";
  
  Object.keys(STATE).forEach(function(k){
    if (STATE[k]!=undefined){
      getString += "&"+k+"="+JSON.stringify(STATE[k])
    }
  })

  let url = window.location.href.substring(0, window.location.href.indexOf("?"))
  
  if (window.history.replaceState) {
      //prevents browser from storing history with each change:
      window.history.replaceState(null, "Montana Backcountry Yurts", url + getString);
  }
}

function  collapseToggleables(actuallyHide=true){
  // Togglable sections: 
  var sections = document.getElementsByClassName('toggle-child-on-click')

  //Hide if JS if enabled: 
  for(var i=0; i<sections.length; i++){
    //Hide the children first
    if(actuallyHide){
      sections[i].nextElementSibling.style.display = 'none';  
    }
    //Add the event listeners:
    sections[i].addEventListener('click',function(e){
      if( this.nextElementSibling.style.display != 'block') {
        this.nextElementSibling.style.display = 'block';
      }else{
        this.nextElementSibling.style.display = 'none';
      }
    });
  }
  var buttons = document.getElementsByClassName('close-parent')
  for(var i=0; i<buttons.length; i++){

    //Add the event listeners:
    buttons[i].addEventListener('click',function(e){
      this.parentElement.style.display='none';
    });
  }
}





var HASH;

try{
  HASH = window.location.hash
}catch(e){
  console.warn("window.location.hash function not enabled; failing gracefully")
}

if (HASH){
  console.log(HASH)
}

function hideParent(elem, level=0){
  var parent = elem.parentElement;

  for(var i=0; i<level; i++){
    parent = parent.parentElement;
  }
  parent.style.display = 'none';  
}


/* Handle our sticky navigation bar */
var nonMobile = window.matchMedia("(min-width: 900px)")
var isFixed = false;
var navBarTop;

function fixMenuBar(scrollTop){
  if (scrollTop >= navBarTop){
    if(!isFixed){
      navBar.style.position = "fixed";
      navBar.style.top = 0;
      document.getElementById('')
    }
    isFixed = true;
  }else{
    if (isFixed){
      navBar.style.position = "relative";
      navBar.style.top = "inherit";
      isFixed=false;
    }
  }
}

window.addEventListener('load', function(){

  var navBar  = document.getElementById("navBar");
  navBarTop = navBar.offsetTop;

  var header = document.getElementsByTagName('header')[0]
  header.style.cssText += "; height:" + header.offsetHeight + "px !important;";

  var top = window.pageYOffset;
  if (top > 0){
    fixMenuBar(top);
  }

  window.addEventListener('scroll',function(e){
    fixMenuBar(window.pageYOffset)
  })
})

const CHECKFRONT_API = 'https://yurtski.checkfront.com/api/3.0/';

function hitCheckfrontAPI(endpoint, callback){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", CHECKFRONT_API+endpoint, true);
    xmlhttp.send();
}