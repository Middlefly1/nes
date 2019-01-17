const host = 'http://localhost:8888/api'

let routesapp = {
  list: {
    get: host + '/list',
    set: {},
  },
  groups: [
    {id: 1},
    {id: 2},
  ]
}

export default routesapp