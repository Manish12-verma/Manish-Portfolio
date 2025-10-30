export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Shadcn UI",
        image:
          "https://ui.shadcn.com/apple-touch-icon.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
      },
      {
        name: "React Router",
        image:
          "https://www.svgrepo.com/show/354262/react-router.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://w7.pngwing.com/pngs/846/87/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo-thumbnail.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PL/SQL",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bVQ0h3I9aHxRtp1aw_x0p0GOhC1satdpKw&s",
      },
       {
        name: "MongoDB",
        image:
          "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
      },
      {
        name: "Rest APIs",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_CvWdyQiIUOMvI208iJGa-yGC92g3szRKw&s",
      },
       {
        name: "JWT",
        image:
          "https://i.pinimg.com/originals/30/fd/30/30fd30bb21171050ff801013404ad032.png",
      },
    ],
  },
  
  {
    title: "Tools",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Postman",
        image:
          "https://ik.imagekit.io/qualys/wp-content/uploads/2020/10/postman.jpg",
      },
      {
        name: "Vs code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",
      },
    ],
  },
];

export const projects = [
      {
        id:1,
        title:"Klimate-an weather app", 
        description: "A modern weather app built with React, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query, and Recharts. It displays real-time weather updates and visual insights through interactive charts, offering a clean, fast, and responsive user experience.",
        image:"/projects/project3.png",
        tags:["React","TypeScript","Tailwind CSS","Shadcn UI","Recharts"],
        githubUrl:"https://github.com/Manish12-verma/Klimate",
        live:"https://klimate-blond.vercel.app/",
      },
      {
        id:2,
        title:"Chattrix", 
        description: "Chattrix is a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) that leverages Socket.io for instant, bidirectional communication. It enables users to exchange messages and share images seamlessly, providing a smooth and interactive chatting experience.",
        image:"/projects/project2.png",
        tags:["React","Socket.io","Tailwind CSS","Express.js","MongoDB","JWT", "Node.js","React Router"],
        githubUrl:"https://github.com/Manish12-verma/Chattrix",
        live:"https://chattrix-tan.vercel.app/login",
      },
      {
        id:3,
        title:"Sorting visualizer", 
        description: "Sorting algorithms are crucial for efficient data organization and retrieval in computer science. Understanding these algorithms can be challenging, but visualizing their operation provides valuable insights into their mechanics. This project aims to enhance learning by providing an interactive web application that visually represents various sorting algorithms.",
        image:"/projects/project1.png",
        tags:["Html","CSS","JavaScript","Sorting Algorithms"],
        githubUrl:"https://github.com/Manish12-verma/Sorting-visualizer",
        live:"https://sorting-visualizer-sand-xi.vercel.app/",
      },
      {
        id:4,
        title:"EraseIt - Background Remover", 
        description: "EraseIt is a modern web application that automatically removes backgrounds from images using ClipDrop's third-party API. Built with React, Node.js,MongoDB and integrated with Clerk for authentication and Razorpay for payments.",
        image:"/projects/project4.png",
        tags:["Reactjs","ClerkAuth","Tailwind Css","REST APIs","MongoDb","Razorpay","Node.js","Express.js","clipDrop API"],
        githubUrl:"https://github.com/Manish12-verma/EraseIt",
        live:"https://erase-it-vw2d.vercel.app/",
      },
      {
        id:5,
        title:"Taskly.AI", 
        description: "Taskly.AI is a modern AI-powered platform for content creation, image generation, and document processing. Built with React, Vite, and Tailwind CSS, it delivers high performance and a fully responsive UI. The app features modular architecture, secure authentication with Clerk, and user-friendly components powered by Radix UI and Lucide icons. With intelligent tools for writing, editing, and design, Taskly.AI enables fast, scalable, and efficient content generation for creators and professionals.",
        image:"/projects/project5.png",
        tags:["Reactjs","ClerkAuth","Tailwind CSS","React-Router-dom","Prebuilt UI","React Toastify","Lucide Icons"],
        githubUrl:"https://github.com/Manish12-verma/Taskly.Ai",
        live:"https://taskly-ai-six.vercel.app/",
      },{
        id:6,
        title:"Password Generator",
        description:"A modern, secure password generator built with React and Vite. Generate strong, customizable passwords with real-time strength assessment and easy copy functionality.",
        image:"/projects/project6.png",
        tags:["React","Vite","CSS","JavaScript"],
        githubUrl:"https://github.com/Manish12-verma/Password-Generator",
        live:"https://password-generator-six-zeta-98.vercel.app/",
      }
];
