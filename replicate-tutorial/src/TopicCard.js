import React from "react";
import { Route, Link } from "react-router-dom";

import Resource from './Resource';

export default function TopicCard(props) {
  const { topics, match } = props;
  debugger
  const topic = topics.find(topic => {
    return topic.id === match.params.id;
  });
  return (
    <div>
      <h1>{topic.name}</h1>
      <p>{topic.description}</p>
      <ul>
        {
            topic.resources.map(item => {
          return <li><Link to={`${match.url}/${item.id}`}>{item.name}</Link></li>
        })
        }
      </ul>
      <Route path={`${match.path}/:subid`} render={props => <Resource {...props} resource={topic.resources} />} />
    </div>
  );
}
