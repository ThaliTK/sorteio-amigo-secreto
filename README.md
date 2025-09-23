# 🎁 Sorteio Amigo Secreto

![Secret Friend Draw App](https://github.com/user-attachments/assets/c3009a88-669a-4dfd-a48f-966f403c6f6a)

Um aplicativo web interativo para realizar sorteios de amigo secreto de forma simples e divertida. Desenvolvido como parte do **Programa One Oracle Next Education** para demonstrar conhecimentos práticos em JavaScript, HTML e CSS.

## 📋 Sobre o Projeto

O **Sorteio Amigo Secreto** é uma aplicação web responsiva que permite aos usuários criar listas de participantes e realizar sorteios aleatórios para determinar quem será o "amigo secreto" de cada pessoa. A interface moderna e intuitiva torna o processo de organização de amigo secreto mais fácil e divertido.

## ✨ Funcionalidades

- ✅ **Adicionar Participantes**: Interface simples para adicionar nomes à lista
- ✅ **Validação de Entrada**: Impede nomes vazios e duplicatas
- ✅ **Lista Dinâmica**: Visualização em tempo real dos participantes adicionados
- ✅ **Sorteio Aleatório**: Algoritmo que seleciona um participante de forma aleatória
- ✅ **Interface Responsiva**: Design adaptado para diferentes tamanhos de tela
- ✅ **Feedback Visual**: Alertas e mensagens de confirmação para o usuário
- ✅ **Acessibilidade**: Implementação de ARIA labels e navegação por teclado

## 🚀 Demonstração

### Características Principais:
1. **Entrada de Dados**: Campo de texto para inserir nomes dos participantes
2. **Gerenciamento de Lista**: Adição e visualização dos participantes
3. **Sorteio**: Botão para realizar o sorteio aleatório
4. **Resultado**: Exibição clara do participante sorteado

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica da aplicação |
| **CSS3** | Estilização moderna com Flexbox e CSS Variables |
| **JavaScript (ES6+)** | Lógica da aplicação e manipulação do DOM |
| **Google Fonts** | Tipografia personalizada (Inter & Merriweather) |

### Recursos Técnicos Implementados:
- **CSS Variables** para tema consistente
- **Flexbox** para layout responsivo
- **Event Listeners** para interatividade
- **DOM Manipulation** para atualizações dinâmicas
- **Input Validation** para melhor experiência do usuário
- **Accessibility Features** (ARIA labels, keyboard navigation)

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

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/thalidevTK/sorteio-amigo-secreto.git
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd sorteio-amigo-secreto/challenge-amigo-secreto_pt-main\ \(1\)/challenge-amigo-secreto_pt-main
   ```

3. **Execute com servidor local** (recomendado)
   ```bash
   # Usando Python 3
   python -m http.server 8000
   
   # Usando Node.js
   npx http-server
   
   # Usando PHP
   php -S localhost:8000
   ```

4. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

### Execução Direta
Alternativamente, você pode abrir o arquivo `index.html` diretamente no navegador, mas alguns recursos podem não funcionar corretamente devido às políticas de CORS.

## 📖 Como Usar

### Passo a Passo:

1. **Adicionar Participantes**
   - Digite o nome de um participante no campo de entrada
   - Clique em "Adicionar" ou pressione Enter
   - O nome será adicionado à lista visível

2. **Gerenciar a Lista**
   - Todos os nomes adicionados aparecem na lista
   - O sistema impede nomes duplicados ou vazios
   - Mensagens de alerta informam sobre erros de entrada

3. **Realizar o Sorteio**
   - Certifique-se de ter pelo menos 2 participantes
   - Clique no botão "Sortear!"
   - O resultado aparecerá abaixo da lista

4. **Novo Sorteio**
   - Adicione ou remova participantes conforme necessário
   - Realize novos sorteios a qualquer momento

## 🎨 Design e Interface

### Paleta de Cores
- **Primária**: `#732092` (Roxo)
- **Secundária**: `#ffffff` (Branco)  
- **Terciária**: `#c692f1` (Lilás)
- **Botões**: `#480393` / `#6f27d5` (Roxo escuro/claro)
- **Texto**: `#270051` (Roxo muito escuro)

### Tipografia
- **Inter**: Fonte principal para interface
- **Merriweather**: Fonte secundária para elementos específicos

### Responsividade
O design se adapta a diferentes tamanhos de tela, mantendo a usabilidade em dispositivos mobile e desktop.

## 🧪 Funcionalidades Técnicas

### Validações Implementadas:
- Verificação de campos vazios
- Prevenção de nomes duplicados
- Validação de quantidade mínima de participantes (2)

### Algoritmo de Sorteio:
```javascript
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];
```

### Acessibilidade:
- Labels ARIA para leitores de tela
- Navegação por teclado funcional
- Contraste adequado de cores
- Estrutura semântica HTML

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Sugestões de Melhorias:
- [ ] Implementar remoção individual de participantes
- [ ] Adicionar histórico de sorteios
- [ ] Implementar exportação de resultados
- [ ] Adicionar temas alternativos
- [ ] Criar versão PWA (Progressive Web App)
- [ ] Implementar sorteio com regras específicas

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**[ThalidevTK](https://github.com/thalidevTK)**

Desenvolvido como parte do programa educacional **Oracle Next Education (ONE)** em parceria com a **Alura**.

---

### 🎓 Contexto Educacional

Este projeto foi desenvolvido como parte do **Challenge Amigo Secreto** do programa ONE (Oracle Next Education), focando em:

- Aplicação prática de **JavaScript** para manipulação do DOM
- Implementação de **CSS moderno** com variables e flexbox
- Criação de **HTML semântico** e acessível
- Desenvolvimento de **lógica de programação** com validações
- Boas práticas de **UX/UI Design**

### 🔗 Links Úteis

- [Oracle Next Education](https://www.oracle.com/br/education/oracle-next-education/)
- [Alura](https://www.alura.com.br/)
- [Repositório do Projeto](https://github.com/thalidevTK/sorteio-amigo-secreto)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**
