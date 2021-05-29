const pickaxes = {
	WOODEN: 'wooden',
	STONE: 'stone',
};

//#region Init
const inv = {
	pickaxe: pickaxes.WOODEN,
	money: 0,
	stone: 0,
};

updateInv();
//#endregion

//#region Basic functions
function updateInv() {
	document.querySelector('#pickaxe').textContent = inv.pickaxe;

	let nextPickaxe = document.querySelector('#nextPickaxe');
	switch (inv.pickaxe) {
		case pickaxes.WOODEN:
			nextPickaxe.textContent = pickaxes.STONE.toUpperCase();
			break;
		case pickaxes.STONE:
			nextPickaxe.textContent = 'Implement this'; // TODO: Implement next pickaxe
			break;
	}

	document.querySelector('#moneyAmt').textContent = inv.money;
	document.querySelector('#stoneAmt').textContent = inv.stone;
}
//#endregion

//#region Actions
document.querySelector('#upgrade').onclick = () => {
	switch (inv.pickaxe) {
		case pickaxes.WOODEN:
			if (inv.money >= 50) inv.pickaxe = pickaxes.STONE;
			break;
	}

	updateInv();
};

document.querySelector('#sell').onclick = () => {
	inv.money += inv.stone;
	inv.stone = 0;
	updateInv();
};

document.querySelector('#mineStone').onclick = () => {
	inv.stone++;
	updateInv();
};

//#endregion
