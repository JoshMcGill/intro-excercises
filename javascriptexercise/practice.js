//var pTag = document.getElementById("p-tag")
//var tag = document.querySelector("#p-tag")

///console.log(tag)

//pTag.addEventListener("click", function(){alert(pTag.tagName)})
//pTag.onclick=function(){alert("super")}
var color = null
var aqua = document.getElementById("aqua")
var colors= ['red', 'blue', 'yellow', 'green', 'aqua']
var boxes = document.querySelectorAll(".box")

if (boxes[1].classList.contains("white")){
    console.log(boxes[1]);
    
}

var selectColor = function(n) {
    color = n;
    console.log(color);
}


red.onclick = function(){selectColor("red")}
blue.onclick = function(){selectColor("blue")}
yellow.onclick = function(){selectColor("yellow")}
green.onclick = function(){selectColor("green")}
aqua.onclick = function(){selectColor("aqua")}

boxes[0].onclick = function(){paint(0)}
boxes[1].onclick = function(){paint(1)}
boxes[2].onclick = function(){paint(2)}
boxes[3].onclick = function(){paint(3)}
boxes[4].onclick = function(){paint(4)}
boxes[5].onclick = function(){paint(5)}
boxes[6].onclick = function(){paint(6)}
boxes[7].onclick = function(){paint(7)}
boxes[8].onclick = function(){paint(8)}
boxes[9].onclick = function(){paint(9)}
boxes[10].onclick = function(){paint(10)}
boxes[11].onclick = function(){paint(11)}
boxes[12].onclick = function(){paint(12)}
boxes[13].onclick = function(){paint(13)}
boxes[14].onclick = function(){paint(14)}
boxes[15].onclick = function(){paint(15)}
boxes[16].onclick = function(){paint(16)}
boxes[17].onclick = function(){paint(17)}
boxes[18].onclick = function(){paint(18)}
boxes[19].onclick = function(){paint(19)}


var paint = function(n) {
     for (var i = 0; i < 5; i++){
            if(boxes[n].classList.contains(colors[i])){
                boxes[0].classList.remove(colors[i])
         }
    }
    boxes[n].classList.add(color);
    console.log (boxes[n].classList)   
}