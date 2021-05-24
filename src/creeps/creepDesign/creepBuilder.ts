export interface BodySetup {
	pattern: BodyPartConstant[];			// body pattern to be repeated
	sizeLimit: number;						// maximum number of unit repetitions to make body
	ordered: boolean;						// (?) assemble as WORK WORK MOVE MOVE instead of WORK MOVE WORK MOVE
}

/* Return the cost of an entire array of body parts */
export function bodyCost(bodyparts: BodyPartConstant[]): number {
	return _.sum(bodyparts, part => BODYPART_COST[part]);
}

export class CreepBuilder {
    role: string;
    intial: string;
    bodySetup: BodySetup;

    constructor(roleName: string, intial: string, bodySetup = {}){
        this.role = roleName;
        this.intial = intial;
        this.bodySetup = bodySetup as BodySetup;
    }

    generateBody(availableEnergy: number): BodyPartConstant[] {
        let patternCost, patternLength, numRepeats: number;
		let body: BodyPartConstant[] = [];

        patternCost = bodyCost(this.bodySetup.pattern);
        patternLength = this.bodySetup.pattern.length;
        const energyLimit = Math.floor(availableEnergy / patternCost);
        const maxPartLimit = Math.floor(MAX_CREEP_SIZE / patternLength);
        numRepeats = Math.min(energyLimit, maxPartLimit, this.bodySetup.sizeLimit);

        if (this.bodySetup.ordered) {
			for (const part of this.bodySetup.pattern) {
				for (let i = 0; i < numRepeats; i++) {
					body.push(part);
				}
			}
		} else {
			for (let i = 0; i < numRepeats; i++) {
				body = body.concat(this.bodySetup.pattern);
			}
		}

        return body;
    }
}
