export class Ingredient {
    constructor(public name: string, public amount: number) {}
}


// This is the longhand version, either one works fine.
// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }