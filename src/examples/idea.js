import ObjectID from 'bson-objectid'

export const itemExample = {
  _id: ObjectID(),
  id: 1,
  title: `Tripvesto`,
  description: `App to plan and gather your friends to travel. Let's join us!`,
  author: 'Joen Doe',
  date: '25 February 2019',
  location: 'Jakarta, Indonesia',
  slug: 'tripvesto-trip-planner',
  images: [
    '/assets/images/traveling.jpg',
    '/assets/images/traveling.jpg',
    '/assets/images/traveling.jpg'
  ],
  details: `<p>
            App to plan and gather your friends to travel. So it would be a very
            fun experience.
          </p>
          <ol>
            <li>Search for existing trip plans</li>
            <li>Create your own planned trip</li>
            <li>Determine how many people can join</li>
            <li>Set up the place and list of activities</li>
            <li>Schedule for date and time</li>
            <li>Post the trip to Tripvesto</li>
            <li>Wait and watch until anyone’s interested join your trip</li>
            <li>Enjoy your trip with new friends</li>
          </ol>
          <p>Hopefully this idea really resonates with you!</p>
          <p>Please send a feedback to tripvesto@gmail.com</p>
          <p>
            Visit <a href="https://tripvesto.com">Tripvesto.com</a> to learn
            more.
          </p>`
}
