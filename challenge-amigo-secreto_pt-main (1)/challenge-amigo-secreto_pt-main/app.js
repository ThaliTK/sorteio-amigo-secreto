
    let amigos = [];

    function adicionarAmigo() {
        const input = document.getElementById('amigo');
        const nome = input.value.trim();
        
        if (nome === '') {
            alert('Por favor, digite um nome válido!');
            return;
        }
        
        if (amigos.includes(nome)) {
            alert('Este nome já foi adicionado!');
            return;
        }
        
        amigos.push(nome);
        input.value = '';
        atualizarListaAmigos();
        document.getElementById('resultado').innerHTML = '';
    }

    function atualizarListaAmigos() {
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        
        amigos.forEach(nome => {
            const li = document.createElement('li');
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert('É preciso adicionar pelo menos 2 amigos para sortear!');
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li> Seu amigo secreto sorteado é : ${amigoSorteado}! </li>`;
    }

    document.getElementById('amigo').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adicionarAmigo();
        }
    });