interface Memory {
	Empire: { [name: string]: RoomMemory};
    creeps: { [name: string]: CreepMemory };
}

interface CreepMemory {
	role: string;
	working: boolean;
}

interface RoomMemory{

}
