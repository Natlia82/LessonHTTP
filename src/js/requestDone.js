export default function RequestDone(urlHost, idTiked) {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", urlHost + "/?method=ticketDone&id=" + idTiked);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // обработчик получения ответа сервера
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {

                console.log("Все хорошо!");


            } catch (e) {
                console.error(e);
            }
        }
    });

    xhr.send(); // выполняем запрос */
}