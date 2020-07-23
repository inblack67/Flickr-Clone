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
            <PieChart />
            <SearchGroup />
            <div className="card">
                <div className="card-content">
                    <div className="row">
                        { groups && groups.map(group => <GroupItem key={group.nsid} group={group} />) }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Groups
