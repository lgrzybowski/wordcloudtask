import React from 'react'
import PropTypes from 'prop-types'

export default class TopicDetails extends React.Component {
  checkIsProperty (cloudItem) {
    if (cloudItem === undefined || cloudItem === null) {
      return false
    }
    return true
  }

  render () {
    return (
      <div className='topicDetails'>
        <ul className='cloudList'>
          <h3>You see details from topic '{this.props.cloud.label}'</h3>
          <li datatype='volume'>Volume: {this.props.cloud.volume} </li>
          {this.checkIsProperty(this.props.cloud.sentiment.negative) ? (
            <li datatype='negative'>Sentiment negative: {this.props.cloud.sentiment.negative} </li>) : ('')
                    }{this.checkIsProperty(this.props.cloud.sentiment.neutral) ? (
                      <li datatype='neutral'>Sentiment neutral: {this.props.cloud.sentiment.neutral} </li>) : ('')
                    }{this.checkIsProperty(this.props.cloud.sentiment.positive) ? (
                      <li datatype='positive'>Sentiment positive: {this.props.cloud.sentiment.positive} </li>) : ('')
                    }
        </ul>
      </div>
    )
  }
}

TopicDetails.propTypes = {
  cloud: PropTypes.object
}
