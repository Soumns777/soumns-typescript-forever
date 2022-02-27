/**
 * interface
 */

// 一、定义对象的形状
interface IPerson {
  //  private name: string;  // 类型修饰符(private、protected)不能用于interafce中
  readonly age: number; // readonly 只读属性
  gender?: string; // ? 可选属性
}

type Person = {
  // private name: string;  // 类型修饰符(private、protected)不能用于type中
  age: number;
};

let iu: IPerson = {
  age: 17,
  gender: '女',
};

// 二、定义任意属性
interface IAnimal {
  place: string;
  [propType: string]: any; // 确定属性需要是任意属性的子集
}

let dongbeihu: IAnimal = {
  place: '东北',
  size: 'Big',
  age: 7,
  isMarry: false,
};

// 三、定义函数类型接口 (没有new)
interface IFood {
  (food: string, isFresh?: boolean): string;
}

let eatFood: IFood = function (food: string, isFresh?: boolean): string {
  return `${isFresh ? '新鲜' : '不新鲜'}的${food}很好吃`;
};

console.log(eatFood('大白菜', true));

// 四、定义构造函数类型接口 (有new)
class Computer {
  constructor(public price: number, public size: string) {}
}

interface IMac {
  new (price: number, size: string): Computer;
}

let getMac = function (className: IMac, price: number, size: string) {
  return new className(price, size);
};

console.log(getMac(Computer, 12999, '13').price, '--->定义构造函数类型');

// 伍、接口继承接口

interface IPeople {
  name: string;
  age: number;
}

interface Man extends IPeople {
  gender?: string;
}

let curry: Man = {
  name: 'Stephen Curry',
  age: 33,
  gender: '男',
};

export {};
