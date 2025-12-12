# Linhas de Código & Café ☕💻

![status](https://img.shields.io/badge/status-em%20desenvolvimento-orange) ![nextjs](https://img.shields.io/badge/tech-Next.js-000) ![typescript](https://img.shields.io/badge/lang-TypeScript-blue) ![license](https://img.shields.io/badge/license-MIT-green)

> Projeto desenvolvido durante o curso de **Next.js** da Alura. Um feed de blog pessoal criado do zero para exercitar tradução de layouts, componentização e boas práticas com Next.js + TypeScript + styled-components.

---

## 🔎 Descrição

Este repositório contém o blog **Linhas de Código & Café**, construído enquanto acompanho o conteúdo do curso. O objetivo é transformar um layout do Figma em componentes reais no Next.js, criando uma base de componentes reutilizáveis e uma estrutura escalável para projetos pessoais.

O projeto serve tanto como portfólio quanto como ambiente de estudos para práticas de arquitetura de interface, tipagens em TypeScript e técnicas que melhoram o autocomplete e a produtividade.

Nesta fase, o foco vai além da interface: trabalhamos com dados em Markdown/YAML, exploramos a Context API e realizamos integrações com o Node.js através do File System, refletindo práticas mais próximas de aplicações reais.

---

## 🎯 Objetivos do curso (e do projeto)

* Traduzir layouts do **Figma** em componentes reutilizáveis no **Next.js**.
* Entender os benefícios de criar uma base sólida de componentes.
* Separar responsabilidade entre visual (design) e lógica.
* Implementar a aplicação com **Next.js**, **TypeScript** e **styled-components**.
* Aplicar técnicas de tipagem que melhoram o autocomplete e a experiência de desenvolvimento.
* Organizar e dinamizar o **tema e configurações do site** com **YAML** e **Context API**
* Entender como carregar posts a partir de **arquivos Markdown**.
* Aprender a manipular arquivos via **Node.js File System** dentro do projeto Next.js
* Avaliar alternativas de **CMS** e refletir sobre custo/benefício em projetos reais.
* Aplicar boas práticas de otimização em **build time**. 

---

## 🚀 Tecnologias

* Next.js
* React
* TypeScript
* styled-components
* ESLint + Prettier
* YAML (para configs)
* Markdown (para posts)

---

## 🧭 Estrutura do projeto (inicial)

```text
src/
├── app/                        # Arquitetura do Next.js
│   ├── layout.tsx              # Layout global (fonts, providers, Menu, Footer)
│   ├── page.tsx                # Página inicial
│   ├── globals.css             # Mantido vazio (estilos via ThemeProvider)
│   └── sobre/                  # Página institucional (WIP)
│       └── page.tsx
│
├── components/
│   ├── atoms/                  # Elementos básicos (Background, Box, Text...)
│   ├── molecules/              # Combos simples (Banner, CardPreview...)
│   ├── organisms/              # Seções completas (Feed, Menu, Footer)
│   └── templates/              # Templates de página (HomeTemplate)
│
├── services/
│   ├── posts/                  # Leitura de posts (Markdown + YAML)
│   │   └── postService.ts
│   └── templates/
│       ├── templatePageHOC.ts  # HOC para padronização de páginas
│       └── withTemplateConfig.ts
│
├── theme/
│   ├── GlobalStyle.tsx
│   ├── ThemeProvider.tsx
│   └── theme.ts                # Tokens, cores e tipografia
│
└── public/                     # Arquivos estáticos (favicon, imagens)
```

---

## 📚 Como o blog carrega e exibe os posts
1. Os posts são escritos em arquivos Markdown com metadados em YAML.

2. O postService lê os arquivos usando Node File System.

3. Os dados são parseados e enviados para o componente de página via:
- withTemplateConfig() → prepara configurações + dados
- templatePageHOC() → injeta metadados e estrutura

4. O HomeTemplate renderiza o Feed com os posts.

5. O Feed.Posts exibe a lista ordenada cronologicamente.

Esse fluxo imita um mini-CMS estático e é um dos diferenciais arquiteturais do projeto.Os posts são escritos em arquivos Markdown com metadados em YAML.

## ⚙️ Como rodar localmente

> **Pré-requisitos:** Node.js (recomendo LTS) e Git.

1. Clone o repositório

```bash
git clone https://github.com/gabriella-guimaraes/code-and-coffee-blog.git
cd code-and-coffee-blog
```

2. Instale as dependências

```bash
npm install
# ou
yarn install
```

3. Rode em modo de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

4. Abra no navegador

```
http://localhost:3000
```

---

## 📦 Scripts úteis

```json
{
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "next start",
    "dev": "next dev",
    "build": "next build"
}
```


---

## 🧩 Componentização e padrões

* Arquitetura baseada em Atomic Design
(atoms → molecules → organisms → templates)

* Temas globais com ThemeProvider

* HOCs para padronização de páginas

* Tipagem forte com TypeScript

* Organização clara entre UI, lógica e dados

---

## 🎨 Design & Figma

O layout base foi criado no Figma. Em breve estará disponível.

---

## ✅ Checkpoints / To-do

* [x] Criar estrutura inicial do projeto
* [x] Configurar TypeScript e styled-components
* [x] Implementar header com título e subtítulo
* [x] Implementar lista de posts (cards responsivos)
* [ ] Implementar página de post único
* [x] Implementar YAML para configurações globais
* [x] Integrar Markdown para posts
* [x] Criar provider com Context API
* [x] Otimizar build time (carregamento de dados)
* [x] Deploy para Vercel

---

## 📦 Deploy

Projeto hospedado no Vercel: [https://code-and-coffe-blog.vercel.app](https://code-and-coffe-blog.vercel.app)

---

## ✍️ Contribuições

Contribuições são bem-vindas! Se quiser enviar PRs ou sugestões:

1. Fork este repositório
2. Crie uma branch: `feature/nome-da-feature`
3. Abra um Pull Request descrevendo a mudança

---

## 📝 License

Este projeto está sob a licença **MIT**.

---

## 👩‍💻 Autor

Desenvolvido por **Gabriella Guimarães** — [github.com/gabriella-guimaraes](https://github.com/gabriella-guimaraes)
