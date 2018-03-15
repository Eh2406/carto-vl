## CARTO GL

[![CircleCI](https://circleci.com/gh/CartoDB/renderer-prototype.svg?style=svg)](https://circleci.com/gh/CartoDB/renderer-prototype)

CARTO GL is a JavaScript library to create custom location intelligence applications that leverage the power of [CARTO](https://carto.com/).

It uses [WebGL](https://www.khronos.org/webgl/) to enable powerful Vector maps.

![](./docs/images/carto-gl-capture.png)

## Getting Started

[TBD]

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/CartoDB/renderer-prototype/tags).

## Submitting Contributions

You will need to sign a Contributor License Agreement (CLA) before making a submission. [Learn more here.](https://carto.com/contributions/)

## License

This project is licensed under the BSD 3-clause "New" or "Revised" License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Development

### Install the dependencies

```
yarn
```

### Build the library

```
yarn build
```

To watch the files

```
yarn build:watch
```

### Generate the docs

```
yarn docs
```

To generate all the docs

```
yarn docs:all
```

### Serve docs and examples

```
yarn serve
```

### Run the tests

- [Unit tests](./test/unit/README.md)
- [Integration tests](./test/integration/README.md)
- [Acceptance tests](./test/acceptance/README.md)
