
  function myfun() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("mybtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  var loader = document.getElementById("preloader");
  // window.addEventListener("load", function(){
    
  //     loader.style.display="none";
  //  })
// window.setInterval(function(){
//     loader.style.display="none";
//    }, 2000)




// function submitCardId(id){
//   var id = id;
//  //alert(id);
//  var formData = {id: id};
//  $.ajax({url: "mobile_filter_results.php", type: 'POST', date: formData, success: function(response){
//   alert("done");
//  }});
// }