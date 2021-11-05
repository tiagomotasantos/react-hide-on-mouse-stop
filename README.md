<h1 align="center">React Audio Visualizers Core</h1>

<div align="center">

The core library for [react-audio-visualizers](https://github.com/tiagomotasantos/react-audio-visualizers).
React-audio-visualizers-core has functionality to deal with audio as well as the main UI, helpful hooks, utilities and types.
This library is useful when you want to create your own visualizers, if you just want to use existing visualizers go to [react-audio-visualizers](https://github.com/tiagomotasantos/react-audio-visualizers).

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/react-audio-visualizers-core/latest.svg)](https://www.npmjs.com/package/react-audio-visualizers-core)

</div>

## Installation

React-audio-visualizers-core is available as an [npm package](https://www.npmjs.com/package/react-audio-visualizers-core).

```sh
npm install react-audio-visualizers-core
#or
yarn add react-audio-visualizers-core
```

## Usage

Here is an example of how to use react-audio-visualizers-core:

```jsx
import { AudioVisualizer, AudioVisualizerCommonProps } from 'react-audio-visualizers-core';

export const YourVisualizer = (commonProps: AudioVisualizerCommonProps) => (
    <AudioVisualizer {...commonProps}>
        <YourVisualizerRenderComponent />
    </AudioVisualizer>
);
```

## Documentation

Check out the [documentation website](https://react-audio-visualizers.com/docs).
Specially take a look at the architecture section to understand how react-audio-visualizers-core package interacts with the main react-audio-visualizers project.

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).
