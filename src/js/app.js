import AddTiked from "./addTiked";
import ViewTiked from "./viewTiked";
import RequestAll from "./myRequest";
import RequestTicketFull from "./requestTicketFull";
import RequestAddTicket from "./addRequest";
import RequestDone from "./requestDone";
import RequestTicketEditing from "./editingTikedRequest";

let urlHost = "http://localhost:3000";
const modeldelete = document.querySelector("#modalDeleteTiked");
let IdDeleteTiked = 0;
const modalAddTiked = new AddTiked();
const allTiked = new ViewTiked();
//const editingTiked = document.querySelector('#modalEditingTiked');

RequestAll(urlHost + "/?method=allTickets");

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
/*nata const canselModalEditing = document.querySelector('#modalEditingTiked');
canselModalEditing.addEventListener('click', () => {
    modalAddTiked.ClouseTikedModalEditing();
});*/

//добавление тикета
const saveNewTiket = document.querySelector('.buttonAddDescription');
saveNewTiket.addEventListener('click', (e) => {

    e.preventDefault();

    const subscribeForm = document.querySelector('#modalAddTiked');
    const body = 'name=' + document.querySelector('#shortDescription').value + "&description=" + document.querySelector('#detailedDescription').value;;

    RequestAddTicket(urlHost + "/?method=createTicket", body);

    modalAddTiked.ClouseTikedModal();
});

const clickElement = document.querySelector('.conteinerTiket');
//clickElement.getAttribute
clickElement.addEventListener('click', (event) => {
    //удаление элемента
    if (event.target.getAttribute('data-del') == "delete") {

        modeldelete.classList.remove("NotVisible");
        IdDeleteTiked = event.target.getAttribute('data-id');

    }

    //показать полную и информацию о тикет
    if (event.target.getAttribute('data-tiket') == "purpose") {
        const conteinerTiket = document.querySelector('[data-tiket="purpose"][ data-id="' + event.target.getAttribute('data-id') + '"]');
        const delP = document.querySelector('[data-tiket="purpose"][ data-id="' + event.target.getAttribute('data-id') + '"] p');
        if (delP) {
            conteinerTiket.removeChild(delP);
        } else RequestTicketFull(conteinerTiket, urlHost, event.target.getAttribute('data-id'));
    }

    //изменить информацию о тикет 
    if (event.target.getAttribute('data-editing') == "editing") {
        RequestTicketEditing(urlHost, event.target.getAttribute('data-id'));

        modalAddTiked.EditingTikedModal();

    }

    //отметка о выполнении
    if (event.target.getAttribute('data-done') == "done") {
        const kodDone = event.target.getAttribute('data-id');
        console.log("d " + kodDone);
        RequestDone(urlHost, kodDone);
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
    // RequestDelete(IdDeleteTiked);
    RequestAll(urlHost + "/?method=deleteTicket&id=" + IdDeleteTiked)
    modeldelete.classList.add("NotVisible");
});

/*изменение тикета*/
// 
const butEditingTiked = document.querySelector('#butEditingTiked');
butEditingTiked.addEventListener('click', (e) => {

    e.preventDefault();

    const subscribeForm = document.querySelector('#modalEditingTiked');
    const body = 'id=' + document.querySelector('#shortDescriptionEditing').getAttribute('data-id') +
        '&inf=' + document.querySelector('#shortDescriptionEditing').value +
        "&descript=" + document.querySelector('#detailedDescriptionEditing').value;
    console.log(body);
    RequestAddTicket(urlHost + "/?method=editingNew", body);

    modalAddTiked.ClouseTikedModalEditing();
});