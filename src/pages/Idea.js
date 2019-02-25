import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'

const Idea = () => {
  return (
    <PageSimple>
      <Meta title="Idea Name" />
      <section>
        <div>
          <h2>Idea Name</h2>
        </div>
        <ul>
          <li>Joen Doe</li>
          <li>25 February 2019</li>
          <li>Jakarta, Indonesia</li>
        </ul>
        <div>
          <p>
            App to plan and gather your friends to travel. So it would be a very
            fun experience.
          </p>
          <p>
            1. Search for existing trip plans 2. Create your own planned trip 3.
            Determine how many people can join 4. Set up the place and list of
            activities 5. Schedule for date and time 6. Post the trip to
            Tripvesto 7. Wait and watch until anyone’s interested join your trip
            8. Enjoy your trip with new friends
          </p>
          <p>Hopefully this idea really resonates with you! :)</p>
          <p>Please send a feedback to tripvesto@gmail.com</p>
        </div>
      </section>
    </PageSimple>
  )
}

export default Idea
