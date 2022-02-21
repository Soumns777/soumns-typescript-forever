/**
 * TS基础类型
 */

(() => {

  type Person = {
    name: string,
    age: number,
    isRich?: boolean
  }

  // 1.Number、String、Boolean
  const num: number = 777
  const str: string = 'iu'
  const boo: boolean = true

  const num1: number | string | boolean = 'abc'

  type man = Person[keyof Person]  // string | number | boolean
  const num2: man = false

  // 2.Array、元祖
  type ArrayType = {
    length: number
  }

  type ArrayType1 = number[]
  type ArrayType2 = string[]

  let arr: ArrayType = ['11', 1, false]

  let arr1: ArrayType1 | ArrayType2 = [1, 2, 3]
  arr1 = ['iu', 'lisa', 'yoona']

  // TODO 泛型语法
  let arr2: Array<number> | Array<string> = [4, 5, 6]
  arr2 = ['iu', 'lisa']

  // TODO 元组 当想要在一个数组中使用不同类型的数据时会需要用到元组,
  // 注:元组中规定的元素类型顺序必须是完全对照的,而且不能多、不能少
  let yuan: [string, number] = ['iu', 1]

  // 通过索引获取元组对应索引项类型
  type tuple = typeof yuan[0]  // string

  // 元组越界
  yuan.push('lisa')
  // console.log(yuan[2])  // 元组类型中没有第三项,元组越界

  // 可选元素类型 属性后面加上?
  // 注:可选元素必须在必须元素的后面,即一般可选类型都是在最后,如果中间项需要可选类型,则后面所有项都将使用可选类型
  let tuple1: [number, boolean, string?]
  tuple1 = [77, false, '7777']
  tuple1 = [88, true]

  // 元组应用
  // 剩余参数
  function getArgs(...args: [string, number, string]): void {
  }

  let rest: [string, ...number[]] = ['iu', 1, 2, 3, 4]


  // TODO 3.enum类型 (定义常量一般用enum)
  enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
  }

  console.log(Week.Wednesday, '-->周三')   // 2

  enum URL {
    testUrl = '/api/v1/test',
    prodUrl = '/api/v2/prod'
  }

  console.log(URL.prodUrl, '-->生产环境地址')

  //  4.any、unknown 可以被所有类型赋值
  let anything: any = 1
  anything = 'iu'
  anything = false
  anything = null

  let something: unknown = 'lisa'
  something = 777
  something = true
  something = undefined

  // 5.null、undefined  ts中null和undefined有自己的类型
  const nu: null = null
  const un: undefined = undefined

  // 6.void、never
  // void表示没有任何类型返回,一般用于函数没有返回的时候
  // never 表示永不存在的属性,一般用于类型校验以及总是抛出异常的情况
  let func = (): void => {
    console.log('void  没有任何返回')
  }

  let fun1 = (): never => {
    throw new Error('抛出报错')
  }


})()
