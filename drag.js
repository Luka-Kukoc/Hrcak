var elmnt = document.getElementById("business-links-holder");

    const articles=document.querySelectorAll("#business-link");
  

    for(i=0 ; i<articles.length ; i++)
    {
        var article=articles[i];
    
            const copy=article.cloneNode(true);
            elmnt.appendChild(copy);

    }

    elmnt.scrollLeft=1256;



    if ("ontouchstart" in document.documentElement){

    elmnt.addEventListener('scroll', function() {

        var fe=document.querySelector("#business-links-holder article:nth-child(5)");  
    
       
    
        if(!isInViewportph(fe)){
    
         
            
          if(elmnt.scrollLeft>1256){
    
            elmnt.scrollLeft=1256;
            elmnt.appendChild(elmnt.firstElementChild); 
        }
            else if(elmnt.scrollLeft<1256){
                elmnt.scrollLeft=1256;
                elmnt.prepend(elmnt.lastElementChild);     
        }
    
    
        // elmnt.addEventListener('touchend', mouseUpHandler);
    
    
    
    }});
    
    function isInViewportph(element) {
        const rect = element.getBoundingClientRect();
        console.log("rect.left",rect.left)
    
        if(elmnt.scrollLeft>1256){
        return(
           rect.left>-297
        
        );}
    
        else if(elmnt.scrollLeft<1256){
        return (
            rect.left< 331// &&
            // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );}
    }}
else{
    elmnt.addEventListener("mousedown",MouseDownFunction);

var mouseDown=0;
function MouseDownFunction(e){
    mouseDown++;
    console.log("mousedown",mouseDown)
    pos = {
        left: elmnt.scrollLeft,
        x: e.clientX,
    };


elmnt.style.cursor = 'grabbing';
elmnt.style.userSelect = 'none';
if(elmnt.scrollLeft==1256){
    document.addEventListener('mousemove', mouseMoveHandler);
}
    document.addEventListener('mouseup', mouseUpHandler);
}


const mouseMoveHandler = function (e) {

    var dx = e.clientX - pos.x;

    elmnt.scrollLeft = pos.left - dx;
    var fe=document.querySelector("#business-links-holder article:nth-child(5)");


    if(!isInViewport(fe,dx)){

        elmnt.scrollLeft=1256;  // iz nekog razloga nema blica
     
        pos.x=e.clientX;
        
      if(dx<0){
        elmnt.appendChild(elmnt.firstElementChild); 
    }
        else if(dx>0){
            elmnt.prepend(elmnt.lastElementChild);     
    }
}};



function isInViewport(element,dxx) {
    const rect = element.getBoundingClientRect();
    if(dxx>0){
    return(
       rect.left<320
    
    );}

    else if(dxx<0){
    return (
        rect.left> -300
    );}
}

const mouseUpHandler = function (e) {
    mouseDown--;
    console.log("mousedown",mouseDown)


var fe2=document.querySelector("#business-links-holder article:nth-child(5)");

    isInViewportUp(fe2)
       
    console.log("elmnt.scroll",elmnt.scrollLeft)
    

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    elmnt.style.cursor = 'grab';
    elmnt.style.removeProperty('user-select');

};



function isInViewportUp(el){
    const rect = el.getBoundingClientRect();
    console.log("recl2",rect.left)
    if(rect.left>=100 && rect.left<320 || rect.left>-60 && rect.left<17){
        elmntscrollUp();
        
    }
    else if(rect.left<100 && rect.left>17 || rect.left<=-60 && rect.left>-320){
        elmntscrollBack();
    }
}

function elmntscrollBack() {
    el=document.querySelector("#business-links-holder article:nth-child(5)");
    const rect2= el.getBoundingClientRect();

        elmnt.scrollBy(12,0);
        scrolldelay = setTimeout(elmntscrollBack,10);

        if(rect2.left>17){
            if(elmnt.scrollLeft>=1256){
                clearTimeout(scrolldelay);
                scrolldelay = 0;
                return elmnt.scrollLeft=1256;
                }
              }
        else{
             if(elmnt.scrollLeft>=1570){
             clearTimeout(scrolldelay);
             scrolldelay = 0;
             elmnt.appendChild(elmnt.firstElementChild);
             return elmnt.scrollLeft=1256;
             }
        
    }   
} 
    
function elmntscrollUp() {
        el=document.querySelector("#business-links-holder article:nth-child(5)");
        const rect2 = el.getBoundingClientRect();

        elmnt.scrollBy(-12,0);
        scrolldelay = setTimeout(elmntscrollUp,10);

     if(rect2.left<17){
        if(elmnt.scrollLeft<=1256)
        {
            clearTimeout(scrolldelay);
            scrolldelay = 0;
            return elmnt.scrollLeft=1256;
        }}

        else{
            if(elmnt.scrollLeft<=942)
            {
                clearTimeout(scrolldelay);
                scrolldelay = 0;
                elmnt.prepend(elmnt.lastElementChild);
                return elmnt.scrollLeft=1256;
            }
        }
    }  
}

