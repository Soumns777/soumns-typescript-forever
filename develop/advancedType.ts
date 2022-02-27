/**
 * Typescript进阶类型
 */

// 一、类型断言

// 1.尖括号语法(不建议)
let anything: any = 'this is anything';
let something: number = (<string>anything).length;
console.log(typeof something);

// 2.as语法(建议)
let anything1: any = 'this is anything1';
let something1: number = (anything as string).length;

// 3.非空断言(不是undefined和null)   name!:string
let name!: string;
// name = undefined;
// name = null;

// 二、类型守卫(in、typeof、instanceof) 类型保护是可执行运行时检查的一种表达式,用于确保该类型在一定的范围内。

// 1.in 一般用来遍历公开属性的属性名,类似于 for in (一般用于类型中)
type iu = {
  name: string;
  age: number;
};

type keys = keyof iu; // 'name' | 'age'

type InType = {
  [key in keys]: string;
}; // { name:string,age:string }

let lisa: InType = {
  name: 'lisa',
  age: '18',
};

// 2.keyof 用来获取一个类型所有的属性名,如果存在多个属性名的话则返回联合属性
interface IKeyof {
  gender: string;
  isRich: false;
}

type keyType = keyof IKeyof; // gender | isRich

// 3.typeof 用来获取对象、实例的类型
let person = {
  name: 'yoona',
  age: 17,
};
type IUnionType = keyof typeof person;

type IPerson = typeof person; // {name:string,age:number}
// type IPerson1 = typeof IPerson // 不能用typeof去推导一个类型

// typeof也可以和keyof获取实例对象的属性名
type IKeys = keyof typeof person; // name | age

// 3.instanceof 用来测试一个对象是否在其原型链原型构造函数的属性
class Foo {
  name = 'foo';
  age = 17;
}

class Fun {
  name = 'fun';
  isRich = true;
}

function doSomething(arg: Foo | Fun) {
  if (arg instanceof Foo) {
    console.log(arg.age, '-->Foo模块');
  } else {
    console.log(arg.isRich, '-->Fun模块');
  }
}

doSomething(new Foo());
doSomething(new Fun());

export {};
