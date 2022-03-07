import ViewTiked from "./viewTiked";
const allTiked = new ViewTiked();

export default function RequestDelete(idTiked) {
    console.log("elfktybt");
    const conteinerTiket = document.querySelector('.conteinerTiket');

    /*отсылаем запрос*/
    const xhr = new XMLHttpRequest();
    // GET-запрос к ресурсу /hello
    xhr.open("GET", "http://localhost:9000/?method=deleteTicket&id=" + idTiked);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // обработчик получения ответа сервера
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const rezult = JSON.parse(xhr.responseText);
                console.log("удаление тикета");
                console.log(xhr.responseText);
                conteinerTiket.innerHTML = allTiked.AllTiked(rezult);
            } catch (e) {
                console.error(e);
            }
        }
    });

    xhr.send(); // выполняем запрос */
}