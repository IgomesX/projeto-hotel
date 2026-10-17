import { HostingFactory } from "./hospedagem";
import { ProcessPayment, Payment } from "./pagamentos";

class Reservation{
    constructor(
       public client: string,
        public entryDate: string,
        public departureDate: string,
        public nGuests: number,
        public hosting: HostingFactory,
        public processPayment: ProcessPayment,
        public value: number
    ) {};

    clone(): Reservation{
        return new Reservation(
            this.client,
            this.entryDate,
            this.departureDate,
            this.nGuests,
            this.hosting,
            this.processPayment,
            this.value
        )
    };

    confirmation(): void{
        console.log("Cliente:", this.client);
        console.log("Data de entrada:", this.entryDate);
        console.log("Data de saída:", this.departureDate);
        console.log("Quantidade de hóspedes:", this.nGuests);

        const room = this.hosting.createRoom();
        const breakfast = this.hosting.createBreakfast();

        room.describe();
        breakfast.serve();
    };

    payment(): Payment{
        return this.processPayment.createPayment(this.value);
    };
}