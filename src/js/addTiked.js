export default class AddTiked {

    AddTikedModal() {
        const addModal = document.querySelector('#modalAddTiked');
        addModal.classList.remove('NotVisible');
    }

    ClouseTikedModal() {
        const addModal = document.querySelector('#modalAddTiked');
        addModal.classList.add('NotVisible');
    }


    SaveNewTiked() {
        //отправить запрос

    }

    AllTiked() {
        //отправляем запрос на сервер и получаем json
        var serializedUser = JSON.stringify([{
                "id": 1,
                "name": "поменять краску в принтере каб 404",
                "status": "false",
                "created": "15 февр."
            },
            {
                "id": 2, // идентификатор (уникальный в пределах системы)
                "name": "переустановить windows, ПК 401", // краткое описание
                "status": true, // boolean - сделано или нет
                "created": "15 февр." // дата создания (timestamp)
            },
            {
                "id": 3, // идентификатор (уникальный в пределах системы)
                "name": "установить обновление КВ 404", // краткое описание
                "status": false, // boolean - сделано или нет
                "created": "15 февр." // дата создания (timestamp)
            }
        ]);

        return JSON.parse(serializedUser);
    }

}