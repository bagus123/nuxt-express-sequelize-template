# nuxt-express-template with sequelize + postgre

> This Template Nuxt + Express with Sequelize+Postgre

What You will Learn in this template

- Nuxt
- Vuex
- Express
- Sequelize

Requirement

- Node v9.11.2
- PostgreSQL

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

### Vuex

![](https://github.com/bagus123/nuxt-express-sequelize-template/blob/master/vuex.png)

#### State management terminology

In short: your state is stored in an object called the store. To modify the state you use actions and mutations, which are also stored in the store.

#### Part of Vuex

#### store

The store manages the state. It should only be mutated from within, so outside components can not directly modify the state. To mutate the state, components can dispatch an action or commit a mutation.

#### state

State is the data stored in your application. You components can “receive” this data and when it changes your component will update itself. This is the “single source of truth” in your application.

#### getters

Getters compute properties based on the store state. You can use these in your actions or directly in your component. This is useful if several components need to calculate the same thing based on the store data, you can do it in one place instead of having to do it separately for each component.

#### mutations

To update a state you will need to commit a mutation. A mutation does not care about business logic, it’s only purpose is updating the state. A mutation is synchronous (your code has to wait until the mutation is done). Mutations should be the only way used to update your state, to keep your state management predictable.

#### actions

An action contains business logic and it does not care about updating the state directly. The reason is that actions are asynchronous (your code can continue to run even if the action is not finished yet), this is useful if you need to wait to receive data from an API for example. An action will dispatch a mutation, which will directly update the state

#### source

- https://vuex.vuejs.org/guide/state.html
- https://nuxtjs.org/guide/vuex-store
- https://itnext.io/vuex-made-simple-getting-started-6bf229d432cf
