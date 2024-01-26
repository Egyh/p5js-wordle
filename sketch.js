let slotList = [
    "", "", "", "", ""
];

let correctList = [
    "t", "h", "i", "n", "g"
];

function setup() {
    createCanvas(600,400);
  }
   
  function draw() {
    background(50);
    for (let i = 0;  i < 5; i++) {
        let x = 150 + i * 60;
        let y = 100;
        noFill();
        stroke(100);
        strokeWeight(2);

        if (isContain(slotList[i]) == true) {
            fill(255,200,0);
        }


        if (slotList[i] == correctList[i]) {
            fill(0, 100, 100);
        }
        rect(x, y, 50, 50);

    

         textAlign(CENTER, CENTER);
         textSize(32);
         fill(255);
         text(slotList[i].toUpperCase(), x + 25, y + 25);
    }

    if(isClear() == true){
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(255);
        text("CLEAR", 300, 350)
      }
  }

  


function keyPressed() {
    for(let i=0; i < 5; i++) {
        if(slotList[i] == "") {
            slotList[i] = key;
            break;
        }
    }

    if (keyCode == ENTER) {
        for(let i=0; i < 5; i++) {
        slotList[i] = "";
    }
}
}

function isClear (){
    for(let i=0; i < 5; i++) {
        if(slotList[i] != correctList[i]) {
            return false;
        }
    }
    return true;
}

function isContain(str) {
    for(let i=0; i < 5; i++) {
        if(correctList[i] == str) {
            return true;
        }
    }
    return false;
}