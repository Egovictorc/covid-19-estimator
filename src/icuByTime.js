const icuByTime = (reportedCases, num, factor) => Math.trunc(
  (5 / 100) * reportedCases * num * 2 ** factor
);

export default icuByTime;
