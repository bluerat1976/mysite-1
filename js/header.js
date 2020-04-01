
let header = document.getElementById('hd')

let boxlogo = document.getElementById('box-logo')

let logo = document.createElement('h3')
logo.innerHTML = `Blin\nHernia`
boxlogo.appendChild(logo)

let logopict = document.createElement('img')
logopict.setAttribute('src', 'picts/logo/tatiana.jpg')
logopict.setAttribute('id', 'pict-logo')
boxlogo.appendChild(logopict)

header.appendChild(boxlogo)



//------------
let list = document.getElementById('box-nav')
header.appendChild(list)

//------------------------------------------------------

let listItem1 = document.createElement('li')
listItem1.setAttribute('id', 'uppnav1-item')
list.appendChild(listItem1)

let listLink1 = document.createElement('a')
listLink1.setAttribute('id', 'uppnav1' )
listLink1.setAttribute('href', 'index.html')
listLink1.innerHTML = 'Home'
listItem1.appendChild(listLink1)


//-----------------------------------------------------

let listItem3 = document.createElement('li')
listItem3.setAttribute('id', 'uppnav3-item')
list.appendChild(listItem3)    

let listLink3 = document.createElement('a')
listLink3.setAttribute('id', 'uppnav3' )
listLink3.setAttribute('href', 'aboutme.html')
listLink3.innerHTML = 'About me'
listItem3.appendChild(listLink3)

//-----------------------------------------------------

let listItem4 = document.createElement('li')
listItem4.setAttribute('id', 'uppnav4-item')
list.appendChild(listItem4)    

let listLink4 = document.createElement('a')
listLink4.setAttribute('id', 'uppnav4' )
listLink4.setAttribute('href', 'portfolio.html')
listLink4.innerHTML = 'Portfolio'
listItem4.appendChild(listLink4)

//------------------------------------------------------

let listItem5 = document.createElement('li')
listItem5.setAttribute('id', 'uppnav5-item')
list.appendChild(listItem5)    

let listLink5 = document.createElement('a')
listLink5.setAttribute('id', 'uppnav5' )
listLink5.setAttribute('href', 'blog.html')
listLink5.innerHTML = 'Blog'
listItem5.appendChild(listLink5)

//------------------------------------------------------

let listItem6 = document.createElement('li')
listItem6.setAttribute('id', 'uppnav6-item')
list.appendChild(listItem6)    

let listLink6 = document.createElement('a')
listLink6.setAttribute('id', 'uppnav6' )
listLink6.setAttribute('href', 'cv.html')
listLink6.innerHTML = 'CV'
listItem6.appendChild(listLink6)

//-----------------------------------------------------

