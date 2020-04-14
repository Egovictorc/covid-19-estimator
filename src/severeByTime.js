const severeByTime = (reportedCases, num, factor) => Math.trunc(
  (15 / 100) * (reportedCases * num * (2 ** factor))
);

export default severeByTime;
