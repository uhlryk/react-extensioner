# react-extensioner

React binding for extensioner. Make project scalability easy by improving feature management.


## install

```
npm install react-extensioner
```

## usage

Import Manager class from extensioner

```javascript
import { Manager } from "extensioner";
```

then import  ExtensionerProvider, ExtensionerEvent components from react-extensioner

```javascript
import { ExtensionerProvider, ExtensionerEvent } from "react-extensioner";
```

More about using Manager class in [extensioner project](https://github.com/uhlryk/extensioner/) 

in general create instance of Manager class and register all exensions

For example lets create extension/feature which will have one event listener and when it is called returns some react component 
```javascript
        const manager = new Manager();
        manager.registerExtension("ON_RENDER_TOP_MENU", {
            events: {
                "TEST_EVENT": values => <TopMenuComponent {...values}>
            }
        });
```

Next at top structure ExtensionerProvider should be rendered. It can be above react-redux provider if you use redux.

It accepts one property. It is manager instance.

```javascript
export default class App extends React.Component {
    render() {
        return (
            <ExtensionerProvider manager={manager}>
            
                // other react components
                
            </ExtensionerProvider>
        );
    }
}        
```

It can contain any react components. 

In addition any number of `ExtensionerEvent` can be placed inside.
When `ExtensionerEvent` is rendered it triggers configured event from all registered components

For example lets create `ExtensionerEvent` that will trigger event from previously registered feature - `ON_RENDER_TOP_MENU`


```javascript
export default class App extends React.Component {
    render() {
        return (
            <ExtensionerProvider manager={manager}>
                <ExtensionerEvent name="ON_RENDER_TOP_MENU" value={ /* some values */} />
            </ExtensionerProvider>
        );
    }
}        
```

Above code will render all components from registered extensions that listening on this event.

## API

### ExtensionerProvider

It is React component it should be one of the first components

#### properties

 * **manager** - accept extension manager instance with registered components
 
```javascript
<ExtensionerProvider manager={manager}></<ExtensionerProvider>
```
### ExtensionerEvent

It is React component and will trigger event each time it is rendered. And later will render components from feature event listeners. Should be inside `ExtensionerProvider`

#### properties

 * **name** - event name
 * **value** - event value 
 
 ```javascript
 <ExtensionerEvent name="SOME_EVENT_NAME" value="SOME_EVENT_VALUE" />
 ```

## License 

MIT
