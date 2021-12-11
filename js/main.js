'use strict';

function shareDish() {
	const EL_SHARE_MODAL = document.querySelector('.share-modal');
	const EL_CLOSE_MODAL = document.querySelector('.close-modal');

	EL_SHARE_MODAL.style.display = 'block';

	EL_CLOSE_MODAL.onclick = () => EL_SHARE_MODAL.style.display = 'none';
	
	window.onclick = (event) => {
		if (event.target === EL_SHARE_MODAL) EL_SHARE_MODAL.style.display = 'none';
	}
}

function favDish(btn) {
    btn.classList.toggle('fav-btn-on');
}

function deleteDish(dish) {
	dish.parentNode.parentNode.style.display = 'none';
}
