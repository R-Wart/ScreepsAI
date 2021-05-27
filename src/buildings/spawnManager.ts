import {Roles, Setups} from '../creeps/CreepDesign/CreepDesign'


export class SpawnManager{
    creepsByRoles: {[roleName: string]: Creep[]};
    jobs: {[role: string]: number};
    spawns: StructureSpawn[];

    constructor(creepsByR: {[roleName: string]: Creep[]}, creepJobs: {[role: string]: number}, allSpawns: StructureSpawn[]){
        this.creepsByRoles = creepsByR;
        this.jobs = creepJobs;
        this.spawns = allSpawns;
    }

    private numberOfHarvester(): number{
        return 2;
    }

    private spawnCreeps(): void{
        console.log(this.jobs['harvester'])
        for(let role in this.jobs){
		}
    }

    init(): void{

    }

    run(): void{
        this.spawnCreeps();
    }
}
