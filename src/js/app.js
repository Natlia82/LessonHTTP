import AddTiked from "./addTiked";
import ViewTiked from "./viewTiked";
const modalAddTiked = new AddTiked();
const allTiked = new ViewTiked();
//console.log(allTiked.AllTiked(modalAddTiked.AllTiked()));
const conteinerTiket = document.querySelector('.conteinerTiket');
//conteinerTiket.innerHTML = allTiked.AllTiked(modalAddTiked.AllTiked());

/*отсылаем запрос*/
const xhr = new XMLHttpRequest();
// GET-запрос к ресурсу /hello
xhr.open("GET", "http://localhost:9000/?method=allTickets");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// обработчик получения ответа сервера
xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        try {
            const rezult = JSON.parse(xhr.responseText);
            console.log("ура!!");
            console.log(xhr.responseText);
            conteinerTiket.innerHTML = allTiked.AllTiked(rezult);
        } catch (e) {
            console.error(e);
        }
    }
});

xhr.send(); // выполняем запрос */

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

//отметка о готовность задания
//const
const done = document.querySelectorAll('.checkboxDone');
done.forEach(element => {
    element.addEventListener('click', () => {
        alert('чик, чик');
    });
});