
let todo = document.getElementById("Todo_List")

function myfun2(element) {
    let parent = element.parentNode;
    parent.outerHTML=""
   
}

let i = 0

function myfun() {

    let IN = document.getElementById("data").value
    document.getElementById("data").value = ""
    if (IN) {
        console.log(IN)
        ihtml = ""
        ihtml = `
                    <div class="todo_list" id="td_list${i}">
                        <p>${IN}</p>
                    <button class="clear" onclick="myfun2(this)"></button>
                    </div>
        `
        todo.innerHTML += ihtml
        i++;
    }

}