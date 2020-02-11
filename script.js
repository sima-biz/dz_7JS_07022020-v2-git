

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////  1. Манипуляции с обьектами. ///////////////////////
////////////////////////////////////////////////////////////////////


// let testObj = {
//   prop: "test property"
// };
// console.log(testObj); //
// console.log(testObj.prop); //
// console.log(testObj["prop"]); //
// testObj.pi = Math.PI;
// console.log(testObj);
// delete testObj.prop;
// console.log(testObj);
// testObj.sumOfTwo = function(x, y) {
//   return x + y
// };
// console.log(testObj.sumOfTwo("40", 150), typeof testObj.sumOfTwo); //
// let newObj = Object.assign({newProp: 10}, testObj)
// for (elemObj in testObj) {
//   delete testObj[elemObj]
// }
// console.log(testObj) // цыкл выше удалил все свойства из него.
// let copiedObj = {...newObj} //скопировать обьект
// console.log(newObj) //вывести оба обьекта в консоль
// console.log(copiedObj) //вывести оба обьекта в консоль
// copiedObj.newProp = 100
// console.log(copiedObj.newProp)
// console.log(newObj.newProp)
// let arrCopiedObj = Object.keys(copiedObj).concat(Object.values(copiedObj))
// console.log(arrCopiedObj)


/////////////////////////////////////////////////////////////////////
//////////////////// 2. Создание обьектов ///////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////// option 1 ////////////

//  function ConstructObject(objectName = 'noName', objectNumber = 0, objectString = "") {
//   this.objectName = objectName,
//   this.objectNumber = objectNumber,
//   this.objectString = objectString,
//   this.greet = function() {
//     return "hello"
//   }    
// }

// let obj1 = new ConstructObject()
// let obj2 = new ConstructObject("test", 10, "i' m a string")
// console.log(obj1)
// console.log(obj2)
// console.log(obj1.greet())
// console.log(Object.keys(obj1))
// console.log(Object.keys(obj2))


///////////////////////  option 2 //////////

// let  constructObject = function(objectName = "noName", objectNumber = 0, objectString = "")  { 
//   let user = {}
//   user.objectName = objectName,
//   user.objectNumber = objectNumber,
//   user.objectString = objectString,
//   user.greet = () => {
//     return "hello"
//   }   
//   return user 
// }
// let objA = constructObject()
// let objB = constructObject("test", 10, "i' m a string")
// console.log(objA)
// console.log(objB)
// console.log(Object.keys(constructObject()))
// console.log(Object.keys(constructObject("test", 10, "i' m a string")))
// console.log(objA.greet())

///////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////
////////////////////// 3. Глубокая копия обьекта ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


// const targetObj = {
//   x: 1,
//   y: {
//       w: 'test',
//       q: {
//           a: true,
//           b: () => console.log('useless'),
//           c: {
//               d: ['a', 'b', 'c']
//           }
//       }
//   },
//   z: [1,2,3,4,5]
// }
// console.log(targetObj)
// function deepCopy(origObj) {
//   let copyObj = {}
//   for (key in origObj) {
//     (typeof origObj[key] === Object) ?  copyObj[key] = deepCopy(origObj[key]) : copyObj[key] = origObj[key]   
//   }
//   return copyObj
// }
// const copiedObj = deepCopy(targetObj)
// console.log(copiedObj)
// targetObj.y.q.c.d[0] = 100
// console.log(targetObj)
// const areElementsEqual = targetObj.y.q.c.d[0] === copiedObj.y.q.c.d[0]
// console.log(areElementsEqual)










