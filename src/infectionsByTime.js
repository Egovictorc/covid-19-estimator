const infectionsByTime = (reportedCases, num, factor) => reportedCases * num * 2 ** factor;

export default infectionsByTime;
