# Knowledgeworker Create Embedded Asset API Example

An example implementation of knowledgeworker-embedded-asset-api.

This example code aims to ease the development of rich embedded assets for responsive [Knowledgeworker Create](https://www.knowledgeworker.com/?utm_source=code&utm_campaign=embedded-asset-api-example) contents using the [knowledgeworker-embedded-asset-api](https://github.com/chemmedia/knowledgeworker-embedded-asset-api) and [knowledgeworker-embedded-asset-api-ui](https://github.com/chemmedia/knowledgeworker-embedded-asset-api-ui) javascript library.

## Getting Started

These instructions will get you a copy of the example project up and running on your local machine for development and testing purposes. See deployment for notes on how to build a distribution folder.
Build your own Knowledgeworker Create Embedded Asset by forking this repository.

### Prerequisites

You will need the following tools to get started. Please have a look at the documentation on how to install them on your operating system.
- node https://nodejs.org/
- npm https://www.npmjs.com/
- Yarn https://yarnpkg.com/

### Installing

Download and install dependencies by typing:

```
yarn
```

### Development

This example is based on [webpack](https://webpack.js.org/). We created a yarn shortcut, so you can start a development server easily by typing:

```
yarn start
```

After you see the `Compiled successfully.` you can open [http://localhost:8080](http://localhost:8080) in your browser.

Create your own asset by modifying `src/public/index.html` and `src/app/index.ts` and its imports.


## Deployment

Build a distribution folder by typing the following comand.

```
yarn build
```

Now you can archive the content of the `dist` folder as zip archive and upload it as media asset to Knowledgeworker Create.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the available versions, please see the tags on this repository.

## Authors

 - Martin Kutter - [chemmedia](https://www.chemmedia.de/)

## Licence

This project is licensed under MIT licence. Please see [LICENSE](./LICENSE) file for more information.

### Acknowledgments
 - Background photo by Nathan Anderson on [Unsplash](https://unsplash.com/photos/OQKQzw4o8cU)
