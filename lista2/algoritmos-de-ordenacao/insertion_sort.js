var altura = 1200;
var largura = 600;
var x = 0;
var i = 1;
var j = i;
var midsorting = false;
var array  = []


function setup() {

  createCanvas(altura, largura);
  background(0);
  strokeWeight(4);
  preencheVetor()
  frameRate(2);
  textAlign(CENTER);
}

function draw() {
  background(0);
  escreveNaTela(false)
  textSize(15)
  desenhaCirculo(array);

  if (i >= array.length) {
    escreveNaTela(true)
    return;
    
  }

  if (!midsorting) {
    j = i;
  }

  if (array[j] < array[j-1] && j >= 0) {

    midsorting = true;

    var temp = array[j-1];
    array[j-1] = array[j];
    array[j] = temp;
      
    j--;
  }else {

    midsorting = false;
  }

  if (!midsorting) {
    i++;
  }
}

function desenhaCirculo(arr) {
  
  var maxEl = Math.max.apply(null, arr);

  arr.forEach(function(el, index) {
   
    if(index === j){
      fill(255,0,0);
    }else if(index === i) {
      fill(0,255,0)
    }
    else{
      fill(255);
    }
  
    var x = 50 * index + (600-((valorAleaotrio/2)*70));
    circle(x, largura/2, arr[index]+5);
    text(arr[index],x,largura/2 + 50)
    });
  }
 
function preencheVetor(){
  valorAleaotrio = parseInt(random(3,15))

  for(let i = 0;i < valorAleaotrio;i++){
    array[i] = parseInt(random(1,25)); 
  }
}

function escreveNaTela(terminou){
  textSize(35)
  fill(0,255,0)
  text('Insertion sort',600,100)
  if(terminou){
    text('Ordenação completa',600,150)
  }
}