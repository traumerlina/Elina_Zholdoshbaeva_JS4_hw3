import React from "react";

class DemoPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div style={{margin: '40px'}}>
                <p>
                    {this.props.definition}
                </p>
            </div>
        )
    }
}

export default DemoPage;