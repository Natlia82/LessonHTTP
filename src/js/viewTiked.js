export default class ViewTiked {
    AllTiked(Tikeds) {
        let rez = "";
        Tikeds.forEach(element => {
            let chek;
            (element.status) ? chek = "checked": chek = "";
            rez += '<div class="tiked" data-id="' + element.id + '">' +
                '<label class="container">' +
                '<input class="checkboxDone" data-done="done" data-id="' + element.id + '" type="checkbox" ' + chek + '>' +
                '<span class="checkmark"></span>' +
                '</label>' +
                '<span class="purpose" data-tiket="purpose" data-id="' + element.id + '">' + element.name +
                '</span>' +
                '<time datetime="2022-02-15 19:00">' + element.created + '</time>' +
                '<div class="button editing" data-editing="editing" data-id="' + element.id + '"></div>' +
                '<div class="button cancellation" data-del="delete" data-id="' + element.id + '"></div>' +
                '</div>';
        });

        return rez;
    }
}