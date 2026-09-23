interface Payment{
    value: number;
}

abstract class ProcessPayment{
    abstract createPayment(value: number): Payment
}       

class ProcessPixPayment extends ProcessPayment{
    createPayment(value: number): Payment {
        return new PixPayment(value);
    }
}

class ProcessCardPayment extends ProcessPayment{
    createPayment(value: number): Payment {
        return new CardPayment(value);
    }
}

class ProcessBankSlipPayment extends ProcessPayment{
    createPayment(value: number): Payment {
        return new BankSlipPayment(value);
    }
}

class ProcessCashPayment extends ProcessPayment{
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