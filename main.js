

/*-----example1
for(let i=1;i<=10;i++)
{
    document.write(i+"<br>")
}

let i1=1
while(i1<=10)
{
    document.write(i1+"<br>") 
    i1++
}

let i11=1;
do
{
    document.write(i11+"<br>")
    i11++
}
while(i11<=10)
----*/

/*---example2
for(let i=10;i>=1;i--)
{
    document.write(i+"<br>")
}

let i1=10
while(i1>=1)
{
    document.write(i1+"<br>")
    i1--
}

let i11=10;
do
{
    document.write(i11+"<br>")
    i11--
}
while(i11>=1)\
-----*/

/*---example3
let sum=0   
for(let i=1;i<=10;i++) //i=1;1<= ,i=2;2<=10 ,i=3;3<=10
{
    sum=sum+i //sum=1 ,sum=1+2==>3, sum=3+3=>6
}
document.write(sum)
-----*/

/*----example4
let sum=0   
for(let i=10;i>=1;i--) 
{
    sum=sum+i 
}
document.write(sum)
----*/

/*----example5
let product=1
for(let i=1;i<=10;i++)
{
    product=product*i
}
document.write(product)
----*/

/*----example6
let product=1;
for(let i=10;i>=1;i--)
{
    product=product*i
}
document.write(product)
----*/

/*---example7
let power=1
let a=2,b=3
for(let i=1;i<=b;i++) //i=1;1<=3 ,i=2;2<=3 ,i=3;3<=3 ,i=4;4<=3
{
    power=power*a //power=1*2==>power=2  ,power=2*2==>power=4 ,power=8
}
document.write(power)//8
----*/

/*---example8
let n=4291  
while(n!=0) //4291!=0 ,,429!=0 ,,n=42!=0 ,n=4!=0 ,0!=0
{
    let r=n%10 //r=1 ,r=9 ,r=2 ,r=4
    document.write(r) //1924 
    n=Math.floor(n/10) //n=429  ,n=42 , n=4 ,n=0
}
----*/


/*----example9
let n=4291
let count=0
while(n>0)
{
    count++
    n=Math.floor(n/10)
}
document.write(count)
-----*/