export class Mem{
    static format(){
        if (!Memory.Empire) {
			Memory.Empire = {};
		}

		if (!Memory.Colonies) {
			Memory.Colonies = {};
		}
    }

    static cleanCreeps() {
		// Clear memory for non-existent creeps
		for (let name in Memory.creeps) {
			if (!Game.creeps[name]) {
				delete Memory.creeps[name];
			}
		}
	}
};
