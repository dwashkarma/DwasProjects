
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
//importing css file of this  vertical timeline library...
import SchoolIcon from '@mui/icons-material/School';


export default function Education() {
  return (
    <div className='education'>
      <div>
       <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018 AD' iconStyle={{background:'rgb(44, 37, 77)', color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Munal Academy (SEE)</h3> 
          </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2020AD'iconStyle={{background:'rgb(44, 37, 77)', color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Oxford Secondary College (+2)</h3> 
          </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2021 AD to Present'iconStyle={{background:'rgb(44, 37, 77)', color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Texas College of Management and IT (Bachelor)</h3> 
          </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022 AD'iconStyle={{background:'rgb(44, 37, 77)', color:'#fff'}} icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Python and Django | BROADWAY INFOSYS </h3> 
          </VerticalTimelineElement>
       </VerticalTimeline>
      </div>
    </div>
  )
}
