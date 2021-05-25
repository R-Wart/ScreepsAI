import {RoomManager} from './RoomManager';

export class ColonyManager{
    id: number;
    name: string;
    homeRoom: Room;
    memory: ColonyMemory;

    constructor(colonyId: number, roomName: string){
        this.id = colonyId;
        this.name = roomName;
        this.homeRoom = Game.rooms[roomName];

        if (!Memory.Empire[this.id]) {
			Memory.Empire[this.id] = {
                id: this.id,
                room: {[this.name]: <RoomMemory>{}}
            };
        }

        this.memory = Memory.Empire[this.id];
    }

    init(): void{

    }

    run(): void{

    }
}
