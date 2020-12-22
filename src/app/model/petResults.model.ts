import { Pet } from "./pet.model";

export class PetsResults{
    count: number;
    results: Pet[];

    constructor(obj?: any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map(data =>{return new Pet(data)}) || [];
    }
}