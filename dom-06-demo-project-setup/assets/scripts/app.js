const startAddMovieBtn = document.querySelector('header button');

const addMovModalElement = document.getElementById('add-modal');

const bd = document.getElementById('backdrop');

const cancelBtn = addMovModalElement.querySelector('.btn--passive');

const toggleMovieModal = () => {
	addMovModalElement.classList.toggle('visible');
	toggleBackdrop();
};

const toggleBackdrop = () => {
	bd.classList.toggle('visible');
};

const cancelAddMovie = () => {
	toggleMovieModal();
};

const backdropClickHandler = () => {
	toggleMovieModal();
};

startAddMovieBtn.addEventListener('click', toggleMovieModal); 

bd.addEventListener('click', backdropClickHandler); //for clicking in backdrop

cancelBtn.addEventListener('click', cancelAddMovie);
