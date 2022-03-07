import AddTiked from "./addTiked";
import ViewTiked from "./viewTiked";
import RequestAll from "./myRequest";
import RequestDelete from "./requestDelete";

const modalAddTiked = new AddTiked();
const allTiked = new ViewTiked();

RequestAll();

//окрываем модальное окно добавления тикета
const addTiked = document.querySelector('.addTiked');
addTiked.addEventListener('click', () => {
    modalAddTiked.AddTikedModal();
});
//закрываем модальное окно 
const canselModal = document.querySelector('.buttonCanselAddDescription');
canselModal.addEventListener('click', () => {
    // const modalAddTiked = new AddTiked();
    modalAddTiked.ClouseTikedModal();
});
//добавление тикета
const saveNewTiket = document.querySelector('.buttonAddDescription');
saveNewTiket.addEventListener('click', () => {
    //const jsonTiket = JSON.parse(modalAddTiked.AllTiked());
    console.log(modalAddTiked.AllTiked());
    //  modalAddTiked.ClouseTikedModal();
});

const clickElement = document.querySelector('.conteinerTiket');
//clickElement.getAttribute
clickElement.addEventListener('click', (event) => {
    //удаление элемента
    if (event.target.getAttribute('data-del') == "delete") {
        console.log(event.target.getAttribute('data-id'));
        RequestDelete(event.target.getAttribute('data-id'));
    }
});



//отметка о готовность задания
//const
const done = document.querySelectorAll('.checkboxDone');
done.forEach(element => {
    element.addEventListener('click', () => {
        alert('чик, чик');
    });
});