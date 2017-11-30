import React from 'react'
import '../stylesheets/ui.scss'

export const CodingDayCount = React.createClass({
  render() {
    return (
      <div className="coding-day-count">
        <div className="total-days">
          <span>5 Days</span>
        </div>
        <div className="react-days">
          <span>3 Days</span>
        </div>
        <div className="html-days">
          <span>2 Dats</span>
        </div>
      </div>
    )
  }
})