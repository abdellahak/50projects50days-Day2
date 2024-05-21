var widthspace = 0;
var counter = 1;
const bar =document.getElementById('bar');
const circles = document.getElementsByClassName('number');
const moveslider = document.getElementById('movingslider')
const images = document.getElementsByClassName('image');
document.getElementById('prev').disabled=true;

function progress(){
    if (parseFloat(bar.style.width)< 99.999) {
        bar.style.width=(widthspace+33.333)+"%";
        widthspace = widthspace+33.333;
        document.getElementById('prev').disabled=false;
        update();
    }
    if(parseFloat(bar.style.width)== 99.999){
        document.getElementById('next').disabled=true;
    }
};

function shrink(){
    if (parseFloat(bar.style.width)>= 33.333) {
        bar.style.width=(widthspace-33.333)+"%";
        widthspace = widthspace-33.333;
        document.getElementById('next').disabled=false;
        downgrade();
    }
    if(parseFloat(bar.style.width)== 0){
        document.getElementById('prev').disabled=true;
    }
};

function update(){
    for (let i =0 ;i<circles.length;i++){
        images[i].style.display = 'none';
        if(i<=counter){
            circles[i].classList.add('active');
        }
    };
    images[counter].style.display = 'block';
    counter++;
};

function downgrade(){
    for (let i =0 ;i<circles.length;i++){
        images[i].style.display = 'none';
        if(i>counter-2){
            circles[i].classList.remove('active')
        };
    };
    images[counter-2].style.display = 'block';
    counter--;
}