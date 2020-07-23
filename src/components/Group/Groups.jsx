import React, { Fragment, useContext } from 'react';
import FlickerContext from '../../context/flicker/flickerContext';
import GroupItem from './GroupItem';
import PieChart from './PieChart';
import SearchGroup from './SearchGroup'

const Groups = () => {

    const flickerContext = useContext(FlickerContext);
    const { groups } = flickerContext;

    return (
        <Fragment>
            <SearchGroup />
            <PieChart />
            <div className="row">
                { groups && groups.map(group => <GroupItem key={group.nsid} group={group} />) }
            </div>
        </Fragment>
    )
}

export default Groups
