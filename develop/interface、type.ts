/**
 * interface和type的区别
 * 用interface描述 **数据结构**
 * 用type描述 **类型关系**
 */


// 一、相同点


// 1.都可以声明函数和对象类型

interface IPerson {
  (money: number): void
}

interface IAnimal {
  name: string,
  age: number
}

type Person = (money: number) => void

type Animal = {
  name: string,
  age: number
}

// 2.都可以进行拓展类型
interface IDog extends IAnimal {
  gender: string
}

// & 交叉类型
type Dog = Animal & {
  gender: string
}

// 3.interface可以拓展type类型,type也可以拓展interface类型
interface ICat extends Animal {
  size: string
}

type Cat = IAnimal & {
  size: string
}

// 二、不同点

// 1.type可以声明基础类型
type Str = string

// 2.type可以声明联合类型
type Union = Animal | Cat
type Union1 = Animal & Cat

// 3.type可以声明元组类型
type Tuple = [string, number]

// 4.interface可以进行声明合并,多次声明同一个类型,可以进行合并
interface IUser {
  name: string
}

interface IUser {
  age: number
}

let iu: IUser = {
  name: 'iu',
  age: 18
}


export {}
