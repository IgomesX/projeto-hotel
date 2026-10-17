export interface Payment{
    value: number;
}

export abstract class ProcessPayment{
    abstract createPayment(value: number): Payment
}       

export class ProcessPixPayment extends ProcessPayment{
    createPayment(value: number): Payment {
        return new PixPayment(value);
    }
}

export class ProcessCardPayment extends ProcessPayment{
    createPayment(value: number): Payment {
        return new CardPayment(value);
    }
}

export class ProcessBankSlipPayment extends ProcessPayment{
    createPayment(value: number): Payment {
        return new BankSlipPayment(value);
    }
}

export class ProcessCashPayment extends ProcessPayment{
    createPayment(value: number): Payment {
        return new CashPayment(value);
    }
}

class PixPayment implements Payment{
    constructor (public value: number){

    };
}

class CardPayment implements Payment{
    constructor(public value: number){

    };
}

class BankSlipPayment implements Payment{
    constructor(public value: number){

    };
}

class CashPayment implements Payment{
    constructor(public value: number){

    };
}