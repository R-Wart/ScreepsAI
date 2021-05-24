interface Memory {
	Empire: {};
    creeps: { [name: string]: CreepMemory; };
}

interface CreepMemory {
	role: string;
	working: boolean;
}
