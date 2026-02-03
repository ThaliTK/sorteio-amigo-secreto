# 🎁 Sorteio do Amigo Secreto

Uma aplicação web interativa e divertida para realizar sorteios de amigo secreto de forma simples e eficiente!

![Screenshot do App](https://github.com/user-attachments/assets/e16787a3-fbbf-4d9c-acd4-b241ba0919a0)

## 📋 Sobre o Projeto

O **Sorteio do Amigo Secreto** é uma aplicação web desenvolvida para facilitar a organização de sorteios de amigo secreto em grupos de amigos, família ou colegas de trabalho. Com uma interface moderna e intuitiva, permite adicionar participantes e realizar o sorteio de forma aleatória e justa.

## ✨ Funcionalidades

- ✅ **Adicionar Participantes**: Digite os nomes das pessoas que participarão do sorteio
- ✅ **Validação de Nomes**: Impede a adição de nomes vazios ou duplicados
- ✅ **Lista Dinâmica**: Visualize todos os participantes adicionados em tempo real
- ✅ **Sorteio Aleatório**: Realize o sorteio com apenas um clique
- ✅ **Resultado Instantâneo**: Veja imediatamente quem foi sorteado
- ✅ **Interface Responsiva**: Funciona perfeitamente em diferentes dispositivos
- ✅ **Suporte a Teclado**: Pressione Enter para adicionar nomes rapidamente

## 🚀 Como Usar

### 1. Acesso Direto
Abra o arquivo `index.html` em qualquer navegador web moderno.

### 2. Servidor Local
```bash
# Clone o repositório
git clone https://github.com/thalidevTK/sorteio-amigo-secreto.git

# Navegue até a pasta do projeto
cd sorteio-amigo-secreto/challenge-amigo-secreto_pt-main\ \(1\)/challenge-amigo-secreto_pt-main

# Inicie um servidor local (Python)
python3 -m http.server 8000

# Ou usando Node.js
npx http-server

# Acesse no navegador
http://localhost:8000
```

### 3. Passo a Passo
1. **Adicione os participantes**: Digite o nome de cada pessoa no campo de texto e clique em "Adicionar"
2. **Confira a lista**: Verifique se todos os nomes foram adicionados corretamente
3. **Realize o sorteio**: Clique no botão "Sortear!" quando tiver pelo menos 2 participantes
4. **Veja o resultado**: O nome do amigo secreto sorteado será exibido na tela

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com variáveis CSS e design responsivo
- **JavaScript ES6+**: Lógica de funcionamento e interatividade
- **Google Fonts**: Tipografias Inter e Merriweather para melhor legibilidade

## 📁 Estrutura do Projeto

```
sorteio-amigo-secreto/
├── challenge-amigo-secreto_pt-main (1)/
│   └── challenge-amigo-secreto_pt-main/
│       ├── index.html          # Página principal
│       ├── style.css           # Estilos da aplicação
│       ├── app.js             # Lógica JavaScript
│       └── assets/            # Recursos visuais
│           ├── Image_amigo_Secreto.png
│           └── play_circle_outline.png
└── README.md                  # Documentação do projeto
```

## 🎨 Características do Design

- **Paleta de Cores**: Tons de roxo e lilás que transmitem diversão e modernidade
- **Layout Responsivo**: Adapta-se automaticamente a diferentes tamanhos de tela
- **Tipografia**: Combinação harmoniosa entre as fontes Inter e Merriweather
- **Elementos Visuais**: Ícones e imagens que enriquecem a experiência do usuário
- **Acessibilidade**: Implementação de boas práticas de acessibilidade web

## 🔧 Funcionalidades Técnicas

### Validações Implementadas
- Verificação de campos vazios
- Prevenção de nomes duplicados
- Validação de número mínimo de participantes (2)

### Interatividade
- Suporte para tecla Enter na adição de nomes
- Feedback visual em tempo real
- Mensagens de alerta para situações especiais

### Algoritmo de Sorteio
```javascript
function sortearAmigo() {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    // Exibe o resultado
}
```

## 🌟 Próximas Melhorias

- [ ] Histórico de sorteios realizados
- [ ] Opção de exportar resultado
- [ ] Modo escuro/claro
- [ ] Animações de sorteio mais elaboradas
- [ ] Sorteio com restrições (evitar determinadas combinações)
- [ ] Suporte a múltiplos idiomas

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**ThalidevTK**
- GitHub: [@ThaliTK](https://github.com/ThaliTK)

---

⭐ Se este projeto foi útil para você, não esqueça de dar uma estrela!

🎄 **Feliz Amigo Secreto!** 🎁
