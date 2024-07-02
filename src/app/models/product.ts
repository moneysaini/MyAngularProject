export class Product {
    productId: number|undefined;
    productCode: string|undefined;
    productName: string|undefined;
    price: number|undefined;;

    constructor();
    constructor(pid:number, pnmae: string, pcode: string, price: number);

    constructor(pid?:number, pnmae?: string, pcode?: string, price?: number){
        this.productCode = pcode;
        this.productId = pid;
        this.productName = pnmae;
        this.price = price;
    }
}
