const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const Users = require('./models/users')

module.exports = app => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((obj, done) => {
    done(null, obj)
  })

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/user/google'
      },
      (accessToken, refreshToken, profile, done) => {
        process.nextTick(async () => {
          console.log({ profile })
          let user = await Users.findOne({ google_id: profile.id })
          if (!user) {
            user = await Users.create({
              email: profile.email,
              google_id: profile.id,
              name: profile.displayName
            })
          }
          return done(null, user)
        })
      }
    )
  )

  const sessionStore = new MongoDBStore({
    uri: process.env.MONGODB_URL,
    collection: 'sessions'
  })

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      unset: 'destroy',
      store: sessionStore,
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week in milliseconds
      }
    })
  )

  app.use(
    passport.initialize({
      userProperty: 'user'
    })
  )
  app.use(passport.session())
}
