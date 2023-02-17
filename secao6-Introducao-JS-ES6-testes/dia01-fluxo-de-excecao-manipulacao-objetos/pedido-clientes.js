// Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. Para isso, use o seguinte código:
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
// Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'
const customerInfo = (order) => {
 const cliente = order.order.delivery.deliveryPerson;
 const recebedor = order['name'];
 const telRecebedor = order.phoneNumber;
 const endereco = order['address'].street;
 const numEndereco = order['address'].number;
 const apto = order['address'].apartment;
 console.log(`Olá, ${cliente}, entrega para: ${recebedor}, Telefone: ${telRecebedor}, ${endereco}, n* ${numEndereco}, AP: ${apto}`);

};

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.
const orderModifier = (order) => {
  const newClient = order.order.delivery.deliveryPerson = 'Luiz Silva';
  const pedido = Object.keys(order.order.pizza);
  const valorTotal = order.payment.total = 50;
  const bebida = order.order.drinks.coke.type;

 console.log(`Olá, ${newClient}, o total do seu pedido de  ${pedido[0]}, ${pedido[1]} e ${bebida} é de R$${valorTotal},00`);
};

orderModifier(order);