// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var sum:number=0;
var input:number=3;
var count:number=0;
for(let i:number=1;i<1000;i++)
{
    if(i%2==0)
    {
        sum=sum+i; 
        count++;  
    }
    if(count==input)
    {
        break;
    }
}
console.log("Total Sum of "+input+" even Number Are : "+sum)


// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

var marks:number[]=[12,13,14,15];
for(let i:number=0;i<marks.length;i++)
{
    if(marks[i]%2==0)
    {
        console.log(marks[i]);
    }
}


//- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

var marks:number[]=[12,13,14,15];
for(let i:number=0;i<marks.length;i++)
{
    if(marks[i]%2==0)
    {
       marks.splice(i,1);
    }
}
console.log(marks);

// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

var rad:number=2;     // radius pass by parameter on function calling

function Calculate_Area_Of_Circle(Radius:number)
{
const pi:number=3.142;
var Area:number=pi*Radius*Radius;
return Area;
}

var Result:number=Calculate_Area_Of_Circle(rad);
console.log("Area Of Circle : "+Result)

// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

var Marks_Of_FSC_Student:number[]=[60,70,80,33,98,99,45]


for(let i:number=0;i<Marks_Of_FSC_Student.length;i++)
{
    if(Marks_Of_FSC_Student[i]<50)
    {
        Marks_Of_FSC_Student.splice(i,1);
    }
}
console.log(Marks_Of_FSC_Student);



// - Write a program that uses a function to find the largest element in an array of numbers.

var Random_Array:number[]=[12,13,9,8,7,15];

function Find_Largest(array:number[]):number // In Function Pass Array or reurn answer
{
    var large:number=0;
    for(let i:number=0;i<array.length;i++)
    {
     if(array[i]>large)
     {
        large=array[i];
     }
    }
    return large;
}
var Result:number=Find_Largest(Random_Array)

console.log("The Largest Number Is : "+Find_Largest(Random_Array));


