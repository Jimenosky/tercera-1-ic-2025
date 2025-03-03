console.log('Cargando Cards')

const dataCards = [
    {
        "title":"Juego del año",
        "url_image":"./img/goty.jpeg",
        "desc":"un impresionante juego",
        "cta":"Mostrar más...",
        "link":"https://store.playstation.com/es-es/product/EP0006-CUSA00503_00-DA3GAMEOFTHEYEAR"
    },
    {
        "title":"Juego del mes",
        "url_image":"./img/goty.jpeg",
        "desc":"Este impresionante juego, hecho solo para los mas exigentes, requiere de mucha habilidad y paciencia",
        "cta":"Mostrar más...",
        "link":"https://store.playstation.com/es-es/product/EP0006-CUSA00503_00-DA3GAMEOFTHEYEAR"
    },
    {
        "title":"Juego del dia",
        "url_image":"./img/goty.jpeg",
        "desc":"Este impresionante juego, hecho solo para los mas exigentes, requiere de mucha habilidad y paciencia",
        "cta":"Mostrar más...",
        "link":"https://store.playstation.com/es-es/product/EP0006-CUSA00503_00-DA3GAMEOFTHEYEAR"
    },

];

(function () {
    let CARD = {
        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));

            });
        },

        tplCardItem: function(item, index) {
            return(`<div class='card-item id=card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                    <a class='card-cta' target='blank' href=${item.link}>${item.cta}</a>
                </div>
            </div>`)
        },
    }
    CARD.init();

})();