export interface Room{
    describe(): void;
};

export interface Breakfast{
    serve(): void;
};

interface Kit{
    serve(): void;
};

class StandardRoom implements Room{
    describe(): void {
    };
    
};

class PlusRoom implements Room{
    describe(): void {
    };
};

class LuxureRoom implements Room{
    describe(): void {
    };
};

class SimpleBreakfast implements Breakfast{
    serve(): void {
    };
};

class FullBreakfast implements Breakfast{
    serve(): void {
    };
};

class SpecialBreakfast implements Breakfast{
    serve(): void {
    };
};

export interface HostingFactory{
    createRoom(): Room;
    createBreakfast(): Breakfast;
}

export class StandardFactory implements HostingFactory{
    createRoom(): Room {
        return new StandardRoom;
    };

    createBreakfast(): Breakfast {
        return new SimpleBreakfast
    };
}

export class PlusFactory implements HostingFactory{
    createRoom(): Room {
      return new PlusRoom;  
    };

    createBreakfast(): Breakfast {
        return new FullBreakfast;
    };
}

export class LuxureFactory implements HostingFactory{
    createRoom(): Room {
        return new LuxureRoom;
    }

    createBreakfast(): Breakfast {
        return new SpecialBreakfast;
    }
}