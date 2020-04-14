import getDuration from './getDuration';

const dollarsInFlight = (
  reportedCases,
  num,
  factor,
  periodType,
  timeToElapse,
  avgDailyIncomeInUSD,
  avgDailyIncomePopulation
) => {
  const infectionsByTime = reportedCases * num * 2 ** factor;
  const days = getDuration(periodType, timeToElapse);

  return Math.trunc((infectionsByTime * avgDailyIncomePopulation
    * avgDailyIncomeInUSD) / days);
};

export default dollarsInFlight;
