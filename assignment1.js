// Write a program to demonstrate how a function can be passed as a parameter to another function.\


function sum(...x)
{
    let n=x.length
    let s=0
    for(let i=0;i<n;i++)
    {
        s+=x[i]
    }
    return s
}

function avg(n,sum)
{
    let s=sum(1,2,3,4,5,5)
    return s/n
}
console.log(avg(6,sum))