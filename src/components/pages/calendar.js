import React from 'react';

export default class Calendar extends React.Component {
  render() {
    return (
      <div id="calendar" className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="bs-panel-header-text">Calendar</h1>
            <iframe className="calendarFrame d-xs-block d-sm-none" title="xs-calendar"
              src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=aW82a290bGY2cDU1bDcwMmVkdW02dGkxMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23006aa3&amp;showPrint=0&amp;showCalendars=0&amp;mode=AGENDA&amp;showTabs=0&amp;showNav=0"
              style={{ borderWidth: 0 }} width="300" height="500" frameBorder="0" scrolling="no"></iframe>
            <iframe className="calendarFrame d-none d-sm-block d-md-none" title="sm-calendar"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=aW82a290bGY2cDU1bDcwMmVkdW02dGkxMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23006aa3&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0"
              style={{ borderWidth: 0 }} width="450" height="450" frameBorder="0" scrolling="no"></iframe>
            <iframe className="calendarFrame d-none d-md-block d-lg-none" title="md-calendar"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=aW82a290bGY2cDU1bDcwMmVkdW02dGkxMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23006aa3&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0"
              style={{ borderWidth: 0 }} width="650" height="550" frameBorder="0" scrolling="no"></iframe>
            <iframe className="calendarFrame d-none d-lg-block d-xl-none" title="lg-calendar"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=aW82a290bGY2cDU1bDcwMmVkdW02dGkxMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23006aa3&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0"
              style={{ borderWidth: 0 }} width="900" height="550" frameBorder="0" scrolling="no"></iframe>
            <iframe className="calendarFrame d-none d-xl-block" title="xl-calendar"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=aW82a290bGY2cDU1bDcwMmVkdW02dGkxMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23006aa3&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0"
              style={{ borderWidth: 0 }} width="1100" height="550" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>

    )
  }
}