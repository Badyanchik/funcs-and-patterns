class Server {
  constructor (ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

const awsDecorator = (server) => {
  server.isAWS = true;
  server.awsInfo = () => server.url;
  return server;
}

const azureDecorator = (server) => {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s1 = awsDecorator(new Server('192.168.0.1', 3000));
const s2 = azureDecorator(new Server('192.168.0.1', 3000));
console.log(s1.awsInfo());
console.log(s2.url);


