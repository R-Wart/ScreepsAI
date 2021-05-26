import {CreepManager} from './creeps/CreepManager';
import {SpawnManager} from './buildings/SpawnManager';
import {TowerManager} from './buildings/TowerManager';

export class RoomManager{
    name: string;
    room: Room;
    sources: Source[];
    creeps: Creep[];
    creepsByRole: {[roleName: string]: Creep[]};
    spawns: StructureSpawn[];

    constructor(roomName: string){
        this.name = roomName;
        this.room = Game.rooms[roomName];
        this.sources = this.room.find(FIND_SOURCES);
        this.creeps = this.room.find(FIND_MY_CREEPS);
        this.creepsByRole = _.groupBy(this.creeps, creep => creep.memory.role);
        this.spawns = this.room.find(FIND_MY_SPAWNS);
    }

    init(): void{

    }

    run(): void{

    }
}
