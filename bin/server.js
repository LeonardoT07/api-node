const app = require('../src/app');
const http = require('http'); //para criar o servidor http
const debug = require('debug')('nodestr:server'); // para debugar a aplicação (demos um nome para ele de nodestr:server)

const port = normalizePort(process.env. PORT || '3555'); // criação de uma constante para a porta da aplicação
app.set('port', port); //setar a porta da aplicação

const server = http.createServer(app); // criação de um server baseado na aplicação

// Falar para o servidor ficar ouvindo a porta
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('O servidor está rodando na porta:' + port);

// Função do Express para normalizar a porta, para saber qual porta está funcionando
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }
    if(port > 0) {
        return val;
    }
    return false;
}

// Função do Express para tratar erros
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Pipe ' + port;

    switch(error.code) {
        case 'EACCES':
            console.error(bind + " requires elevated privileges"); // erro de permissão
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + " is alredy in use"); // erro de endereço em uso
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Função para pegar as informações do servidor e exercutar o debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'Pipe' + addr : 'Port ' + addr.port;
    debug('Listening on '+ port); 
}