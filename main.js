//#region Init
const inv = {
	money: 0,
	stone: 0,
};

updateInv();
//#endregion

//#region Basic functions
function updateInv() {
	document.querySelector('#moneyAmt').textContent = inv.money;
	document.querySelector('#stoneAmt').textContent = inv.stone;
}
//#endregion

//#region Actions
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
