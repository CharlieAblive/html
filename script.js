async function buscarEndereco(){
    const cep = document.getElementById('cep').value
    
    if(!cep){
        alert("CEP Inexistente")
    }
    try{
        const resp = await fetch(`https://legendary-robot-pj95v95rxx7gh6976-8080.app.github.dev/`)
        const dados = await resp.json()
        document.getElementById('resposta').textContent = JSON.stringify(dados, null, 2)
        //document.getElementById('dados-cep').textContent = dados.cep
        //document.getElementById('dados-logradouro').textContent = dados.logradouro
        //document.getElementById('dados-bairro').textContent = dados.bairro
    } catch (err){
        console.log('Erro:', err)
    }

}