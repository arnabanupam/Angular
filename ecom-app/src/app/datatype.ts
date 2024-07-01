export interface SignUp{
    id:string
    name:string,
    email:string,
    password:string,
    image:string
}

export interface Login{
    id:string,
    name:string
    email:string,
    password:string,
    image:string
}

export interface product{
    id:string,
    name:string,
    price:string,
    category:string,
    color:string,
    description:string,
    image:string,
    quantity:undefined | number,
    productId: undefined | string,
    averageratings:any,
    totalratings:number
}

  export interface cart{
    name:string,
    price:string,
    category:string,
    color:string,
    image:string,
    description:string,
    id:string| undefined,
    quantity?:undefined | number,
    productId:string,
    userId:string
  }
  
  export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }
  
  export interface order {
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:string|undefined
  }

  export interface Message {
    text: string;
    user: boolean;
    timestamp: Date;
  }

