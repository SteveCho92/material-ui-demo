import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

export default ({match: {url}, name, born, deceased, description, image }) =>
  <Fragment>
    <img src={image} alt={name} style={{maxWidth: 300}}/>

    <h1>{name}</h1>

    <h3>
      {born} &mdash; {deceased}
    </h3>
    
    <p>
      {description}
    </p>
    {
      /* <ul>
        {texts.map(({id, title}) => 
            <li key={id}>
                <Link to={`${url}/texts/${id}`}>{title}</Link>
            </li>
        )}
    </ul>

    <Route path={`${url}/texts/:textId`} render={
        props => {
            const text = texts.find(({id}) => id === props.match.params.textId);
            if (!text) {
                return <div>Text Not Found</div>
            }
            return <Text {...text}/>
        }
    }/> */
    }

  </Fragment>