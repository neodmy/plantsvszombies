const expect = require('expect.js');
const { create } = require('../../lib/zombies/factory')();
const createPlantSpy = require('../spies/plant');

describe('Basic zombie features', () => {
	let zombie;
	let plantSpy;

	beforeEach(() => {
		zombie = create('basic');
		plantSpy = createPlantSpy();
	});

	it('configures its basic parameters', () => {
		expect(zombie.id).to.be.a('string');
		expect(zombie.avatar).to.be.a('string');
		expect(zombie.toughness).to.equal(200);
		expect(zombie.speed).to.equal(1);
	});

	it('can die', () => {
		expect(zombie.toughness).to.equal(200);
		expect(zombie.die().toughness).to.equal(0);
	});

	it('can be harmed', () => {
		expect(zombie.toughness).to.equal(200);
		expect(zombie.harm(20).toughness).to.equal(180);
	});

	it('can eat a plant', () => {
		expect(plantSpy.biteCalls).to.eql([]);
		expect(zombie.eat(plantSpy));
		expect(plantSpy.biteCalls).to.eql([[]]);
	});
});
