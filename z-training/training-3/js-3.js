
// function myClick(event) {
//     console.log('-----------------------');
//     console.log('click');
//     console.log(this);
// }

// document.querySelector('.lang').onclick = myClick;
// document.querySelector('body').onclick = myClick;

//document.onclick = function(event) {
    // console.log('--------------')
    // //console.log(event);
    // console.log(event.target);
    // console.log(event.target.id);
    // if(event.target.id == 'lang') {
    //     console.log('Click on box lang');
    // } else {
    //     console.log('click was on body');
    // }
//};

// document.querySelector('.two').onclick = function(event) {
//     event.stopPropagation();
//     console.log('cklick!!!!!!!!!')
//     this.style.background = '#cccccc';
// };

// document.querySelector('.three').onclick = function() {
//     console.log('3333333-cklick!!!!!!!!!');
//     this.style.display = 'none';
// };

document.getElementById('lang').addEventListener('click', funkSwitch);

//document.getElementById('lan').addEventListener('click', funkSwitch);

//document.getElementById('ru').addEventListener('click', funkRu);

function funkSwitch(event) {
    console.log(event.target);
    console.log(event.target.id);
    let enbox = document.getElementsByClassName('en');
    let rubox = document.getElementsByClassName('ru');

    if(event.target.id == 'en') {
       
        for(let i = 0; i < enbox.length; i++) {
            console.log(enbox[i])//rubox[i].classList.toggle('hidden');
              
        };
                
        for(let i = 0; i < rubox.length; i++) {
            rubox[i].classList.toggle('hidden');
        };        
        
    } else {
         if(event.target.id == 'ru') {
            for(let i = 0; i < rubox.length; i++) {
               console.log(rubox[i]) //rubox[i].classList.toggle('hidden');
            }; 

            for(let i = 0; i < enbox.length; i++) {
                rubox[i].classList.toggle('hidden');
            };
         }
    }
}
 
//  function funkSwitch(){
// let enbox = document.getElementsByClassName('en');
//  let rubox = document.getElementsByClassName('ru');

//     for(let i = 0; i <= rubox.length; i++) {
//         rubox[i].classList.toggle('hidden');
//     };   
//     document.getElementById('lan').innerHTML = 'en'
  

//     for(let i = 0; i <= enbox.length; i++) {
//         enbox[i].classList.toggle('hidden');
//     }; 
    
   
// }






