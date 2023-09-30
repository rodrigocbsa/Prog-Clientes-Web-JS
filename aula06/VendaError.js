export class VendaError extends Error{
    constructor(message){
        super(message);
        this.name = "VendaError";
    }
}