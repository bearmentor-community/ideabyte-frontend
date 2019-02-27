# Data

- Users
-

## Users

Backend Database:

```json
{
  "_id": ObjectID(),
  "id": 1,
  "name": "Joen Doe",
  "email": "joendoe@example.com",
  "salt": "zyxwvutsrqp",
  "password": "zyxwvutsrqpabcdefghijklmnopqrstuvwxyz"
}
```

Backend API:

`http://backend.com/user/:id`

```json
{
  "_id": ObjectID(),
  "id": 1,
  "name": "Joen Doe",
  "email": "joendoe@example.com"
}
```

Frontend Data:

```js
const user = {
  _id: ObjectID(),
  id: 1,
  name: 'Joen Doe',
  email: 'joendoe@example.com'
}
```

## Ideas

Backend Database & API:

`http://backend.com/ideas`

```json
{
  "_id": ObjectID(),
  "id": 1,
  "title": "Tripvesto Trip Planner",
  "short": "App to plan and gather your friends to travel. Let's join us!",
  "author": "Joen Doe",
  "date": "2019/02/25",
  "location": "Jakarta, Indonesia",
  "slug": "tripvesto-trip-planner"
}
```

Frontend Data:

```js
const idea = {
  _id: ObjectID(),
  id: 1,
  title: "Tripvesto Trip Planner",
  short: "App to plan and gather your friends to travel. Let"s join us!",
  author: "Joen Doe",
  date: "2019/02/25",
  location: "Jakarta, Indonesia",
  slug: "tripvesto-trip-planner"
}
```

## Redux Store

```js
const store = {
  // User from API
  user: {
    _id: ObjectID(),
    id: 1,
    name: "Joen Doe",
    email: "joendoe@example.com"
  },

  // Ideas from API
  ideas: [
    {
      _id: ObjectID(),
      id: 1,
      title: "Tripvesto Trip Planner",
      short: "App to plan and gather your friends to travel. Let"s join us!",
      author: "Joen Doe",
      date: "2019/02/25",
      location: "Jakarta, Indonesia",
      slug: "tripvesto-trip-planner"
    },
    {
      _id: ObjectID(),
      id: 1,
      title: "Tripvesto Trip Planner",
      short: "App to plan and gather your friends to travel. Let"s join us!",
      author: "Joen Doe",
      date: "2019/02/25",
      location: "Jakarta, Indonesia",
      slug: "tripvesto-trip-planner"
    }
    // ...
  ]
}
```
