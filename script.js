let menu=document.querySelector("#menu-bars");
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

let section =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header .navbar a');


window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section .forEach(sec=>{
      let top=window.scrollY;
      let height=sec.offsetHeight;
        let offset=sec.offsetTop-150;
        let id=sec.getAttribute('id');
        if(top=>offset && top<offset+height){
          navLinks.forEach(link=>{
            navLinks.classList.remove('active');
            document.querySelectorAll('header,navbar a[href*='+id+']').classList.add('active');
          })
        }
    });
    function loader(){
      document.querySelector(".loader-container").classList.add('fade-out');


    }
    function fadeOut(){
      setInterval(loader,3000);
    }
    window.onload=fadeOut;
    

}
document.querySelector("#search-icon").onclick=()=>{
document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector("#close").onclick=()=>{
document.querySelector('#search-form').classList.remove('active');
    }
    
      var swiper = new Swiper(".home-slider", {
        spaceBetween:20,
        centeredSlides:true,
        autoplay:{
          delay:7500,
          disableOnInteraction:false,

        },
        pagination:{
          el:".swiper-pagination",
          clickable:true,
        },
       loop:true,

      });
      var swiper = new Swiper(".review-slider", {
        spaceBetween:50,
        centeredSlides:true,
        autoplay:{
          delay:7500,
          disableOnInteraction:false,

        },
       
       loop:true,
      breakpoints:{
        0:{
          slidesPerView:1,

        },
        668:{
          slidesPerView:2,
        },
        768:{
          slidesPerView:2,
        },
        1024:{
       slidesPerView:3,
        },
      },
      });
      
    let countProduct=document.getElementById('count');

      let count=0;
      function addToCart(){
        count++;
        countProduct.innerText=count;
        countProduct.style.color= green;

      }
      let  fa_user= document.getElementById( 'loginPageHandler')
           let x=0;

      function loginPage(){
        
        x++;
        if(x===0 || x%2==0){
          fa_user.style.display = 'none' ;
            
        }else{
          fa_user.style.display = 'block';
        }
       

      }
      

     
      let email_data= document.getElementById('email_login_data');
     
      let form=document.getElementById('loginPageHandler');
        form.addEventListener('submit',(event)=>{
          event.preventDefault();
          let login_email = document.getElementById('login_email');
          let result=email_data.value ;
          login_email.innerHTML = `<h1>${result}</h1>`
       
          fa_user.style.display='none';

        })
