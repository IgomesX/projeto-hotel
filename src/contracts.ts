class Contract {
    constructor(
        public guest: string,
        public entryDate: string,
        public departureDate: string,
        public roomType: string,
        public value: number
    ) {}

    showContract(): void {
        console.log("===== CONTRATO DE HOSPEDAGEM =====");
        console.log("Hóspede:", this.guest);
        console.log("Data de entrada:", this.entryDate);
        console.log("Data de saída:", this.departureDate);
        console.log("Tipo de quarto:", this.roomType);
        console.log("Valor total: R$", this.value);
    }
}

class ContractBuilder {
    private guest: string = "";
    private entryDate: string = "";
    private departureDate: string = "";
    private roomType: string = "";
    private value: number = 0;

    setGuest(guest: string): this {
        this.guest = guest;
        return this;
    }

    setPeriod(entryDate: string, departureDate: string): this {
        this.entryDate = entryDate;
        this.departureDate = departureDate;
        return this;
    }

    setRoomType(roomType: string): this {
        this.roomType = roomType;
        return this;
    }

    setValue(value: number): this {
        this.value = value;
        return this;
    }

    build(): Contract {
        if (
            !this.guest ||
            !this.entryDate ||
            !this.departureDate ||
            !this.roomType
        ) {
            throw new Error(
                "Preencha todos os dados obrigatórios do contrato."
            );
        }

        if (this.value < 0) {
            throw new Error("O valor não pode ser negativo.");
        }

        return new Contract(
            this.guest,
            this.entryDate,
            this.departureDate,
            this.roomType,
            this.value
        );
    }
}