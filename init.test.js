import chai from "chai";
import dirtyChai from "dirty-chai";
import request from "supertest";
import sinon from "sinon";
import chaiShallowDeepEqual from "chai-shallow-deep-equal";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
global.Enzyme = Enzyme;
const expect = chai.expect;
global.expect = expect;
chai.use(dirtyChai);
chai.use(chaiShallowDeepEqual);
global.request = request;
global.sinon = sinon;

import { JSDOM } from "jsdom";

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});
    Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);
