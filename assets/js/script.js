// navbar start
const arrow = document.querySelectorAll(".arrow");

    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
     const arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
     arrowParent.classList.toggle("showMenu");
    //  document.getElementById("profile-details").style.display = "inline-block";
      });
    }
    const sidebar = document.querySelector(".sidebar");
    const sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
      // document.getElementById("card").style.display = "none";
    });
   
    function product(e){
      
      if(e==1){
        // document.getElementById("image").src = img.src.replace("", "./images/shoes.jpg");
       
        const myImage = document.getElementById("image1");
        const imageUrl = myImage.src="assets/images/watch.jpg";
        console.log("Image URL:", imageUrl);

        document.getElementById("card-title").innerHTML="Product1";
        document.getElementById("card-text").innerHTML="A watch is a portable timepiece that is designed to be carried or worn by a person12. It is intended to keep a consistent movement despite the motions caused by the person's activities1.";
       
      }
    
      else if(e==2){
       
        document.getElementById("card-title").innerHTML="Product2";
        document.getElementById("card-text").innerHTML="A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. ";
        const myImage = document.getElementById("image1");
        const imageUrl = myImage.src="assets/images/shoes.jpg";
        console.log("Image URL:", imageUrl);

      }
      else{
        alert("Please select correct product");
      }
    }

    
   