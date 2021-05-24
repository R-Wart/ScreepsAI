export class GameCache implements ICache {

	structures: { [roomName: string]: { [structureType: string]: Structure[] } };
	constructionSites: { [roomName: string]: ConstructionSite[] };
	structureSites: { [roomName: string]: ConstructionSite[] };
	roadSites: { [roomName: string]: ConstructionSite[] };
	drops: { [roomName: string]: { [resourceType: string]: Resource[] } };

	constructor() {
		this.structures = {};
		this.constructionSites = {};
		this.structureSites = {};
		this.roadSites = {};
		this.drops = {};
	}

	/* Generates a nested hash table for structure lookup: {[roomName], {[structureType]: Structures[]} */
	private cacheStructures() {
		for (let name in Game.rooms) {
			this.structures[name] = _.groupBy(Game.rooms[name].find(FIND_STRUCTURES), s => s.structureType);
		}
	}

	/* Generates a nested hash table for structure lookup: {[roomName], {[structureType]: Structures[]} */
	private cacheConstructionSites() {
		for (let name in Game.rooms) {
			this.constructionSites[name] = Game.rooms[name].find(FIND_CONSTRUCTION_SITES);
			this.structureSites[name] = _.filter(this.constructionSites[name], s => s.structureType != STRUCTURE_ROAD);
			this.roadSites[name] = _.filter(this.constructionSites[name], s => s.structureType == STRUCTURE_ROAD);
		}

	}

	/* Generates a nested hash table for drop lookup: {[roomName], {[resourceType]: drops[]} */
	private cacheDrops() {
		for (let name in Game.rooms) {
			this.drops[name] = _.groupBy(Game.rooms[name].find(FIND_DROPPED_RESOURCES), r => r.resourceType);
		}
	}

	build() {
		this.rebuild();
	}

	rebuild() {
		this.cacheStructures();
		this.cacheConstructionSites();
		this.cacheDrops();
	}
}
