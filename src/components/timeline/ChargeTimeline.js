import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Resource from "components/Resource";
import { asPlural, expandableComponent, mergeByDateAndProject } from "./util";

function CollapsedProjectDetails({ project: { user, title, avatar, _id }, resources, handleExpand }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-primary is-image is-32x32">
        <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
      </div>
      <div className="timeline-content">
        <p className="heading"><a onClick={handleExpand}>{title}</a></p>
        <p>{resources.length} {asPlural("contribution", resources.length)}</p>
      </div>
    </li>
  );
}

function ExpandedProjectDetails({ project: { user, title, avatar, _id }, resources, handleExpand }) {
  return (
    <Fragment>
      <li className="timeline-item is-primary">
        <div className="timeline-marker is-primary is-image is-32x32">
          <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
        </div>
        <div className="timeline-content">
          <p className="heading">{resources.length} {asPlural("contribution", resources.length)}</p>
        </div>
      </li>
      <li className="timeline-header is-primary">
        <a><span className="tag is-primary" onClick={handleExpand}>{title}</span></a>
      </li>
      <li className="timeline-item is-primary">
        <div className="timeline-content">
          {resources.map((res, i) => <p key={i}><Resource resource={res}/></p>)}
        </div>
      </li>
    </Fragment>
  );
}

const TimelineDetails = expandableComponent(ExpandedProjectDetails, CollapsedProjectDetails);

function ExpandedDateView({ dateStr, projects, handleExpand }) {
  return (
    <Fragment>
      <li className="timeline-header is-primary">
        <a><span className="tag is-primary" onClick={handleExpand}>{dateStr}</span></a>
      </li>
      {projects.map((project, i) => <TimelineDetails key={i} {...project}/>)}
    </Fragment>
  )
}

function CollapsedDateView({ dateStr, projects, total, handleExpand }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <a onClick={handleExpand}>{dateStr}</a>
        </p>
        <p>{total} contributions - in {projects.length} {asPlural("project", projects.length)}</p>
      </div>
    </li>
  );
}

const TimelineEvent = expandableComponent(ExpandedDateView, CollapsedDateView);

const ChargeTimeline = ({ transactions }) => {
  return (
    <ul className="timeline">
      {mergeByDateAndProject(transactions).map((transaction, i) => <TimelineEvent key={i} {...transaction}/>)}
    </ul>
  );
};

export default ChargeTimeline