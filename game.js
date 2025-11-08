//alert("sdfnkjwd")
const animals = ['🐹', '🐰', '🐼', '🐻', '🐵', '🐕', '🐕‍🦺', '🐆', '🐄', '🐏', '🐫', '🐧', '🐳', '🐔']//, '🐠', '🦆', '🐓', '🦜']//, '🦉', '🐌', '🐣', '🐞', '🕊️']

const boxElement = document.querySelector(".left")
const timer = document.querySelector(".timer")
const points = document.querySelector(".points")
let point = 0

let timerFlag = false
let gameFlag = false
let countWin = 0

//timer go down
let counter = 150
let timerFun = setInterval(() => {
    timer.textContent = counter + " sec"
    counter--
    if (counter <= 15) {
        timer.style.color = "red"
    }
    if (counter <= 0) {
        timerFlag = true
        timer.textContent = ""
    }
}, 1000)

//array for how many times the animal token
const countPlaces = []
const arrPlaces = []
const arrAnimals = []
const arrIndex = []

for (let i = 0; i < animals.length; i++) {
    countPlaces.push(0)
}

const fillCards = () => {
    for (let i = 0; i < countPlaces.length; i++) {
        countPlaces[i] = 0;
    }
    //fill the arr randomaly
    count = 0
    let ind = 0
    for (let i = 1; i <= animals.length * 2; i++) {
        do {
            x = Math.floor(Math.random() * animals.length + 1)//random a card
            if (countPlaces[x - 1] < 2) {//ther are less then 2 randoms
                arrAnimals.push(animals[x - 1])
                arrIndex.push(x - 1)
                countPlaces[x - 1]++
                const newCard = document.createElement("div")//creat an element for the card
                newCard.className = x
                newCard.style.backgroundColor = "cyan"
                newCard.style.height = "100px"
                newCard.style.width = "100px"
                newCard.style.margin = "15px"
                newCard.textContent = "❓";
                newCard.style.textAlign = "center"
                newCard.style.alignContent = "center"
                newCard.style.fontSize = "55px"
                newCard.style.borderRadius = "8px"
                arrPlaces.push(newCard)
                boxElement.append(newCard)
                ind++
                flag = 1
            }
        } while (flag === 0)
        flag = 0
    }
}

console.log(arrAnimals, arrIndex)
console.log(arrIndex)
for (let i = 0; i < arrPlaces.length; i++) {
    close.log(arrPlaces[i].textContent, "arrPlaces")
}

let count = 0;
let arr = []
fillCards()

const finish = () => {
    const result = document.createElement("div")//creat an element for the card
    result.style.backgroundColor = "cyan"
    result.style.height = "500px"
    result.style.width = "500px"
    result.style.margin = "15px"
    result.style.textAlign = "center"
    result.style.alignContent = "center"
    result.style.fontSize = "300px"
    result.style.borderRadius = "10px"
    result.style.position = "absolute"
    result.style.zIndex = "1"
    if (gameFlag === true) {
        alert("win!!!!!")
        result.textContent = "🤩";
        timer.textContent = ""
        clearInterval(timerFun)
        boxElement.append(result)
    }
    if (timerFlag === true) {
        alert("fail..........")
        result.textContent = "😫";
        boxElement.append(result)
    }
    localStorage.getItem()
    return
}

//while (!gameFlag || !timerFlag) {
arrPlaces.forEach((element) => {
    if (timerFlag || gameFlag) return;
    element._clicked = false;

    element.addEventListener("click", () => {
        console.log(element.className)
        if (element._clicked) return;

        element._clicked = true;
        const obj = { item: arrAnimals[element.className], place: element.className };
        console.log(obj, "obj")
        element.textContent = arrAnimals[element.className]
        count++;
        arr.push(obj);

        if (count === 2) {
            count = 0;
            if (arr[0].item === arr[1].item) {
                const valueToRemove = obj.item.trim();
                const matchingIndexes = arrPlaces
                    .map((el, index) => el.textContent.trim() === valueToRemove ? index : -1)
                    .filter(index => index !== -1);

                countWin++
                if (countWin === animals.length) {
                    gameFlag = true
                    timer.textContent = ""
                }

                setTimeout(() => {
                    matchingIndexes.forEach(i => {
                        arrPlaces[i].style.backgroundColor = "transparent";
                        arrPlaces[i].textContent = "";
                    });
                    arr = [];
                    point = point + 10;
                    points.textContent = point + " points";
                    finish()
                }, 500);
            }
            else {
                setTimeout(() => {
                    const valueToRemove1 = arr[0].item;
                    const index1 = arrPlaces.findIndex(el => el.textContent.trim() === valueToRemove1);
                    arrPlaces[index1].style.backgroundColor = "cyan"
                    arrPlaces[index1].textContent = "❓"
                    arrPlaces[index1]._clicked = false;
                    const valueToRemove2 = arr[1].item;
                    const index2 = arrPlaces.findIndex(el => el.textContent.trim() === valueToRemove2);
                    arrPlaces[index2].style.backgroundColor = "cyan"
                    arrPlaces[index2].textContent = "❓"
                    arrPlaces[index2]._clicked = false;
                    if (point - 1 > 0) {
                        point = point - 1;
                    }
                    points.textContent = point;
                    arr = [];
                    finish()
                }, 500);
            }
        }
    });
});
//}

