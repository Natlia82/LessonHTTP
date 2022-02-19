import AddTiked from "./addTiked";
const addTiked = document.querySelector('.addTiked');
addTiked.addEventListener('click', privetmir);

function privetmir() {
    const modalAddTiked = new AddTiked();
    modalAddTiked.AddTikedModal();
}