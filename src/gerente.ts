export class ManagerHotel{
    private static instance: ManagerHotel;
    private name: string;

    private constructor(){
        this.name = "Dr Orlando Osmares Datera";
    }

    static getInstance(): ManagerHotel{
        if(!ManagerHotel.instance){
            ManagerHotel.instance = new ManagerHotel();
        }

        return ManagerHotel.instance;
    }

    getName():string{
        return this.name
    }
}