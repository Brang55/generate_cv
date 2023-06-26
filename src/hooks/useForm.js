import { useState } from "react";
import { useReducer } from "react";
import {
  personalSkills,
  workExperience,
  addEducation,
  jobRelated,
} from "../reducers/skills";

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [experience, setExperience] = useState({
    title: "",
    role: "",
    roleDesc: "",
  });

  const [university, setUniversity] = useState({
    education: "",
    titleEducation: "",
    educationDesc: "",
  });

  const [perSkill, setPerSkill] = useState({
    skill: "",
  });

  const [personalSkill, dispatch1] = useReducer(personalSkills, []);

  const [newExperience, dispatch2] = useReducer(workExperience, []);

  const [newEducation, dispatch3] = useReducer(addEducation, []);

  const [relatedSkills, dispatch4] = useReducer(jobRelated, []);

  const addNewSkill = (e) => {
    e.preventDefault();
    dispatch1({ type: "ADD_SKILL", payload: perSkill.skill });
  };

  const addNewRelatedSkill = (e) => {
    e.preventDefault();
    dispatch4({ type: "ADD_RELATED_SKILLS", payload: formData.jobRelated });
  };

  const addNewExperience = (e) => {
    e.preventDefault();
    const { title, role, roleDesc } = experience;
    dispatch2({ type: "ADD_EXPERIENCE", payload: { title, role, roleDesc } });
  };

  const addNewEducation = (e) => {
    e.preventDefault();
    const { education, titleEducation, educationDesc } = university;
    dispatch3({
      type: "ADD_EDUCATION",
      payload: { education, titleEducation, educationDesc },
    });
  };

  const removeSkill = (skill) => {
    dispatch1({ type: "REMOVE_SKILL", payload: skill });
  };

  const removeRelatedSkill = (related) => {
    dispatch4({ type: "REMOVE_RELATED_SKILLS", payload: related });
  };

  const removeExperience = (exp) => {
    dispatch2({ type: "REMOVE_EXPERIENCE", payload: exp });
  };

  const removeEducation = (education) => {
    dispatch3({ type: "REMOVE_EDUCATION", payload: education });
  };

  const changeHandler = (e) => {
    setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const changeSkill = (e) => {
    setPerSkill((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const changeExperience = (e) => {
    setExperience((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const changeEducation = (e) => {
    setUniversity((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return {
    formData,
    setFormData,
    changeHandler,
    changeExperience,
    personalSkill,
    addNewSkill,
    removeSkill,
    addNewExperience,
    newExperience,
    removeExperience,
    changeEducation,
    addNewEducation,
    removeEducation,
    newEducation,
    relatedSkills,
    addNewRelatedSkill,
    removeRelatedSkill,
    changeSkill,
  };
};
