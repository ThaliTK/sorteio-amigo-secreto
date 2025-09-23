# 🎁 Sorteio do Amigo Secreto

Uma aplicação web interativa para realizar sorteios de amigo secreto de forma simples e divertida! Desenvolvida como projeto do **Challenge Amigo Secreto** do curso de iniciante em programação do **Programa ONE - Oracle Next Education**.

![Screenshot da aplicação](https://github.com/user-attachments/assets/41921c48-9464-4474-be9a-104257eb4ad4)

## 📋 Sobre o Projeto

O **Sorteio do Amigo Secreto** é uma aplicação web que permite aos usuários:
- ✨ Adicionar nomes de participantes para o sorteio
- 🎯 Realizar o sorteio aleatório do amigo secreto
- 🚫 Validar entradas duplicadas e vazias
- 📱 Interface responsiva e amigável

![Demonstração do resultado](https://github.com/user-attachments/assets/5140e498-3e85-4e85-b30a-61a7ff1811e6)

## 🚀 Funcionalidades

- **Adicionar Participantes**: Digite o nome das pessoas que participarão do sorteio
- **Validação Inteligente**: 
  - Impede a adição de nomes vazios
  - Evita nomes duplicados na lista
  - Requer pelo menos 2 participantes para realizar o sorteio
- **Sorteio Aleatório**: Algoritmo que seleciona aleatoriamente um participante
- **Interface Intuitiva**: Design moderno com tema roxo e elementos visuais atrativos
- **Responsividade**: Funciona perfeitamente em diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com variáveis CSS, flexbox e design responsivo
- **JavaScript**: Lógica de negócio e manipulação do DOM
- **Google Fonts**: Tipografias Inter e Merriweather

## 📁 Estrutura do Projeto

```
sorteio-amigo-secreto/
├── challenge-amigo-secreto_pt-main (1)/
│   └── challenge-amigo-secreto_pt-main/
│       ├── assets/
│       │   ├── Image_amigo_Secreto.png
│       │   └── play_circle_outline.png
│       ├── index.html          # Página principal
│       ├── style.css           # Estilos da aplicação
│       └── app.js              # Lógica JavaScript
└── README.md                   # Documentação do projeto
```

## 🎮 Como Usar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para carregamento das fontes do Google)

### Executando a Aplicação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/thalidevTK/sorteio-amigo-secreto.git
   cd sorteio-amigo-secreto
   ```

2. **Navegue até o diretório da aplicação**:
   ```bash
   cd "challenge-amigo-secreto_pt-main (1)/challenge-amigo-secreto_pt-main"
   ```

3. **Abra o arquivo `index.html` no seu navegador** ou use um servidor local:
   ```bash
   # Opção 1: Abrir diretamente no navegador
   # Clique duas vezes no arquivo index.html
   
   # Opção 2: Usar servidor HTTP local (Python)
   python -m http.server 8080
   # Acesse http://localhost:8080
   
   # Opção 3: Usar Live Server (VS Code)
   # Instale a extensão Live Server e clique em "Go Live"
   ```

### Passos para Usar a Aplicação

1. **Adicionar Participantes**:
   - Digite o nome de uma pessoa no campo de texto
   - Clique no botão "Adicionar" ou pressione Enter
   - Repita o processo para adicionar mais participantes

2. **Realizar o Sorteio**:
   - Certifique-se de ter pelo menos 2 participantes na lista
   - Clique no botão "Sortear!"
   - O resultado aparecerá na tela mostrando quem foi sorteado

3. **Fazer um Novo Sorteio**:
   - Clique novamente em "Sortear!" para sortear outro participante
   - A lista de participantes permanece a mesma

## 🎨 Características Visuais

- **Paleta de Cores**: Tons de roxo (#732092, #480393, #c692f1)
- **Tipografia**: 
  - Inter: Interface e textos gerais
  - Merriweather: Títulos e elementos especiais
- **Elementos Visuais**:
  - Imagem ilustrativa do amigo secreto
  - Ícones interativos nos botões
  - Sombras e bordas arredondadas
  - Efeitos hover nos botões

## 🔧 Detalhes Técnicos

### Principais Funções JavaScript

- `adicionarAmigo()`: Adiciona um novo participante à lista
- `atualizarListaAmigos()`: Atualiza a exibição da lista de participantes  
- `sortearAmigo()`: Realiza o sorteio aleatório de um participante

### Validações Implementadas

- Verificação de campos vazios
- Prevenção de nomes duplicados
- Verificação de quantidade mínima de participantes (2)
- Limpeza automática do campo de entrada após adição

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido para praticar:
- Manipulação do DOM com JavaScript
- Estruturação semântica com HTML5
- Estilização moderna com CSS3
- Lógica de programação e algoritmos
- Validação de dados de entrada
- Design responsivo e acessibilidade

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Ideias para Melhorias

- [ ] Adicionar animações nas transições
- [ ] Implementar histórico de sorteios
- [ ] Adicionar opção de remover participantes
- [ ] Criar modo escuro/claro
- [ ] Adicionar sons de feedback
- [ ] Exportar resultados em PDF

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [thalidevTK](https://github.com/thalidevTK) como parte do programa ONE - Oracle Next Education.

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela no repositório!
