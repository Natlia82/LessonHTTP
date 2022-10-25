import ViewTiked from "./viewTiked";
const allTiked = new ViewTiked();

export default function RequestTicketFull(conteinerTiket, urlHost, idTiked) {
    console.log("подробная информация");
    // const conteinerTiket = document.querySelector('[data-tiket="purpose"][ data-id="' + idTiked + '"]');
    console.log(conteinerTiket);
    const pEliment = document.createElement("p");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", urlHost + "/?method=ticketById&id=" + idTiked);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // обработчик получения ответа сервера
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const rezult = xhr.responseText;
                console.log("Подробности о тики");
                console.log(rezult);
                pEliment.innerText = rezult;
                conteinerTiket.insertAdjacentElement("beforeend", pEliment);
            } catch (e) {
                console.error(e);
            }
        }
    });

    xhr.send(); // выполняем запрос */
}