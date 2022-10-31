import AddTiked from "./addTiked";
import ViewTiked from "./viewTiked";
import RequestAll from "./myRequest";
import RequestTicketFull from "./requestTicketFull";
import RequestAddTicket from "./addRequest"
let urlHost = "http://localhost:3000";
const modeldelete = document.querySelector("#modalDeleteTiked");
let IdDeleteTiked = 0;
const modalAddTiked = new AddTiked();
const allTiked = new ViewTiked();

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
//добавление тикета
const saveNewTiket = document.querySelector('.buttonAddDescription');
saveNewTiket.addEventListener('click', (e) => {

    e.preventDefault();

    const subscribeForm = document.querySelector('#modalAddTiked');
    const body = 'name=' + document.querySelector('#shortDescription').value + "&description=" + document.querySelector('#detailedDescription').value;;
    alert(body);
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
        /*  console.log(event.target.getAttribute('data-id'));
          RequestDelete(event.target.getAttribute('data-id'));*/
    }

    //показать полную и информацию о тикет
    if (event.target.getAttribute('data-tiket') == "purpose") {
        const conteinerTiket = document.querySelector('[data-tiket="purpose"][ data-id="' + event.target.getAttribute('data-id') + '"]');
        const delP = document.querySelector('[data-tiket="purpose"][ data-id="' + event.target.getAttribute('data-id') + '"] p');
        if (delP) {
            conteinerTiket.removeChild(delP);
        } else RequestTicketFull(conteinerTiket, urlHost, event.target.getAttribute('data-id'));
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

//отметка о готовность задания
//const
const done = document.querySelectorAll('.checkboxDone');
done.forEach(element => {
    element.addEventListener('click', () => {
        alert('чик, чик');
    });
});