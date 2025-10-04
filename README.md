# ElétricoProBR - Portfolio de Eletricista

## 📋 Descrição

Portfolio profissional para eletricista especializado em instalações residenciais. Website moderno com tema dark, totalmente responsivo e otimizado para GitHub Pages.

## ⚡ Funcionalidades

- **Design Moderno**: Tema dark profissional com cores relacionadas à área elétrica
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos visuais elegantes e profissionais
- **Formulário de Contato**: Envio por email ou WhatsApp
- **Navegação Intuitiva**: Menu fixo com scroll suave
- **SEO Otimizado**: Estrutura HTML semântica

## 🗂️ Estrutura do Projeto

```
/
├── index.html          # Página principal
├── style.css          # Estilos CSS
├── script.js          # Funcionalidades JavaScript
└── README.md          # Documentação
```

## 🚀 Como Usar

### 1. GitHub Pages (Recomendado)

1. Faça fork ou baixe este repositório
2. No GitHub, vá em Settings → Pages
3. Selecione "Deploy from a branch" → "main" → "/ (root)"
4. Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio`

### 2. Hospedagem Local

1. Baixe os arquivos
2. Abra `index.html` em qualquer navegador
3. Ou use um servidor local como Live Server (VS Code)

## ⚙️ Personalização

### Informações Básicas

Edite o arquivo `index.html` para alterar:

- **Nome da empresa**: Procure por "ElétricoProBR"
- **Telefones**: Procure por "(11) 99999-9999" e "(11) 3333-3333"
- **Email**: Procure por "contato@eletricoproBR.com"
- **Localização**: Procure por "São Paulo - SP"

### Configurar Envio de Emails

#### Opção 1: EmailJS (Recomendado)

1. Acesse [EmailJS.com](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Configure um serviço de email (Gmail, Outlook, etc.)
4. Crie um template de email
5. No arquivo `script.js`, substitua:
   ```javascript
   const EMAILJS_PUBLIC_KEY = 'sua_chave_publica';
   const EMAILJS_SERVICE_ID = 'seu_service_id';
   const EMAILJS_TEMPLATE_ID = 'seu_template_id';
   ```

#### Opção 2: Formspree

1. Acesse [Formspree.io](https://formspree.io/)
2. Crie uma conta e um novo form
3. Substitua a action do formulário:
   ```html
   <form action="https://formspree.io/f/seu-id" method="POST">
   ```

### Cores e Estilo

No arquivo `style.css`, você pode alterar as cores principais:

```css
/* Cor principal (amarelo elétrico) */
#fbbf24

/* Cor de hover */
#f59e0b

/* Backgrounds escuros */
#0f172a, #1e293b, #334155
```

### Adicionar Imagens

1. Crie uma pasta `images/` na raiz do projeto
2. Adicione suas fotos de trabalhos
3. Substitua os placeholders no HTML:
   ```html
   <div class="portfolio-image">
       <img src="images/projeto1.jpg" alt="Descrição do projeto">
   </div>
   ```

## 📱 Seções do Site

1. **Hero**: Apresentação principal com call-to-action
2. **Sobre**: Experiência e estatísticas profissionais
3. **Serviços**: Lista dos serviços oferecidos
4. **Portfolio**: Galeria de trabalhos realizados
5. **Contato**: Formulário e informações de contato
6. **Footer**: Informações adicionais e links

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com animações
- **JavaScript**: Interatividade e funcionalidades
- **EmailJS**: Envio de emails (opcional)
- **Google Fonts**: Tipografia profissional

## 📊 Performance

- ✅ 100% Responsivo
- ✅ Carregamento Rápido
- ✅ SEO Otimizado
- ✅ Compatível com todos navegadores modernos
- ✅ Acessibilidade (WCAG)

## 🤝 Suporte

Para dúvidas ou sugestões:

1. **Issues**: Abra uma issue no GitHub
2. **Email**: Entre em contato através do formulário
3. **WhatsApp**: Link direto no site

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido para profissionais elétricistas que desejam uma presença digital moderna e eficaz! ⚡**