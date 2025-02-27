<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
🎮 Biblioteca de Jogos - React

Este projeto é uma biblioteca de jogos desenvolvida em React , onde exibe uma coleção de títulos de forma dinâmica e responsiva.

🚀 Sobre o projeto
A aplicação lista diversos jogos, exibindo suas informações principais, como:
- Nome e Ano de lançamento
- Imagem da capa
- Descrição

Tudo isso é organizado em cartões estilizados com CSS puro , garantindo uma apresentação visual agradável. Além disso, utilizei consultas de mídia para que o aplicativo se adapte bem a diferentes dispositivos, proporcionando uma ótima experiência também no celular.

🛠️ Como funciona?
O arquivo gameList.js(localizado em src/hooks/gameList.js) contém um array de objetos , onde cada objeto representa um jogo com as seguintes propriedades:

id: Identificador único

name: Nome do jogo

linkCover: URL da imagem da capa

launchYear: Ano de lançamento

description: Breve descrição

O App.jsx(localizado em src/App.jsx) é o componente principal da aplicação. Ele importa os dados do gameList.jse os exibidos na tela, percorrendo o array e criando os cartões interativos para cada jogo.
>>>>>>> a758cbea3023702ab3f20636945f19766dee2ad3
