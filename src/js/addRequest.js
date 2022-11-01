import ViewTiked from "./viewTiked";
const allTiked = new ViewTiked();


export default function RequestTicketFull(urlHost, body = null) {
    const conteinerTiket = document.querySelector('.conteinerTiket');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        const rezult = JSON.parse(xhr.responseText);
        conteinerTiket.innerHTML = allTiked.AllTiked(rezult);
    }
    xhr.open('POST', urlHost);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(body);
}