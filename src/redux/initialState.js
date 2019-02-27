import ObjectID from 'bson-objectid' // create fake ObjectID

export const initialState = {
  // this specific user will be retrieved from the backend /users/:id
  user: {
    _id: ObjectID(),
    id: 1,
    avatar: '/assets/images/avatar.jpg',
    name: 'Joen Doe',
    email: 'joendoe@example.com'
  },

  // before we're logged in, the conditions are false
  isAuthenticated: false, // will be true after we're logged in
  isAdmin: false, // will be true after we're logged in as admin

  // after we're logged in, we have a JSON Web Token (JWT)
  token: null, // a string of JWT

  // these ideas will be retrieved from the backend /ideas
  ideas: [
    {
      _id: ObjectID(),
      id: 1,
      title: 'Tripvesto Trip Planner 1',
      description:
        "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner',
      images: [
        '/assets/images/traveling.jpg',
        '/assets/images/traveling.jpg',
        '/assets/images/traveling.jpg'
      ],
      details: ''
    },
    {
      _id: ObjectID(),
      id: 2,
      title: 'Tripvesto Trip Planner 2',
      description:
        "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner',
      images: [
        '/assets/images/traveling.jpg',
        '/assets/images/traveling.jpg',
        '/assets/images/traveling.jpg'
      ],
      details: ''
    },
    {
      _id: ObjectID(),
      id: 3,
      title: 'Tripvesto Trip Planner 3',
      description:
        "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner',
      images: [
        '/assets/images/traveling.jpg',
        '/assets/images/traveling.jpg',
        '/assets/images/traveling.jpg'
      ],
      details: ''
    }
  ]
}
