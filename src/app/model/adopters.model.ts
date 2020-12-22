import { Adoption } from "./adoption.model";

export class Adopters{
    count: number;
    results: Adoption[];

    constructor(obj?: any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map(data=>{return new Adoption(data)}) || [];
    }
}