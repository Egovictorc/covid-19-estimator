import getFactor from './getFactor';
import currentlyInfected from './currentlyInfected';
import infectionsByTime from './infectionsByTime';
import severeByTime from './severeByTime';
import bedsByTime from './bedsByTime';
// challenge 3 files
import dollarsInFlight from './dollarsInFlight';


const covid19ImpactEstimator = (data) => {
  const {
    reportedCases, periodType, timeToElapse, totalHospitalBeds, region
  } = data;
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;
  const factor = getFactor(periodType, timeToElapse);
  const availableBeds = (35 / 100) * totalHospitalBeds;

  return {
    data,
    impact: {
      currentlyInfected: currentlyInfected(reportedCases, 10),
      infectionsByRequestedTime: infectionsByTime(reportedCases, 10, factor),
      severeCasesByRequestedTime: severeByTime(reportedCases, 10, factor),
      hospitalBedsByRequestedTime: bedsByTime(availableBeds, reportedCases, 10, factor),
      casesForICUByRequestedTime: Math.trunc(
        (5 / 100) * infectionsByTime(reportedCases, 10, factor)
      ),
      casesForVentilatorsByRequestedTime: Math.trunc(
        (2 / 100) * infectionsByTime(reportedCases, 10, factor)
      ),
      dollarsInFlight: dollarsInFlight(
        reportedCases, 10, factor, periodType, timeToElapse, avgDailyIncomeInUSD,
        avgDailyIncomePopulation
      )
    },
    severeImpact: {
      currentlyInfected: currentlyInfected(reportedCases, 50),
      infectionsByRequestedTime: infectionsByTime(reportedCases, 50, factor),
      severeCasesByRequestedTime: severeByTime(reportedCases, 50, factor),
      hospitalBedsByRequestedTime:
      bedsByTime(availableBeds, reportedCases, 50, factor),
      casesForICUByRequestedTime: Math.trunc(
        (5 / 100) * infectionsByTime(reportedCases, 50, factor)
      ),
      casesForVentilatorsByRequestedTime: Math.trunc(
        (2 / 100) * infectionsByTime(reportedCases, 50, factor)
      ),
      dollarsInFlight: dollarsInFlight(
        reportedCases, 50, factor, periodType, timeToElapse, avgDailyIncomeInUSD,
        avgDailyIncomePopulation
      )
    }
  };
};

export default covid19ImpactEstimator;
