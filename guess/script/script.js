
let button = document.getElementById("button");
let picture = document.getElementById("picture");
let picture1 = document.getElementById("picture1");

let b = Math.floor((Math.random() * 100) + 1);
let t = 10
button.addEventListener('click', () => {
    let a = +document.getElementById("guess_box").value;
    let right = document.getElementById("right");
    let guessed = document.getElementById("guessed");
    let tries = document.getElementById("lives");

    if (t >= 1) {
        if (a === b) {
            guessed.innerHTML = guessed.innerHTML + `${a} ,`;
            right.innerText = "You guessed the correct number!";
            picture.style.display = "block";
            right.style.display = "block";
        }
        else if (a < b) {
            guessed.innerHTML = guessed.innerHTML + ` ${a} ,`;
            right.innerText = "Hint: the number is greater";
            right.style.display = "block";
            t = t - 1;
            tries.innerText = `tries left :${t}`
        } else if (a > b) {
            guessed.innerHTML = guessed.innerHTML + ` ${a}, `;
            right.innerText = "Hint: the number is smaller";
            right.style.display = "block";
            t = t - 1;
            tries.innerText = `tries left :${t}`
        }
    }
    else {
        right.innerText = "game over!";
        picture1.style.display = "block";

    }
});