import * as React from 'react';
import TopFeedNav from './feedComponents/TopFeedNav';
import NewPostButton from './feedComponents/NewPostButton';


export default class FeedComponent extends React.Component {

    render() {
        return (<TopFeedNav></TopFeedNav>);
    }
}