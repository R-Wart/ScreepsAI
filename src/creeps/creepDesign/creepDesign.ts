import {CreepBuilder} from './CreepBuilder';

export const Roles = {
    harvester : 'harvester',
    upgrader : 'upgrader',
    worker : 'worker',
    miner : 'miner',
    trucker : 'trucker',
    supplier : 'supplier'
};

export const Setups = {
    harvester : new CreepBuilder(Roles.harvester, "H", {
        pattern  : [WORK, CARRY, MOVE],
        sizeLimit: 1
    })
};
