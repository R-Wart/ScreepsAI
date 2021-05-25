interface Memory {
	Empire: {[name: string]: ColonyMemory};
	Colonies: {[name: string]: ColonyMemory};
    creeps: {[name: string]: CreepMemory};
}

interface ColonyMemory {
	id: number;
	room: {[name: string]: RoomMemory};
}

interface CreepMemory {
	role: string;
	working: boolean;
}

interface RoomMemory{
	sources: Source[];

}
