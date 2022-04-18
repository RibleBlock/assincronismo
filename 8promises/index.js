

// console.log('');
const aceitar = false;

console.log('Pedir uber');

console.log('aguardando...');
const promessa = new Promise((resolve, reject) => {
  if(aceitar) resolve('carro chegou');
  return reject('Pedido recusado');
});

promessa
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizada.'));
