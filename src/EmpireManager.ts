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

    private registerColony(): void{

        for (let name in Game.rooms) {
            let controller = Game.rooms[name].controller;
            let colonyId: number = 1;

            if (controller && controller.my) {
                this.Colonies[colonyId] = new ColonyManager(colonyId, name);
			}
            colonyId++;
		}
    }

    build(): void{
        this.registerColony();
        this.cache.build();
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
