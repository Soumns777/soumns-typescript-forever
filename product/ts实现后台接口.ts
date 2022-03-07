/**
 * Typescript实现后台接口
 */

/**
 * 1.有关于后台的接口,愿意去使用interface
 * 2.第三方的和开发的SDK 如Vue
 * 3.前端的库 jquery.main.js jquery.d.ts
 * 4.正常的开发任务 type直接用更方便直接一些
 */

/**
 * 1.interface和type区别
 * 相同点
 * 1-1 都可以描述一个对象或者函数
 * 1-2 都可以进行拓展,interface和type也可以进行相互拓展
 * 不同点
 * 2-1 type声明基本类型别名、联合类型、元组等
 * 2-2 typeof获取实例的对象
 * 2-3 interface可以被合并
 */

interface IPrice {
  bookName: string,
  price: number
}

type Price = IPrice[]


function getPrice() {
  // Price 泛型
  return new Promise<Price>((resolve, reject) => {
    fetch('url').then(res => {
      return res.json()
    }).then(res1 => {
      const data: Price = []
      resolve(data)
    })
  })
}

// 调用后台接口
getPrice().then(res => {
  console.log(res[0].price)
})





