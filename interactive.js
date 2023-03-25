const ty = document.querySelectorAll("h1")[0];
const button = document.querySelectorAll("button")[0];



button.addEventListener("click", function inner(){
    ty.innerHTML="Thank you!";
    ty.style.textAlign="center";

    function star(){
        document.querySelectorAll(".card img")[0].style.display = "none";
    }
    function list(){
        const liElements = document.querySelectorAll("li")
        for (let n = 0; n < document.querySelectorAll("li").length; n++) {
            liElements[n].style.display = "none"
        }
        
    }
    function btn(){
        document.querySelectorAll("button")[0].style.display = "none";

    }

    function newImg(){

    const image = document.getElementById("container");

    const newImg = document.createElement("img");
    newImg.src = "images/illustration-thank-you.svg";
    newImg.id = "no-border";
    newImg.style.display = "block";
    newImg.style.height = "auto";
    newImg.style.width = "100%";
    newImg.style.padding = 0;
    
    image.appendChild(newImg);
    }

    function p(){
       const p = document.querySelectorAll(".description")[0];
       p.innerHTML="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
       p.style.textAlign="center";
    }

    function rating(){
        const rate = document.getElementById("select");
        newP = document.createElement("p");
        newP.id = "try";
        newP.innerHTML =   "You selected out of 5";
        rate.appendChild(newP)
    }


    

    rating();
    p();
    newImg();
    list();
    star();
    btn();
});


    const number = document.querySelectorAll("li");
    for (let n = 0; n < number.length; n++) {

        document.querySelectorAll("li")[n].addEventListener("click", function number(){

        var numberInnerHTML = this.innerHTML;

        switch (numberInnerHTML) {
            case "1":
                var rate = document.getElementById("li");
                newP = document.createElement("p");
                newP.id = "try";
                newP.innerHTML =   "You selected 1 out of 5";
                rate.appendChild(newP);
                break;
            case "2":
                var rate = document.getElementById("select");
                newP = document.createElement("p");
                newP.id = "try";
                newP.innerHTML =   "You selected 2 out of 5";
                rate.appendChild(newP);
                    break;
            case "3":
                var rate = document.getElementById("select");
                newP = document.createElement("p");
                newP.id = "try";
                newP.innerHTML =   "You selected 3 out of 5";
                rate.appendChild(newP);
                    break;
            case "4":
                var rate = document.getElementById("select");
                newP = document.createElement("p");
                newP.id = "try";
                newP.innerHTML =   "You selected 4 out of 5";
                rate.appendChild(newP);
                break;
            case "5":
                var rate = document.getElementById("select");
                newP = document.createElement("p");
                newP.id = "try";
                newP.innerHTML =   "You selected 5 out of 5";
                rate.appendChild(newP);
                break;
            default:
                break;
    }
    number();
    });
}