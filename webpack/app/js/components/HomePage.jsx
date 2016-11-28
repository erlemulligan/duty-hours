/* import $ from 'jquery';
import Foundation from 'foundation-sites';
import 'foundation-sites/dist/plugins/foundation.core';
import 'foundation-sites/dist/plugins/foundation.tabs'; */
import React from 'react';
import DateRangeForm from './DateRangeForm';

class HomePage extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <ul className="tabs" data-tabs id="duty-hour-tabs">
          <li className="tabs-title is-active">
            <a href="#resident-calendar">Resident Calendar</a>
          </li>
          <li className="tabs-title"><a href="#resident-analysis">Resident Analysis</a></li>
          <li className="tabs-title"><a href="#admin-analysis">Administration Analysis</a></li>
        </ul>

        <div className="tabs-content" data-tabs-content="duty-hour-tabs">
          <div className="tabs-panel is-active" id="resident-calendar">
            <h3>Resident Calendar</h3>
            <DateRangeForm />
          </div>

          <div className="tabs-panel" id="resident-analysis">
            <h3>Resident Analysis</h3>
            <DateRangeForm />
          </div>

          <div className="tabs-panel" id="admin-analysis">
            <h3>Admin Analysis</h3>
            <DateRangeForm />
          </div>

        </div>
      </div>
    );
  }
}

export default HomePage;
