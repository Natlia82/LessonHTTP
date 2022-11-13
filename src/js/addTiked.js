export default class AddTiked {

    AddTikedModal() {
        const addModal = document.querySelector('#modalAddTiked');
        addModal.classList.remove('NotVisible');
    }

    ClouseTikedModal() {
        const addModal = document.querySelector('#modalAddTiked');
        addModal.classList.add('NotVisible');
    }

    EditingTikedModal() {
        const addModal = document.querySelector('#modalEditingTiked');
        addModal.classList.remove('NotVisible');
    }

    ClouseTikedModalEditing() {
        const addModal = document.querySelector('#modalEditingTiked');
        addModal.classList.add('NotVisible');
    }


}