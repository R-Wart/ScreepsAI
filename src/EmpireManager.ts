import {GameCache} from './utils/caching';

export default class EmpireManager implements IEmpire{
    cache: ICache;

    constructor(){
        this.cache = new GameCache();
    }

    build(): void{
        this.cache.build();
    }

    rebuild(): void{
        this.cache.rebuild();
    }

    init(): void{

    }

    run(): void{

    }
}
