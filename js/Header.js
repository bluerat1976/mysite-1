//let header = document.getElementById('hd')

//const { info } = require("node-sass")


let upperNav = document.getElementById('nav-info')

let boxlogo = document.getElementById('box-logo')

let logo = document.createElement('h3')
logo.innerHTML = 'Deghent' + '<br>' + 'Design'
boxlogo.appendChild(logo)


// let logopict = document.createElement('img')
// logopict.setAttribute('src', 'picts/upmenu/upmenu-1.jpg')
// logopict.setAttribute('id', 'pict-logo')
// boxlogo.appendChild(logopict)

// header.appendChild(boxlogo)





//--------------------------------------------------------------------------
//----------Main upper menu creation----------------------------------------

class UpperMenuItem {
    constructor(id, name, href) {
        this.id = id
        this.name = name
        this.href = href
    }

    render() {
        let linkUpNav = document.createElement('a')
        linkUpNav.setAttribute ('id', this.id)
        linkUpNav.setAttribute('href', this.href)
        linkUpNav.innerText = this.name

        return linkUpNav
    }
}

//----------------------------------------

let uppermenu = [
    new UpperMenuItem('uppnav1', 'Home', 'index.html'),
    new UpperMenuItem('uppnav2', 'About me', 'aboutme.html'),
    new UpperMenuItem('uppnav3', 'Portfolio', 'portfolio.html'),
    new UpperMenuItem('uppnav4', 'Blog', 'blog.html'),
    new UpperMenuItem('uppnav4', 'Contacts', 'contacts.html'),
    new UpperMenuItem('uppnav5', 'CV', 'cv.html'),
]

function renderUpNav() {
    let wrapper = document.getElementById('box-nav');

    uppermenu.forEach( 
        menulist => wrapper.appendChild(menulist.render())
    ) 
    upperNav.appendChild(wrapper);
}

renderUpNav('#apperNav');



//------------- Falling menu creation-------------------------------

let dropdownbox = document.createElement('div');
dropdownbox.setAttribute('id', 'dropdown');
boxlogo.appendChild(dropdownbox);

boxlogo.appendChild(dropdownbox);

let menubutton = document.createElement('button');
menubutton.setAttribute('id','menu-button');
menubutton.innerHTML = 'Menu';
dropdownbox.appendChild(menubutton);

let dropdownShow = document.createElement('div');
dropdownShow.setAttribute('id', 'fall-menu');
dropdownShow.setAttribute('class', 'dropdown-hide')
dropdownbox.appendChild(dropdownShow);

class dropdownLink {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    };

    render() {
        let linkmenu = document.createElement('a');
        linkmenu.setAttribute('href', this.href);
        linkmenu.innerHTML = this.name;

        return linkmenu
    }
}

let dropdownMenu = [
    new dropdownLink('Home', 'index.html' ),
    new dropdownLink('About me', 'aboutme.html'),
    new dropdownLink('Portfolio', 'portfolio.html'),
    new dropdownLink('Blog', 'blog.html'),
    new dropdownLink('Contacts', 'contacts.html'),
    new dropdownLink('CV', 'cv.html'),
]

function renderDropMenu() {
    let wrapper = document.getElementById('fall-menu');

    dropdownMenu.forEach( 
        dropdownlist => wrapper.appendChild(dropdownlist.render())
    ) 
    dropdownbox.appendChild(wrapper);
}

renderDropMenu('#dropdownbox');


//let fallmenubutton = document.getElementById('menu-button');

menubutton.addEventListener('click', showMenu);

let element = document.getElementById('fall-menu');
function showMenu(event) { 
    element.classList.toggle('dropdown-show');
    element.classList.toggle('dropdown-hide');
}
 
function funk(event){
    console.log(event.target.id);
}




//------------Info header creation--------------------


let boxInfoHeader = document.getElementById('box-info-header');


let infoHead = document.createElement('p');
infoHead.setAttribute('class', 'info-header');
infoHead.innerHTML = '+373 (0) 78318392' + ' ' + ' --- ' + ' ' + 'lisadeghent@gmail.com';
boxInfoHeader.appendChild(infoHead);


//----------------Language change elements creation----------------






