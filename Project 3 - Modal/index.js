// const openModal = document.getElementById("openBtn");
// const closeModal = document.getElementById("closeBtn");
// const modal = document.querySelector(".modal");

// openModal.addEventListener("click", ()=>{
//     modal.classList.add("modal-open")
// })

// closeModal.addEventListener("click",()=>{
//     modal.classList.remove("modal-open")
// })


const openModal = document.getElementById("openBtn");
const closeModal = document.getElementById("closeBtn");
const modal = document.querySelector("dialog")

openModal.addEventListener("click",()=>{
    modal.showModal()
})
closeModal.addEventListener("click",()=>{
    modal.close();
})
