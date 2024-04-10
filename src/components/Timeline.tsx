import React from "react";

import timeline from "./data/timeline";
import { TimelineProps } from "./interfaces/timelineInterface";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
/**
 * Timeline
 */
const Timeline = () => (
  <div className="flex flex-col md:flex-row justify-center">
    <div className=" my-20 w-full md:w-7/12">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
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
  </div>
);
export default Timeline;
