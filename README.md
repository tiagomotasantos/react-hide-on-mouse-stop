<h1 align="center">React Hide On Mouse Stop</h1>

<div align="center">

Hides content after the mouse stops moving for a certain amount of time.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/react-hide-on-mouse-stop/latest.svg)](https://www.npmjs.com/package/react-hide-on-mouse-stop)

![example](https://github.com/tiagomotasantos/react-hide-on-mouse-stop/blob/main/react-hide-on-mouse-stop.gif?raw=true)

</div>

## Installation

React-hide-on-mouse-stop is available as an [npm package](https://www.npmjs.com/package/react-hide-on-mouse-stop).

```sh
npm install react-hide-on-mouse-stop
#or
yarn add react-hide-on-mouse-stop
```

## Usage

Here is an example of how to use react-hide-on-mouse-stop:

```jsx
import { HideOnMouseStop } from 'react-hide-on-mouse-stop';

const App = () => (
    <HideOnMouseStop delay={1000} defaultTransition hideCursor>
        <button type="button">
            This will hide after delay of 1s
        </button>
    </HideOnMouseStop>
);

export default App;
```

## Props

|  Name                      | Type      | Default      | Description     |
| -------------------------- |---------- | ------------ | --------------- |
| `className`                | string    |              | Custom class to override default styles. Can be used to add your own transition |
| `delay`                    | number    |    2000      | Time in milliseconds to wait until hiding the content |
| `hideCursor`               | boolean   |   false      | When set to true also hides the cursor inside the body of the document |
| `initialHide`              | boolean   |   false      | Marks whether it should hide the content by default or not |
| `showOnlyOnContainerHover` | boolean   |   false      | After hiding the component it only shows again if the mouse moves in the container. By default a mouse move in the whole document shows the content again |
| `defaultTransition`        | boolean   |   false      | Marks whether to use default transition effect or not |
| `removeFromDOM`            | boolean   |   false      | When set to true hiding the content removes it from the DOM |

## `useHideOnMouseStop` hook

By default react-hide-on-mouse-stop adds an extra container around your content, if you want to avoid that and have more control over the behavior of the hide process you can take advantage of `useHideOnMouseStop` hook, it's a bit more verbose and has less functionality but serves the same purpose. 
Take a look at the example bellow:

```jsx
import { useHideOnMouseStop } from 'react-hide-on-mouse-stop';

const App = () => {
    const [hide, onMouseEnter, onMouseLeave] = useHideOnMouseStop({ delay: 1000 });
    const className = /* write your styles using the hide variable to show/hide the content */;

    return (
        <div
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            Content to hide
        </div>
    );
};

export default App;
```

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).
