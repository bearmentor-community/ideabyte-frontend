# Data Documentation

The main objects are:

- Users
- Ideas

Check corresponding with [`ideabyte-backend`](http://github.com/ideabyte/ideabyte-backend)

## Users

`http://backend.com/user/:id`

```js
const user = {
  _id: ObjectID(),
  id: 1,
  name: 'Joen Doe',
  email: 'joendoe@example.com'
}
```

## Ideas

`http://backend.com/ideas`

```js
const idea = {
  _id: ObjectID(),
  id: 1,
  title: "Tripvesto Trip Planner",
  description: "App to plan and gather your friends to travel. Let"s join us!",
  author: "Joen Doe",
  date: "2019/02/25",
  location: "Jakarta, Indonesia",
  slug: "tripvesto-trip-planner"
}
```

## Redux Store's State

```js
const state = {
  // one user from API
  user: {},

  // ideas from API
  ideas: [
    // idea objects
  ]
}
```
