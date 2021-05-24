import {CreepManager} from './creeps/CreepManager';
import {SpawnManager} from './buildings/SpawnManager';
import {TowerManager} from './buildings/TowerManager';

export class RoomManager{
    name: string;
    room: Room;


    constructor(roomName: string){
        this.name = roomName;
        this.room = Game.rooms[roomName];
    }

    init(): void{

    }

    run(): void{

    }
}
