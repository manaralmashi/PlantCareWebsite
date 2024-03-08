// var counters = document.querySelectorAll(".counter");

// counters.forEach(function (counter) {
//   var countTo = parseInt(counter.getAttribute("data-countto"));
//   var countDuration = parseInt(counter.getAttribute("data-duration"));
//   var startCount = parseInt(counter.innerText);

//   var startTime;
//   function updateCounter(timestamp) {
//     if (!startTime) startTime = timestamp;
//     var progress = timestamp - startTime;

//     var currentCount = Math.floor((progress / countDuration) * (countTo - startCount) + startCount);

//     counter.innerText = currentCount;

//     if (progress < countDuration) {
//       requestAnimationFrame(updateCounter);
//     } else {
//       counter.innerText = countTo;
//     }
//   }

//   requestAnimationFrame(updateCounter);
// });
// -----------------------------------------------------------------------------------
var counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
  var countTo = parseInt(counter.getAttribute("data-countto"));
  var countDuration = parseInt(counter.getAttribute("data-duration"));
  var startCount = parseInt(counter.innerText);

  var startTime;
  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;

    var currentCount = Math.floor((progress / countDuration) * (countTo - startCount) + startCount);

    counter.innerText = currentCount;

    if (progress < countDuration) {
      requestAnimationFrame(function (timestamp) {
        updateCounter(timestamp);
      });
    } else {
      counter.innerText = countTo;
    }
  }

  var myImg = document.getElementById("divForh2s_InContainer");

  myImg.addEventListener("mouseover", function () {
    startTime = null; 
    requestAnimationFrame(updateCounter);
  });

  myImg.addEventListener("mouseout", function () {
    startTime = null; 
    counters.forEach(function (counter) {
      counter.innerText = 0;
    });
  });
});



// Lamis:
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');

        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}