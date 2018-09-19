export default class Model {
	
  	initApp() {
  		return	fetch('https://swapi.co/api/planets/')  
 					.then(response => response.json().then(data => { return data.results }))  
  					.catch(err => console.log('Fetch Error :-S', err));
  	}

  	loadePeople(resident) {
		return	fetch(resident).then(response => response.json()
					.then(data => { return data.name }))
					.catch(err => console.log('Fetch Error :-S', err));  

  	}
}
