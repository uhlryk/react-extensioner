import React from "react";
import PropTypes from "prop-types";
import ExtensionerManagerContext from "./ExtensionerManagerContext";

class ExtensionerEvent extends React.Component {

    render() {
        return (
            <ExtensionerManagerContext.Consumer>
                {manager => manager.createEvent(this.props.name)(this.props.value)}
            </ExtensionerManagerContext.Consumer>
        );
    }
}

ExtensionerEvent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};


export default ExtensionerEvent;
