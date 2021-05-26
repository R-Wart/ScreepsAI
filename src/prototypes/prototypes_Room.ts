Object.defineProperty(Room.prototype, 'my', {
	get () {
		return this.controller && this.controller.my;
	},
});

Object.defineProperty(Room.prototype, 'structures', {
	get () {
		return Empire.cache.structures[this.name];
	},
});

Object.defineProperties(Room.prototype, {
	// Spawns in the room
	spawns: {
		get() {
			return this.structures[STRUCTURE_SPAWN] || [];
		},
	},
});
