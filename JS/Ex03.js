let activeImage = 1;
const imgArr = [1, 2, 3];
let timer = 800;

const slideLoops = async () => {
    while (true) {
        if (timer == 0)
                setActiveImage();

        await new Promise(resolve => setTimeout(() => resolve(), 100));
        timer -= 10;
        }
    }

const setActiveImage = () => {
    imgArr.forEach( element => {
        if (element == activeImage)    
            document.getElementById("slide-"+activeImage).classList.add("active-image");
        else
            document.getElementById("slide-"+element).classList.remove("active-image");    
    })   

    activeImage++;
    if(activeImage == 4)
        activeImage = 1;

        
    timer = 800;
}

//sets the active image, and sets the timer to 0 - our loop function
// checks the timer each 0.1 seconds, so if the timer is 0, the image switch occures.
const forceActiveImage = (imgIdx) => {
    activeImage = imgIdx;
    timer = 50;
}

slideLoops();