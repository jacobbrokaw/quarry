const pickaxes = {
	WOODEN: 'wooden',
	STONE: 'stone',
};

const stats = {
	pickaxe: pickaxes.WOODEN,
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
	document.querySelector('#pickaxe').textContent = stats.pickaxe;

	// Buy Pickaxe Button
	let nextPickaxe = document.querySelector('#nextPickaxe');
	switch (stats.pickaxe) {
		case pickaxes.WOODEN:
			nextPickaxe.textContent = pickaxes.STONE.toUpperCase();
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
}
//#endregion

//#region Actions
document.querySelector('#upgrade').onclick = () => {
	switch (stats.pickaxe) {
		case pickaxes.WOODEN:
			if (inv.money >= 3) {
				stats.pickaxe = pickaxes.STONE;
				inv.money -= 3;
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
