
let boxAuto = document.getElementById('content-auto');

let boxCategory = document.createElement('div');
boxCategory.setAttribute('id', 'parts-category');
boxCategory.setAttribute('class', 'autopieces-categories')

class PartsCategory {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    };
    
    render() {
        let linkCategory = document.createElement('a');
        linkCategory.innerHTML = this.name;
        linkCategory.setAttribute('href', this.href);

        return linkCategory;
    };
}

let categories = [
    new PartsCategory('Автокрепеж', '#####'),
    new PartsCategory('Автохимия', 'autohimia.html'),
    new PartsCategory('Автоэлектрика', 'autoelectrica.html'),
    new PartsCategory('Выхлопная система', 'vihlop.html'),
    new PartsCategory('Двигатель', 'dvigatel.html'),
    new PartsCategory('Кондиционер', 'aircond.html'),
    new PartsCategory('Кузов', 'kuzov.html'),
    new PartsCategory('Масла и смазки', 'oils.html'),
    new PartsCategory('Освещение', 'osveshenie.html'),
    new PartsCategory('Отопление / вентиляция', 'heat-ventilat.html'),
    new PartsCategory('Передача / сцепление', 'transmition.html'),
    new PartsCategory('Рулевое управление', 'rulevoe.html'),
    new PartsCategory('Салон автомобля', 'salon.html'),
    new PartsCategory('Система безопасности', 'safe-system.html'),
    new PartsCategory('Система зажигания', 'zajiganie.html'),
    new PartsCategory('Система охлаждения', 'cooling.html'),
    new PartsCategory('Стекла / Система очистки стекол', 'windows.html'),
    new PartsCategory('Тех жидкости', 'teh-liquids.html'),
    new PartsCategory('Топливная система', 'toplivnaya-syst.html'),
    new PartsCategory('Тормозная система', 'tormoza.html'),
    new PartsCategory('Уход за автомобилем', 'uhod-za-avto.html'),
    new PartsCategory('Фильтры', 'filtri.html'),
    new PartsCategory('Ходовая часть', 'hodovaia.html'),
    new PartsCategory('Автохимия', 'autohimia.html'),
    new PartsCategory('Авто Электроника', 'electronic.html'),
];

function renderCategories() {
    let w = document.getElementById('parts-category');
 
    categories.forEach(
        
        item => w.appendChild(item.render())
       
    )
    
        boxAuto.appendChild(w);
    console.log(w);
}
renderCategories('#boxAuto');


//boxAuto.appendChild(boxCategory);


