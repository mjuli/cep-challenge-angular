# Desafio Consulta de CEP com Angular

Este projeto é uma aplicação Angular que permite aos usuários buscar informações de endereço com base nos códigos postais brasileiros. Os usuários podem inserir um CEP e consultar os detalhes do endereço correspondente.

## Funcionalidades

- Campo de entrada para os usuários inserirem um CEP.
- Botão para acionar a busca de endereço.
- Exibição de detalhes do endereço, como nome da rua, bairro, cidade, estado, etc.
- Tratamento de erro para CEPs inválidos ou não encontrados.

## Tecnologias Utilizadas

- Angular: Framework frontend para construir a interface do usuário.
- Bootstrap: Framework CSS para estilizar a aplicação.
- TypeScript: Linguagem de programação usada com Angular.
- HTML/CSS: Marcação e estilização para a interface do usuário.

## Instalação

1. Clone o repositório:

```
git clone https://github.com/mjuli/cep-challenge-angular.git
```

2. Navegue até o diretório do projeto:

```
cd cep-challenge-angular
```

3. Instale as dependências:

```
npm install
```

## Uso

1. Antes de iniciar, é necessário verificar o link da url que realizará a consulta no serviço `consulta-cep.service`. Caso seja necessário, atualize a url.

2. Inicie o servidor de desenvolvimento:

```
ng serve
```

3. Abra seu navegador e vá para `http://localhost:4200`.

4. Insira um CEP brasileiro válido no campo de entrada e clique no botão "Buscar".

5. Veja os dados do endereço recuperados pela API de busca.

## Layout App

![Web](https://github.com/mjuli/cep-challenge-angular/blob/main/src/assets/BuscaCEP.png)
