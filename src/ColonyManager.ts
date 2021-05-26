import {RoomManager} from './RoomManager';

export class ColonyManager{
    id: number;
    name: string;
    homeRoom: Room;
    outposts: Room[];
    rooms: Room[];
    memory: ColonyMemory;
    roomManagers: RoomManager[];

    constructor(colonyId: number, roomName: string){
        this.id = colonyId;
        this.name = roomName;
        this.homeRoom = Game.rooms[roomName];
        this.outposts = [];
        this.rooms = [Game.rooms[roomName]]

        if (!Memory.Empire[this.id]) {
			Memory.Empire[this.id] = {
                id: this.id,
                rooms: {[this.name]: <RoomMemory>{}}
            };
        }

        this.memory = Memory.Empire[this.id];

        this.roomManagers = []
    }

    private buildRoomManagers(): void{
        for(let room in this.rooms){

        }
    }

    private runRoomManagers(): void{
        for(let room in this.rooms){

        }
    }

    init(): void{
        this.buildRoomManagers();
    }

    run(): void{
        this.runRoomManagers();
    }
}
