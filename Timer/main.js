const secondContainer = document.getElementById("seconds");
const minuteContainer = document.getElementById("minutes");

let seconds = 0;
let minutes = 0;

function startIncrement() {
  intervalId = setInterval(() => {
      seconds = seconds + 1;
      secondContainer.innerHTML = "Seconds: "+seconds;
      if(seconds == 60) {
        minutes = minutes + 1;
        seconds = 0
        minuteContainer.innerHTML = "Minutes: "+minutes;
        secondContainer.innerHTML = "Seconds: "+seconds;
      }
  }, 1000);
};


startIncrement()

