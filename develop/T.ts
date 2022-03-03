/**
 * 泛型
 */

// 一、泛型函数
// T 代表Type,在定义泛型时通常用作第一个类型变量名称
// K 表示对象中的键类型
// V 表示对象中的值类型
// E 表示元素类型
let person = {
  name: 'yoona',
  age: 18,
};

type Keys = keyof typeof person; // 'name' | 'age'

// 函数泛型 T 指代任意输入的类型, <T> 用来传递类型,链式传递给参数类型和返回类型使用
function getKeys<T extends typeof person, K extends Keys>(
    obj: T,
    key: K
): T[K] {
  return obj[key];
}

console.log(getKeys(person, 'name'), getKeys(person, 'age'), '-->泛型函数');
// console.log(getKeys(person, 'gender')) // 如果是obj中不存在的key,则报错

// 二、泛型接口
interface IFood<T, M> {
  name: T;
  age: M;
}

function getAge<T, M>(name: T, age: M): IFood<T, M> {
  return {
    name,
    age,
  };
}

console.log(getAge('yoona', 19), '-->泛型接口');


interface IGet {
  <T>(money: T): T
}

let func: IGet = function <T>(money: T): T {
  return money
}

console.log(func(100))

// 三、泛型类
interface IAnimal<T, M, K> {
  name: T;
  age: M;

  eat(food: K): K;
}

class Animal<T, M, K> implements IAnimal<T, M, K> {
  constructor(public name: T, public age: M, public food: K) {
    this.name = name;
    this.age = age;
  }

  eat(food: K): K {
    return food;
  }
}

let dog = new Animal('iu', 17, '骨头');
console.log(dog.name, dog.age, '-->泛型类');
console.log(dog.eat('骨头'));

// 四、泛型参数的默认类型
function getT<T = string>(t: T): void {
  console.log(t)
}


export {};
