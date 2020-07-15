const dashboard = {
  firestorePath: "users",
  firestoreRefType: "collection",
  moduleName: "dashboard",
  statePropName: "data",

  state: {},
  getters: {
    users: state => {
      return state.data;
    }
  },
  mutations: {},
  actions: {}
};

export default dashboard;
