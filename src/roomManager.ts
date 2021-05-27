import {CreepManager} from './creeps/CreepManager';
import {TowerManager} from './buildings/TowerManager';

export class RoomManager{
    name: string;
    room: Room;
    rclLevel: number | undefined;
    sources: Source[];

    constructor(roomName: string){
        this.name = roomName;
        this.room = Game.rooms[roomName];
        this.rclLevel = this.room.controller?.level
        this.sources = this.room.find(FIND_SOURCES);
    }

    init(): void{

    }

    run(): void{

    }
}
