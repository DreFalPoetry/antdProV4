// function getLength(something: string | number): number {
//   if(something.length){
//     return something.length
//   }else{
//     return something.toString().length
//   }
// }


//在以上示例中，获取 something.length 会报错，此时可以使用类型断言，将 something 断言成string
function getLength(something: string | number) : number {
  if((<string>something).length){
    return (<string>something).length
  }else{
    return something.toString().length
  }
}

//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// function toBoolean(something:string | number): boolean {
//   return <boolean>something
// }