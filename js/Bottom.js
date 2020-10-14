let botom = document.getElementById('botom')

let listBotom = document.getElementById('listbotom')

botom.appendChild(listBotom)


//------------------------------------------------------

let listBotomItem1 = document.createElement('li')
listBotomItem1.setAttribute('id', 'bot-nav1-item')
listBotom.appendChild(listBotomItem1)

let listBotomLink1 = document.createElement('a')
listBotomLink1.setAttribute('id', 'bot-nav1' )
listBotomLink1.setAttribute('href', 'index.html')
listBotomLink1.innerHTML = 'Home'
listBotomItem1.appendChild(listBotomLink1)


//------------------------------------------------------

let listBotomItem3 = document.createElement('li')
listBotomItem3.setAttribute('id', 'bot-nav3-item')
listBotom.appendChild(listBotomItem3)

let listBotomLink3 = document.createElement('a')
listBotomLink3.setAttribute('id', 'bot-nav3' )
listBotomLink3.setAttribute('href', '########')
listBotomLink3.innerHTML = 'About me'
listBotomItem3.appendChild(listBotomLink3)


//------------------------------------------------------

let listBotomItem4 = document.createElement('li')
listBotomItem4.setAttribute('id', 'bot-nav4-item')
listBotom.appendChild(listBotomItem4)

let listBotomLink4 = document.createElement('a')
listBotomLink4.setAttribute('id', 'bot-nav4' )
listBotomLink4.setAttribute('href', 'portfolio.html')
listBotomLink4.innerHTML = 'Portfolio'
listBotomItem4.appendChild(listBotomLink4)


//------------------------------------------------------

let listBotomItem5 = document.createElement('li')
listBotomItem5.setAttribute('id', 'bot-nav5-item')
listBotom.appendChild(listBotomItem5)

let listBotomLink5 = document.createElement('a')
listBotomLink5.setAttribute('id', 'bot-nav5' )
listBotomLink5.setAttribute('href', '#########')
listBotomLink5.innerHTML = 'Blog'
listBotomItem5.appendChild(listBotomLink5)

//---------------------------------------------------

let listBotomItem6 = document.createElement('li')
listBotomItem6.setAttribute('id', 'bot-nav6-item')
listBotom.appendChild(listBotomItem6)

let listBotomLink6 = document.createElement('a')
listBotomLink6.setAttribute('id', 'bot-nav6' )
listBotomLink6.setAttribute('href', '################')
listBotomLink6.innerHTML = 'CV'
listBotomItem6.appendChild(listBotomLink6)

//------------------------------------------------------

let listBotomItem7 = document.createElement('li')
listBotomItem7.setAttribute('id', 'bot-nav7-item')
listBotom.appendChild(listBotomItem7)

let listBotomLink7 = document.createElement('a')
listBotomLink7.setAttribute('id', 'bot-nav7' )
listBotomLink7.setAttribute('href', '#########')
listBotomLink7.innerHTML = 'Contacts'
listBotomItem7.appendChild(listBotomLink7)