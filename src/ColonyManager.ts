import {Roles} from './creeps/CreepDesign/CreepDesign'

import { SpawnManager } from 'buildings/SpawnManager';
import {RoomManager} from './RoomManager';

export class ColonyManager{
    id: number;
    memory: ColonyMemory;
    name: string;
    roomNames: string[];
    homeRoom: Room;
	outposts: Room[];
    rooms: Room[];

    roomManagers: {[roomName: string]: RoomManager};

    creeps: Creep[];
    creepsByRole: {[roleName: string]: Creep[]};
    creepJobs: {[role: string]: number};

    spawns: StructureSpawn[];
    spawnManager: SpawnManager | undefined;

    constructor(colonyId: number, roomName: string, outposts: string[]){
        this.id = colonyId;
        this.name = roomName;
        this.memory = Memory.Empire[this.id];

        if (!Memory.Empire[this.id]) {
			Memory.Empire[this.id] = {
                id: this.id,
                rooms: {[this.name]: <RoomMemory>{}}
            };
        }

        this.roomNames = [roomName].concat(outposts);
        this.homeRoom = Game.rooms[roomName];
        this.outposts = _.compact(_.map(outposts, outpost => Game.rooms[outpost]));
        this.rooms = [Game.rooms[roomName]].concat(this.outposts);

        this.roomManagers = {};

        this.creeps = [];
        this.creepsByRole = {};
        this.creepJobs = {};

        this.spawns = this.homeRoom.find(FIND_MY_SPAWNS);
        if (this.spawns[0]) {
			this.spawnManager = new SpawnManager(this.creepsByRole, this.creepJobs, this.spawns);
		}
    }

    private buildRoomManagers(): void{
        for(let i = 0; i < this.rooms.length; i++){
            this.roomManagers[i] = new RoomManager(this.rooms[i].name)
            this.roomManagers[i].init();
        }
    }

    private runRoomManagers(): void{
        for(let i = 0; i < this.rooms.length; i++){
            this.roomManagers[i].run();
        }
    }

    private setUpRequiredCreeps(): void{
        for(let r in Roles){
            switch(r){
                case 'harvester':
                    this.creepJobs[r] = 2;
                    console.log("Number Of Harvesters: " + this.creepJobs[r])
                    break;
            }
        }
    }

    init(): void{
        this.buildRoomManagers();
        this.setUpRequiredCreeps()
        this.spawnManager?.init();
    }

    run(): void{
        this.runRoomManagers();
        this.spawnManager?.run();
    }
}
