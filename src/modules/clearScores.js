import showScores from './showScores';

const clearScores = () => {
  localStorage.setItem('scores', JSON.stringify([]));
  showScores();
};
export default clearScores;
