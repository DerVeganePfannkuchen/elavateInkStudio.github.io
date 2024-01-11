let sideNavCheck = document.getElementById('sideNavCheck')
let root = document.documentElement
const html = document.documentElement

//checks to see if the side nave box is selected

sideNavCheck.addEventListener( "change", () => {
    if ( sideNavCheck.checked ) {
      console.log('active')
      root.style.setProperty('--overflow', "hidden");

    } else {
        console.log('not')
        root.style.setProperty('--overflow', "scroll");
    }
 });
//will check if the window resizes and the sidenav bar is down
     window.addEventListener('resize',event =>{
    if(html.clientWidth > 1162 && sideNavCheck.checked){
        sideNavCheck.checked =false;
        root.style.setProperty('--overflow', "scroll");
    }
 })

