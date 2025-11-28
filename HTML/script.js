    const LINK_API = `https://legendary-robot-pj95v95rxx7gh6976-8080.app.github.dev/`

    const produto_form = document.getElementById('produto-form');
    const cliente_form = document.getElementById('cliente-form')

    const produto_resultado = document.getElementById('produto_resultado')
    const cliente_resultado = document.getElementById('cliente_resultado')

    cliente_form.addEventListener("submit", async (e) => {
        e.preventDefault
        

        const dados_cliente = {
            nomeCompleto : cliente_form.nomeCompleto.value,
            email : cliente_form.email.value,
            telefone : cliente_form.telefone.value,
            ativo : cliente_form.ativo.checked,
            endereco : {
                rua: cliente_form.rua.value,
                bairro: cliente_form.bairro.value,
                numero: cliente_form.numero.value,
                cidade: cliente_form.cidade.value
            },
            cpf : cliente_form.cpf.value,
            pedidos : cliente_form.value
        }

        try{
            const resp = await fetch(`${LINK_API}api/clientes`, {
                method : 'POST',
                header : {'Content-Type': 'application/json'},
                body : JSON.stringify(dados_cliente)
        });
            const dadosClienteRetorno = await resp.json()
            cliente_resultado.textContent = JSON.stringify(dadosClienteRetorno, null, 2)
        } catch (err){
            console.log('Erro:', err)
            cliente_resultado.textContent = "Erro"
        }
    })

    produto_form.addEventListener("submit", async (e) => {
        e.preventDefault

         const dados_produto = {
            nome : produto_form.nome.value,
            categoria : produto_form.categoria.value,
            descricao : produto_form.descricao.value,
            disponivel : produto_form.disponivel.checked,
            tempoPreparo : produto_form.tempoPreparo.value,
            preco : parseFloat(produto_form.preco.value)
        }

        
        try{
            const resp = await fetch(`${LINK_API}api/produtos`, {
                method : 'POST',
                header : {'Content-Type': 'application/json'},
                body : JSON.stringify(dados_produto)
        });
            const dadosProdutoRetorno = await resp.json()
            produto_resultado.textContent = JSON.stringify(dadosProdutoRetorno, null, 2)
        } catch (err){
            console.log('Erro:', err)
            produto_resultado.textContent = "Erro"
        }

    })
