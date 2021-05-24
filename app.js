const img = document.querySelector('.rocket img');
let height = window.innerHeight;

img.onclick = function(event){
    this.style.transform = `translateY(-${height-150}px)`; 

    setTimeout(function(){
        img.style.transform = 'rotate(180deg)';
    }, 6000);
    
    setTimeout(function(){
        img.style.transform = 'translateY(-20px)';
    }, 12000);
}
   

window.onresize = function(){
    height = window.innerHeight;
}   