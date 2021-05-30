const pickaxes = {
	WOODEN: 'wooden',
	STONE: 'stone',
};

const inv = {
	pickaxe: pickaxes.WOODEN,
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
	document.querySelector('#pickaxe').textContent = inv.pickaxe;

	// Buy Pickaxe Button
	let nextPickaxe = document.querySelector('#nextPickaxe');
	switch (inv.pickaxe) {
		case pickaxes.WOODEN:
			nextPickaxe.textContent = pickaxes.STONE.toUpperCase();
			break;
		case pickaxes.STONE:
			break;
	}

	//

	// Inventory Items
	document.querySelector('#moneyAmt').textContent = inv.money;

	switch (inv.pickaxe) {
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
	switch (inv.pickaxe) {
		case pickaxes.WOODEN:
			if (inv.money >= 15) inv.pickaxe = pickaxes.STONE;
			inv.money -= 15;
			break;
	}

	render();
};

document.querySelector('#sell').onclick = () => {
	inv.money += inv.stone;
	inv.stone = 0;
	render();
};

document.querySelector('#mineStone').onclick = () => {
	inv.stone++;
	render();
};

//#endregion
