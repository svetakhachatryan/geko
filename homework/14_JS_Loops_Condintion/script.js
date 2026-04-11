let numbers = [12, 5, 8, 21, 3, 17, 9, 30, 2, 14];

for (let num of numbers){
    console.log(num)
}

for (let num of numbers){
    if(num > 10){
        console.log(num)
    }
}

let sum = 0
for(let num of numbers){
    sum = sum + num
}
console.log(sum)

let min = numbers[0]
for (let num of numbers){
    if(num < min){
        min = num
    }
}
console.log(min)

let count = 0
for(let num of numbers){
    if (num % 2 === 0){
        count++;
    }
}
console.log(count)