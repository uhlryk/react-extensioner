import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { syncMapCompose } from "extensioner";
import ExtensionerManagerContext from "./ExtensionerManagerContext";

class ExtensionerEvent extends React.Component {
    render() {
        return (
            <ExtensionerManagerContext.Consumer>
                {manager =>
                    Object.entries(
                        manager.createEvent(this.props.name, syncMapCompose)(
                            this.props.value
                        )
                    ).map(([ extensionName, result ]) => (
                        <Fragment key={this.props.name + "_" + extensionName}>
                            {result}
                        </Fragment>
                    ))
                }
            </ExtensionerManagerContext.Consumer>
        );
    }
}

ExtensionerEvent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any
};

export default ExtensionerEvent;
