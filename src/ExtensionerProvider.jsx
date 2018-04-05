import React from "react";
import PropTypes from "prop-types";
import ExtensionerManagerContext from "./ExtensionerManagerContext";

class ExtensionerProvider extends React.Component {

    render() {
        return (
            <ExtensionerManagerContext.Provider value={this.props.manager}>
                {this.props.children}
            </ExtensionerManagerContext.Provider>
        );
    }
}

ExtensionerProvider.propTypes = {
    manager: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};


export default ExtensionerProvider;
