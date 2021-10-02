

let box = document.getElementById('box-portfolio');
let figure = document.getElementsByClassName('pict-box-portfolio')
let body = document.getElementsByTagName('body');
//box.addEventListener('click', func);
box.addEventListener('click', func2)



for(let i = 0; i < figure.length; i++) {
figure[i].addEventListener('click', func2)
}		 
function func2() {
			if(this.tagName =='FIGURE' )	{
			console.log(this.tagName)
				
				// this.classList.toggle('pict-max');
				// let div = document.createElement('div');
				// div.setAttribute('class', 'modal-box');
				// window.document.appendChild('div');
				this.classList.toggle('pict-max');			
	let modalbox = document.createElement('div');
	let modalpict = document.createElement('figure');
			modalpict.setAttribute('class', 'modal-box');
			body.appendChild(modalbox);
			modalbox.appendChild(modalpict);

			}

		
		}
			
		
			
				

// function func(event) {
// 	let target = event.target;
//     //console.log(target.tagName);
// 	if(target.tagName == 'IMG') {
// 		console.log('Hooora!!!');
		
		

// 	} else {
// 		target.classList.toggle('pict-max');
// 	}
// }