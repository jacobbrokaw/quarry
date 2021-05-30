const pickaxes = {
	WOODEN: {
		name: 'wooden',
		details: null,
	},
	STONE: {
		name: 'stone',
		details: 'Enables coal mining.\nReceive 2 stone per swing.',
	},
};

const stats = {
	pickaxe: pickaxes.WOODEN,
	nextPickaxe: pickaxes.STONE,
	miningAmounts: {
		stone: 1,
		coal: 1,
	},
	sellValue: {
		stone: 1,
		coal: 3,
	},
};

const inv = {
	money: 0,
	stone: 0,
	coal: 0,
};

//#region Init
render();
//#endregion

//#region Basic functions
function render() {
	// Current Pickaxe
	document.querySelector('#pickaxe').textContent = stats.pickaxe.name;

	// Buy Pickaxe Button
	let nextPickaxe = document.querySelector('#nextPickaxe');
	let pickaxeDetails = document.querySelector('#pickaxeDetails');
	switch (stats.pickaxe) {
		case pickaxes.WOODEN:
			nextPickaxe.textContent = pickaxes.STONE.name.toUpperCase();
			pickaxeDetails.textContent = pickaxes.STONE.details;
			break;
		case pickaxes.STONE:
			break;
	}

	// Money
	document.querySelector('#moneyAmt').textContent = inv.money;

	// Mining Amounts
	document.querySelector('#miningAmtStone').textContent =
		stats.miningAmounts.stone;
	document.querySelector('#miningAmtCoal').textContent =
		stats.miningAmounts.coal;

	// Inventory Items
	switch (stats.pickaxe) {
		case pickaxes.STONE:
			document.getElementById('coal').style.display = 'unset';
			document.querySelector('#coalAmt').textContent = inv.coal;
		case pickaxes.WOODEN:
			document.querySelector('#stoneAmt').textContent = inv.stone;
	}

	renderNextPickaxe();
}

function renderNextPickaxe() {
	let button = document.getElementById('upgrade');
	let details = document.getElementById('pickaxeDetails');
	if (!stats.nextPickaxe) {
		button.style.display = 'none';
		details.style.display = 'none';
		return;
	}

	document.getElementById('nextPickaxe').textContent =
		stats.nextPickaxe.name.toUpperCase();
	details.textContent = stats.nextPickaxe.details;
}
//#endregion

//#region Actions
document.querySelector('#upgrade').onclick = () => {
	switch (stats.nextPickaxe) {
		case pickaxes.STONE:
			if (inv.money >= 3) {
				stats.pickaxe = pickaxes.STONE;
				inv.money -= 3;
				stats.nextPickaxe = null;
				stats.miningAmounts.stone = 2;
			}
			break;
	}

	render();
};

document.querySelector('#sell').onclick = () => {
	inv.money += inv.stone * stats.sellValue.stone;
	inv.stone = 0;
	inv.money += inv.coal * stats.sellValue.coal;
	inv.coal = 0;

	render();
};

document.querySelector('#mineStone').onclick = () => {
	inv.stone += stats.miningAmounts.stone;
	render();
};

document.querySelector('#mineCoal').onclick = () => {
	inv.coal += stats.miningAmounts.coal;
	render();
};

//#endregion
