import './app.less'
import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Table from '../src/Table'
import packageJson from '../package.json'
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let columns = ['示例1','示例2','示例3']
        let tdata = ['1','2','3']
        return (
            <div className="app">
                <h1>{packageJson.name}</h1>
                <h2>{packageJson.description}</h2>
                <form>
                    <Table columns={columns} tdata={tdata}></Table>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
