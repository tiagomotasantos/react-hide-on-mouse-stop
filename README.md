<h1 align="center">React Hide</h1>

<div align="center">

Hides content after the mouse stops moving for a certain amount of time.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/react-hide/latest.svg)](https://www.npmjs.com/package/react-hide)

</div>

## Installation

React-hide is available as an [npm package](https://www.npmjs.com/package/react-hide).

```sh
npm install react-hide
#or
yarn add react-hide
```

## Usage

Here is an example of how to use react-hide:

```jsx
import { Hide } from 'react-hide';

const App = () => (
    <Hide delay={1000} defaultTransition>
        <button type="button">
            This will hide after delay of 1s
        </button>
    </Hide>
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

## `useHide` hook

By default react-hide adds an extra container around your content, if you want avoid that and have more control over the behavior of the hide process you can take advantage of `useHide` hook, it's a bit more verbose and has less functionality but serves the same purpose. 
Take a look at the example bellow:

```jsx
import { useHide } from 'react-hide';

const App = () => {
    const [hide, onMouseEnter, onMouseLeave] = useHide({ delay: 1000 });
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
