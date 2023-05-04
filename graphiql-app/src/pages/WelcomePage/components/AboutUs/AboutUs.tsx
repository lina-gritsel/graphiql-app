import { Link } from 'react-router-dom'

import styles from './AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.infoCard}>
        <div className={styles.title}>About Us</div>
        <div className={styles.text}>
          <p>
            We, Alina, Arthur and Angelina, are developers from a small but
            proud country.
          </p>
        </div>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.text}>
          A Front-End Developer is someone who creates websites and web
          applications. The difference between Front-End and Back-End is that
          Front-End refers to how a web page looks, while back-end refers to how
          it works. You can think of Front-End as client-side and Back-End as
          server-side. The basic languages for Front-End Development are HTML,
          CSS, and JavaScript.
        </p>
      </div>
      <div className={styles.infoCard}>
        <div className={styles.title}>Our project</div>
        <div className={styles.text}>
          <p>
            Our project is an analogue of{' '}
            <Link
              to="https://www.npmjs.com/package/@graphiql/react"
              target="_blank"
              rel="noreferrer"
            >
              GraphiQL.
            </Link>
          </p>
          <p>
            GraphiQL is a playground/IDE for graphQL requests. GraphQL is a
            query language for APIs and a runtime for fulfilling those queries
            with your existing data. GraphQL provides a complete and
            understandable description of the data in your API, gives clients
            the power to ask for exactly what they need and nothing more, makes
            it easier to evolve APIs over time, and enables powerful developer
            tools.
          </p>
        </div>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.text}>
          The GraphQL application is written in a programming language such as
          TypeScript using the React framework and such a tool for managing data
          state and user interface as the Redux Toolkit. Also, various libraries
          were used during the creation, for example, Chakra UI for various
          components, i18next for translating the application into popular
          languages, sass and many other popular libraries.
        </p>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.title}>Course</div>
        <div className={styles.text}>
          <p>
            The project was developed as part of The React course by{' '}
            <Link
              to="https://www.npmjs.com/package/@graphiql/react"
              target="_blank"
              rel="noreferrer"
            >
              The Rolling Scopes.
            </Link>{' '}
            RS School is free-of-charge and community-based education program
            conducted by The Rolling Scopes developer community since 2013.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
