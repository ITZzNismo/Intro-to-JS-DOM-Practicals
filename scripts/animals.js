const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const textSearch = document.getElementById("search");

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        var animal = this.getAttribute("animal");
        // console.log(animal);
        typedValue = textSearch.value;
        for(let allAnimals = 0; allAnimals < images.length; allAnimals++) {
            if(animal === "all") {
                images[allAnimals].style.display = "inline-block";
            } 
            else {
                var imageAltText = images[allAnimals].getAttribute("alt");
                if(images[allAnimals].classList.contains(animal)) {
                    if(typedValue !== "") {
                        if(imageAltText != null && imageAltText.includes(typedValue)) {
                            images[allAnimals].style.display = "inline-block";
                        } 
                        else {
                            images[allAnimals].style.display = "none";
                        }
                    }
                    else {
                        images[allAnimals].style.display = "inline-block";
                    }
                } 
                else {
                    images[allAnimals].style.display = "none";
                }
            }
        }
    });
}