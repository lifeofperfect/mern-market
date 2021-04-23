let array = [12,3,1,2,-6,5,-8,6]
let targetSum = 0

array.sort((a,b)=> (a-b))

let x = 0;
let y= x+1;
let z = y+1;

let final = []

while(x < array.length-2){
    if(y < array.length-1 && z < array.length){
        let total = array[x] + array[y] + array[z]
        
        if(total < targetSum){
            z++;
        }

        if(total == targetSum){
            let arr = []
            arr.push(array[x], array[y], array[z])
            final.push(arr)
            y++;
            z = y+1;
        }

        if(z == array.length){
            y++;
            z = y+1;
        }

        if(total > targetSum){
            y++;
            z = y+1;
        }
        if(y == array.length -2){
            x++;
            y = x+1;
            z = y+1;
        }      
    }
    else if(y >= array.length-1 && z >= array.length){
        x++;
        y = x+1;
        z = y+1
    }
    else if(y >= array.length){
        x++;
        y = x+1;
        z = y+1
    }else if(z >=array.length){
        y++;
        z = y+1;
    }
}

console.log(final)