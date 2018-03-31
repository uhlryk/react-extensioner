import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ExtensionerManagerContext from "./ExtensionerManagerContext";

class ExtensionerEvent extends React.Component {

    render() {
        return (
            <ExtensionerManagerContext.Consumer>
                {manager => manager.createEvent(this.props.name)(this.props.value).map((component, index) => <Fragment key={index}>{component}</Fragment>)}
            </ExtensionerManagerContext.Consumer>
        );
    }
}

ExtensionerEvent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};


export default ExtensionerEvent;
