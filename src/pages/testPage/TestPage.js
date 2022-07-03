import React from "react";

class TestPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div style={{margin: '40px'}}>
                <h3>
                    {this.props.title}
                </h3>
            </div>
        )
    }
}

export default TestPage;