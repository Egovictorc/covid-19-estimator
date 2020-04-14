const severeByTime = (availableBeds, reportedCases, num, factor) => {
  const severeCases = (15 / 100) * (reportedCases * num * (2 ** factor));

  return Math.trunc(availableBeds - severeCases);
};

export default severeByTime;
