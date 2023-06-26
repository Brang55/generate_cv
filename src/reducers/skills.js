export const personalSkills = (state, action) => {
  switch (action.type) {
    case "ADD_SKILL":
      return [...state, action.payload];
    case "REMOVE_SKILL":
      const updatedSkills = state.filter((skill) => skill !== action.payload);
      return [...updatedSkills];
    default:
      return state;
  }
};

export const workExperience = (state, action) => {
  switch (action.type) {
    case "ADD_EXPERIENCE":
      return [...state, action.payload];
    case "REMOVE_EXPERIENCE":
      const updatedExperience = state.filter((exp) => exp !== action.payload);
      return [...updatedExperience];
    default:
      return state;
  }
};

export const addEducation = (state, action) => {
  switch (action.type) {
    case "ADD_EDUCATION":
      return [...state, action.payload];
    case "REMOVE_EDUCATION":
      const updatedEducation = state.filter(
        (education) => education !== action.payload
      );
      return [...updatedEducation];
    default:
      return state;
  }
};

export const jobRelated = (state, action) => {
  switch (action.type) {
    case "ADD_RELATED_SKILLS":
      return [...state, action.payload];
    case "REMOVE_RELATED_SKILLS":
      const updatedSkills = state.filter((skill) => skill !== action.payload);
      return [...updatedSkills];

    default:
      return state;
  }
};
