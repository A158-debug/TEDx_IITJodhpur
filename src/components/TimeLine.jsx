import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillAlarmFill } from "react-icons/bs";


const TimeLine = () => {
  return (
    <>
      <section>
        <h1 className="mb-3 text-center" style={{fontWeight:'bold'}}>
          Programme <span style={{ color: "red" }}> Schedule</span>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10:30 - start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 1 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Abhishek Surana
            </h4>
            <p>IAS CEO, Zila Parishad Jodhpur</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:00 - start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 2 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Aman Goel
            </h4>
            <p>CEO & Co-founder Cogno AI,Angel Investor</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="11:45 - start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 3 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Kiran Verma
            </h4>
            <p>Community Leader and Change Maker - Founder Simply Blood</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="13:45 start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 4 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Ms Licypriya Kangujam
            </h4>
            <p>India's Youngest Climate Activist</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="14:15 start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 5 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Akshat Gupta
            </h4>
            <p>Author, Poet, Lyricist, Screenwriter</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="14:45 start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 6 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Ms. Ruma Devi
            </h4>
            <p>
              Social Activist -Recipient of Highest Civilian Honour for Women in
              India, Nari Shakti Puraskar
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="15:45 start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 7 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Dr. Kuldeep Singh
            </h4>
            <p>Public Health Expert Dean Academics, AIIMS Jodhpur</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FE2A06", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="16:10 start"
            iconStyle={{ background: "#FE2A06", color: "#fff" }}
            icon={<BsFillAlarmFill />}
          >
            <h3 className="vertical-timeline-element-subtitle">Talk 8 </h3>
            <h4
              className="vertical-timeline-element-title"
              style={{ fontWeight: "bold" }}
            >
              Mr. Rahul Chaudhari
            </h4>
            <p>Indian International Kabaddi Player</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
};

export default TimeLine;
