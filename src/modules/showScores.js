import getScores from './getScores';

const showScores = async () => {
  const scores = await getScores();
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  scores.forEach((score) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const scoreCell = document.createElement('td');
    nameCell.textContent = score.user;
    scoreCell.textContent = score.score;
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    tableBody.appendChild(row);
  });
};
export default showScores;
