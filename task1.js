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


  function i1 (m){
      m.setAttribute ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8d87diHjkqTnE1LOdVDSonAX5kAcIDqF_zGWm7_aKm4t6g9UjDxzirAi0bIa9zItkEk&usqp=CAU" )
      onclick="alert('This picture...')"
      }


