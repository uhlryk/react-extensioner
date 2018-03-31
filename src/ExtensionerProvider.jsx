import React from "react";
import PropTypes from "prop-types";
import { Manager } from "extensioner";
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
    manager: PropTypes.instanceOf(Manager).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};


export default ExtensionerProvider;
