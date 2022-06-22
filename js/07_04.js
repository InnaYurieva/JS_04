const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [],
    createTransaction(amount, type) {
        let objTransaction = {
          id: this.transactions.length + 1, // + 1
          type: type, 
          amount: amount}
        return objTransaction
    },
    deposit(amount) {
        this.balance += amount
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
        return this.balance
    },
    withdraw(amount) {
      if(this.balance >= amount){
        this.balance -= amount
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW)) 
      } else {
        return console.log('Запрещено. Не достаточно средств на счету');
      }
      return this.balance
    },
    getBalance() {
        return this.balance
    },
    getTransactionDetails(id) {
      for (let index = 0; index < this.transactions.length; index++) {
        const element =  this.transactions[index];
        if(element.id === id) {
          return element
        }
        
      }
    },
    getTransactionTotal(type) {
      let sum = 0
      for (let index = 0; index < this.transactions.length; index++) {
        const element = this.transactions[index];
        if(element.type === type) {
          sum += element.amount
        }
      } return sum
      
    },
   
  };
console.log(account.createTransaction(100, 'jjhh')); //проверила добавление объекта
console.log(account.deposit(100)); //1-й депозит
console.log(account.deposit(200));//2-й депозит = 300
console.log(account.deposit(350));//3-й депозит = 650
console.log(account.withdraw(150));//1-е снятие = 500
//console.log(account.withdraw(650)) // если снятие больше баланса
console.log(account.withdraw(250));// 2-е снятие = 250
console.log(account.getBalance()) // показывает текущий баланс
console.log(account.transactions); //добавление в историю транзакций
console.log(account.getTransactionDetails(4)) // поиск по индексу транзакции
console.log(account.getTransactionTotal('withdraw')) // количество средств определенного типа транзакции из всей истории транзакций
console.log(account.getTransactionTotal('deposit')) // количество средств определенного типа транзакции из всей истории транзакций


/* Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций. */
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
/* const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//Каждая транзакция это объект со свойствами: id, type и amount
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
/*  Метод создает и возвращает объект транзакции.
    Принимает сумму и тип транзакции. */
  //createTransaction(amount, type) {},
/*    * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций */
  //deposit(amount) {},
/*    * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств. */
 // withdraw(amount) {},
   //Метод возвращает текущий баланс
 // getBalance() {},
   //Метод ищет и возвращает объект транзации по id
 // getTransactionDetails(id) {},
    //Метод возвращает количество средств определенного типа транзакции из всей истории транзакций
//  getTransactionTotal(type) {}};
  

