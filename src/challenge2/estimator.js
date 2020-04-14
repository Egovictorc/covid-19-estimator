import getDays from './getDays';
import currentlyInfected from './currentlyInfected';
import infectionsByTime from './infectionsByTime';
import severeByTime from './severeByTime';
import bedsByTime from './bedsByTime';

const covid19ImpactEstimator = (data) => {
  const {
    reportedCases, periodType, timeToElapse, totalHospitalBeds
  } = data;
  const factor = getDays(periodType, timeToElapse);
  const availableBeds = (35 / 100) * totalHospitalBeds;

  return {
    data,
    impact: {
      currentlyInfected: currentlyInfected(reportedCases, 10),
      infectionsByRequestedTime: infectionsByTime(reportedCases, 10, factor),
      severeCasesByRequestedTime: severeByTime(reportedCases, 10, factor),
      hospitalBedsByRequestedTime: bedsByTime(availableBeds, reportedCases, 10, factor)
    },
    severeImpact: {
      currentlyInfected: currentlyInfected(reportedCases, 50),
      infectionsByRequestedTime: infectionsByTime(reportedCases, 50, factor),
      severeCasesByRequestedTime: severeByTime(reportedCases, 50, factor),
      hospitalBedsByRequestedTime:
      bedsByTime(availableBeds, reportedCases, 50, factor)
    }
  };
};

export default covid19ImpactEstimator;
