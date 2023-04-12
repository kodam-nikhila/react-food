export type ProductModel={
    id:string,
    name:string,
    price:number,
    image:string

}
const products : ProductModel[]=[
    {id:'1',
    name:'Apples',
    price:230,
    image:'https://tinyurl.com/29dv8ur5'
},
    {
        id:'2',
    name:'Promagranates',
    price:280,
    image:'https://tinyurl.com/2pyxvvyv'
    },
    {
        id:'3',
    name:'Grapes',
    price:200,
    image:'https://tinyurl.com/2p8s3zrv'
    },{
        id:'4',
    name:'Strawberries',
    price:290,
    image:'https://tinyurl.com/2ns28amw'
    },{
        id:'5',
    name:'Oranges',
    price:400,
    image:'https://tinyurl.com/2p8f98tr'
    },{
        id:'6',
    name:'Cherries',
    price:500,
    image:'https://tinyurl.com/4vw7n5ks'
    },
    
]
export{products};

