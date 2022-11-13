import ViewTikedEding from "./viewTikedEding";
const iewTikEd = new ViewTikedEding();

export default function RequestTicketEditing(urlHost, idTiked) {
    console.log("изменение тикета");
    const conteinerTiket = document.querySelector('#contenerForm');

    const xhr = new XMLHttpRequest();
    xhr.open("GET", urlHost + "/?method=editing&id=" + idTiked);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // обработчик получения ответа сервера
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const rezult = JSON.parse(xhr.responseText);
                console.log(rezult);
                conteinerTiket.innerHTML = iewTikEd.TikedEding(rezult);

            } catch (e) {
                console.error(e);
            }
        }
    });

    xhr.send(); // выполняем запрос */
}