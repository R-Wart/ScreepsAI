import { RoomManager } from 'RoomManager';
import {ColonyManager} from './ColonyManager';
import {GameCache} from './utils/caching';

export default class EmpireManager implements IEmpireManager{
    cache: ICache;
    Colonies: {[id: string]: ColonyManager};

    constructor(){
        this.cache = new GameCache();
        this.Colonies = {}
    }

    private registerColonies(): void{
        let colonyOutposts: { [roomName: string]: string[] } = {};

        for (let name in Game.rooms) {
            let controller = Game.rooms[name].controller;

            if (controller && controller.my) {
                colonyOutposts[name] = [];
			}
		}

        let colonyId = 1;
        for (let colonyName in colonyOutposts) {
			this.Colonies[colonyName] = new ColonyManager(colonyId, colonyName, colonyOutposts[colonyName]);
            colonyId++;
		}
    }

    private registerCreeps(): void{
        let creepsByColony = _.groupBy(Game.creeps, creep => creep.memory.colony) as { [colName: string]: Creep[] };

        for (let colonyName in this.Colonies) {
			let colony = this.Colonies[colonyName];
			colony.creeps = creepsByColony[colonyName];
			colony.creepsByRole = _.groupBy(creepsByColony[colonyName], creep => creep.memory.role);
		}
    }

    build(): void{
        this.cache.build();
        this.registerColonies();
        this.registerCreeps();
    }

    rebuild(): void{
        this.cache.rebuild();
    }

    init(): void{
        for (let colonyId in this.Colonies) {
			this.Colonies[colonyId].init();
		}
    }

    run(): void{
        for (let colonyId in this.Colonies) {
			this.Colonies[colonyId].run();
		}
    }
}
