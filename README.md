# chance-font

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![npm](https://img.shields.io/npm/v/chance-font)](https://www.npmjs.com/package/chance-font) [![Build Status](https://travis-ci.org/dzucconi/chance-font.svg?branch=master)](https://travis-ci.org/dzucconi/chance-font)


## What is this?

[A library](https://www.npmjs.com/package/chance-font) to return a random font stack from [a list provided by the W3C](https://www.w3.org/Style/Examples/007/fonts.en.html).

## Why should I use this?

You want a random font.

## Installation

```sh
yarn add chance-font
```

## Usage

```javascript
import chanceFont from "chance-font";

document.body.innerHTML = `
  <div style="font-family: ${chanceFont()};">
    A real degree of freedom
  </div>
`;
```

You can also specify the type of font you want:

```javascript
chanceFont('all'); // default
chanceFont('sans');
chanceFont('serif');
chanceFont('monospace');
chanceFont('cursive');
chanceFont('fantasy');
```
