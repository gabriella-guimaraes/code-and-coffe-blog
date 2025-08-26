# Linhas de Código & Café ☕💻

![status](https://img.shields.io/badge/status-em%20desenvolvimento-orange) ![nextjs](https://img.shields.io/badge/tech-Next.js-000) ![typescript](https://img.shields.io/badge/lang-TypeScript-blue) ![license](https://img.shields.io/badge/license-MIT-green)

> Projeto desenvolvido durante o curso de **Next.js** da Alura. Um feed de blog pessoal criado do zero para exercitar tradução de layouts, componentização e boas práticas com Next.js + TypeScript + styled-components.

---

## 🔎 Descrição

Este repositório contém a versão inicial do blog **Linhas de Código & Café**, construído enquanto acompanho o conteúdo do curso. O objetivo é transformar um layout do Figma em componentes reais no Next.js, criando uma base de componentes reutilizáveis e uma estrutura escalável para projetos pessoais.

O projeto serve tanto como portfólio quanto como ambiente de estudos para práticas de arquitetura de interface, tipagens em TypeScript e técnicas que melhoram o autocomplete e a produtividade.

---

## 🎯 Objetivos do curso (e do projeto)

* Traduzir layouts do **Figma** em componentes reutilizáveis no **Next.js**.
* Entender os benefícios de criar uma base sólida de componentes.
* Separar responsabilidade entre visual (design) e lógica.
* Implementar a aplicação com **Next.js**, **TypeScript** e **styled-components**.
* Aplicar técnicas de tipagem que melhoram o autocomplete e a experiência de desenvolvimento.

---

## 🚀 Tecnologias

* Next.js
* React
* TypeScript
* styled-components
* ESLint + Prettier

---

## 🧭 Estrutura do projeto (inicial)

```text
src/
├── app/                # Arquitetura do Next.js (App Router)
│   ├── layout.tsx      # Layout global
│   ├── page.tsx        # Página inicial
│   ├── globals.css     # Estilos globais
│   └── page.module.css # CSS escopo de página
│
├── components/         # Componentes reutilizáveis (Atomic Design)
│   ├── atoms/          # Elementos básicos (ex: Background, Button)
│   ├── molecules/      # Combinação simples de atoms (ex: Banner)
│   ├── organisms/      # Seções completas (ex: Feed, Menu, Footer)
│   └── templates/      # Estruturas de página (ex: Home)
│
├── theme/              # Sistema de estilos (BaseComponent, StyleSheet, theme)
│
├── public/             # Arquivos estáticos (favicon, imagens)
└── ...
```

---

## ⚙️ Como rodar localmente

> **Pré-requisitos:** Node.js (recomendo LTS) e Git.

1. Clone o repositório

```bash
git clone https://github.com/gabriella-guimaraes/code-and-coffe-blog.git
cd nome-do-repositorio
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

* Organização do projeto com Atomic Design System

---

## 🎨 Design & Figma

O layout base foi criado no Figma. Em breve estará disponível.

---

## ✅ Checkpoints / To-do

* [x] Criar estrutura inicial do projeto
* [ ] Configurar TypeScript e styled-components
* [ ] Implementar header com título e subtítulo
* [ ] Implementar lista de posts (cards responsivos)
* [ ] Implementar página de post único
* [ ] Integração com CMS (opcional)
* [ ] Deploy para Vercel

---

## 📦 Deploy

Em breve

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
