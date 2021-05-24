import { RoomManager } from 'RoomManager';
import {GameCache} from './utils/caching';

export default class EmpireManager implements IEmpire{
    cache: ICache;
    rooms: {[roomName: string]: RoomManager};

    constructor(){
        this.cache = new GameCache();
        this.rooms = {};
    }

    private registerRooms(): void{
        for (let name in Game.rooms) {
			this.rooms[name] = new RoomManager(name)
            if(!Memory.Empire[name]){
                Memory.Empire[name] = {}
            }
		}
    }

    build(): void{
        this.registerRooms();
        this.cache.build();
    }

    rebuild(): void{
        this.cache.rebuild();
    }

    init(): void{
        for (let roomName in this.rooms) {
			this.rooms[roomName].init();
		}
    }

    run(): void{
        for (let roomName in this.rooms) {
			this.rooms[roomName].run();
		}
    }
}
