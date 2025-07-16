
const form = document.querySelector("form")
const inputForm = document.querySelector("form input[type='text']")
const nodo = document.querySelector(".no_do")
const all = document.querySelector(".all")

const card_main = document.querySelector("main .card")
const card_footer = document.querySelector("footer .card")

const view_more = document.querySelector(".view")
const modifier = document.querySelector(".modifier")


view_more.addEventListener("click", (e) => {
    card_footer.classList.toggle("activate")
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(inputForm.value.trim() == ""){
        alert("veuillez remplir le champs")
        return;
    }
    else {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="left">
                    <input type="checkbox">
                    <input type="text" value="${inputForm.value.trim()}" readonly class="texte">
                </div>
                <div class="right">
                    <button class="delete">supprimer</button>
                </div>
        
        `
        div.className = 'tache'
        div.setAttribute("data-set", card_main.children.length)
        
        card_main.appendChild(div)

        inputForm.value = ""


        const check = div.querySelector("input[type='checkbox']")
        check.addEventListener("click", (e) => {
            if(check.checked){
                card_footer.appendChild(div)
            }else {
                card_main.appendChild(div)
            }
        })

        const deleteDiv = div.querySelector(".delete")
        deleteDiv.addEventListener("click", (e) => {
            div.remove()
        })
    }

})







