// 二、class 类
class Animal {
  private name!: string;
  protected age!: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(this.name, this.age, '-->父类');
  }

  bark(): void {
    console.log(`有一只${this.age}岁的${this.name}一直在叫`);
  }
}

let dog = new Animal('泰迪', 3);
dog.bark();
// console.log(dog.name);  // name是私有属性,不能在Animal之外(构造函数以及子类)的地方访问
// console.log(dog.age); // age是受保护的属性,可以在父类以及子类中访问(不能在构造函数中访问)
console.log(typeof Animal, '-->类的类型'); // function

// ①类的继承 子类使用extends继承父类,在子类中用super调用父类的构造函数和方法
class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age); // 调用父类的constructor(构造函数)
  }

  bark() {
    super.bark(); // 调用父类的方法
    // console.log(this.name, this.age, '-->调用父类的方法');  name 是私有属性(private),只能在父类(Animal)中访问
  }
}
let bosi = new Cat('波斯猫', 7);
bosi.bark();

// ②、修饰符 public、private、protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问(只能在自己本身中访问,在子类和构造函数中也访问不了)
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的,在构造函数和其他地方访问不了

// 当constructor为修饰符为public时,该类可以被实例化和继承
// 当constructor为修饰符为private时,该类不能实例化也不能继承
// 当constructor为修饰符为priotected时,该类不能实例化,可以继承

// readonly 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中,当与其他修饰符一起出现时,需要放在后面
// static 类的静态属性和方法是直接定义在类本身上面的 所以也只能通过直接调用类的方法和属性来访问

class Person {
  private name!: string;
  protected readonly age!: number;
  static isRich = false;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static getMoney(): void {
    console.log('static 我一点也不富裕');
  }
}

// let iu = new Person('iu', 18);
// iu.age = 19; // age为只读属性
// console.log(iu.age);
console.log(Person.isRich);
Person.getMoney();

class Man extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  sayHi() {
    console.log(this.age, '-->readonly');
  }

  // age为只读属性(readonly)
  // changeAge(age: number): void {
  //   this.age = age;
  // }
}
let zhangsan = new Man('张三', 25);
// console.log(zhangsan.age);
// zhangsan.sayHi();
// zhangsan.changeAge(19);
// zhangsan.sayHi();

// ③、抽象类  不允许被实例化,而且抽象类中的抽象方法也必须被子类实现
abstract class Dog {
  name!: string;
  age!: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  abstract dark(): void;
}

// let taidi = new Dog('泰迪', 3);

class Taidi extends Dog {
  // constructor(name: string, age: number) {
  //   super(name, age);
  // }

  public dark() {
    console.log(this.name, 'abstract');
  }
}

let taidi = new Taidi('金色泰迪', 8);
taidi.dark();

// ④、类的类型
class Food {
  name!: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    return `${this.name}真的很好吃`;
  }
}
// 这里Food作为类型
let chicken: Food = new Food('鸡腿');
console.log(chicken.eat());
