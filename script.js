
const form = document.getElementById('form')
console.log('form',form)

form.addEventListener('submit', (e)=> {

	e.preventDefault();
	let name = document.getElementById('nome').value;
	let email = document.getElementById('email').value;
	let data = {
		name,
		email,
	}
	
	let convertData = JSON.stringify(data);
	localStorage.setItem('cadastro', convertData)

	alert("Cadastrado com sucesso! Obrigado pela preferência!")
})


