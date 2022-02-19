import AddTiked from "./addTiked";
const addTiked = document.querySelector('.addTiked');
const modalAddTiked = new AddTiked();

addTiked.addEventListener('click', () => {

    modalAddTiked.AddTikedModal();
});

const canselModal = document.querySelector('.buttonCanselAddDescription');
canselModal.addEventListener('click', () => {
    // const modalAddTiked = new AddTiked();
    modalAddTiked.ClouseTikedModal();
});