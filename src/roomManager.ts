import {CreepManager} from './creeps/CreepManager';
import {SpawnManager} from './buildings/SpawnManager';
import {TowerManager} from './buildings/TowerManager';

export class RoomManager{
    name: string;
    room: Room;
    rclLevel: number | undefined;
    sources: Source[];
    creeps: Creep[];
    creepsByRole: {[roleName: string]: Creep[]};
    spawns: StructureSpawn[];
    spawnManager: SpawnManager | undefined;

    constructor(roomName: string){
        this.name = roomName;
        this.room = Game.rooms[roomName];
        this.rclLevel = this.room.controller?.level
        this.sources = this.room.find(FIND_SOURCES);
        this.creeps = this.room.find(FIND_MY_CREEPS);
        this.creepsByRole = _.groupBy(this.creeps, creep => creep.memory.role);
        this.spawns = this.room.find(FIND_MY_SPAWNS);
        if(this.spawns[0]){
            this.spawnManager = new SpawnManager(this.rclLevel, this.creepsByRole);
        }
    }

    init(): void{
        this.spawnManager?.init();
    }

    run(): void{
        this.spawnManager?.run();
    }
}
