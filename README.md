# poppins-pin

Mary Poppins plugin for responding to new PRs and issues with a "pinned" Github comment.


## Install

`npm install poppins-pin`

## Configure

To use this plugin, you need to load it in your config file with `couldYouPlease`:

```javascript
// config.js
module.exports = function (poppins) {

  poppins.config = { /*...*/ };

  poppins.couldYouPlease('pin');
};
```

By default, Mary Poppins will only respond with a greeting.

# License
MIT
