let button = document.getElementById("button");
let ul = document.getElementById("ul");
let initialTask = document.getElementById("initialTask");


button.addEventListener('click', () => {
    let inputTab = document.getElementById("input-tab").value;
    if (inputTab.trim() !== "") {
        textnode(inputTab);
        document.getElementById("input-tab").value = ""; 
    }
});
function textnode(inputTab) {
    let li = document.createElement("li");
    let liDiv = document.createElement("div");
    let cross = document.createElement("div");

    let uniqueId = 'todo-' + Date.now();

    liDiv.innerHTML = `
        <label for="${uniqueId}" class="item">
            <input type="checkbox" id="${uniqueId}" class="hidden"/>
            <label for="${uniqueId}" class="cbx">      
                <svg width="14px" height="12px" viewBox="0 0 14 12">
                    <polyline points="1 7.6 5 11 13 1"></polyline>
                </svg>
            </label>
            <label for="${uniqueId}" class="cbx-lbl">${inputTab}</label>
        </label>
    `;

    li.classList.add('list', 'checkbox-wrapper-52');
    liDiv.className="listdiv";
    cross.className = "cross";
    cross.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    cross.addEventListener('click', () => {
        li.remove();
    });
    initialTask.remove();
    ul.prepend(li);
    li.appendChild(liDiv);
    li.appendChild(cross);
}
