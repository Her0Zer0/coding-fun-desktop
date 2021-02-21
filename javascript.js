
window.onload = () => {
    let cursor = document.getElementById("cursor"), 
        cursorState = true,
        cursorAtion = setInterval(()=>{
            if(cursorState){
                cursor.style.display = "none";
                cursorState = false;
            }else{
                cursor.style.display = "block";
                cursorState = true;
            }
        }, 500);

    let hello = document.getElementById("hello"),
        helloWorld = (str) => {
            hello.textContent = "";
            var count = 0;
            var action = setInterval(()=>{
                hello.textContent += str[count];
                count++;
                if(count >=12){
                    clearInterval(action);
                    count = 0;
                }
            }, 150);
    }

    let text = document.getElementById("text"), 
        setTextSection = (str, num_to_run) => {
            text.textContent = "";
            var count = 0,
                num_of_runs = 0,
                sectionAction = setInterval(()=>{
                    text.textContent += str[count];
                    count++;
                    if(count >= str.length){
                        count = 0;
                        num_of_runs++;
                    }

                    if(num_of_runs >= num_to_run){
                        clearInterval(sectionAction);
                        num_of_runs = 0;
                    }
                }, 50);
        };

    let keyboard = document.getElementById("key_container"), 
        setKeys = (num_of_keys, space_num) => {
            
            var html = "";
            for(var i = 0; i < num_of_keys; i++){
                if(i == space_num){
                    html += `<li id="k${i+1}" class="keys space"></li>`;
                }else{
                    html += `<li id="k${i+1}" class="keys"></li>`;
                }
            }
            keyboard.innerHTML = html;
        };

    let keys = keyboard.children;
    playKeyboard = () => {
        setInterval(()=>{
            var num = Math.round(Math.random()*24);
            
            for(var i = 0; i < keys.length; i++){
                keys[i].style.opacity = "1";
            }
            document.getElementById(keys[num].id).animate([
                {"opacity" : "0.2"}
            ],{
                duration: 200, 
                iterations: 1
            });

        }, 250);
    };

    let cell = document.querySelector(".cell-case ul"),
        phoneCall = () => {
        var count = 0;
        var action = setInterval(()=>{
            cell.style.opacity = "0.2";
            cell.animate([{"opacity": "1"}], {duration: 200, iterations: 1});

            count++;
            if(count >= 6){
                clearInterval(action);
                count = 0;
                cell.style.opacity = "1";
            }

        }, 2000);
    };

    let chart = document.querySelector("#graph_container"), 
        createData = (bar_num) => {
            var html = "";
            for(var i=0; i < bar_num; i++){
                html += `<li id="line${i + 1}" class="chart-lines"></li>`;
            }
            chart.innerHTML = html;
        };

    let bars = chart.children,
        raiseBar = () => {
            for(var i = 0; i < bars.length; i++){
                bars[i].style.width = "0px";
            }

            var num = 0, 
                px = 0,
                max = 30, 
                action = setInterval(()=>{
                    px++;
                    bars[num].style.width = `${px}px`;
                    if(px >= max){
                        px = 0;
                        num++;
                    }
                    if(num >= bars.length){
                        clearInterval(action);
                    }
                }, 50);
        };
    
    let someContext = "This is some text that will need to go in this section here! ";
    let helloContext = "Hello World!";
    //generate elements, etc.
    setKeys(25, 21);
    createData(4);
    //start animations
    playKeyboard();
    
    helloWorld(helloContext);
    setTextSection(someContext, 8);
    phoneCall();
    raiseBar();

    var main_loop = setInterval(()=>{
        console.log("starting next loop");
        helloWorld(helloContext);
        setTimeout(() => setTextSection(someContext, 8), 3000);
        setTimeout(() => raiseBar(), 5000);
        setTimeout(() => phoneCall(), 10000);
    }, 30000);
};