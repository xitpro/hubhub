

function populateData(event) {
  var targetDiv = document.getElementById("node1");
  var htmlContent = "";
  switch (event.target.id) {
    case "A": {
      htmlContent = "Content for A";
      break;
    }
    case "B": {
      htmlContent = "content for B";
      break;
    }
    case "C": {
      var myImg = document.getElementById("img1");
      myImg.src = "vyvy1.jpg";
      htmlContent = "content for C";
      break;
    }
  }
  targetDiv.innerHTML = htmlContent;
}
function changeDiv() {
  var myDiv = document.getElementById("demo");

  console.log('xxxx ', myImg.src)
  
}
