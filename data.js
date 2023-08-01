const posts = [
  {
    id: 1,
    slug: "tailwindcss",
    title: "Tailwind CSS",
    tags: ["css", "tailwindcss", "react"],
    thumbnail:
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    author: "Tailwind Labs",
    avatar:
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    likes: 0,
    comments: 0,
    created_at: "2020-05-01T00:00:00.000Z",
    updated_at: "2020-05-01T00:00:00.000Z",
    content:
      '**TailwindCSS** ```jsx\nimport React from "react"\n```\n\n- React\n- Tailwind\n- Axios',
  },
  {
    id: 2,
    slug: "react",
    title: "React",
    tags: ["react", "javascript"],
    author: "Facebook",
    avatar: "https://source.unsplash.com/random",
    likes: 0,
    comments: 0,
    created_at: "2020-05-01T00:00:00.000Z",
    updated_at: "2020-05-01T00:00:00.000Z",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. ```jsx\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport './index.css'\nimport App from './App'\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n)\n```\n",
  },
];

module.exports = posts;