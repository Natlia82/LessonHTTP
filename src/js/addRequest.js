import ViewTiked from "./viewTiked";
const allTiked = new ViewTiked();

export default function RequestTicketFull(urlHost, formData = null) {
    console.log("добавление тикета");
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", urlHost + "/?method=createTicket");
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

    xhr.send(formData); // выполняем запрос 

}