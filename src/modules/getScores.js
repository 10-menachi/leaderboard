const getScores = () => {
  let scores = [];
  if (localStorage.getItem('scores')) {
    scores = JSON.parse(localStorage.getItem('scores'));
  }
  return scores;
};

export default getScores;
