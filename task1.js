// button1 => Change the size of a heading
function s(){
    document.getElementById('clicks').style.fontSize = "x-large";
}

//buton2 => Change the font style of a paragraph
function f(){
    document.getElementById('pa').style.fontStyle = "italic"
}

//buton3 => Highlight a paragraph with background
function h(){
    document.getElementById('pp').style.backgroundColor = 'rgb(255, 230, 230)';
}

//buton4 => Hide an Image
function ig(){
    document.getElementById('Hd').style.display = 'none';
}

//buton5 => Alternate between two images
function im(){
 const nwim = document.querySelector('img');
 nwim.setAttribute('src','https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg') 
}



// Change an image when the mouse moves onto it, and then back to the original image when the mouse moves off of it.
function bigImg(img1) {
    img1.setAttribute('src' ,'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg')
  }
  
  function normalImg(img2) {
    img2.setAttribute('src' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PR2ZAzwhWY7orX3aNxJE67X5TaAjAN7H_g&usqp=CAU');
  }


 //Create a script which creates an alert on the page when a user right clicks on a specific image.
function alr() {
  alert('This picture...')
     }

// Create an alert on the page when a user enters data into a input.
function inp() {
    alert('you whrite...')
}

//Create an alert to let the user know when the page has loaded
window.onload = function() { 
    alert('Page loaded')}


//Highlight all paragraphs when the mouse moves over them (then revert back once it has moved past them).


 document.getElementById("phov").addEventListener("mouseover", hp);
 document.getElementById("phov").addEventListener("mouseout", hp2);
    
function hp() {
    document.getElementById("phov").style.color = "red";
}
    
function hp2() {
    document.getElementById("phov").style.color = "black";
}
