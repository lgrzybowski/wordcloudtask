import React from 'react'
import d3Cloud from 'd3-cloud'
import PropTypes from 'prop-types'
import TopicDetails from './TopicDetails'
import fetchData from '../../api/dataFetch';
import helperObject from '../helpingMethods/helpers';

export default class MainClass extends React.Component {
  constructor () {
    super();
    this.state = {
      cloud: [],
      openTopicComponent: false,
      currentTopic: null
    };

    this.clickTopic = this.clickTopic.bind(this)
  }

  componentDidMount () {
    fetchData.fetchData()
            .then(data => {
              let topics = helperObject.defineObjectWithFontSize(data, this.props.fontSizes);

              d3Cloud()
                    .size([this.props.width, this.props.height])
                    .words(topics)
                    .padding(5)
                    .text((data) => data.topic.id)
                    .random(() => 0.5)
                    .fontSize(15)
                    .rotate(() => 0)
                    .on('end', (cloud) => {
                      this.setState({cloud: cloud})
                    })
                    .start()
            })
  }

  renderTopicInfo () {
    if (this.state.openTopicComponent === true) {
      return <TopicDetails cloud={this.state.currentTopic} />
    } else {
      return (
        <div className='defaultCloudText'>Click on topic cloud to see more details</div>
      )
    }
  }

  clickTopic (currentItem) {
    this.setState({
      openTopicComponent: true,
      currentTopic: currentItem
    })
  }

  render () {
    return (
      <div className='topicCloud'>
        <div className='cloudComponent'>
          <svg width={this.props.width} height={this.props.height}>
            <g transform={`translate(${this.props.width / 2}, ${this.props.height / 2})`}>
              {this.state.cloud.map(item => {
                return <text
                  key={item.topic.id}
                  onClick={() => this.clickTopic(item.topic)}
                  style={{
                    fontSize: item.fontSize
                  }}
                  datatype={item.topic.label}
                  className={helperObject.setColor(item)}
                  textAnchor='middle'
                  transform={`translate(${item.x}, ${item.y} )`}
                                >{item.topic.label}</text>
              })}
            </g>
          </svg>
        </div>
        <div className='detailsComponent'>
          {this.renderTopicInfo()}
        </div>
      </div>
    )
  }
}

MainClass.propTypes = {
  fontSizes: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number
};

MainClass.defaultProps = {
  width: 600,
  height: 600,
  fontSizes: [35, 30, 20, 18, 17, 15]
};
