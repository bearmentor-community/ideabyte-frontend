import ObjectID from 'bson-objectid'

//////////////////////////////////////////////////////////////////////////////
// these ideas will be retrieved from the backend /ideas
const initialState = [
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

function ideasReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    case 'GET_IDEAS': {
      return {
        ideas: state.ideas
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state
    }
  }
}

export default ideasReducer
