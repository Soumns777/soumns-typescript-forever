/**
 * 类和接口
 */

// 一、类实现接口(可以一个类实现多个接口) implements
interface IPerson {
  name: string,
  age: number
}

interface IUsemoney {
  makeMoney(money: number): void
}

// 一个类可以继承多个接口
class Person implements IPerson, IUsemoney {
  constructor(public name: string, public age: number) {
    this.name = name
    this.age = age
  }

  sayHi(): void {
    console.log(`${this.name}今年${this.age}岁了`)
  }

  makeMoney(money: number): void {
    console.log(`${this.name}有${money}万大洋`)
  }
}

let iu = new Person('iu', 18)
iu.sayHi()
iu.makeMoney(10000)

// 二、接口继承接口
interface IAnimal {
  name: string,
  age: number
}

interface IDog extends IAnimal {
  gender: string,

  eat(food: string): string
}


let taidi: IDog = {
  name: 'taidi',
  age: 17,
  gender: 'male',
  eat(food: string): string {
    return food
  }
}

// 三、类继承类
class Point {
  constructor(public x: string, public y: string) {
    this.x = x
    this.y = y
  }
}

class DPoint extends Point implements IDog {
  constructor(public x: string, public y: string, public z: string, public name: string, public age: number, public gender: string) {
    super(x, y)
    this.z = z
  }

  eat(food: string): string {
    return `${this.name}喜欢吃${food}`
  }
}

let kongjian = new DPoint('123', '166', '199', '波斯猫', 7, 'male')
console.log(kongjian.eat('狗不理包子'))

// 四、接口继承类 (因为类本身也是可以作为一个类型的,在Typescript里)
class House {
  place!: string;
  mmoney!: number

  makeMoney(money: number): void {
    console.log(`赚了${money}美金`)
  }
}

interface IBighouse extends House {
  place: string,
  mmoney: number,

  makeMoney(money: number): void
}

export {};
