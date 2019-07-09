

$(document).ready(function(){
    
    //set the cursor to blink every sec on and then a sec and off again
    
    var cursorState = true;
    var cursorAction = setInterval(function(){
        if(cursorState){
            $("#cursor").hide();
            cursorState = false;
        }else{
            $("#cursor").show();
            cursorState = true;
        }
    },500);
    
    
    helloWorld();
    setTimeout(function(){sectionText();},3000);
    setTimeout(function(){raiseBar();},5000);
    setTimeout(function(){phoneCall();},10000);
    playKeyboard();
    
    var helloText = setInterval(function(){
        helloWorld();
        setTimeout(function(){sectionText();},3000);
        setTimeout(function(){raiseBar();},5000);
        setTimeout(function(){phoneCall();},10000);
        
    },30000);
    
    
//    $("#slider").slider({
//        min:0,
//        max:360
//        
//    });
    
    
    

    
    
   
    
    function helloWorld(){
        
        var text = ["H","e","l","l","o"," ","W","o","r","l","d","!"];
        
        var count = 0;
        
            document.getElementById('hello').innerHTML = " ";
        
        var action = setInterval(function(){
            document.getElementById("hello").innerHTML += text[count];
            count++;
            
            //console.log(count);
            
            if(count >= 12){
                clearInterval(action);
                count = 0;
            }
        },150);// 18 secs
        
    }
    
    function sectionText(){
        var count = 0;
        var num_of_counts = 0;
        var textArray = ["T","h","i","s"," ","i","s"," ","s","o","m","e"," ","t","e","x","t"," ","t","h","a","t"," ","w","i","l","l"," ","n","e","e","d", " ", "t","o", "g","o"," ","i","n","t","o"," ","s","o","m","e"," ","s","e","c","t","i","o","n"," ","h","e","r","e","!"];
        
        document.getElementById("text").innerHTML = " ";
        
        var sectionAction = setInterval(function(){
            document.getElementById("text").innerHTML+=textArray[count];
            count++;
            if(count >= 60){
                count = 0;
                num_of_counts++;
            }
            
            if(num_of_counts >= 4){
                clearInterval(sectionAction);
                num_of_counts = 0;
                
            }
        },50);//120 secs
        
    }
    
    function playKeyboard(){
        
        
        //select a random id from the array and change its color
        var keys = ["#k1", "#k2","#k3","#k4","#k5","#k6","#k7","#k8","#k9","#k10","#k11","#k12","#k13","#k14","#k15","#k16","#k17","#k18","#k19","#k20","#k21"];
        
        setInterval(function(){
            var num = Math.round(Math.random()*21);
            $(".keys").css("opacity", "1");
            $(keys[num]).animate({"opacity" : "0.2"},200);
            
            
           // console.log(num);
        },200);
        
        
    }
    
    function phoneCall(){
        var ring;
        count = 0;
            
            var action = setInterval(function(){
        
                $(".cell-case ul").css("opacity", "0.2");
                $(".cell-case ul").animate({"opacity": "1"},300);
                
                count++;
                
                if(count >= 6){
                    clearInterval(action);
                    count = 0;
                }
            },2000);          
                
    }
    
    function raiseBar(){
        var bar=["#line1", "#line2", "#line3", "#line4"];
        var px = 0;
        var num = 0;
        
        $(".chart-lines").css("width", "0px");
        var action = setInterval(function(){
            px++;
            $(bar[num]).css({"width": px + "px"});
            if(px >= 30){
                px = 0;
                num++;
            }
            
            if(num >= 4){
                clearInterval(action);
            }
        },50);
    }
    
});