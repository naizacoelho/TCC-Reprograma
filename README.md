<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />

<details>
  <summary>Indíce</summary>
  <ol>
    <li>
      <a href="#about-me">Sobre mim</a>
    <li><a href="#about-the-project">Sobre o projeto</a></li>
      <ul> 
        <li><a href="#project-structure">Estrutura do projeto</a></li>
        <li><a href="#built-with">Tecnologias utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Iniciando Projeto</a>
      <ul>
        <li><a href="#prerequisites">Pré requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contato</a></li>
    <li><a href="#acknowledgments">Agradecimentos</a></li>
  </ol>
</details>

## Sobre mim

<div align="center">
    <img src="src/assets/nai.jpg" alt="Logo" width="300" height="auto">
</div>

Me chamo Naíza, mas gosto que me chamem de Nai, tenho 24 anos e sou formada pela UFPE. Me encontro atualmente em transiçao de carreia, sou aluna de Front-end da {Reprograma} um lugar pelo qual guardarei boas lembranças no coração. Amo gatinhos e sou pernambucana, tenho como objetivo conseguir uma vaga de emprego numa empresa que me dê oportunidade de crescimento e conhecimento.  


## Sobre o projeto

[![Projeto rumo á Universidade][product-screenshot]](https://projeto-final-rumo-a-universidade.vercel.app/)

Meu objetivo com a criação deste Web-site é trazer visibilidade para uma iniciativa social muito importante que é a do Pré-enem Programa Rumo á Universidade (PRU). Este Programa ajuda á 28 anos jovens e adultos que não possuem condições financeiras de custear um cursinho Pré-vestibular mas possuem o sonho de entrar numa universidade pública. Este web-site é o trabalho final do Bootcamp {Reprograma}, nesse projeto escolhi a iniciativa PRU pois acredito que o seu impacto social vem alcançado de forma positiva muitas pessoas á 28 anos.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

### Estrutura do projeto
O site possue atualmente a seguinte estrutura: Home: tela inicial, História: Onde se pode conhecer o PRU, Informações: Aqui encontrará informações sobre matrícula e muito mais e Relatos: Nessa página os ex-estudantes poderam deixar seu relato sobre como foi sua experiência com o PRU. 

[![][structure-photo]]()

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

### Tecnologias utilizadas

* [![React][React.js]][React-url] : Biblioteca JavaScript utilizada para a construção deste projeto.
* [![React Router][React-router]][React-router-url] : Usado para fazer o roteamento das páginas.
* [![Chakra-UI][Chakra-ui]][Chakra-ui-url] : Biblioteca de componentes utilizada para alguns elementos do site.
* [![Firebase][Firebase]][Firebase-url] : Utilizada ferramenta Realtime database para gravar e exibir os relatos.
* [![Vercel][Vercel]][Vercel-url] : Utilizado para realizar do deploy do website.
* [Vite][Vite-url] : Ferramenta utilizada para a criação da estrutura do site.
* [CoreUI][CoreUI-url] : Biblioteca de componentes utilizada para exibir o carrossel.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

## Iniciando projeto

### Pré requisitos

* Ter o Git instalado
* Ter o Node instalado
* Possuir algum editor de código instalado exemplo: Vscode.

### Instalação


1. Clone o repositório
  ```sh
   git clone https://github.com/naizacoelho/TCC-Reprograma
   ```
2. Instale os pacotes pelo NPM
  ```sh
   npm install
  ```
3. Crie o arquivo .env e nele coloque as variaveis de ambiente abaixo para integrar 
  com Firebase e inclua os valores da sua conta

  ```sh
    VITE_API_KEY=
    VITE_AUTH_DOMAIN=
    VITE_PROJECT_ID=
    VITE_STORAGE_BUCKET=
    VITE_MESSAGING_SENDER_ID=
    VITE_APP_ID=
    VITE_DATABASE_URL=
  ```

4. Rode o projeto
  ```sh
   npm run dev 
   ```

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

## Contato

Naíza - [LinkedIn](https://www.linkedin.com/in/naiza-coelho-5808a4211/) - naiza.coelho2@gmail.com

Link do projeto: [https://github.com/naizacoelho/TCC-Reprograma](https://github.com/naizacoelho/TCC-Reprograma)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>


## Agradecimentos

"Hoje, eu sonhei que um dia eu estaria onde ninguém pensou
Se ele quiser, eu piso onde ninguém pisou
Humildade e sabedoria pra me guiar
E o impossível é possível pra quem acreditar" IZA- Fé 

Confesso que quando eu entrei no curso de Front-end da Reprograma as inseguranças sobre se eu conseguiria aprender tudo o que estava no roteiro das aulas me perseguiam mas fui acolhida por uma turma de mulheres unidas e maravilhosas, só tenho a agradecer a Reprograma pelo papel que eles vem realizando em trazer mais mulheres para o mundo de TI, nunca esquecerei dos momentos nas aulas e nos ensinamentos recebidos, aqui é apenas o começo! 



<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



[product-screenshot]: src/assets/fotopru.png
[structure-photo]: src/assets/estrutura.png
[React.js]: https://img.shields.io/badge/react-black.svg?logo=react
[React-url]: https://reactjs.org/
[React-router]: https://img.shields.io/badge/react%20router-black.svg?logo=reactrouter
[React-router-url]: https://reactrouter.com/en/main
[Chakra-ui]: https://img.shields.io/badge/chakraui-black.svg?logo=chakraui
[Chakra-ui-url]: https://chakra-ui.com/
[Vercel]: https://img.shields.io/badge/vercel-black.svg?logo=vercel
[Vercel-url]: https://vercel.com/
[Firebase]: https://img.shields.io/badge/firebase-black.svg?logo=firebase
[Firebase-url]: https://firebase.google.com/?hl=pt-br
[Vite-url]: https://vitejs.dev/
[CoreUI-url]: https://coreui.io/react/docs/getting-started/introduction/
