const initState = {
  projects: [
    {
      id: "1",
      title: "projector",
      content: "plan your projects in a nice and cohesive way",
    },
    { id: "2", title: "esti", content: "manage patients in a clinic/ER" },
    {
      id: "3",
      title: "pokedex",
      content: "gather pokemon and index them all!",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
