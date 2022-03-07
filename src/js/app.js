import AddTiked from "./addTiked";
import ViewTiked from "./viewTiked";
import RequestAll from "./myRequest";
import RequestDelete from "./requestDelete";
import RequestTicketFull from "./requestTicketFull";
const modeldelete = document.querySelector("#modalDeleteTiked");
let IdDeleteTiked = 0;
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
    console.log("Добавляем тикет");
    //  modalAddTiked.ClouseTikedModal();
});

const clickElement = document.querySelector('.conteinerTiket');
//clickElement.getAttribute
clickElement.addEventListener('click', (event) => {
    //удаление элемента
    if (event.target.getAttribute('data-del') == "delete") {

        modeldelete.classList.remove("NotVisible");
        IdDeleteTiked = event.target.getAttribute('data-id');
        /*  console.log(event.target.getAttribute('data-id'));
          RequestDelete(event.target.getAttribute('data-id'));*/
    }

    //показать полную и информацию о тикет
    if (event.target.getAttribute('data-tiket') == "purpose") {
        const conteinerTiket = document.querySelector('[data-tiket="purpose"][ data-id="' + event.target.getAttribute('data-id') + '"]');
        const delP = document.querySelector('[data-tiket="purpose"][ data-id="' + event.target.getAttribute('data-id') + '"] p');
        if (delP) {
            conteinerTiket.removeChild(delP);
        } else RequestTicketFull(event.target.getAttribute('data-id'));
    }
});

/**отмена удаления тикета */
const buttonCanselRemoveDescription = document.querySelector('.buttonCanselRemoveDescription');
buttonCanselRemoveDescription.addEventListener('click', () => {
    modeldelete.classList.add("NotVisible");
});
/*удаление тикета*/
const buttonRemoveDescription = document.querySelector('.buttonRemoveDescription');
buttonRemoveDescription.addEventListener('click', () => {
    RequestDelete(IdDeleteTiked);
    modeldelete.classList.add("NotVisible");
});

//отметка о готовность задания
//const
const done = document.querySelectorAll('.checkboxDone');
done.forEach(element => {
    element.addEventListener('click', () => {
        alert('чик, чик');
    });
});