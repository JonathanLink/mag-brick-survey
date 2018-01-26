import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from 'sq-web-components-core-react/forms/Button'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Dialog, {DialogHeader, DialogContent, DialogFooter  } from 'sq-web-components-core-react/collections/Dialog'
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Checkbox from 'sq-web-components-core-react/forms/Checkbox'
import List, { ListItem } from "sq-web-components-core-react/collections/List"
import Badge from "sq-web-components-core-react/elements/Badge"
import {IconMoreHorizontal} from "sq-web-icons"
import { say }  from "cowsay"

import '../assets/styles.css'

class Start extends Component {
    
    constructor() {
        super()
        console.log( say( {text: "survey admin"}) )

    }

    componentWillMount() {
        this.props.setBackButton(false)
    }

    async componentDidMount() {
       
    }


    render() {
        return (
            <Row>
                <RowItem style={ { textAlign: "right"} } >
                    <Link to={ '/survey/create/' } >
                        <Button level="success">Create the survey</Button>
                    </Link>
                </RowItem>
            </Row>
        )
    }


}

export default Start



