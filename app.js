var data = document.getElementById("text");
const prog = "Living";
let idx = 1;

setInterval(writeText, 300);

function writeText() {
  text.innerText = prog.slice(0, idx);
  idx++;

  if (idx > prog.length) {
    idx = 1;
  }
}

document.getElementById("myButton").onclick = function() {
  location.href = "index2.html ";
};

document.getElementById("works").onclick = function(){
  location.href = "https://www.youtube.com/watch?v=9Bm6fc54MB4&ab_channel=TIZENIndonesia";
}

document.getElementById("mApp").onclick = function(){
  location.href = "https://play.google.com/store/apps/details?id=com.sec.android.app.shealth&hl=en_US&gl=US";
}


mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbjcwMCIsImEiOiJja3N1NTNkbnAxZGJ0MnFvZGY4YnAyejd5In0.ZJw9wOgM2vviSSlPN2mIjA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});



function valid(){

  var phoneno = /^\d{10}$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var phonenumber = document.querySelector("phoneNumber").value;
  var email = document.querySelector("email").value;


  if(phonenumber.value.match(phoneno) && email.value.match(mailformat)){
        swal("Good job!", "You clicked the button!", "success");
  }
  else{
       swal("Oops!......", "You clicked the button!", "error");
  }
}
