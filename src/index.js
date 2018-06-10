import React from "react";
import ReactDOM from "react-dom";

import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class HowOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      age: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      age: {
        years: moment().diff(date, "years")
        // months and days maybe?
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Age now?</h1>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showYearDropdown
          dateFormatCalendar="MMMM"
          scrollableYearDropdown
          yearDropdownItemNumber={15}
        />
        <div>
          {this.state.age ? (
            <output className="output">
              {this.state.age.years} years old!
            </output>
          ) : null}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<HowOld />, rootElement);
