/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import redditImg from '../../assets/images/image.png';
import todoImg from '../../assets/images/shine.jpg';
import bookImg from '../../assets/images/uch.jpeg';
import mealImg from '../../assets/images/meals.jpg';
import weatherImg from '../../assets/images/todo.png';
import vesperBackImg from '../../assets/images/edu.png';
import mealDemo from '../../assets/images/meals.jpg';
import todoDemo from '../../assets/images/shine.jpg';
import redditDemo from '../../assets/images/image.png';
import bookDemo from '../../assets/images/uch.jpeg';
import weatherDemo from '../../assets/images/todo.png';
import vesperDemo from '../../assets/images/bulletinboard.jpg';
import vesperImg from '../../assets/images/bulletinboard.jpg';
import vesperBackDemo from '../../assets/images/edu.png';

const initialState = {
  projects: [
    {
      id: 1,
      title: 'Bulletin-Board',
      intro: 'Register to write dreams and plans',
      desc: 'Bulletin-Board - this is an application for writing all your favorite notes, plans.  Share your thoughts by saving your posts on our platform so others can see and get ideas. Make your dream come true.',
      tech: ['React', 'Redux',],
      img: vesperImg,
      imgDemo: vesperDemo,
      source: 'https://github.com/farizabukharova/Bulletin-Board.git',
      demo: '',
      label: 'Full-Stack',
    },
    {
      id: 2,
      title: 'Component Image',
      intro: "See the most popular, beautiful pictures, posts on the site",
      desc: "The Image component, imported from next/image, is an extension of the img HTML tag designed for the modern web. It includes several built-in optimizations to help you achieve good Core Web Vitals scores",
      tech: ['React', 'Redux'],
      img: redditImg,
      imgDemo: redditDemo,
      source: 'https://github.com/farizabukharova/task7.git',
      demo: '',
      label: 'Front-End',
    },
    {
      id: 3,
      title: 'Meal App',
      intro: 'View meal recipes from all over the world, like and comment',
      desc: "Meal App is a web application that helps you decide your next meal. Select a meal to see how its prepared, or post a comment on how delicious it is. Don't forget to like 🧡 your favorites",
      tech: ['HTML', 'CSS', 'JS'],
      img: mealImg,
      imgDemo: mealDemo,
      source: 'https://github.com/farizabukharova/wpro.git',
      demo: '',
      label: 'Front-End',
    },
    {
      id: 4,
      title: 'To-Do List ',
      intro: 'Leave your comment',
      desc: 'In the ClickUp app, Checklists are essentially simple to-do lists within a task - items are either done or not done',
      tech: ['React', 'Redux'],
      img: weatherImg,
      imgDemo: weatherDemo,
      source: 'https://github.com/farizabukharova/to-do-list.git',
      demo: '',
      label: 'Front-End',
    },
    {
      id: 5,
      title: 'Education website',
      intro: '',
      desc: 'Best-Selling Online Courses — Find the right instructor for you. Choose from many topics, skill levels, and languages.',
      tech: ['PHP', 'PostgreSQL'],
      img: vesperBackImg,
      imgDemo: vesperBackDemo,
      source: 'https://github.com/farizabukharova/educationApp.git',
      demo: '',
      label: 'Back-End',
    },
    {
      id: 6,
      title: 'ANALYZING',
      intro: 'ACCOUNTING AND ANALYZING',
      desc: 'SOFTWARE WEBSITE FOR ACCOUNTING AND ANALYZING THE DYNAMICS OF CASH FLOWS IN ACCOUNTS',
      tech: ['React', 'Redux'],
      img: bookImg,
      imgDemo: bookDemo,
      source: 'https://github.com/farizabukharova/task5.git',
      demo: '',
      label: 'Front-End',
    },
    // {
    //   id: 7,
    //   title: 'Education website',
    //   intro: '',
    //   desc: 'Best-Selling Online Courses — Find the right instructor for you. Choose from many topics, skill levels, and languages.',
    //   tech: ['PHP', 'PostgreSQL'],
    //   img: vesperBackImg,
    //   imgDemo: vesperBackDemo,
    //   source: 'https://github.com/farizabukharova/educationApp.git',
    //   demo: '',
    //   label: 'Back-End',
    // },
    {
      id: 7,
      title: 'Shinesop',
      intro: 'Women\'s jewelry from the 2024 collections',
      desc: 'Women\'s jewelry from the 2024 collections: the best luxury and premium brands, wide range, fast delivery in Almaty, Astana and Kazakhstan.',
      tech: ['HTML', 'CSS', 'PostgreSQL'],
      img: todoImg,
      imgDemo: todoDemo,
      source: 'https://github.com/farizabukharova/shineshop.git',
      demo: '',
      label: 'Back-End',
    },

  ],
  filter: 'All',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = projectsSlice.actions;

export const selectProjects = (state) => state.projects.projects;
export const selectFilter = (state) => state.projects.filter;
export const selectFilteredProjects = (state) => {
  const projects = selectProjects(state);
  const filter = selectFilter(state);
  if (filter && filter !== 'All') {
    return projects.filter((project) => project.label.includes(filter));
  }

  return projects;
};

export default projectsSlice.reducer;
