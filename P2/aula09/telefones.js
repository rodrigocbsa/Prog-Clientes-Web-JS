fetch('telefones.json').then((function (response){
	if(response.status >= 400){
		throw new Error("Erro ao executar a requisição: " + response.status);
	}
	response.json().then(function(telefones){
		DesenharTelefones(telefones);
	}).catch(function(erro){
		alert(erro.message);
	})
})).catch(function(erro){
	alert("Erro ao consultar telefones: " + erro.message);
})

function DesenharTelefones(telefones){
	document.querySelector('ul').innerHTML = telefones.map( tel => `<li>(${tel.ddd}) ${tel.telefone}</li>`).join('\n');
}