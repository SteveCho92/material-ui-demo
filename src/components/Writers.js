import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Writer from './Writer';
import Table from './Table';
//component recieves one props object as param.  Here we extract out writers, and match: url from props.
//When routed to this component using Router, props will include history, location, and match as props
export default ({match:{url}, writers}) =>
    <Fragment>
        <Table writers={writers}/>
        {/*case when writer id path doesn't exist*/}
        <Route exact path={url} render={
            () => <h3>Please select writer from above</h3>
        }/>
        {/*:writerId is a variable to be matched to the id.  ':' in url is a variable*/}
        <Route path={`${url}/:writerId`} render={
            props => {
                const writer = writers.find(({id}) => id === props.match.params.writerId);

                if (!writer) {
                    return <h3>Writer Not Found</h3>
                }
                return <Writer {...props} {...writer}/>
            }
        }/>
    </Fragment>
