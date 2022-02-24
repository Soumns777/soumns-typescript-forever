/**
 * interface、class
 */


// 一、interface
interface IPerson {
  name: string,
  age?: number, // ? 可选属性

  // 添加任意属性,key是string,value是any
  // 上面的确定属性需要是任意属性的子集
  [propName: string]: any
}

// 二、class 类
class Animal {
  private name: string | undefined;
  protected age: number | undefined;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  };

  bark() {
    return `有一只${this.age}岁的${this.name}一直在叫`
  }
}

let dog = new Animal('泰迪', 3)
console.log(dog.bark())
console.log(typeof Animal, '-->类的类型') // function
console.log(Animal.prototype)

// class person implements IPerson {
//   name: string;
//   age: number
//
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }


export default {}
