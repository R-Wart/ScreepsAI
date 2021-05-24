declare var global: any;

declare namespace NodeJS {
	interface Global {
		Empire: IEmpire;
	}
}

interface ICache {
	structures: { [roomName: string]: { [structureType: string]: Structure[] } };
	constructionSites: { [roomName: string]: ConstructionSite[] };
	structureSites: { [roomName: string]: ConstructionSite[] };
	roadSites: { [roomName: string]: ConstructionSite[] };
	drops: { [roomName: string]: { [resourceType: string]: Resource[] } };

	build(): void;

	rebuild(): void;
}

interface IEmpire{
    cache: ICache;
    rooms: {[roomName: string]: any};

	build(): void;

	rebuild(): void;

	init(): void;

	run(): void;
}

declare var Empire: IEmpire;
