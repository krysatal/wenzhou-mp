import React, {Component} from 'react'
import {Button, DatePicker, version} from 'antd'
import 'antd/dist/antd.less'
import '../App.scss'
import axios from 'axios'
// import './settupProxy'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    componentDidMount() {
        axios.get('/api?json=true').then((res) => {
            console.log(res)
        }).catch((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>
            </div>
        )
    }
}
export default App
