module.exports = {
  servers: {
    one: {
      host: '104.131.133.30',
      username: 'root',
      // pem:
      // password: ''
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'youthboardgamingleague',
    path: './',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://104.131.133.30',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};