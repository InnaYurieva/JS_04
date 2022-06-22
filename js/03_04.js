/* Задание 3
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
const findBestEmployee = function(employees) {
  // твой код
}; */

/*   const findBestEmployee = (employees) => {
    let a = Object.values(employees)
    let b = Math.max(...a)
    let filter = Object.keys(employees).filter(elem => employees[elem] === b)
    return filter.join()
    }; */

    const findBestEmployee = (employees) => {
      const maxValue = Math.max(...Object.values(employees))
      for (const key in employees) {
        if(employees[key] === maxValue) {
          return key
        }
      } 
      };

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux