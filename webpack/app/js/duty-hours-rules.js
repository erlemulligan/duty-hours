/* duty hours rules go here */

const dutyHoursRules = (
  maxHoursPerWeek = 80,
  weekPeriod = 4,
  dayOffPerWeek = 1,
  maxShiftHours = 24,
  minHoursOffBetweenShifts = 8,
) => {
  this.maxHoursPerWeek = maxHoursPerWeek;
  this.weekPeriod = weekPeriod;
  this.dayOffPerWeek = dayOffPerWeek;
  this.maxShiftHours = maxShiftHours;
  this.minHoursOffBetweenShifts = minHoursOffBetweenShifts;

  this.dutyHoursLimit = (dutyHours) => {
    let isWithinLimit = false;

    if (dutyHours <= ((this.weekPeriod * this.maxHoursPerWeek))) {
      isWithinLimit = true;
    }

    return isWithinLimit;
  };
};

export default dutyHoursRules;
