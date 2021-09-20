function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  let result
  if (rideDistance <= 400) {
    result = 'This one is on me!';
  } else if (rideDistance > 2000 && rideDistance < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (rideDistance > 2500) {
    result = 'No can do.'
  }
  return result
} 

function ternaryCheckCity(rideCity){
  // Write your code here!
  let result
  rideCity === 'NYC' ? (result = "Ok, sounds good.") : (result = "No go.")
  return result
}

function switchOnCharmFromTip(rideTip){
  // Write your code here!
  let result
  switch (rideTip) {
    case 'generous':
      result = 'Thank you so much.'
      return result
      break;
    case 'not as generous':
      result = 'Thank you.'
      return result
      break;
    case 'thanks for everything':
      result = "Bye."
      return result
      break;
  }
}