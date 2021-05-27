interface Memory {
	Empire: {[name: string]: ColonyMemory};
	Colonies: {[name: string]: ColonyMemory};
    creeps: {[name: string]: CreepMemory};
}

interface ColonyMemory {
	id: number;
	rooms: {[name: string]: RoomMemory};
}

interface CreepMemory {
	colony: string;
	role: string;
	working: boolean;
}

interface RoomMemory{
	sources: Source[];

}
