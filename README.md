# Nightmare Xpath Event

Nightmare plugin support click/touch events by using xpath expressions.

## Features

* Click event by xpath expressions
* Mocking touch event by xpath expressions if you encounter touch testing related issues with this [zilverline/react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)

## Install

```
npm install nightmare-xpath-event
```

## Usage

```
import Nightmare from 'nightmare'
import { touch, clickByXpath } from 'nightmare-xpath-event'

Nightmare.action('touch', touch)
Nightmare.action('clickByXpath', clickByXpath)

const nightmare = new Nightmare()

nightmare
  .goto('https://example.com/')
  .touch('//*[@id="root"]')
  .clickByXpath('//*[@id="root"]')
```
