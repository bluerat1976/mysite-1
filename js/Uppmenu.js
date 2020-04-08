class UpperMenuItem {
    constructor(id, name, href,) {
        this.id = id
        this.name = name
        this.href = href

    }


    render() {
        let linkUpNav = document.createElement('a')
        linkUpNav.addClassList('appnav' + this.id)
        

    }
}

//-------------------------

let uppermenu = [
    new UpperMenuItem(10, 'Home', 'index.html'),
    new UpperMenuItem(20, 'About me', 'aboutme.html'),
    new UpperMenuItem(30, 'Portfolio', 'portfolio.html'),
    new UpperMenuItem(40, 'Blog', 'blog.html'),
    new UpperMenuItem(50, 'CV', 'cv.html'),
]