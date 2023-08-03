//console.log('Here is : ', 'array')



/*
1*/
console.log(`
Correct the syntax error
 [ 1,7,  9  ,45]
 ["Str" "alex","moh"]
['the','fox', 'over', lazy, 'dog' ]
`)


/*
2*/
console.log(`
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
fruits.pop()
`)



/*
3
Create an array represents your:
1- Favorite Food (5)
["Tomato","Banana","Watermelon"]
2- Favorite Sport (3)
[]
3- Favorite Movie (4)
*/
console.log("task_3")
Favorite_Food=["pizza", "sushi", "Pasta" ,"Ice Cream" ,"Tacos"]
Favorite_Sport=["Football","Basketball","Tennis" ]
Favorite_Movie=[ "breaking bad", " game of thrones","peaky blinders","walking dead"]
console.log(Favorite_Food)
console.log(Favorite_Sport)
console.log(Favorite_Movie)
console.log("--------------------------------------------------------------------------")
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
console.log("task_4")

function firstOfArray(arrs){
    return arrs[0]
    
}
console.log(firstOfArray([1,4,5]))
console.log("--------------------------------------------------------------------------")

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log("task_5")
function lastOfArray(arrs){
    return arrs[arrs.length-1]
}
console.log(lastOfArray([1,4,5]))
console.log("--------------------------------------------------------------------------")
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
console.log("task_6")
let array_1 = [ 1, 2, 3, 4, 5, 6, 7]
console.log(array_1)
array_1.pop()
array_1.push(8)
array_1.shift()
array_1.unshift(9)
console.log(array_1)
console.log("--------------------------------------------------------------------------")
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
console.log("task_7")
let array_2 = [5,9,-7,3.5]
console.log(array_2)
array_2.push(10, 12)
array_2.unshift(1, 2)
array_2.shift()
array_2.pop()
console.log(array_2)
console.log("--------------------------------------------------------------------------")
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
console.log("task_8")
function middleOfArray(arrs){
    if(arrs.length % 2 == 0){
        return arrs[(arrs.length/2)-1] + " and " + arrs[(arrs.length/2)]
         }
      else  {
       // return arrs[(arrs.length/2)]
        const x = (arrs.length - 1) / 2;//9 = 8/2 =   4 
        return arrs[x];
      }
}
let a2= [1,2,3,4,5,6,7,8,9]
console.log(middleOfArray(a2))
console.log("--------------------------------------------------------------------------")
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
console.log("task_9")
var animals = ['cat', 'ele', 'bird']
animals[0] = 'zebra'
animals[1] = 'elephant'
console.log(animals)
console.log("--------------------------------------------------------------------------")
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
console.log("task_10")
function indexOfArray(arrs,index){
    return arrs[index]
}
let nums_1= [1,2,3,8,9]
console.log(indexOfArray(nums_1,3))
console.log("--------------------------------------------------------------------------")
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
console.log("task_11")
function arrayExceptLast(arrs){
    return arrs.slice(0,arrs.length-1)
}
console.log(arrayExceptLast([1,2,3,4,5,6,7]))
console.log("--------------------------------------------------------------------------")
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
console.log("task_12")
function addToEnd(arrs,  value){
    arrs.push(value)
    return arrs
}
let a3= [1,2,3,4,5,6]
console.log(addToEnd(a3,20))
console.log("--------------------------------------------------------------------------")
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_13")
function sumArray(arrs){
    let sum=0
    for(let i=0;i<arrs.length;i++){
        sum+=arrs[i]
    }
    return sum    
}
console.log(sumArray([1,2,3,4,5]))
console.log("--------------------------------------------------------------------------")
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_14")
function minInArray(arrs){
    let min=arrs[0]
    for(let i=0;i<arrs.length;i++){
        if(arrs[i]<min){
            min=arrs[i]
        }
    }
    return min
}
console.log(minInArray([9,1,3,2,4]))
console.log("--------------------------------------------------------------------------")
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_15")
function removeFromArray(arrs,removed){
    for(let i=0;i<arrs.length;i++){
        if(arrs[i]==removed){
            arrs.splice(i,1)
        }
    }
    return arrs
}
let a4 = [1,2,3,8,9]
console.log(a4)
console.log(removeFromArray(a4, 8))
console.log("--------------------------------- ")

