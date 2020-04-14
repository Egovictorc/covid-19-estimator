export default function getFactor(periodType, timeToElapse) {
  switch (periodType) {
    case 'weeks':
      return 7 * timeToElapse;

    case 'months':
      return 30 * timeToElapse;

    default:
      return timeToElapse;
  }
}
