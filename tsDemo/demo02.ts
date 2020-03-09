function funcDemo(age:number = 18,stature:string = '180'):string{
  let yy:string = ''
  yy = "找到了" + age + "岁的人"
  if(stature!=undefined){
    yy = yy + stature
  }
  return yy
}

var age:number = 18
var result:string = funcDemo()
console.log(result)

function funcDemo2(...demand:string[]):string{
  let res:string = '找到了'
  for(let i = 0; i < demand.length; i++){
    res = res + demand[i]
    if(i < res.length){
      res = res + '、'
    }
  }
  res = res + '的ren'
  return res
}

var result1:string = funcDemo2('22岁','180','瓜子脸')
console.log(result1) 