function removeFromArray_2(arrs,removed){
    let i=0
    while(i<arrs.length){
        if(arrs[i]==removed){
            arrs.splice(i,1)
        }
        else {
            i++
        }
    }
    return arrs
}
let a5 = [1,2,3,4,5,6,7]
console.log(a5)
console.log(removeFromArray_2(a5, 6))
console.log("------------------------------------ ")
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_16")
function oddArray(arrs){
    let arr = []
    for (let i = 0; i < arrs.length; i++) {
        if (arrs[i] % 2!= 0) {
            arr.push(arrs[i])
        }
        
    }
    return arr
}

console.log(oddArray([1,2,3,4,5,6]))
console.log("-------------------------------- ")
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_17")
function aveArray(arrs){
    let sum=0
    for(let i=0;i<arrs.length;i++){
        sum+=arrs[i]
        
    }
    sum = sum/arrs.length
    return sum
}
console.log(aveArray([1,2,3,4,5,6]))

console.log("-------------------------- ")
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_18")
function shorterInArray(arrs){
    let min=arrs[0].length
    let min1 =arrs[0]
    for(let i=0;i<arrs.length;i++){
        if(arrs[i].length<min){
            min=arrs[i].length
            min1 =arrs[i]
        }
        
    }
    return min1
}
let a6= ["alex","mercer","madrasa","rashed2","emad","hal"]
console.log(a6)
console.log(shorterInArray(a6))

console.log("--------------------------------------------------------------------------")
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_19")
function repeatChar(str, chr){
    let x=0
    for(let i=0;i<str.length;i++){
        if(str[i]==chr){
            x++
        }
    }
    return x
}
let a7= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(a7,'e'))
console.log("--------------------------------------------------------------------------")
function repeatChar2(str, chr){
    let x=0
    let i=0
    while(i<str.length){
        if(str[i]==chr){
            x++
        }
    }
    return x
}
let a8= "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(a8,'e'))
console.log("--------------------------------------------------------------------------")
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_20")
function evenIndexOddLength(arrs){
    let x=[]
    for(let i=0;i<arrs.length;i++){
        if(arrs[i].length%2==1){
            x.push(arrs[i])
        }

    }
    return x
}
let a9= ["alex" ,"mercer", "madrasa", "rashed2", "emad" ,"hala"]
console.log(evenIndexOddLength(a9))
console.log("--------------------------------------------------------------------------")
function evenIndexOddLength_2(arrs){
    let x=[]
    let i=0
    while(i<arrs.length){
        if(arrs[i].length%2==1){
            x.push(arrs[i])
        }
        i++
    }
    return x
}
let a10= ["alex" ,"mercer", "madrasa", "rashed2", "emad" ,"hala"]
console.log(evenIndexOddLength(a10))
console.log("--------------------------------------------------------------------------")
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_21")
function powerElementIndex(arrs){
    let x=[]
    for (let i=0;i<arrs.length;++i){
        x.push(arrs[i]**i)
    }
    return x
}
let a11= [44, 5, 4, 3, 2, 10]
console.log(powerElementIndex_2(a11))
console.log("--------------------------------------------------------------------------")
function powerElementIndex_2(arrs){
    let x=[]
    let i=0
    while(i<arrs.length){
        x.push(arrs[i]**i)
        i++
    }
    return x
}
let a12= [44, 5, 4, 3, 2, 10]
console.log(powerElementIndex_2(a12))
console.log("--------------------------------------------------------------------------")
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task_22")
function evenNumberEvenIndex(arrs){
    let x=[]
    for (let i=0;i<arrs.length;++i){
        if(i%2==0 && arrs[i]%2==0){
            x.push(arrs[i])
        }
    }
    return x
}
let a13= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(a13))
console.log("--------------------------------------------------------------------------")
function evenNumberEvenIndex_2(arrs){
    let x=[]
    let i=0
    while(i<arrs.length){
        if(i%2==0 && arrs[i]%2==0){
            x.push(arrs[i])
        }
        i++
    }
    return x
}
let a14= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(a14))
