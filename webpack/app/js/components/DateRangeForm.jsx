import React from 'react';

const DateRangeForm = () => (
  <form>
    <div className="row">
      <div className="medium-6 columns">
        <label htmlFor="date__time__start">Start Date/Time
          <input id="date__time__start" type="datetime-local" required />
        </label>
      </div>
      <div className="medium-6 columns">
        <label htmlFor="datetime__end">End Date/Time
          <input id="datetime__end" type="datetime-local" required />
        </label>
      </div>
      <div className="columns">
        <input type="submit" className="button" value="Submit" />
      </div>
    </div>
  </form>
);

export default DateRangeForm;
