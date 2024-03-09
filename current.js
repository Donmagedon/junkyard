class Stack{
    constructor(stack = []){
        this.stack = stack

    }
    addToStack(n){
        this.stack.unshift(n)
    }
    removeFromStack(n){
        return this.stack.shift()
    }
}

class Queue{
    constructor(items = []){
        this.items = items
    }
    addToQueue(n){
        this.items.push(n)
    }
    removeFromQueue(){
       return this.items.shift()
    }
}

class Node{
    constructor(data,nextNode = null){
        this.data = data
        this.nextNode = nextNode
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }
    addToLinkedList(data){
        if(!this.head){
            this.head = new Node(data)
        }else{
            this.head = new Node(data,this.head)
        }
    }
    removeFromLinkedList(){
        this.head = this.head.nextNode
    }

}

function recursiveCountDown(n){
    if(n === 0){
        console.log("DONE!")
        return 
    }
    console.log(n)
    return recursiveCountDown(n - 1)
}



class NodeForTree{
    constructor(data,left,right){
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree{
    constructor(root){
        this.root = root
    }
    addTooTree(data,right,left){
        this.root = new NodeForTree(data,left,right)
    }
}


let tetero = [1,2,3,4,5,6,7,8,9]
function BinarySearch(list, toFind){
    let left =  0
    let right = list.length - 1
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(list[mid] == toFind){
            return mid
        }
        if(list[mid] < toFind){
            left = mid + 1
        } 
        else{
            right = mid - 1 
        }
    }
    return null


}
let arryOfnums = [1,3,5,6]
function searchInsertionPosition(arry,wanted){
    for(let i = 0; i < arry.length ; i++){
        if(arry[i] === wanted){
            return i
        }
        else if((wanted > arry[i] && wanted < arry[i + 1] ) || wanted > arry[i] && arry[i + 1] === undefined ){
            return i + 1
        }
    }
}
function searchInsertionPosition2(arry, wanted){
    let left = 0
    let right = arry.length - 1
    while(left <= right ){
        let mid = Math.floor((left + right) / 2)
        if(arry[mid] === wanted ){
            return mid
            }

        else if(arry[mid] > wanted){
            if(arry[mid - 1] < wanted || arry[mid - 1] === undefined ){
                return  mid }
            right = mid - 1
        }

        else{
            if(arry[mid + 1] === undefined){
                return mid + 1
            }
            left = mid + 1
        }
    }
}

function quickSort(lis){
    if(lis.length <= 2){
        return lis
    }else{
        let pivot = lis[0]
        let left = function(){
            let result = []
            for(let i = 0; i < lis.length;i++ ){
              if(i === 0 ){
                    continue
                }
                if(lis[i] <= pivot ){
                    result.push(lis[i])
                }
    
            }
            return result
        } 
        let right = function(){
            let result = []
            for(let i = 0; i < lis.length; i++){
                if(i === 0){
                    continue
                }
                if(lis[i] > pivot){
                    result.push(lis[i])
                }
            }
            return result
        }
        
        return quickSort(left())
    }

}

function validParientes(str){
    const allChar = str.split("")
    const parenthesis = {
        open: "(",
        close:")"
    }
    const square = {
        open: "[",
        close:"]"
    }
    const curly = {
        open: "}",
        close:"{"
    }

    let foundParientes = {
        open:undefined,
        close:undefined,
    }
    let foundSquare ={
        open:undefined,
        close:undefined,
    }
    let foundCurly= {
        open:undefined,
        close:undefined,
    }

    for(let i = 0; i < allChar.length; i ++){
        if((allChar[i] ===  parenthesis.open || allChar[i] === parenthesis.close)){
            if(allChar[i] === parenthesis.open){
                foundParientes.open = i}
            if(allChar[i] === parenthesis.close){
                foundParientes.close = i
        }
                }
        if((allChar[i] ===  square.open || allChar[i] === square.close)){
                    if(allChar[i] === square.open){
                        foundSquare.open = i
                    }
                    if(allChar[i] === square.close){
                        foundSquare.close = i
                    }
                }
        if((allChar[i] ===  curly.open || allChar[i] === curly.close)){
                 if(allChar[i] === curly.open){
                        foundCurly.open = i
                    }
                    if(allChar[i] === curly.close){
                        foundCurly.close = i
                    }
                    }
                
                
    }
    if
  
        
}
validParientes("[]{}()")