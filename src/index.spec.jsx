import React from "react";
import { ExtensionerProvider, ExtensionerEvent } from "./index.js";
import { Manager } from "extensioner";
describe("base", () => {
    it("should render extension component", () => {
        const manager = new Manager();
        manager.registerExtension("TEST_EXTENSION", {
            events: {
                "TEST_EVENT": value => <div className="TEST_COMPONENT">{value}</div>
            }
        });
        const wrapper = Enzyme.mount(
            <ExtensionerProvider manager={ manager }>
                <ExtensionerEvent name="TEST_EVENT" value="TEST_VALUE" />
            </ExtensionerProvider>
        );
        expect(wrapper.contains(<div className="TEST_COMPONENT">TEST_VALUE</div>)).to.be.true();
    });
});
