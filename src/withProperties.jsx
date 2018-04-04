import React from "react";
import ExtensionerManagerContext from "./ExtensionerManagerContext";

function withProperties(properties, WrappedComponent) {
    return () => (
        <ExtensionerManagerContext.Consumer>
            {manager => (
                <WrappedComponent
                    manager={manager}
                    {...properties.reduce(
                        (response, propName) =>
                            Object.assign(
                                {
                                    [propName]: manager.getPropertyValues(propName)
                                },
                                response
                            ),
                        {}
                    )}
                />
            )}
        </ExtensionerManagerContext.Consumer>
    );
}

export default withProperties;
