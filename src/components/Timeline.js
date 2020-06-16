import React from 'react'

import { TimelineWrapper, Event } from './Timeline.styles.js'
import Timestamp from '../elements/Timestamp'

const Timeline = ({ events }) => {
  return (
    <TimelineWrapper>
      <ul>
        {Object.keys(events).map((event, index) => {
          return (
            <Event key={event} color={events[event].color}>
              <dl>
                <dd>{events[event].desc}</dd>
                <dt>
                  <Timestamp small timestamp={events[event].time} />
                </dt>
              </dl>
            </Event>
          )
        })}
      </ul>
    </TimelineWrapper>
  )
}

export default Timeline
