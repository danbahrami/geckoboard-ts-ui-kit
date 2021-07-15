# A spike to build a UI kit in TypeScript

This project is a spike to build Geckoboard's internal UI kit as a standalone library. The tech stack is:

- React
- TypeScript
- CSS modules
- Storybook
- Rollup Bundling to ESM and CommonJS
- Testing with Jest and React Testing Library

## Try it out

First clone this repo then install all dependancies:

```
git clone ...
cd ui-kit
yarn install
```

### Run Storybook

To run Storybook locally:

```
yarn storybook
```

Your browser should open by default to `http://localhost:6006/` and show something like this:

![](https://user-images.githubusercontent.com/6588325/125807148-cdf79feb-6e4c-41a2-a3d9-cf423d96cbd0.png)

### Testing

The test runner uses Jest and React Testing Library:

```
yarn test
```

### Create production build

The build script outputs a CommonJS and ESM module into the `/build` folder

```
yarn build
```

The folder should look like

```
build
  -- index.es.js
  -- index.es.js.map
  -- index.js
  -- index.js.map
```

> !!ALERT: I couldn't figure out how to output separate typescript definition files using Rollup. If anyone has an idea on how to do that I'd be really grateful for some help.
