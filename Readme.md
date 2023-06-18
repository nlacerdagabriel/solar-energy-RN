# Aplicativo Mobile de Geração de Usina Solar

Este é o README do projeto desenvolvido em React Native para consumir dados de uma api de "Geração de Usina Solar", desenvolvido como parte de um teste prático para avaliar habilidades de desenvolvimento Frontend utilizando React Native. O objetivo do aplicativo é consumir dados de uma API fornecida e exibir informações sobre a geração de energia de uma usina solar ao longo do tempo, apresentando gráficos para visualização dos dados.

## Instruções para Execução

### Pré-requisitos
Certifique-se de ter o seguinte software instalado em sua máquina:
- Node.js (versão 18 ou superior)
- npm (geralmente instalado juntamente com o Node.js)
- React Native CLI

### Passos para Execução
1. Clone o repositório do projeto em sua máquina local.

```bash
git clone https://github.com/nlacerdagabriel/solar-energy-RN
```

2. Acesse o diretório do projeto.

```bash
cd solar-energy-RN
```

3. Instale as dependências do projeto.

```bash
npm install
```

4. Inicie o aplicativo no dispositivo ou emulador.

```bash
npx expo start
```

Certifique-se de ter o ambiente de desenvolvimento React Native configurado corretamente para executar o aplicativo no dispositivo ou emulador desejado. Para mais informações, consulte a documentação oficial do React Native.

### Observação
Caso ocorra algum problema durante a instalação das dependências ou execução do aplicativo, consulte a seção "Resolução de Problemas" no final deste README.

## Abordagem Adotada

### Tecnologias Utilizadas
Durante o desenvolvimento deste projeto, foram utilizadas as seguintes tecnologias, bibliotecas e ferramentas:

- React Native: um framework JavaScript para desenvolvimento de aplicativos mobile.
- Jest: uma biblioteca de testes JavaScript para realizar testes automatizados.
- Testing Library: uma suíte de testes para facilitar a escrita de testes de interface do usuário.
- Styled Components: uma biblioteca para estilização de componentes React Native com CSS-in-JS.

### Arquitetura e Organização do Código
O projeto foi estruturado seguindo boas práticas de programação e buscando a modularização e reutilização de componentes. A estrutura de pastas do projeto está organizada da seguinte forma:

```
|-- src
    |-- api
    |-- components
    |-- contexts
    |-- screens
    |-- styles
    |-- theme
    |-- utils
    |-- ...
|-- App.js
```

- A pasta `api` contém um arquivo onde é efetuado as requisições à api.
- A pasta `components` contém os componentes reutilizáveis do aplicativo, como gráficos, cards, etc.
- A pasta `screens` contém as telas do aplicativo, onde cada tela possui seu próprio arquivo.
- A pasta `styles` contém o estilo global utilizado no App.js.
- A pasta `theme` contém a configuração do tema (cores globais).
- A pasta `utils` contém funções auxiliares e utilitárias do aplicativo.
- O arquivo `App.js` é o ponto de entrada principal do aplicativo.

### Testes Automatizados
Foram criados testes automatizados utilizando a biblioteca Jest e a Testing Library para garantir a qualidade do aplicativo. Os testes abrangem pelo menos uma funcionalidade principal do aplicativo, verificando a correta renderização dos componentes e o comportamento esperado das interações do usuário.

Para executar os testes automatizados, você pode usar o seguinte comando:

```bash
npm test
```

Isso iniciará a execução dos testes e exibirá os resultados no terminal.

### Resolução de Problemas
Se você encontrar algum problema durante a instalação das dependências ou a execução do aplicativo, aqui estão algumas dicas para ajudar na resolução:

1. Certifique-se de ter seguido corretamente os passos de instalação e configuração do ambiente React Native.

2. Verifique se todas as dependências foram instaladas corretamente, executando o comando npm install novamente.

3. Certifique-se de ter as permissões necessárias para executar aplicativos em um dispositivo ou emulador.

4. Verifique se as versões das dependências do projeto são compatíveis entre si.

5. Consulte a documentação oficial do React Native e das bibliotecas utilizadas para obter mais informações sobre problemas comuns e suas soluções.

### Considerações Finais

Este projeto foi desenvolvido como parte de um teste técnico, com o objetivo de criar um aplicativo mobile que consuma dados de uma API e exiba informações sobre a geração de energia de uma usina solar. Durante o desenvolvimento, foram aplicadas boas práticas de desenvolvimento, organização do código, testes automatizados e estilização para proporcionar uma melhor experiência do usuário.

Sinta-se à vontade para entrar em contato em caso de dúvidas ou necessidade de mais informações.

### API utilizada

- Endpoint: https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023?dataType=yearly

- Token: bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF