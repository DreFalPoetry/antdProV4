// function createArray(length:number, value:any): Array<any>{
//   let res = []
//   for(let i = 0; i<length; i++){
//     res[i] = value
//   }
//   console.log(res)
//   return res
// }

// createArray(3,'x')

//函数名中的T用来指代任意输入的类型，在后边输入 value T 和输出 Array<T> 中即可以使用
function createArray<T>(length:number,value:T):Array<T>{
  let res: T[] = []
  for(let i=0; i<length; i++){
    res[i] = value
  }
  return res
}

createArray(3,'x')

//定义多个类型的参数
function swap<T,U>(tuple:[T,U]):[U,T]{
  console.log([tuple[1],tuple[0]])
  return [tuple[1],tuple[0]]
}

swap([7,'seven'])

//泛型约束
interface Lengthwise {
  length: number
}

//在这个例子中，使用了 extends 约束了泛型 T必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性
function loggingIdentity<T extends Lengthwise>(arg: T) : T{
  console.log(arg.length)
  return arg
}

//此时，如果调用方法，传入的arg不包含length,那么编译阶段就会报错
// loggingIdentity(7)

//多个类型参数之间也可以相互约束,这个例子中使用了两个类型参数,其中要求 T继承 U 这样就保证了U上不会出现T中不存在的字段
function copyFields<T extends U, U>(target:T, source:U): T {
  for(let id in source){
    target[id] = (<T>source)[id]
  }
  return target
}

let x = {a:1,b:2,c:3,d:4}
copyFields(x,{b:10,d:20})
