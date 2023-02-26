let coinFlip
coinFlip = parseInt(prompt("How many times do you want to flip the coin?"))

for (let i = 0; i < coinFlip; i++) {
  let randomNum = Math.round(Math.random())

  if (randomNum === 0) {
    console.log("Heads")
  } else {
    console.log("Tails")
  }
}
