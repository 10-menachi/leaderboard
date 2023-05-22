import getScores from './getScores';
import Score from './score';

const addScore = (name, score) => {
  const scores = getScores();
  const newScore = new Score(scores.length + 1, name, score);
  scores.push(newScore);
  localStorage.setItem('scores', JSON.stringify(scores));
};
export default addScore;
