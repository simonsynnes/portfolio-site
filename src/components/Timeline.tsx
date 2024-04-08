/* eslint-disable max-len */
import React from "react";

import timeline from "./data/timeline";
import { TimelineProps } from "./data/timelineInterface";
import TimelineItem from "./TimelineItem";

/**
 * Timeline
 */
const Timeline = () => (
  <div className="flex flex-col md:flex-row justify-center my-20 w-full md:w-7/12">
    <div className="w-full md:w-7/12">
      {timeline.map((item: TimelineProps) => (
        <React.Fragment key={item.details}>
          <TimelineItem
            details={item.details}
            duration={item.duration}
            title={item.title}
            year={item.year}
          />
        </React.Fragment>
      ))}
    </div>
  </div>
);
export default Timeline;
