function create_grid(n)
{	
	const gridContainer = document.getElementById('grid-container');
	gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

	let div = document.createElement('div');
	div.classList.add("tile");

	for(i = 0; i < n * n; i++)
	{
		gridContainer.appendChild(div.cloneNode(true));
	}
}

function remove_all() 
{
	const gridContainer = document.getElementById('grid-container');
	while(gridContainer.firstChild)
	{
		gridContainer.removeChild(gridContainer.lastChild);
	}
}

function new_grid()
{
	remove_all();
	create_grid(slider.value);
	sliderHead.innerHTML = `${slider.value} x ${slider.value}`;

	const tiles = document.querySelectorAll(".tile");
	tiles.forEach((tile) => {
		tile.addEventListener('mouseover', () => {
			tile.classList.add("tile-active");
		});
	});
}

const slider = document.getElementById("scroller");
const sliderHead = document.querySelector(".scroll-head");
const Btns = document.querySelectorAll("button");
const eraseBtn = document.getElementById("button-eraser");
const brushBtn = document.getElementById("button-brush");

brushBtn.classList.add("button-active");

new_grid();
slider.oninput = () => new_grid();

document.getElementById("button-reset").addEventListener('click', () => {

	Btns.forEach((btn) => {
		btn.classList.remove("button-active");
	})

	brushBtn.classList.add("button-active");

	const tiles = document.querySelectorAll(".tile");
	tiles.forEach((tile) => {
		tile.classList.remove("tile-active");
	});
});

eraseBtn.addEventListener('click', () => {
	Btns.forEach((btn) => {
		btn.classList.remove("button-active");
	})

	eraseBtn.classList.add("button-active");

	const tiles = document.querySelectorAll(".tile");
	tiles.forEach((tile) => {
		tile.addEventListener('mouseover', () => {
			tile.classList.remove("tile-active");
		});
	});
})

brushBtn.addEventListener('click', () => {

	Btns.forEach((btn) => {
		btn.classList.remove("button-active");
	})

	brushBtn.classList.add("button-active");

	const tiles = document.querySelectorAll(".tile");
	tiles.forEach((tile) => {
		tile.addEventListener('mouseover', () => {
			tile.classList.add("tile-active");
		});
	});
});