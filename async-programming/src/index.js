import fetch from 'node-fetch';

function hacerMasa(){
    console.log("Haciendo masa, en proceso");
	setInterval(() => console.log("Masa Lista!!"), 3000)
	/*fetch("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Hu-HHvKjyp-2JOb-O6VwwAHaNK%26pid%3DApi&f=1&ipt=c672bbe9b3519daa8bd928ff5f32ae41c772ae1c91e2082e535ade49425ce23c&ipo=images").then( (response) => {
		if(response.ok){ 
			console.log("Masa Lista!!");
		} else {
			console.log("Problemas haciendo la massa");
		}
 	});*/
}
function userIsWaiting(){
 	console.log("Usuario esta esperando");
}
function userIsWaitingTwo(){
	console.log("Usuario esta esperando 2");
}
hacerMasa();
userIsWaiting();
userIsWaitingTwo();
