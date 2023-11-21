document.getElementById('btn1').addEventListener('click', function(){
    fetch('pagina1.html')
        .then(function(response){
            if(response.status >= 400){
                throw new Error('a');
            }
        })
        .then(function(conteudo){
            Escrever(conteudo.text());
        })
        .catch(function(errror){
            Escrever("Aa");
        })
});

document.getElementById('btn2').addEventListener('click', function(){
    fetch('pagina2.html')
        .then(function(response){
            if(response.status >= 400){
                throw new Error('a');
            }
        })
        .then(function(conteudo){
            Escrever(conteudo.text());
        })
        .catch(function(errror){
            Escrever("Aa");
        })
});

function Escrever(conteudo){
    document.querySelector('meta').innerHTML += conteudo;
}