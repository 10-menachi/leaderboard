import showScores from './showScores';

const addScore = async (user, score) => {
  const gameId = 'IIAmr36goQ8EZ3qWfeMY';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const newScore = {
    user, score,
  };
  const postScore = async () => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  };

  showScores();
  const response = await postScore().then((data) => data);
  return response;
};
export default addScore;
