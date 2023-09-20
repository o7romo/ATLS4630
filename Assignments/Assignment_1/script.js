var x = 0;

const button = document.getElementById("theButton");
button.addEventListener("click" , manipulate);

const mouse = document.getElementById("mrMouse");

mouse.addEventListener("mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "pink";
  
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 200);

      document.getElementById("mrMouse").innerHTML = "yay."
    },
    false,
);


function manipulate(){

    if(x==0){
        document.getElementById("words").innerHTML = "How Are You?";
        document.getElementById("theDiv").style.color = "white";
        document.body.style.background = "black";

        document.getElementById("theButton").innerHTML = "Good";
        document.getElementById("theButton").style.backgroundColor = "white"
        document.getElementById("theButton").style.color = "black"

        x += 1

    }

    else if(x==1){
        document.getElementById("words").innerHTML = "Thats good";
        document.getElementById("theDiv").style.color = "black";
        document.body.style.background = "white";

        document.getElementById("theButton").innerHTML = "And You?";
        document.getElementById("theButton").style.backgroundColor = "black"
        document.getElementById("theButton").style.color = "white"

        x += 1

    }


    else if(x==2){
        document.getElementById("words").innerHTML = "Great";
        document.getElementById("theDiv").style.color = "white";
        document.body.style.background = "black";

        document.getElementById("theButton").innerHTML = "Awesome";
        document.getElementById("theButton").style.backgroundColor = "white"
        document.getElementById("theButton").style.color = "black"

        x += 1

    }


    

}
