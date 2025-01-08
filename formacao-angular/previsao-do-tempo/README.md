# WeatherApp
Projeto criado no curso de Angular udemy

## Development server
To start a local development server, run:

```bash
ng serve
ng serve --open
```

## Libs - Previsao do Tempo
fontawersome: 
`npm install @fortawesome/fontawesome-free`
`npm install @fortawesome/free-solid-svg-icons`
`npm install @fortawesome/angular-fontawesome`

## Api para uso neste caso:
open weather map
https://home.openweathermap.org/api_keys

Ex: - Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a97eaee6589bd3be75ad1db606cd444c

## Observables
Lidar com transferência sincronas e assincronas de dados, emitir dados multiplos, não unicos como uma promise.

### Arquitetura PULL
O consumidor(nós) determina quando recebe os dados do produtor de dados.
O próprio produtor (ex, função javascript) desconhece quando os dados serão entregues ao Comsumidor.


### Arquitetura PUSH
O produtor determina quando os dados serão entregues ao Consumidor.
Por ex.: As Promises entrega um valor resolvido aos consumidores.

### Quais as diferenças entre Funcões, Promises e Observables?
- Um Observable é um produtor de múltiplos valores, "empurrando-os" para Observadores (Consumidores).

- Uma função é uma computação avaliada lentamente que retorna de forma síncrona um único valor na
invocação.

- Uma Promise é um cálculo que pode (ou não) eventualmente retornar um único valor.
Um Observable é uma computação avaliada lentamente que pode retornar de forma sincrona ou
assincrona zero a valores (potencialmente) infinitos a partir do momento em que é invocado.

### Caracteristicas dos Observables
- Produção de Múltiplos Valores: Observables podem emitir zero ou mais valores
ao longo do tempo, de forma síncrona ou assíncrona.

- Assinatura (Subscribe): Para receber os valores de um Observable, é necessário
se inscrever nele. Isso é feito usando o método subscribe, que aceita um objeto
Observer contendo funções para lidar com valores, erros e conclusões.

- Execução Preguiçosa (Lazy Execution): A lógica dentro de um Observable é
executada apenas quando alguém se inscreve nele, representando uma
"execução observável".

- Notificações: Os Observables emitem notificações para os assinantes, sendo as
mais comuns "Next" (para enviar um valor), "Error" (para indicar um erro) e
"Complete" (para indicar que não há mais valores a serem enviados).

- Cancelamento (Unsubscribe): Observables podem ser cancelados para
interromper a execução. A chamada unsubscribe() é usada para cancelar uma
inscrição.

- Diferença em Relação a Funções: Observables podem retornar múltiplos valores
ao longo do tempo, enquanto funções JavaScript tradicionais retornam apenas
um valor.

- Síncrono ou Assíncrono: Observables podem entregar valores de forma síncrona
ou assíncrona, dependendo da lógica interna.
