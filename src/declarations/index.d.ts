declare var global: any;

declare namespace NodeJS {
	interface Global {
		Empire: IEmpireManager;
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

interface IEmpireManager{
    cache: ICache;
    Colonies: {[id: string]: any};

	build(): void;

	rebuild(): void;

	init(): void;

	run(): void;
}

declare var Empire: IEmpireManager;
