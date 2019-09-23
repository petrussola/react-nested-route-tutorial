import React from 'react';
import { Route, Link} from 'react-router-dom';

import TopicCard from './TopicCard';

export default function Topics (props) {
    const { topics, match } = props;
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                {
                    topics.map( topic => {
                        return <li><Link to={`${match.url}/${topic.id}`}>{topic.name}</Link></li>
                    })
                }
            </ul>

            <Route path={`${match.path}/:id`} render={ props => <TopicCard {...props} topics={topics} />}/>
        </div>
    )
}