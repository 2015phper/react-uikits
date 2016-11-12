import React, { Component } from 'react'
import {ConfirmBox} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIConfirmBox extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {props} = this
        let className = klassName(NS, props.className)
        return (
            <ConfirmBox {...props} className={className} />
        )
    }
}

UIConfirmBox.defaultProps = {
    confirm: <button className={`${NS} tiny blue button`}>确认</button>,
    cancel: <button className={`${NS} tiny button`}>取消</button>,
}


export default UIConfirmBox