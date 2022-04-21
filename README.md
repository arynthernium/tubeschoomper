# tube schoomper

[Schoomps tubes.](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks#:~:text=though%20programming%2Dinclined%20users%20can%20make%20their%20own%20tube%20schoomper%20themselves)

### Install
```sh
npm install tubeschoomper
```

### Usage
```js
import { schoomp } from 'tubeschoomper';

schoomp(template, data, opts);
// see example.js for more details
```
`template` should be an object. Any parameters you want replaced should match this pattern: `"@{{key}}"` where '`key`' is a dot-notation key to the property in the `data` object.

### Options

The `opts` parameter should be an object with the following properties.

#### `defaultValue`
If this is not set, any values which are not matched by an property accessor or do not exist will be set to `'undefined'` (note that it will be a string, not a literal).