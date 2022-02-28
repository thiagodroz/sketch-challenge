# Sketch Challenge by Thiago Nogueira

- [Sketch Challenge by Thiago Nogueira](#sketch-challenge-by-thiago-nogueira)
  - [Running](#running)
  - [React](#react)
  - [Styling](#styling)
  - [Routing](#routing)
  - [GraphQL](#graphql)
  - [Folder Structure](#folder-structure)
  - [Linting](#linting)
  - [Testing](#testing)
  - [Possible Improvements](#possible-improvements)

## Running

For the sake of security, the `.env` file is ignored and I commited a `.env.template` file to show the names of the environment variables. Before running the application, please create your own `.env` file and fill it with the correct values.

To run the application I recommend using [Yarn](https://yarnpkg.com/) since it was using during the development and if you use [NPM](https://www.npmjs.com/) it wouldn't have a `package-lock.json`, leading to possible problems with package versions.

First of all, run `yarn` or `yarn install` to install all project dependencies.

To start the application in development mode you can simply run `yarn start`. It's gonna start the application at `localhost:3000`.

To build it to production you can simply run `yarn build`. It's gonna create `build` folder with all static files that you need to host in order to server the application.

## React

The first decision I had to make was about the tooling. I've been using [NextJS](https://nextjs.org/) a lot in my applications. Not only it provides out-of-the-box solutions to SEO, SSR and SSG, but it also have a very good tooling and awesome features that every year makes the life of the developers easier. But after analyzing the size of the challenge I chose to simply go with [Create React App](https://create-react-app.dev/) to keep it simple and easy to review. But if I needed to think about long-term I would analyze the project characteristics and `NextJS` would probably became a stronger options.

I've always started my projects with [Typescript](https://www.typescriptlang.org/). I believe it doesn't harm the project even if it was really small and it's an awesome tool to catch errors during compile time.

## Styling

To style the project I decided to go with [Styled Components](https://styled-components.com/). I used [SCSS](https://sass-lang.com/) for many years and used to love it, but in the last few years I started using `CSS-in-JS` libraries and fell in love with it. It's easier to add themes to the application and as everything is based on components, it's easier to pass parameters to the `CSS`.

I prefer `Styled Components` but I have no problem with [Emotion](https://emotion.sh/). I believe they have no big difference between them. So I'm used to go for `Styled Components` normally but go for `Emotion` if I'm gonna use [ChakraUI](https://chakra-ui.com/). As the project is so simple that `ChakraUI` would be an overkill, I decided to stick with `Styled Components`.

## Routing

As I didn't use `NextJS`, I had to go with some routing library to complement `Create React App`. I chose to use the most popular library: [React Router](https://reactrouter.com/).

I defined the application routes in the following way:

- `/documents/:documentId` opens the `DocumentPage` that shows the document name and the list of artboards name and thumbnails;
- `/documents/:documentId/artboards/:index` opens the `ArtboardPage` that shows the artboard image in details. It uses the `:index` parameter to know which artboard of the document it should display;

## GraphQL

In order to be able to make GraphQL requests I decided to use [Apollo Client](https://www.apollographql.com/apollo-client). The reason why I like `Apollo Client` is the same why I like [SWR](https://swr.vercel.app/), it's a library with a powerful caching system and with that I can use strategies like not using State Management libraries, optimistic UI and offline-first applications.

In this case I used the default caching strategy of `Apollo Client` to let both `DocumentPage` and `ArtboardPage` make the same GraphQL query because I know that when the second one makes the same request it's gonna use the cache data instead of calling the backend again. With that in mind, I didn't need to use something like [Redux](https://redux.js.org/) or [React Context](https://pt-br.reactjs.org/docs/context.html) to pass the selected artboard to the `ArtboardPage`.

Obviously this strategy has it's own downsides. If the application had any mutation to change the artboards I'd need to be aware that the cache would need to be changed after the mutation. Other scenario is if the data is modified by third-parties and it's current value should be shown in real time in the frontend. The caching approach would need to be different or even decide that relying in `Apollo Client`'s cache isn't the best solution there.

I used [GraphQL Code Generator](https://www.graphql-code-generator.com/) to automatically generate the typescript types based on the API Schema.

The `types.ts` generated file is being ignored because I want it to be always generated when running or building.

## Folder Structure

I don't have a favorite folder structure to follow. I like to test new ones and to go with one that the team is comfortable with. I like how `NextJS` works, because as you need to put all pages in a folder structure that reflects your routes you end-up having a separate folder for "non-page components".

I like to have related things together. So instead of having a big folder with images I like to create an `assets` folder inside of the folder of a component to put all assets related to this specific component. I only separate it if the asset is reused across the application. Also I like to separate the styles of a component to a separate file like `ComponentName.styles.ts`.

## Linting

For the sake of avoiding errors and different code patterns I like to use some linting libraries.

[Prettier](https://prettier.io/) is used to auto format the code and avoid situations where developers have different styles and they're basically overwriting each others code in each Pull Request. To avoid that we agree some patterns, configure `Prettier` in this way and let `Prettier` do the rest of the work.

[ESLint](https://eslint.org/) is awesome to prevent errors while coding. The best part is the it accepts many plugins and you can disable rules if you think they're not relevant for your project.

To maximize the power of those two libraries I like to use [Husky](https://typicode.github.io/husky) to run those linters before commiting. With that the code will be always formatted by `Prettier` before the commit and code with `ESLint` errors will fail if you try to commit.

Another addition to that is to avoid running those linters for all the code every time you make a commit. With [Lint Staged](https://github.com/okonet/lint-staged) you run linters only against staged git files.

## Testing

### Unit tests

To implement unit tests I used [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/). To run those tests just run `yarn test`. If you don't want to run it in watch mode just run `yarn test:single`. To generate and open the code coverage report you can run `yarn test:coverage`.

### Storybook

The [Storybook](https://storybook.js.org/) implementation in this project isn't helping with tests right now. The main goal is to develop those components/pages in isolation. But for the sake of tests, we can use [Chromatic](https://www.chromatic.com/). Developed by the same team that created `Storybook`, this tool can help you to run regression tests and detect `visual regressions` before a pull request is approved.

### End-to-end tests

To implement e2e tests I used [Cypress](https://www.cypress.io/). I consider it a really powerful tool because it's not only capable of running e2e tests in a Selenium way, but it's also capable of generate screenshots and videos of the tests and upload it as artifacts to pull requests.

## Possible Improvements

When the `GraphQL Code Generator` creates the file with all typescript types, it generates everything with the `Maybe<T>` type. So everything looks like optional fields. A possible improvement would be to understand better the API return to know when should I use `!` or `?` to use the API results.
