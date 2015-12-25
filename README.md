# babel-preset-features

A babel preset which does feature detection. This is just [babel-features][] as a preset. It's just a stupidly simple 
wrapper. If you have an issue, it's probobly with them. (And all credit goes to them as well).

The major version of this package will always correspond to the major version of `babel-features` that it depends on.

## Usage

Just pop this in your .babelrc:

```json
{
  "presets": ["features"]
}
```

[babel-features]: https://github.com/hax/babel-features
