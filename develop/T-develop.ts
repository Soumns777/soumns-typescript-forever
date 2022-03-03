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

export {}
