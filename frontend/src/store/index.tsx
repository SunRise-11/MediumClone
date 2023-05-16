import PostDTO from '@/types/Post/Post';

export const trendUsers = [
  {
    username: 'Sarvar55',
    image: null,
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
];

export const followers = [
  {
    userId: 8,
    username: 'BobL',
    email: 'example@gmailcom',
    image: '',
    bio: 'denee jkfkjsn',
  },
  {
    userId: 1,
    username: 'Sarvar55',
    email: 'example1@gmail.com',
    image: '',
    bio: "I'm an avid gamer and love to code!",
  },
  {
    userId: 2,
    username: 'JaneDoe',
    email: 'example2@gmail.com',
    image: '',
    bio: 'I enjoy hiking and taking photos.',
  },
  {
    userId: 3,
    username: 'BobL',
    email: 'example3@gmail.com',
    image: '',
    bio: "I'm a musician and love playing the guitar.",
  },
  {
    userId: 4,
    username: 'AnnaSmith',
    email: 'example4@gmail.com',
    image: '',
    bio: "I'm a foodie and love trying new restaurants.",
  },
  {
    userId: 5,
    username: 'JackBlack',
    email: 'example5@gmail.com',
    image: '',
    bio: "I'm a movie buff and enjoy watching comedies.",
  },
  {
    userId: 6,
    username: 'JohnDoe',
    email: 'example6@gmail.com',
    image: '',
    bio: "I'm a photographer and love taking portraits.",
  },
  {
    userId: 13,
    username: 'sfjksfksnfksndfkjn',
    email: 'example6@gmail.com',
    image: '',
    bio: "I'm a photographer and love taking portraits.",
  },
];

export const links = [
  {
    id: 1,
    name: 'Our story',
    href: '/',
    accentedButton: false,
  },
  {
    id: 3,
    name: 'Write',
    href: '/',
    accentedButton: false,
  },
  {
    id: 4,
    name: 'Membership',
    href: '/',
    accentedButton: false,
  },
];

export const avatars = [
  {
    alt: 'Sarvar',
    src: '/images/abbas-profile.jpg',
  },
  {
    alt: 'image',
    src: '/images/Ashley-Bretford.jpg',
  },
  {
    alt: 'image',
    src: '/images/fake-person-6.jpg',
  },
  {
    alt: 'image',
    src: '/images/Helena-Roseberg.jpg',
  },
  {
    alt: 'image',
    src: '/images/Mike-Greenwood.jpg',
  },
  {
    alt: 'image',
    src: '/images/Au-Chang.jpg',
  },
  {
    alt: 'image',
    src: '/images/generative-ai.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
  {
    alt: 'image',
    src: '/images/Schauf-Bammer.jpg',
  },
];

export const tags = [
  {
    id: 1,
    name: 'Programming',
    url: 'tags/programming',
  },
  { id: 2, name: 'Science', url: 'tags/science' },
  { id: 3, name: 'Technology', url: 'tags/technology' },
  { id: 4, name: 'Art', url: 'tags/art' },
  { id: 5, name: 'Business', url: 'tags/business' },
  { id: 6, name: 'Sports', url: 'tags/sports' },
  { id: 7, name: 'Entertainment', url: 'tags/entertainment' },
  { id: 8, name: 'Health', url: 'tags/health' },
  { id: 9, name: 'Education', url: 'tags/education' },
  { id: 10, name: 'Politics', url: 'tags/politics' },
];

export const posts: PostDTO[] = [
  {
    postId: 1,
    title: '5 Javascript Clean Coding Patterns To Enhance your Code',
    content: `
    ## Introduction

    Clean code is essential for writing maintainable and efficient JavaScript applications. It improves readability, reduces bugs, and makes collaboration easier. By following clean coding patterns, developers can produce code that is easier to understand, maintain, and extend. In this article, we will explore five JavaScript clean coding patterns that can enhance your code and contribute to a better development experience.
    
    ### 1. Consistent Naming Conventions
    
     
    One of the fundamental aspects of clean coding is using consistent and meaningful names for variables, functions, and classes. Descriptive and self-explanatory names can significantly improve code readability. By following naming conventions, such as camel case for variables and functions, and Pascal case for classes, you can make your code more intuitive. Avoid using ambiguous or cryptic names that might confuse other developers working on the codebase. Consistent naming conventions help create code that is easier to understand and maintain.
    
    ### 2. Modularization and Single Responsibility Principle
    
    Breaking down your code into small, modular units is crucial for clean coding. Applying the Single Responsibility Principle (SRP) ensures that each module, function, or class has a single, well-defined purpose. This promotes code reusability and makes testing and debugging more manageable. By organizing your code into smaller, focused modules, you improve readability, maintainability, and flexibility. Aim for smaller functions or methods that perform specific tasks, rather than having large monolithic blocks of code.
    
    ### 3. Avoiding Magic Numbers and Hardcoded Values
    
    Magic numbers and hardcoded values are non-descriptive and arbitrary values scattered throughout the codebase. They make the code difficult to understand and modify. Instead, it is recommended to use named constants or configuration variables. By assigning meaningful names to these values, their purpose becomes clear, and any changes can be made in a single place, improving maintainability. For example, instead of using to improve code clarity and maintainability.
    
    ### 4. Error Handling and Graceful Degradation
    
    Error handling is a crucial aspect of clean coding. Properly handling errors and exceptions can prevent crashes and unexpected behavior in your application. Use try-catch blocks to catch and handle exceptions, providing meaningful error messages to users or logging them for debugging purposes. Additionally, consider implementing graceful degradation by anticipating potential errors and providing fallback mechanisms. Graceful degradation ensures that even if a certain feature or functionality fails, the application can still continue running without breaking the user experience.
    
    ### 5. Commenting and Documentation
    
    Well-documented code is essential for clean coding practices. Comments help explain the intent, purpose, and functionality of code blocks. Use comments to clarify complex algorithms, provide insights into decision-making processes, or document any assumptions or limitations. However, it's important to strike a balance with comments. Avoid excessive or redundant comments that merely restate the code. Focus on adding value by providing context and explaining the reasoning behind the implementation choices.
    `,
    
    image: null,
    readingTime: 2,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 2,
      username: 'Abbas Abdelila',
      email: 'email.com1',
      bio: 'SDU',
      image: 'abbas-profile.jpg',
    },
    likes: [
      {
        userId: 2,
        postId: 1,
      },
    ],
    tags: [
      {
        tagId: 1,
        name: 'Programming',
      },
    ],
  },
  {
    postId: 2,
    title: 'Wikipedia',
    content:
      'The big lie we’re told, in school and again in early-career settings, is that being “good” at programming is about solving harder and harder problems in a more elegant way. The truth is much more mundane — being good at programming is about efficiently solving a large set of mostly trivial problems, quickly and cleanly. What IS true, however, is how valuable “flow state” is to doing this. Being able to remain immersed in the work allows you to quickly shift between domains, tracking the flow of state from user to business logic through to data store, and back again.',
    image: null,
    readingTime: 2,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 1,
      username: 'Ashley Bretford',
      email: 'ashleybretford@example.com',
      bio: "Ashley's bio",
      image: 'Ashley-Bretford.jpg',
    },
    likes: [
      {
        userId: 1,
        postId: 1,
      },
    ],
    tags: [
      {
        tagId: 1,
        name: 'Tag 1',
      },
    ],
  },
  {
    postId: 3,
    title:
      'A Biotech Startup Reverses Aging',
    content:
      'This company is promising to extend the human lifespan by 50 years. The catch? It costs $1 million. The company is called Libella Gene Therapeutics and it’s run by Jeff Mathis, a former TV executive. The company is currently running a clinical trial in Colombia where it is giving 14 participants over the age of 40 a cocktail of drugs that it claims will reverse the aging process. The trial is being overseen by Dr. George Shapiro, a former associate professor at Harvard Medical School. The company is also planning to run a trial in the US, but it’s not clear when that will happen. The company is also planning to run a trial in the US, but it’s not clear when that will happen. The company is also planning to run a trial in the US, but it’s not clear when that will happen. The company is also planning to run a trial in the US, but it’s not clear when that will happen. The company is also planning to run a trial in the US, but it’s not clear when that will happen. The company is also planning to run a trial in the US, but it’s not clear when that will happen. The company is also planning to run a trial in the US, but it’s not clear when that will happen. The company is also planning to run a trial in the US, but it’s not clear when that will happen.',
    image: null,
    readingTime: 3,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 2,
      username: 'Au Chang',
      email: 'auchang@example.com',
      bio: "Au's bio",
      image: 'Au-Chang.jpg',
    },
    likes: [
      {
        userId: 2,
        postId: 2,
      },
    ],
    tags: [
      {
        tagId: 3,
        name: 'Science',
      },
      {
        tagId: 5,
        name: 'Business',
      },
    ],
  },
  {
    postId: 4,
    title: 'Good Programmers Are Lazy',
    content:
      '“Good” programmers love to denigrate PHP and javascript for being “bad” languages; yet both of them are notable for supporting simple “Single-file” patterns. Javascript does this through JSX; PHP simply allows every php script to contain arbitrary HTML as well. I’ve decided to recreate the joy of Single-File development, but for Python. This will hopefully bridge the obvious gaps between the “Notebook” python data science communities, the “Boot Camp” software developer communities, and the front lines of web application development.',
    image: null,
    readingTime: 4,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 3,
      username: 'Helena Roseberg',
      email: 'helenaroseberg@example.com',
      bio: "Helena's bio",
      image: 'Helena-Roseberg.jpg',
    },
    likes: [
      {
        userId: 3,
        postId: 3,
      },
    ],
    tags: [
      {
        tagId: 3,
        name: 'Programming',
      },
    ],
  },
  {
    postId: 5,
    title: 'Bio Hacking Is The New Frontier Of Science',
    content:
      'Biohacking is the new frontier of science. It’s a movement that aims to use technology to enhance human capabilities. The idea is that we can use technology to make ourselves smarter, stronger, and healthier. Biohackers are using technology.  ',
    image: null,
    readingTime: 5,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 4,
      username: 'Mike Greenwood',
      email: 'mikegreenwood@example.com',
      bio: "Mike's bio",
      image: 'Mike-Greenwood.jpg',
    },
    likes: [
      {
        userId: 4,
        postId: 4,
      },
    ],
    tags: [
      {
        tagId: 4,
        name: 'AI',
      },
      {
        tagId: 6,
        name: 'Health',
      },
    ],
  },
  {
    postId: 6,
    title: 'The Art Of Design',
    content:
      'Design is a process of creating something new. It’s a way to solve problems and make things better. Design is a way of thinking about the world. It’s a way of looking at the world and seeing how it can be improved. Design is a way of thinking about the world. It’s a way of looking at the world and seeing how it can be improved. Design is a way of thinking about the world. It’s a way of looking at the world and seeing how it can be improved. Design is a way of thinking about the world. It’s a way of looking at the world and seeing how it can be improved. Design is a way of thinking about the world. It’s a way of looking at the world and seeing how it can be improved. Design is a way of thinking about the world. It’s a way of looking at the world and seeing how it can be improved.',
    image: null,
    readingTime: 6,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 5,
      username: 'John Doe',
      email: 'johndoe@example.com',
      bio: "John's bio",
      image: 'John-Doe.jpg',
    },
    likes: [
      {
        userId: 5,
        postId: 5,
      },
    ],
    tags: [
      {
        tagId: 6,
        name: 'Art',
      },
      {
        tagId: 7,
        name: 'Design',
      },
    ],
  },
  {
    postId: 7,
    title: 'The Best Movies Of 2021',
    content:
      'The best movies of 2021 are the ones that make you feel something. They’re the ones that make you laugh, cry, and think. They’re the best movies of 2021 because they’re the ones that make you feel something. They’re the ones that make you laugh, cry, and think. They’re the best movies of 2021 because they’re the ones that make you feel something. They’re the ones that make you laugh, cry, and think. They’re the best movies of 2021 because they’re the ones that make you feel something. They’re the ones that make you laugh, cry, and think. They’re the best movies of 2021 because they’re the ones that make you feel something. They’re the ones that make you laugh, cry, and think. They’re the best movies of 2021 because they’re the ones that make you feel something. They’re the ones that make you laugh, cry, and think.',
    image: null,
    readingTime: 7,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 6,
      username: 'Jake Morgan',
      email: 'jakemorgan@example.com',
      bio: "Jake's bio",
      image: 'Jake-Morgan.jpg',
    },
    likes: [
      {
        userId: 6,
        postId: 6,
      },
    ],
    tags: [
      {
        tagId: 1,
        name: 'Entertainment',
      },
    ],
  },
  {
    postId: 8,
    title: 'The Best TV Shows Of 2022',
    content: '',
    image: null,
    readingTime: 8,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 7,
      username: 'Walker Smith',
      email: 'walkersmith@example.com',
      bio: "Walker's bio",
      image: 'Walker-Smith.jpg',
    },
    likes: [
      {
        userId: 7,
        postId: 7,
      },
    ],
    tags: [
      {
        tagId: 10,
        name: 'Entertainment',
      },
    ],
  },
];