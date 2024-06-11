let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let dot = document.getElementById("dot");
let wicket = document.getElementById("wicket");
let wide = document.getElementById("wide");
let no_ball = document.getElementById("no");
let div = document.getElementById("score");
let score = document.getElementById("total");
let extra = document.getElementById("extra");
let overs = document.getElementById("overs");
let ball = document.getElementById("ball");
let wicketD = document.getElementById("wicketD");

let ezero = document.getElementById("extra0");
let eone = document.getElementById("extra1");
let etwo = document.getElementById("extra2");
let ethree = document.getElementById("extra3");
let efour = document.getElementById("extra4");
let efive = document.getElementById("extra5");
let esix = document.getElementById("extra6");

let total = 0;
let over = 0;
let ballCount = 0;
let wicket1 = 0;
let overCount = 0;

function Score(text) {
    let p = document.createElement("div");
    let q = document.createElement("p");
    p.className = "circle";
    q.innerText = text;
    q.style.margin = "1px";
    q.style.color = "white";
    p.appendChild(q);
    div.appendChild(p);
}

function updateScore(value) {
    total += value;
    score.innerText = total;
}

function updateWickets() {
    wicketD.innerText = wicket1;
}

function clearDivContent() {
    div.innerHTML = "";
    score(text); 
}

function updateOvers() {
    if (ballCount >=5) {
        over++;
        ballCount = 0;
        overs.innerText = over;
        ball.innerText = ballCount;
        clearDivContent();
    }
    ball.innerText = ballCount + 1;
    
    ballCount++;
}

function InningBreak() {
    if (wicket1 >= 10 || over >= 20) {
        let inning = document.createElement("div");
        inning.innerText = "Inning Break";
        inning.style.fontSize = "40px";
        inning.style.position = "fixed";
        inning.style.top = "50%";
        inning.style.left = "50%";
        inning.style.transform = "translate(-50%, -50%)";
        inning.style.backgroundColor = "white";
        inning.style.padding = "20px";
        inning.style.border = "2px solid black";
        document.body.appendChild(inning);
        div.style.display = "none";
        return true;
    }
    return false;
}

function Ball(scoreValue) {
    if (InningBreak()) return;
    Score(scoreValue);
    updateScore(scoreValue);
    updateOvers();
}

one.addEventListener('click', () => Ball(1));
two.addEventListener('click', () => Ball(2));
three.addEventListener('click', () => Ball(3));
four.addEventListener('click', () => Ball(4));
five.addEventListener('click', () => Ball(5));
six.addEventListener('click', () => Ball(6));
dot.addEventListener('click', () => Ball(0));

wicket.addEventListener('click', () => {
    if (InningBreak()) return;
    wicket1++;
    Score("W");
    updateWickets();
    updateOvers();
});

wide.addEventListener('click', () => {
    if (InningBreak()) return;
    Score("Wd");
    updateScore(1);
});

no_ball.addEventListener('click', () => {
    if (InningBreak()) return;
    extra.style.display = "flex";
});

function NoBall(extraScore) {
    if (InningBreak()) return;
    total += extraScore + 1;
    score.innerText = total;
    extra.style.display = "none";
    Score(`Nb${extraScore}`);
}

ezero.addEventListener('click', () => NoBall(0));
eone.addEventListener('click', () => NoBall(1));
etwo.addEventListener('click', () => NoBall(2));
ethree.addEventListener('click', () => NoBall(3));
efour.addEventListener('click', () => NoBall(4));
efive.addEventListener('click', () => NoBall(5));
esix.addEventListener('click', () => NoBall(6));
