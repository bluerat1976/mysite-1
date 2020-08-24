let header = document.getElementById('hd')

let boxlogo = document.getElementById('box-logo')

//let logo = document.createElement('h3')
//logo.innerHTML = 'Это я'
//boxlogo.appendChild(logo)

let logopict = document.createElement('img')
logopict.setAttribute('src', 'picts/logo/logo-7.jpg')
logopict.setAttribute('id', 'pict-logo')
boxlogo.appendChild(logopict)

header.appendChild(boxlogo)



//--------------------------------------------------
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

//-------------------------

let uppermenu = [
    new UpperMenuItem('uppnav1', 'Home', 'index.html'),
    new UpperMenuItem('uppnav2', 'About me', 'aboutme.html'),
    new UpperMenuItem('uppnav3', 'Portfolio', 'portfolio.html'),
    new UpperMenuItem('uppnav4', 'Blog', 'blog.html'),
    new UpperMenuItem('uppnav5', 'CV', 'cv.html'),
]

function renderUpNav() {
    let wrapper = document.getElementById('box-nav')

    uppermenu.forEach( 
        menulist => wrapper.appendChild(menulist.render())
    ) 
    header.appendChild(wrapper)
}

renderUpNav('#box-nav')


