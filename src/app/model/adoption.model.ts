export class Adoption {
    _id: number;
    petId: number;
    petName: string;
    name: string;
    contact: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.petId = obj && obj.petId || null;
        this.petName = obj && obj.petName || '';
        this.name = obj && obj.name || '';
        this.contact = obj && obj.contact || '';
    }
}
