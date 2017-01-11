// By NOAHLUALU  2016.aug.25
function $(id){
        return document.getElementById(id);  
    }  
    //get broswer window height 
    var windowWidth=900;  
    var currentN=1;  
    var currentLeft=0;  
    var scrollDirection=1;  
    var clock;  
  
    window.onresize=function(){  
        windowWidth=document.documentElement.clientWidth;  
    }  
  
    window.onload=function(){  
      
        //get height of window  
        windowWidth=document.documentElement.clientWidth;  
        //display DIV scorll  
        $("maindiv").onscroll=function(){  
            //top line 
            var tempLeft=$("maindiv").scrollLeft;  
            //display no.  
            n=Math.round(tempLeft/windowWidth)+1;  
            radio(n);  
            //function 
            if(tempLeft>currentLeft){  
                scrollDirection=1;                
            }else if(tempLeft<currentLeft){  
                scrollDirection=-1;  
            }  
            //flash          
            clearInterval(clock);  
            clock=setInterval(animation,1);           
            //function  
            currentLeft=$("maindiv").scrollLeft;  
        		$("informationdiv").innerHTML="ways"+scrollDirection+" "+n+"th screen "+"scroll left of maindiv"+currentLeft+" window width:"+windowWidth;        
        }  
    }  
    //hover page  
    function radio(n){  
        $("radio"+n).checked="true";  
    }  
    //jump up to page  
    function showScreen(n){  
        radio(n);  
        var targetLeft=(n-1)*windowWidth;  
        $("maindiv").scrollLeft=targetTop;             
    }  
    //sroll
    function animation(){  
        if(scrollDirection==1){  
            //go up  
            if($("maindiv").scrollLeft%windowWidth!=0){  
                $("maindiv").scrollLeft+=1;  
            }else{  
                clearInterval(clock);         
            }     
        }  
        if(scrollDirection==-1){  
            //go down              
            if($("maindiv").scrollLeft%windowWidth!=0){  
                $("maindiv").scrollLeft-=1;  
            }else{  
                clearInterval(clock);  
            }         
        }  
    }  