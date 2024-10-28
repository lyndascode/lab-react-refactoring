![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | Refactoring to Functional Components and Migrating React Router DOM

### Introduction

In this lab, you will practice modernizing a React application by refactoring class-based components into functional components. This will help you leverage React Hooks, improve code readability, and prepare your projects for the future of React development. Additionally, as a bonus, you will migrate the project from React Router DOM v5 to v6 to take advantage of the latest routing features.

After completing this lab, you will be able to:

- Refactor React class-based components to functional components.
- Utilize hooks like `useState` and `useEffect` to manage state and side effects.
- Migrate an application from React Router DOM v5 to v6.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit it to the submission field in Student Portal.

## Introduction

React is evolving, and functional components with hooks are now the go-to approach for building React applications. In this lab, you'll refactor an existing project that uses class components to the functional component style. This will give you hands-on experience working with hooks and improving the modernity of the codebase.

To take it a step further, you'll also migrate React Router DOM from version 5 to version 6, which brings cleaner, more intuitive routing syntax.

The skills you will learn here are crucial as you continue building modern, scalable web applications.

## Starter Code

The starter code provided contains a skeleton of a basic React app. This app includes multiple class-based components and uses React Router DOM version 5. Your task will be to refactor the components and upgrade the routing to the latest standards.

## Iterations

### Iteration 1: Refactor to Functional Components

In this iteration, you are expected to:

- Refactor all class-based components in the starter code to functional components.
- Use `useState` for state management where applicable.
- Use `useEffect` for lifecycle methods such as `componentDidMount` and `componentDidUpdate`.

### Iteration 2: Migrate React Router DOM v5 to v6

Once the components are refactored to functional components, it's time to upgrade the routing system. In this iteration, you will:

- Install `react-router-dom@6`.
- Refactor the existing routes to match the new syntax used in React Router DOM v6, such as replacing `Switch` with `Routes`, and updating how `Route` components work.

You can refer to the official [React Router DOM v6 migration guide](https://reactrouter.com/en/main/upgrading/v5) to help you through the changes.

<br>

Happy coding! :heart:
