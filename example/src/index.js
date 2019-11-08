import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import styles from '.styles/css';
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component{

static propTypes = 
{
    text: PropTypes.string,
    color: PropTypes.string
}

render()
{
    const { text,color}= this.props;
 return(
     <div>
         example : {text} + {color}
         <h1 style={{color}}>{text}</h1>
     </div>
 )
}
}

// ReactDOM.render(<App />, document.getElementById('root'))
