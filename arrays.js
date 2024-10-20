//array methods
arr3.map((a)=>{
    console.log(a)
})
//array method filter
const names = ['Iqra' , 'rida' , 'rida', 'Izza' ];
let filtered=names.filter((name)=>
{
return name!='rida'
});
console.log(filtered)