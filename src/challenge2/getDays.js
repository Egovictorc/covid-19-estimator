export default function getDays(periodType, timeToElapse) {
  let days = timeToElapse;

  switch (periodType) {
    case 'weeks':
      days = 7 * timeToElapse;
      return Math.trunc(days / 3);

    case 'months':
      days = 30 * timeToElapse;
      return Math.trunc(days / 3);

    default:
      return Math.trunc(days / 3);
  }
}
