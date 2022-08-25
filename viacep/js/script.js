'use strict';

const buscaCep = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

const pesquisarCep = () => {
    let cep = document.getElementById('cep-busca').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(url, options)
    .then(responde => { responde.json()
        .then( data => buscaCep(data));
    })
    .catch(err => console.log('Erro: '+ err,message));
}

const element = document.getElementById('btn-busca').addEventListener('click', pesquisarCep);

