const hamburger=document.getElementById("hamb");
const navbar_menu=document.getElementById("navbar-menu");

//Function for Hamburger navbar
hamburger.addEventListener("click", (e)=>{
    if(navbar_menu.style.display=="none"){
        navbar_menu.style.display="block";
    }else{
        navbar_menu.style.display="none";
    }
})

//Function for Resume to open on the next tab
function resume(){
    window.open("./Ashish kumar palai-Node JS Developer.pdf","_blank")
  }

// Third-party library to disply GitHub Calender
GitHubCalendar(".calendar", "ashishkumarpalai", {
    responsive: true,
    global_stats: true,
    tooltips: true
  });

  
    // const name=req.body.Name;
    // const email=req.body.Email
    // const message=req.body.Message;