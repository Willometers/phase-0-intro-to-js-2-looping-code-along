// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

function writeCards( names, event ) {
  let theCards = []
  for ( let i = 0; i < names.length; i++ ) {
    theCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return theCards
}

function