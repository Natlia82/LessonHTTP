export default class ViewTiked {
    AllTiked(Tikeds) {
        let rez = "";
        Tikeds.forEach(element => {
            let chek;
            (element.status) ? chek = "checked": chek = "";
            rez += '<div class="tiked" data-id="' + element.id + '">' +
                '<label class="container">' +
                '<input class="checkboxDone" type="checkbox" ' + chek + '>' +
                '<span class="checkmark"></span>' +
                '</label>' +
                '<span class="purpose">' + element.name +
                '</span>' +
                '<time datetime="2022-02-15 19:00">' + element.created + '</time>' +
                '<div class="button editing"></div>' +
                '<div class="button cancellation"></div>' +
                '</div>';
        });
        return rez;
    }
}