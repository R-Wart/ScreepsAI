import {Roles, Setups} from '../creeps/CreepDesign/CreepDesign'


export class SpawnManager{
    rclLevel: Number | undefined;
    creepsByRoles: {[roleName: string]: Creep[]};
    jobs: {[role: string]: number};

    constructor(controllerLevel: number | undefined, creepsByR: {[roleName: string]: Creep[]}){
        this.rclLevel = controllerLevel;
        this.creepsByRoles = creepsByR;
        this.jobs = {}
    }

    private numberOfHarvester(): number{
        return 2;
    }

    private setUpRequiredCreeps(): void{
        for(let r in Roles){
            switch(r){
                case 'harvester':
                    this.jobs[r] = this.numberOfHarvester();
                    console.log("Number Of Harvesters: " + this.jobs[r])
                    break;
            }
        }

    }

    private spawnCreeps(): void{
        for(let i in this.jobs){
			let role = this.jobs[i];

			if(this.creepsByRoles[role].length < this.jobs[role]){
                console.log("Ive Made it this far :)");
			}
		}
    }

    init(): void{
        this.setUpRequiredCreeps();
    }

    run(): void{
        this.spawnCreeps();
    }
}
