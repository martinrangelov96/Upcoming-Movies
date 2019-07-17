function getScore(score: number): string {
  if (score > 0) {
    return `${score}/10`;
  }
    return 'N/A';
}

export default getScore;
