  var w = 1200;
  var h = 400;
  var x = 0;
  var i = 0;
  var j = i;
  var nesting = true;
  var minIndex = 0;

  var array = [];

  function createArray(){
    var sizeVetor = parseInt(random(3,15));
    for(let i = 0;i < sizeVetor+1;i++){
      array.push(parseInt(random(2,30)));
    }

  }
  function selectionSort() {
  
    for(var i = 0; i < array.length; i++) {
      
      var minIndex = i;
      for(var j = i; j < array.length; j++) {

        if (array[j] < array[minIndex]) {

          minIndex = j;
        }
      }

      var temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  function setup() {

    createCanvas(w, h);
    createArray();
    background(0);

    stroke(255);
    strokeWeight(4);

    frameRate(2);
  }

  function draw() {

    background(0);
    textSize(35);
    fill(0,255,0);
    text('Selection sort',600,100);
    fill(0,255,0);
    textSize(15);
    drawCircle(array);

    if (i >= array.length) {

      return;
    }

    if (nesting) {
      
      if (array[j] < array[minIndex]) {

        minIndex = j;
      }

      j++;

      if (j >= array.length) {

        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        nesting = false;
      }
    }

    if (!nesting) {

      i++;

      j = i;
      minIndex = i;

      nesting = true;
    }

  }

  function drawCircle(arr) {
    var maxEl = Math.max.apply(null, arr);

    arr.forEach((el, index) => {
      x = x + 60 + el;
      
      if (index === minIndex) stroke(255,0,0)
      else if(index === j) stroke(0,0,255)
      else if(index === i) stroke(0,255,0)
      else stroke(255)

      fill(0, 102, 153);
      text(el, x-5, 200);
      fill(255);
      
      circle(x, 250+maxEl, el+10);
      
    });
    x=0;
  }