export default class ViewTikedEding {
    TikedEding(Tikeds) {
        console.log(Tikeds);
        const rez =
            '<form action="#" method="post" class="form" id="formAdd"></form>' +
            '<label id="descriptionEditing" for="shortDescription" class="labelDescription">' +
            'Краткое писание </label>' +
            '<input data-id="' + Tikeds.id + '" name="shortDescriptioEditing" id="shortDescriptionEditing" class="description" type="text" value="' + Tikeds.name + '" />' +
            '<label for="detailedDescription" class="labelDescription"> ' +
            'Подробное описание </label>' +
            '<input name="detailedDescriptionEditing" id="detailedDescriptionEditing" class="description" type="text" value="' + Tikeds.description + '"  />' +
            '</form>';
        return rez;
    }
}