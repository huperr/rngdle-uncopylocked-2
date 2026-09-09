const numberTxt = document.getElementById("number");
const rarityTxt = document.getElementById("rarity");
const rollBtn = document.getElementById("rollBtn");
const listThing = document.getElementById("list");
const coolText = document.getElementById("coolText");
let randomNumbers = []
let totalPoint = 0
let rolled = false
let rolledNumber
rollBtn.addEventListener("click", () => {
  if (rolled === false) {
    randomNumbers = []
    for (let i = 0; i < 6; i++) {
      randomNumbers.push(Math.floor(Math.random() * 10))
    }
    numberTxt.textContent = randomNumbers.join("")
    rolledNumber = randomNumbers.join("")
    rolled = true
    check()
  }
})
function check() {
  if (rolledNumber.includes("67")) {
    create("six sevenn (+5)")
    add(5)
  } 
  if (rolledNumber.includes("0")) {
    create("includes 0! (+1)")
    add(1)
  } 
  if (rolledNumber.includes("123")) {
    create("learn to count (+7)")
    add(7)
  } 
  if (rolledNumber.includes("000")) {
    create("so much 0! (+10)")
    add(10)
  } 
  if (rolledNumber.split("")[0] === "0" && rolledNumber.split("")[5] !== "0") {
    create("5 digits number! (+3)")
    add(3)
  } 
  if (rolledNumber.includes("1")) {
    create("classic 1 (+1)")
    add(1)
  } 
  if (rolledNumber.split("").reduce((a, c) => a + Number(c), 0) >= 10
  ) {
    create("big boy! (+5)")
    add(5)
  } 
  if (Number(rolledNumber) % 2 === 0) {
    create("even! (+2)")
    add(2)
  }
  if (rolledNumber.split("").every(digit => digit === rolledNumber[0])) {
    create("all same digit!! (+10)")
    add(10)
  }
  if (rolledNumber.split("").every(digit => Number(digit) % 2 === 0)) {
    create("ultimate even! (+4)")
    add(4)
  }
  if (Number(rolledNumber) % 2 !== 0) {
    create("odd! (+1)")
    add(1)
  }
  if (rolledNumber.endsWith("00")) {
    create("double zero ending! (+00 (real (bro)))")
  }
  if (rolledNumber.split("")[0] === rolledNumber.split("")[5]) {
    create("mirror! (+3)")
    add(3)
  }
  show()
}
function add(num) {
  totalPoint += num
}
function create(text) {
  const li = document.createElement("li")
  li.textContent = text
  listThing.appendChild(li)
}
function show() {
  if (totalPoint <= 2) {
    rarityTxt.textContent = "Garbage! (" + totalPoint + ")"
  } else if (totalPoint > 2 && totalPoint <= 6) {
    rarityTxt.textContent = "Ok. (" + totalPoint + ")"
  } else if (totalPoint > 6 && totalPoint <= 10) {
    rarityTxt.textContent = "Rare! (" + totalPoint + ")!"
  } else if (totalPoint > 10 && totalPoint <= 17) {
    rarityTxt.textContent = "Mythic!! (" + totalPoint + ")!!"
  } else if (totalPoint > 17 && totalPoint <= 25) {
    rarityTxt.textContent = "Legendary!!! (" + totalPoint + ")!!"
  } else {
    rarityTxt.textContent = "Jackpot!1!! (" + totalPoint + ")1!!"
  }
  coolText.textContent = "Copy the text below to share your roll!" + "\n😂 My RNGDle Uncopylocked 2 Roll: " + rolledNumber + "\n 🤑 Rarity: " + rarityTxt.textContent + "\n😍😨❤️👽😱🤣6️⃣7️⃣"
}
