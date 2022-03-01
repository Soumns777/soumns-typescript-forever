/**
 * 类装饰器
 */

function addSomething(constructor: Function) {
  constructor.prototype.name = 'yoona'
  constructor.prototype.show = function () {
    console.log('类装饰器')
  }

}

@addSomething
class Person {
  name!: string;
  show!: Function;

  constructor() {
  }
}

let yoona: Person = new Person()
console.log(yoona.name) // yoona
yoona.show() // 类装饰器


/**
 * 装饰器工厂
 */

// 闭包
function doSomethingFactory(name: string) { // 这是一个装饰器工厂
  return function (constructor: Function) { // 这是一个装饰器
    constructor.prototype.name = name
    constructor.prototype.show = function () {
      console.log('装饰器工厂')
    }
  }
}

@doSomethingFactory('Factory')
class PersonFactory {
  name!: string;
  show!: Function;

  constructor() {
  }
}

let factory: PersonFactory = new PersonFactory()
console.log(factory.name)
factory.show()

export {};
