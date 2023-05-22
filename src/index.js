import addScore from './modules/addScore';
import clearScores from './modules/clearScores';
import showScores from './modules/showScores';
import './styles.css';

const form = document.querySelector('.scores');
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  clearScores();
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(form.name.value, form.score.value);
  form.reset();
  showScores();
});
showScores();
