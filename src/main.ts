'use strict';

import './prototypes/prototypes_Room';

import { ErrorMapper } from 'utils/ErrorMapper';
import {Mem} from 'utils/Mem';
import EmpireManager from 'EmpireManager';

Mem.format();

export const loop = ErrorMapper.wrapLoop(() => {
	Mem.cleanCreeps();
	global.Empire = new EmpireManager();	// Instantiate the Overmind
	Empire.build();							// Build phase: instantiate caches and colony components
	Empire.init();							// Init phase: spawning and energy requests
	Empire.run();
});
