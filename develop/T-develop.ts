/**
 * 泛型进阶
 */

// 一、泛型条件类型 + infer抽取类型

// ①、example1
//  如果 T 能赋值给 (...args: infer P) => any,则结果是待推测出的类型P,否则返回T
type ParamType<T> = T extends (...args: infer P) => any ? P : T;

interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;


type Param = ParamType<Func>; // User  这里的T能赋值给P,所以返回P,测试 infer P 推出来为 User类型
type AA = ParamType<string>; // string 这里的T不能赋值给P,所以返回T,返回string


// ②、example2
interface Dictionary<T = any> {
  [key: string]: T;
}

type StrDict = Dictionary<string>

type DictMember<T> = T extends Dictionary<infer V> ? V : never
type StrDictMember = DictMember<StrDict> // string
type StrDictMember1 = DictMember<string> // never

// ③、example3
interface IPeople<T = any> {
  [key: string]: T;
}

let yoona: IPeople = {
  name: 'yoona'
}

type Person = typeof yoona

type People<T> = T extends IPeople<infer G> ? G : string
type Iu = People<number> // string
type Lisa = People<IPeople<number>> // number

// ④、example4
async function stringPromise() {
  return "Hello, Semlinker!";
}

interface Person1 {
  name: string;
  age: number;
}

async function personPromise() {
  return {name: "Semlinker", age: 30} as Person1;
}

type func1 = typeof stringPromise // () => Promise<"Hello,Semlinker!">
type func2 = typeof personPromise // () => Promise<Person1>


type PromiseType<T> = (args: any[]) => Promise<T>;
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;

type extractStringPromise = UnPromisify<typeof stringPromise>; // string
type extractPersonPromise = UnPromisify<typeof personPromise>; // Person1
type extractPersonPromise1 = UnPromisify<Person1>; // never

// ⑤、example5
function fun() {
  return 'hello'
}

async function fun1() {
  return 'hello'
}

type Fun = typeof fun // () => "hello"
type Fun1 = typeof fun1 // () => Promise<"hello">

// 二、泛型工具类

// ①、Partial Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

interface ITodo {
  todo: string,
  isEnd: boolean
}

// 这里是利用 Partial<ITodo> 将 ITodo中的所有类型改为可选属性
function getOptions(todo: ITodo, todoOption: Partial<ITodo>) {
  return {...todo, ...todoOption}
}

console.log(getOptions({todo: '摸鱼', isEnd: false}, {todo: '划水'}))

// ②、Record 将 K 中所有的属性的值转化为 T 类型
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

type Foo = number
const foo: Record<Foo, string> = 'iu'


interface IFoo {
  thing: string,
  num: number
}

type ifoo = IFoo[keyof IFoo] // "number" | "string"

const foo1: Record<IFoo[keyof IFoo], string> = {
  thing: 'do it',
  num: "77"
}

// ③、Pick 将一个属性中含有的属性挑出来单独作为一个属性
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Sky = {
  name: string,
  age: number,
  gender: string
}

type Sky1 = Pick<Sky, "name" | "age"> // {name: string, age: number}

const blueSky: Pick<Sky, "name" | "age"> = {
  name: 'iu',
  age: 17,
  // gender: '女'
}

// ④、Exclude<T,U> 是将T中含有U的属性去除掉
// type Exclude<T, U> = T extends U ? never : T;

type Glass = {
  color: string,
  size: number
}

type Glass1 = {
  color: string,
}

type Glass2 = Exclude<Glass[keyof Glass], Glass1[keyof Glass1]>  // number

// ⑤、ReturnType ReturnType<T> 的作用是用于获取函数 T 的返回类型
type Return = ReturnType<() => void> // void
type Return1 = ReturnType<() => string> // string
type Return2 = ReturnType<() => Function> // Function

export {}
