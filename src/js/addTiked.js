export default class AddTiked {

    AddTikedModal() {
        const addModal = document.querySelector('#modalAddTiked');
        addModal.classList.remove('NotVisible');
    }

    ClouseTikedModal() {
        const addModal = document.querySelector('#modalAddTiked');
        addModal.classList.add('NotVisible');
    }
}