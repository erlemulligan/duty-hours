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

  this.withinDutyHoursLimit = (dutyHours) => {
    let isWithinLimit = false;

    if (dutyHours <= ((this.weekPeriod * this.maxHoursPerWeek))) {
      isWithinLimit = true;
    }

    return isWithinLimit;
  };

  this.hadRequiredTimeOff = (consecutiveHoursOff) => {
    let withinRequiredTimeOff = false;

    if (consecutiveHoursOff >= this.dayOffPerWeek * 24) {
      withinRequiredTimeOff = true;
    }

    return withinRequiredTimeOff;
  };

  this.isWithinShiftMaximumHours = (dutyShiftHours) => {
    let withInMaxHours = false;

    if (dutyShiftHours <= this.maxShiftHours) {
      withInMaxHours = true;
    }

    return withInMaxHours;
  };

  this.hasMinimumTimeOffBetweenShifts = (timeOffBetweenShifts) => {
    let hadMinTimeOff = false;

    if (timeOffBetweenShifts < minHoursOffBetweenShifts) {
      hadMinTimeOff = true;
    }

    return hadMinTimeOff;
  };
};

export default dutyHoursRules;
