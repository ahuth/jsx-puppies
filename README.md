# Slack Puppies

An exercise showing a list of Labrador pictures. Clicking one opens up a modal dialogue with a bigger picture.

## Requirements

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## Setup

1. Install dependencies with `yarn install`
2. Start the server with `yarn start`
3. Navigate a browser to `localhost:8080`

## Testing

Run the tests with `yarn test`.

## Design decisions

1. It was probably overkill for this exercise, but I created my own implementation of a virtual DOM, allowing me to use JSX syntax and create components that are pure functions of the application state.

 While the 'html' directory has some complex items in it, the result is components that are very simple and straightforward to understand. Also, I learned a lot by going through this exercise.

2. There is a single "store" with the application state, whose data gets fed into the top-level App component, which in turn passes data down to the rest of the components. This makes it very easy to determine what state the app is in and what the UI should look like at any point in time.

 In order to change the state, we dispatch "actions" to the store. For simplicity's sake, these actions aren't like normal Flux or Redux actions. Instead, they actually contain the "reducer", or function that receives the old state and returns a new one.

## Current deficiencies

1. A complete re-render of the entire UI is done for every dispatched event. For the current exercise this has **_not_** been a performance problem, and the page updates without any noticeable delay whatsoever. For more complicated examples, however, it will become a problem, and we'll want to start figuring out the minimal amount of changes that need to be made to the DOM.

2. No keypress handlers have been implemented, and it's weird that the lightbox can't be closed with the escape key. In future work I would definitely address that.
