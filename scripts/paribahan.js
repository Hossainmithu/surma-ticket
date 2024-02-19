// function success(){
//   // hide the home screen
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // console.log(homeSection.classList);
//   // show the success field
//   const successSection = document.getElementById('success-screen');
//   // console.log(successSection.classList);
//   successSection.classList.remove('hidden');

// }

function success(){
  hideElementById('home-screen');
  showElementById('success-screen');
  
}


function leftSeat(){

  // total remaining seat left from total
  const seatRemaining = document.getElementById('left-seat');
  const finalSeatRemaining = seatRemaining.innerText;
  const totalFinalSeatRemaining = parseInt(finalSeatRemaining);
  const updateSeatRemaining = totalFinalSeatRemaining - 1;
  console.log(updateSeatRemaining);


  seatRemaining.innerText = updateSeatRemaining;

  // seat count after select

  const seatCount = document.getElementById('seat-count');
  const seatCountText = seatCount.innerText;
  const seatCountNumber = parseInt(seatCountText);

  const updateSeatCount = seatCountNumber + 1;

  seatCount.innerText = updateSeatCount;


  setBackgroundColorById('A1');

}


setBackgroundColorById('A1');