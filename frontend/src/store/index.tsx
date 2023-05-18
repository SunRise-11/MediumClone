import PostDTO from '@/types/Post/Post';

export const trendUsers = [
  {
    username: 'Paul Graham',
    image: '/images/Paul-Graham.jpg',
    postName: 'How To Think For Yourself',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Paul Graham',
    image: '/images/Paul-Graham.jpg',
    postName: 'How To Do What You Love',
    time: 'Jan 6· 13 min read',
  },
  {
    username: 'Tim Urban',
    image: '/images/Tim-Urban.jpg',
    postName: 'Picking Career',
    time: 'Feb 3· 30 min read',
  },
  {
    username: 'James Clear',
    image: '/images/James-Clear.jpg',
    postName: 'The One Percent Rule',
    time: 'Aug 7· 14 min read',
  },
  {
    username: 'Shane Parrish',
    image: '/images/Shane-Parrish.jpg',
    postName: 'We Are What We Remember',
    time: 'Jun 28· 8 min read',
  },
  {
    username: 'Naval Ravikant',
    image: '/images/Naval-Ravikant.jpg',
    postName: 'How To Get Rich Without Getting Lucky',
    time: 'Nov 01· 7 min read',
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
    src: '/images/Abbas-Abdelila.jpg',
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
    title: '5 Javascript Clean Coding Patterns To Enhance Your Code',
    content: `
    Introduction

    Clean code is essential for writing maintainable and efficient JavaScript applications. It improves readability, reduces bugs, and makes collaboration easier. By following clean coding patterns, developers can produce code that is easier to understand, maintain, and extend. In this article, we will explore five JavaScript clean coding patterns that can enhance your code and contribute to a better development experience.
    
    1. Consistent Naming Conventions
    
     
    One of the fundamental aspects of clean coding is using consistent and meaningful names for variables, functions, and classes. Descriptive and self-explanatory names can significantly improve code readability. By following naming conventions, such as camel case for variables and functions, and Pascal case for classes, you can make your code more intuitive. Avoid using ambiguous or cryptic names that might confuse other developers working on the codebase. Consistent naming conventions help create code that is easier to understand and maintain.
    
    2. Modularization and Single Responsibility Principle
    
    Breaking down your code into small, modular units is crucial for clean coding. Applying the Single Responsibility Principle (SRP) ensures that each module, function, or class has a single, well-defined purpose. This promotes code reusability and makes testing and debugging more manageable. By organizing your code into smaller, focused modules, you improve readability, maintainability, and flexibility. Aim for smaller functions or methods that perform specific tasks, rather than having large monolithic blocks of code.
    
    3. Avoiding Magic Numbers and Hardcoded Values
    
    Magic numbers and hardcoded values are non-descriptive and arbitrary values scattered throughout the codebase. They make the code difficult to understand and modify. Instead, it is recommended to use named constants or configuration variables. By assigning meaningful names to these values, their purpose becomes clear, and any changes can be made in a single place, improving maintainability. For example, instead of using to improve code clarity and maintainability.
    
    4. Error Handling and Graceful Degradation
    
    Error handling is a crucial aspect of clean coding. Properly handling errors and exceptions can prevent crashes and unexpected behavior in your application. Use try-catch blocks to catch and handle exceptions, providing meaningful error messages to users or logging them for debugging purposes. Additionally, consider implementing graceful degradation by anticipating potential errors and providing fallback mechanisms. Graceful degradation ensures that even if a certain feature or functionality fails, the application can still continue running without breaking the user experience.
    
    5. Commenting and Documentation
    
    Well-documented code is essential for clean coding practices. Comments help explain the intent, purpose, and functionality of code blocks. Use comments to clarify complex algorithms, provide insights into decision-making processes, or document any assumptions or limitations. However, it's important to strike a balance with comments. Avoid excessive or redundant comments that merely restate the code. Focus on adding value by providing context and explaining the reasoning behind the implementation choices.
    `,

    image: null,
    readingTime: 2,
    pinned: true,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 2,
      username: 'Abbas Abdelila',
      email: 'email.com1',
      bio: 'SDU',
      image: 'Abbas-Abdelila.jpg',
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
    content: `
    What is Wikipedia?
    Wikipedia, the world's largest and most popular online encyclopedia, has revolutionized the way we access information. Launched in 2001, Wikipedia has become a go-to source of knowledge for millions of people around the globe. What sets Wikipedia apart is its collaborative nature, where anyone can contribute and edit articles. This unique approach has created a vast repository of information, covering an extensive range of topics. With over 55 million articles in more than 300 languages, Wikipedia has truly become the encyclopedia of collective knowledge.
    
    What makes Wikipedia successful?
    📝 One of the key strengths of Wikipedia lies in its commitment to neutrality and reliability. While individual contributions can be made by anyone, Wikipedia employs a rigorous system of checks and balances. The community of volunteer editors constantly monitors and reviews articles, ensuring accuracy and quality. This collective effort helps prevent bias and misinformation, making Wikipedia a trusted source of information across various domains. Additionally, Wikipedia provides citations and references for its content, allowing readers to verify information and delve deeper into specific subjects.
    
    Impact of Wikipedia
    Wikipedia's impact on education, research, and the dissemination of knowledge cannot be overstated. Students and researchers regularly turn to Wikipedia as a starting point for their studies, gaining a general understanding of a topic before diving into more specialized sources. Moreover, Wikipedia's open-access nature aligns with the principles of free knowledge, enabling individuals worldwide to access information without financial barriers. Its availability on multiple platforms, including desktop and mobile devices, makes it easily accessible to people from all walks of life. Wikipedia's continued growth and success highlight the power of collaboration and the potential of the internet to democratize knowledge for the benefit of all.
    
    Conclusion
    Wikipedia has transformed the way we acquire knowledge, offering an extensive collection of articles contributed by a global community. Its commitment to neutrality, reliability, and open collaboration has made it a trusted resource for millions of people. As Wikipedia continues to expand and evolve, it serves as a testament to the power of collective wisdom and the democratization of information in the digital age.
    
    
    
    `,
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
        name: 'Wiki',
      },
    ],
  },
  {
    postId: 3,
    title: 'A Biotech Startup Reverses Aging',
    content: `
   Introduction
   In a groundbreaking development that has captivated both the scientific and business worlds, a biotech startup has claimed success in reversing aging. This remarkable achievement has paved the way for an unexpected market to emerge—the blood of the youth. As the quest for eternal youth and longevity continues to captivate human imagination, this newfound market raises ethical and societal questions while presenting potential opportunities for further research and medical advancements.
   
   The Reversal of Aging
   Through cutting-edge biotechnological interventions, this pioneering startup has achieved a significant milestone in reversing the aging process. Leveraging breakthroughs in cellular regeneration and genetic engineering, scientists have managed to rejuvenate aged cells, restoring their vitality and functionality to a level akin to youthful cells. By activating specific genetic pathways and manipulating the surrounding microenvironment, this innovative approach has shown promising results in various laboratory tests and animal trials. The implications of this breakthrough are profound, offering the potential to not only extend human lifespan but also improve overall health and quality of life.
   
   The Emergence of the Blood of the Youth Market
   As news of the successful aging reversal spread, a surprising market phenomenon has emerged—the blood of the youth. Reports of wealthy individuals seeking transfusions of young blood have surfaced, with a belief that it may hold the key to slowing down or reversing the aging process. This new market has captivated the attention of both venture capitalists and entrepreneurs, giving rise to clinics and companies offering rejuvenating therapies and products derived from young blood. However, it is crucial to approach this emerging market with caution and critical thinking, as the science behind the benefits of young blood transfusions is still in its early stages and largely unproven in humans.
   
   Conclusion
   The achievement of reversing aging by a biotech startup has created a ripple effect in the scientific and commercial landscape. While the breakthrough offers hope for extended human lifespan and improved well-being, it has also given rise to an intriguing market—the blood of the youth. As scientists continue to explore the mechanisms of aging and its potential reversibility, it is important to approach this emerging market with a discerning eye, considering both the ethical implications and the need for rigorous scientific validation. The convergence of scientific progress and entrepreneurial pursuits in the realm of longevity opens doors to new possibilities and challenges, warranting a careful balance between scientific advancement, ethical considerations, and societal impact.
   
   
   
   `,
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
    content: `
    Introduction
    In the world of programming, a seemingly counterintuitive adage has emerged: "Good programmers are lazy." While laziness is typically associated with negative connotations, in the realm of software development, it refers to the art of efficiency and automation. Good programmers strive to minimize repetitive tasks, streamline processes, and create elegant solutions that require less effort in the long run. Embracing laziness as a virtue can lead to more productive, maintainable, and scalable codebases.
    
    The Power of Laziness
    Good programmers understand that investing time upfront to automate repetitive tasks and optimize workflows pays dividends in the long term. By automating mundane and repetitive activities, they free up valuable time and mental energy to focus on more complex and intellectually stimulating challenges. This mindset encourages the exploration and adoption of tools, libraries, and frameworks that simplify development processes and reduce manual labor. Rather than reinventing the wheel, lazy programmers leverage existing solutions, open-source libraries, and reusable code snippets to accelerate their work. By embracing laziness, they foster a culture of efficiency, continuous improvement, and code reusability within their teams and organizations.
    
    Efficiency Through Automation:
    Automation is a cornerstone of laziness in programming. Good programmers aim to automate repetitive tasks, such as building, testing, and deploying code, through the use of continuous integration and deployment (CI/CD) pipelines. By setting up an automated pipeline, they reduce human error, save time, and ensure consistent quality across different stages of software development. Furthermore, they write scripts and develop tools to automate routine tasks like data parsing, file manipulation, and code generation. By automating these processes, programmers can minimize manual effort, reduce the risk of errors, and achieve higher productivity. The laziness-driven pursuit of efficiency through automation ultimately leads to more streamlined workflows and more robust software systems.
    
    Conclusion
    The notion that "good programmers are lazy" challenges traditional perceptions of laziness and reframes it as a pursuit of efficiency and automation. By prioritizing productivity and seeking ways to minimize manual effort, good programmers create streamlined workflows, leverage existing tools and libraries, and automate repetitive tasks. This approach enables them to focus on higher-value work, foster a culture of continuous improvement, and produce maintainable and scalable codebases. Embracing the laziness mindset can transform the way programmers approach their craft, ultimately leading to more efficient and effective software development.
    
    
    
    `,
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
    content: `

    Introduction
    In the realm of scientific exploration, a new frontier is emerging: biohacking. Combining elements of biology, technology, and self-experimentation, biohacking is revolutionizing the way we understand and interact with our own biology. It encompasses a broad range of practices, from DIY biology experiments to the use of wearable devices and genetic engineering techniques. As biohacking gains momentum, it presents both exciting opportunities and ethical considerations, reshaping our relationship with science, medicine, and human potential.
    
    Unleashing Human Potential
    Biohacking holds the promise of unlocking the vast potential of the human body and mind. By employing cutting-edge technologies and innovative approaches, biohackers seek to enhance physical and cognitive capabilities, improve overall well-being, and push the boundaries of human performance. From optimizing nutrition and exercise regimens to leveraging wearable devices for real-time health monitoring, biohacking empowers individuals to take control of their own biology. Furthermore, biohackers explore gene editing techniques, such as CRISPR, to potentially address genetic disorders and enhance desirable traits. While these practices raise ethical considerations and regulatory challenges, they also open doors to groundbreaking advancements in healthcare, longevity, and human augmentation.
    
    Ethical Considerations and Responsible Biohacking
    As biohacking continues to evolve, ethical considerations are paramount. The boundaries between self-experimentation, medical research, and unregulated practices can become blurred. It is crucial to navigate this new frontier responsibly, ensuring the safety and well-being of individuals while respecting ethical and legal frameworks. Biohackers must adhere to rigorous scientific methods, prioritize informed consent, and respect privacy rights. Collaborations with healthcare professionals and regulatory bodies are essential to establish guidelines, ensure accountability, and mitigate potential risks. Responsible biohacking acknowledges the importance of collective well-being, promoting transparency, open dialogue, and ethical decision-making.
    
    Conclusion
    Biohacking represents an exciting and transformative frontier in science. It empowers individuals to explore and optimize their own biology, pushing the boundaries of human potential. However, with this newfound power comes the responsibility to navigate ethical considerations, ensuring the safety, well-being, and ethical practice of biohacking. As scientists, researchers, and enthusiasts continue to delve into this emerging field, it is crucial to foster an environment of collaboration, responsible experimentation, and regulatory oversight. By doing so, we can harness the immense potential of biohacking to drive meaningful advancements in healthcare, longevity, and human well-being while safeguarding the principles of ethics and collective welfare.
    
    
    
    `,
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
    content: `
    Introduction
    Design is more than just a practical process; it is a form of art that combines creativity, functionality, and expression. From architecture and product design to graphic design and user experience, the art of design shapes the world around us. It goes beyond aesthetics, encompassing the thoughtful consideration of form, function, and the impact on users and society. Design has the power to evoke emotions, solve problems, and inspire change. In this article, we delve into the art of design and explore how it intertwines creativity, functionality, and self-expression.
    
    Creativity in Design
    At the core of design lies creativity—the ability to envision new possibilities and transcend traditional boundaries. Designers harness their imagination to conceive innovative concepts and develop unique solutions. Creative design brings freshness and originality, challenging conventional norms and pushing the boundaries of what is possible. It is through creativity that designs become impactful and memorable, capturing attention and evoking emotions. Whether it's in the subtle elegance of a logo, the harmonious lines of a building, or the intuitive interface of a digital platform, creativity infuses the art of design with the spark of inspiration.
    
    Functionality and User-Centric Design
    While creativity is essential, design is also intrinsically tied to functionality and user-centricity. Good design seamlessly blends aesthetics with practicality, ensuring that the end product fulfills its intended purpose effectively. Functionality encompasses not only the usability and efficiency of a design but also the consideration of the user's needs, desires, and expectations. A user-centric design approach prioritizes the end user's experience, considering factors such as accessibility, ease of use, and intuitiveness. The art of design involves finding the delicate balance between aesthetics and usability, creating designs that not only look visually appealing but also deliver a seamless and satisfying experience for the intended audience.
    
    Conclusion
    The art of design embraces creativity, functionality, and self-expression to shape the world around us. It is through creativity that designers push the boundaries of what is possible, introducing fresh perspectives and innovative solutions. However, design goes beyond aesthetics; it must also prioritize functionality and the needs of the user. By seamlessly integrating creativity and functionality, designers create impactful and memorable designs that evoke emotions and solve real-world problems. The art of design is an ever-evolving process, shaping our environment and enhancing our interactions with the world.
    
    
    

    `,
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
    content: `
   Introduction
   The year 2021 brought us a diverse array of exceptional films that captivated audiences worldwide. From thought-provoking dramas to pulse-pounding thrillers and heartfelt comedies, the cinematic landscape was rich with remarkable storytelling and breathtaking performances. In this article, we delve into the best movies of 2021, celebrating the creative vision and talent that graced the silver screen.
   
   Unforgettable Stories and Stellar Performances
   Among the standout movies of 2021, several films left an indelible mark on audiences with their compelling narratives and outstanding performances. From the poignant and introspective "Nomadland," directed by Chloé Zhao and starring Frances McDormand, to the exhilarating and culturally significant "Shang-Chi and the Legend of the Ten Rings," directed by Destin Daniel Cretton, the year was filled with films that resonated deeply with viewers. Other notable mentions include "Dune," Denis Villeneuve's epic sci-fi saga, and "The Power of the Dog," directed by Jane Campion and featuring a mesmerizing performance by Benedict Cumberbatch. These films, among others, demonstrated the power of storytelling to transport and engage audiences, leaving a lasting impact long after the credits roll.
   
   Cinematic Excellence and Artistic Achievement
   In addition to compelling storytelling, the best movies of 2021 showcased remarkable technical achievements and artistic prowess. Films like "Judas and the Black Messiah" and "Ma Rainey's Black Bottom" highlighted exceptional performances, delivering powerful narratives that explored themes of racial injustice and the human experience. Visually stunning films such as "The Green Knight," "The French Dispatch," and "No Time to Die" showcased meticulous attention to detail and innovative cinematography, elevating the cinematic experience. The year also witnessed groundbreaking animation with movies like "Soul" and "Raya and the Last Dragon," which blended captivating visuals with thought-provoking storytelling. These films, along with many others, exemplified the artistry and dedication of filmmakers in bringing their visions to life on the big screen.
   
   Conclusion
   The year 2021 treated moviegoers to a plethora of exceptional films, showcasing the best in storytelling, performances, and artistic achievement. From thought-provoking dramas to visually stunning blockbusters and animated gems, the cinematic landscape thrived with diverse and compelling narratives. These films not only entertained but also challenged our perspectives, evoking emotions and fostering a deeper appreciation for the power of cinema. As we reflect on the best movies of 2021, we eagerly anticipate the next wave of cinematic masterpieces and the creative journeys they will take us on.
   
   
   
   `,
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
    title: 'The Best Tv Shows Of 2022',
    content: `
    Introduction
    As the golden age of television continues to flourish, the year 2022 brought forth a remarkable lineup of television shows that captivated audiences with their storytelling prowess and unforgettable characters. From gripping dramas to innovative comedies and thought-provoking sci-fi series, the small screen showcased a diverse range of narratives that left viewers eagerly anticipating each new episode. In this article, we explore the best TV shows of 2022, celebrating their creativity, depth, and the impact they had on television landscape.
    
    Compelling Storytelling and Memorable Characters:
    The best TV shows of 2022 delivered powerful storytelling and introduced audiences to an array of captivating characters. From the suspenseful crime drama "Mare of Easttown" starring Kate Winslet to the enigmatic and mind-bending series "Loki" featuring Tom Hiddleston, viewers were treated to compelling narratives that kept them on the edge of their seats. Shows like "Succession" and "Ted Lasso" showcased complex characters and exceptional writing, exploring themes of power, family dynamics, and redemption. The year also witnessed the return of beloved series such as "Stranger Things" and "The Crown," continuing to enthrall fans with their rich storytelling and brilliant ensemble casts. Whether it was exploring contemporary social issues or diving into the depths of fantasy and science fiction, the best TV shows of 2022 were a testament to the power of storytelling and the ability of television to captivate audiences with multidimensional characters and intricate plotlines.
    
    Innovation and Genre Diversity
    2022 also witnessed innovation and genre diversity in television. Shows like "Squid Game" introduced audiences to the world of South Korean dramas, blending social commentary with intense survival themes. The animated series "Arcane: League of Legends" demonstrated that animation could tackle complex narratives and resonate with both fans and newcomers alike. Additionally, "The White Lotus" pushed the boundaries of dark comedy and satire, offering a fresh and unconventional take on a luxury resort vacation. From thrilling mysteries and suspenseful thrillers to heartwarming comedies and thought-provoking sci-fi, the best TV shows of 2022 showcased the vast spectrum of storytelling possibilities, proving that television remains a powerful medium for creative expression.
    
    Conclusion
    The year 2022 brought a wealth of outstanding television shows that left a lasting impact on audiences. From compelling storytelling to memorable characters and innovative approaches, these shows exemplified the artistry and depth of storytelling on the small screen. As the television landscape continues to evolve, we eagerly anticipate the next wave of captivating narratives and groundbreaking series. The best TV shows of 2022 remind us of the immense power of television to entertain, engage, and challenge our perspectives, further solidifying its position as a premier medium for storytelling and artistic expression.
    
    
    
    `,
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

  {
    postId: 9,
    title: 'How To Do What You Love',
    content: `

    January 2006

    To do something well you have to like it. That idea is not exactly novel. We've got it down to four words: "Do what you love." But it's not enough just to tell people that. Doing what you love is complicated.
    
    The very idea is foreign to what most of us learn as kids. When I was a kid, it seemed as if work and fun were opposites by definition. Life had two states: some of the time adults were making you do things, and that was called work; the rest of the time you could do what you wanted, and that was called playing. Occasionally the things adults made you do were fun, just as, occasionally, playing wasn't — for example, if you fell and hurt yourself. But except for these few anomalous cases, work was pretty much defined as not-fun.
    
    And it did not seem to be an accident. School, it was implied, was tedious because it was preparation for grownup work.
    
    The world then was divided into two groups, grownups and kids. Grownups, like some kind of cursed race, had to work. Kids didn't, but they did have to go to school, which was a dilute version of work meant to prepare us for the real thing. Much as we disliked school, the grownups all agreed that grownup work was worse, and that we had it easy.
    
    Teachers in particular all seemed to believe implicitly that work was not fun. Which is not surprising: work wasn't fun for most of them. Why did we have to memorize state capitals instead of playing dodgeball? For the same reason they had to watch over a bunch of kids instead of lying on a beach. You couldn't just do what you wanted.
    
    I'm not saying we should let little kids do whatever they want. They may have to be made to work on certain things. But if we make kids work on dull stuff, it might be wise to tell them that tediousness is not the defining quality of work, and indeed that the reason they have to work on dull stuff now is so they can work on more interesting stuff later. [1]
    
    Once, when I was about 9 or 10, my father told me I could be whatever I wanted when I grew up, so long as I enjoyed it. I remember that precisely because it seemed so anomalous. It was like being told to use dry water. Whatever I thought he meant, I didn't think he meant work could literally be fun — fun like playing. It took me years to grasp that.
    
    Jobs
    By high school, the prospect of an actual job was on the horizon. Adults would sometimes come to speak to us about their work, or we would go to see them at work. It was always understood that they enjoyed what they did. In retrospect I think one may have: the private jet pilot. But I don't think the bank manager really did.
    
    The main reason they all acted as if they enjoyed their work was presumably the upper-middle class convention that you're supposed to. It would not merely be bad for your career to say that you despised your job, but a social faux-pas.
    
    Why is it conventional to pretend to like what you do? The first sentence of this essay explains that. If you have to like something to do it well, then the most successful people will all like what they do. That's where the upper-middle class tradition comes from. Just as houses all over America are full of chairs that are, without the owners even knowing it, nth-degree imitations of chairs designed 250 years ago for French kings, conventional attitudes about work are, without the owners even knowing it, nth-degree imitations of the attitudes of people who've done great things.
    
    What a recipe for alienation. By the time they reach an age to think about what they'd like to do, most kids have been thoroughly misled about the idea of loving one's work. School has trained them to regard work as an unpleasant duty. Having a job is said to be even more onerous than schoolwork. And yet all the adults claim to like what they do. You can't blame kids for thinking "I am not like these people; I am not suited to this world."
    
    Actually they've been told three lies: the stuff they've been taught to regard as work in school is not real work; grownup work is not (necessarily) worse than schoolwork; and many of the adults around them are lying when they say they like what they do.
    
    The most dangerous liars can be the kids' own parents. If you take a boring job to give your family a high standard of living, as so many people do, you risk infecting your kids with the idea that work is boring. [2] Maybe it would be better for kids in this one case if parents were not so unselfish. A parent who set an example of loving their work might help their kids more than an expensive house. [3]
    
    It was not till I was in college that the idea of work finally broke free from the idea of making a living. Then the important question became not how to make money, but what to work on. Ideally these coincided, but some spectacular boundary cases (like Einstein in the patent office) proved they weren't identical.
    
    The definition of work was now to make some original contribution to the world, and in the process not to starve. But after the habit of so many years my idea of work still included a large component of pain. Work still seemed to require discipline, because only hard problems yielded grand results, and hard problems couldn't literally be fun. Surely one had to force oneself to work on them.
    
    If you think something's supposed to hurt, you're less likely to notice if you're doing it wrong. That about sums up my experience of graduate school.
    
    Bounds
    How much are you supposed to like what you do? Unless you know that, you don't know when to stop searching. And if, like most people, you underestimate it, you'll tend to stop searching too early. You'll end up doing something chosen for you by your parents, or the desire to make money, or prestige — or sheer inertia.
    
    Here's an upper bound: Do what you love doesn't mean, do what you would like to do most this second. Even Einstein probably had moments when he wanted to have a cup of coffee, but told himself he ought to finish what he was working on first.
    
    It used to perplex me when I read about people who liked what they did so much that there was nothing they'd rather do. There didn't seem to be any sort of work I liked that much. If I had a choice of (a) spending the next hour working on something or (b) be teleported to Rome and spend the next hour wandering about, was there any sort of work I'd prefer? Honestly, no.
    
    But the fact is, almost anyone would rather, at any given moment, float about in the Carribbean, or have sex, or eat some delicious food, than work on hard problems. The rule about doing what you love assumes a certain length of time. It doesn't mean, do what will make you happiest this second, but what will make you happiest over some longer period, like a week or a month.
    
    Unproductive pleasures pall eventually. After a while you get tired of lying on the beach. If you want to stay happy, you have to do something.
    
    As a lower bound, you have to like your work more than any unproductive pleasure. You have to like what you do enough that the concept of "spare time" seems mistaken. Which is not to say you have to spend all your time working. You can only work so much before you get tired and start to screw up. Then you want to do something else — even something mindless. But you don't regard this time as the prize and the time you spend working as the pain you endure to earn it.
    
    I put the lower bound there for practical reasons. If your work is not your favorite thing to do, you'll have terrible problems with procrastination. You'll have to force yourself to work, and when you resort to that the results are distinctly inferior.
    
    To be happy I think you have to be doing something you not only enjoy, but admire. You have to be able to say, at the end, wow, that's pretty cool. This doesn't mean you have to make something. If you learn how to hang glide, or to speak a foreign language fluently, that will be enough to make you say, for a while at least, wow, that's pretty cool. What there has to be is a test.
    
    So one thing that falls just short of the standard, I think, is reading books. Except for some books in math and the hard sciences, there's no test of how well you've read a book, and that's why merely reading books doesn't quite feel like work. You have to do something with what you've read to feel productive.
    
    I think the best test is one Gino Lee taught me: to try to do things that would make your friends say wow. But it probably wouldn't start to work properly till about age 22, because most people haven't had a big enough sample to pick friends from before then.
    
    Sirens
    What you should not do, I think, is worry about the opinion of anyone beyond your friends. You shouldn't worry about prestige. Prestige is the opinion of the rest of the world. When you can ask the opinions of people whose judgement you respect, what does it add to consider the opinions of people you don't even know? [4]
    
    This is easy advice to give. It's hard to follow, especially when you're young. [5] Prestige is like a powerful magnet that warps even your beliefs about what you enjoy. It causes you to work not on what you like, but what you'd like to like.
    
    That's what leads people to try to write novels, for example. They like reading novels. They notice that people who write them win Nobel prizes. What could be more wonderful, they think, than to be a novelist? But liking the idea of being a novelist is not enough; you have to like the actual work of novel-writing if you're going to be good at it; you have to like making up elaborate lies.
    
    Prestige is just fossilized inspiration. If you do anything well enough, you'll make it prestigious. Plenty of things we now consider prestigious were anything but at first. Jazz comes to mind — though almost any established art form would do. So just do what you like, and let prestige take care of itself.
    
    Prestige is especially dangerous to the ambitious. If you want to make ambitious people waste their time on errands, the way to do it is to bait the hook with prestige. That's the recipe for getting people to give talks, write forewords, serve on committees, be department heads, and so on. It might be a good rule simply to avoid any prestigious task. If it didn't suck, they wouldn't have had to make it prestigious.
    
    Similarly, if you admire two kinds of work equally, but one is more prestigious, you should probably choose the other. Your opinions about what's admirable are always going to be slightly influenced by prestige, so if the two seem equal to you, you probably have more genuine admiration for the less prestigious one.
    
    The other big force leading people astray is money. Money by itself is not that dangerous. When something pays well but is regarded with contempt, like telemarketing, or prostitution, or personal injury litigation, ambitious people aren't tempted by it. That kind of work ends up being done by people who are "just trying to make a living." (Tip: avoid any field whose practitioners say this.) The danger is when money is combined with prestige, as in, say, corporate law, or medicine. A comparatively safe and prosperous career with some automatic baseline prestige is dangerously tempting to someone young, who hasn't thought much about what they really like.
    
    The test of whether people love what they do is whether they'd do it even if they weren't paid for it — even if they had to work at another job to make a living. How many corporate lawyers would do their current work if they had to do it for free, in their spare time, and take day jobs as waiters to support themselves?
    
    This test is especially helpful in deciding between different kinds of academic work, because fields vary greatly in this respect. Most good mathematicians would work on math even if there were no jobs as math professors, whereas in the departments at the other end of the spectrum, the availability of teaching jobs is the driver: people would rather be English professors than work in ad agencies, and publishing papers is the way you compete for such jobs. Math would happen without math departments, but it is the existence of English majors, and therefore jobs teaching them, that calls into being all those thousands of dreary papers about gender and identity in the novels of Conrad. No one does that kind of thing for fun.
    
    The advice of parents will tend to err on the side of money. It seems safe to say there are more undergrads who want to be novelists and whose parents want them to be doctors than who want to be doctors and whose parents want them to be novelists. The kids think their parents are "materialistic." Not necessarily. All parents tend to be more conservative for their kids than they would for themselves, simply because, as parents, they share risks more than rewards. If your eight year old son decides to climb a tall tree, or your teenage daughter decides to date the local bad boy, you won't get a share in the excitement, but if your son falls, or your daughter gets pregnant, you'll have to deal with the consequences.
    
    Discipline
    With such powerful forces leading us astray, it's not surprising we find it so hard to discover what we like to work on. Most people are doomed in childhood by accepting the axiom that work = pain. Those who escape this are nearly all lured onto the rocks by prestige or money. How many even discover something they love to work on? A few hundred thousand, perhaps, out of billions.
    
    It's hard to find work you love; it must be, if so few do. So don't underestimate this task. And don't feel bad if you haven't succeeded yet. In fact, if you admit to yourself that you're discontented, you're a step ahead of most people, who are still in denial. If you're surrounded by colleagues who claim to enjoy work that you find contemptible, odds are they're lying to themselves. Not necessarily, but probably.
    
    Although doing great work takes less discipline than people think — because the way to do great work is to find something you like so much that you don't have to force yourself to do it — finding work you love does usually require discipline. Some people are lucky enough to know what they want to do when they're 12, and just glide along as if they were on railroad tracks. But this seems the exception. More often people who do great things have careers with the trajectory of a ping-pong ball. They go to school to study A, drop out and get a job doing B, and then become famous for C after taking it up on the side.
    
    Sometimes jumping from one sort of work to another is a sign of energy, and sometimes it's a sign of laziness. Are you dropping out, or boldly carving a new path? You often can't tell yourself. Plenty of people who will later do great things seem to be disappointments early on, when they're trying to find their niche.
    
    Is there some test you can use to keep yourself honest? One is to try to do a good job at whatever you're doing, even if you don't like it. Then at least you'll know you're not using dissatisfaction as an excuse for being lazy. Perhaps more importantly, you'll get into the habit of doing things well.
    
    Another test you can use is: always produce. For example, if you have a day job you don't take seriously because you plan to be a novelist, are you producing? Are you writing pages of fiction, however bad? As long as you're producing, you'll know you're not merely using the hazy vision of the grand novel you plan to write one day as an opiate. The view of it will be obstructed by the all too palpably flawed one you're actually writing.
    
    "Always produce" is also a heuristic for finding the work you love. If you subject yourself to that constraint, it will automatically push you away from things you think you're supposed to work on, toward things you actually like. "Always produce" will discover your life's work the way water, with the aid of gravity, finds the hole in your roof.
    
    Of course, figuring out what you like to work on doesn't mean you get to work on it. That's a separate question. And if you're ambitious you have to keep them separate: you have to make a conscious effort to keep your ideas about what you want from being contaminated by what seems possible. [6]
    
    It's painful to keep them apart, because it's painful to observe the gap between them. So most people pre-emptively lower their expectations. For example, if you asked random people on the street if they'd like to be able to draw like Leonardo, you'd find most would say something like "Oh, I can't draw." This is more a statement of intention than fact; it means, I'm not going to try. Because the fact is, if you took a random person off the street and somehow got them to work as hard as they possibly could at drawing for the next twenty years, they'd get surprisingly far. But it would require a great moral effort; it would mean staring failure in the eye every day for years. And so to protect themselves people say "I can't."
    
    Another related line you often hear is that not everyone can do work they love — that someone has to do the unpleasant jobs. Really? How do you make them? In the US the only mechanism for forcing people to do unpleasant jobs is the draft, and that hasn't been invoked for over 30 years. All we can do is encourage people to do unpleasant work, with money and prestige.
    
    If there's something people still won't do, it seems as if society just has to make do without. That's what happened with domestic servants. For millennia that was the canonical example of a job "someone had to do." And yet in the mid twentieth century servants practically disappeared in rich countries, and the rich have just had to do without.
    
    So while there may be some things someone has to do, there's a good chance anyone saying that about any particular job is mistaken. Most unpleasant jobs would either get automated or go undone if no one were willing to do them.
    
    Two Routes
    There's another sense of "not everyone can do work they love" that's all too true, however. One has to make a living, and it's hard to get paid for doing work you love. There are two routes to that destination:
    
    The organic route: as you become more eminent, gradually to increase the parts of your job that you like at the expense of those you don't.
    
    The organic route is more common. It happens naturally to anyone who does good work. A young architect has to take whatever work he can get, but if he does well he'll gradually be in a position to pick and choose among projects. The disadvantage of this route is that it's slow and uncertain. Even tenure is not real freedom.
    
    The two-job route has several variants depending on how long you work for money at a time. At one extreme is the "day job," where you work regular hours at one job to make money, and work on what you love in your spare time. At the other extreme you work at something till you make
    
    enough
    
    not to have to work for money again.
    
    The two-job route is less common than the organic route, because it requires a deliberate choice. It's also more dangerous. Life tends to get more expensive as you get older, so it's easy to get sucked into working longer than you expected at the money job. Worse still, anything you work on changes you. If you work too long on tedious stuff, it will rot your brain. And the best paying jobs are most dangerous, because they require your full attention.
    
    The advantage of the two-job route is that it lets you jump over obstacles. The landscape of possible jobs isn't flat; there are walls of varying heights between different kinds of work.
    
    [7]
    
    The trick of maximizing the parts of your job that you like can get you from architecture to product design, but not, probably, to music. If you make money doing one thing and then work on another, you have more freedom of choice.
    
    Which route should you take? That depends on how sure you are of what you want to do, how good you are at taking orders, how much risk you can stand, and the odds that anyone will pay (in your lifetime) for what you want to do. If you're sure of the general area you want to work in and it's something people are likely to pay you for, then you should probably take the organic route. But if you don't know what you want to work on, or don't like to take orders, you may want to take the two-job route, if you can stand the risk.
    
    Don't decide too soon. Kids who know early what they want to do seem impressive, as if they got the answer to some math question before the other kids. They have an answer, certainly, but odds are it's wrong.
    
    A friend of mine who is a quite successful doctor complains constantly about her job. When people applying to medical school ask her for advice, she wants to shake them and yell "Don't do it!" (But she never does.) How did she get into this fix? In high school she already wanted to be a doctor. And she is so ambitious and determined that she overcame every obstacle along the way — including, unfortunately, not liking it.
    
    Now she has a life chosen for her by a high-school kid.
    
    When you're young, you're given the impression that you'll get enough information to make each choice before you need to make it. But this is certainly not so with work. When you're deciding what to do, you have to operate on ridiculously incomplete information. Even in college you get little idea what various types of work are like. At best you may have a couple internships, but not all jobs offer internships, and those that do don't teach you much more about the work than being a batboy teaches you about playing baseball.
    
    In the design of lives, as in the design of most other things, you get better results if you use flexible media. So unless you're fairly sure what you want to do, your best bet may be to choose a type of work that could turn into either an organic or two-job career. That was probably part of the reason I chose computers. You can be a professor, or make a lot of money, or morph it into any number of other kinds of work.
    
    It's also wise, early on, to seek jobs that let you do many different things, so you can learn faster what various kinds of work are like. Conversely, the extreme version of the two-job route is dangerous because it teaches you so little about what you like. If you work hard at being a bond trader for ten years, thinking that you'll quit and write novels when you have enough money, what happens when you quit and then discover that you don't actually like writing novels?
    
    Most people would say, I'd take that problem. Give me a million dollars and I'll figure out what to do. But it's harder than it looks. Constraints give your life shape. Remove them and most people have no idea what to do: look at what happens to those who win lotteries or inherit money. Much as everyone thinks they want financial security, the happiest people are not those who have it, but those who like what they do. So a plan that promises freedom at the expense of knowing what to do with it may not be as good as it seems.
    
    Whichever route you take, expect a struggle. Finding work you love is very difficult. Most people fail. Even if you succeed, it's rare to be free to work on what you want till your thirties or forties. But if you have the destination in sight you'll be more likely to arrive at it. If you know you can love work, you're in the home stretch, and if you know what work you love, you're practically there.
    
    Notes
    
    [1] Currently we do the opposite: when we make kids do boring work, like arithmetic drills, instead of admitting frankly that it's boring, we try to disguise it with superficial decorations.
    
    [2] One father told me about a related phenomenon: he found himself concealing from his family how much he liked his work. When he wanted to go to work on a saturday, he found it easier to say that it was because he "had to" for some reason, rather than admitting he preferred to work than stay home with them.
    
    [3] Something similar happens with suburbs. Parents move to suburbs to raise their kids in a safe environment, but suburbs are so dull and artificial that by the time they're fifteen the kids are convinced the whole world is boring.
    
    [4] I'm not saying friends should be the only audience for your work. The more people you can help, the better. But friends should be your compass.
    
    [5] Donald Hall said young would-be poets were mistaken to be so obsessed with being published. But you can imagine what it would do for a 24 year old to get a poem published in The New Yorker.
    
    Now to people he meets at parties he's a real poet. Actually he's no better or worse than he was before, but to a clueless audience like that, the approval of an official authority makes all the difference. So it's a harder problem than Hall realizes. The reason the young care so much about prestige is that the people they want to impress are not very discerning.
    
    [6] This is isomorphic to the principle that you should prevent your beliefs about how things are from being contaminated by how you wish they were. Most people let them mix pretty promiscuously. The continuing popularity of religion is the most visible index of that.
    
    [7] A more accurate metaphor would be to say that the graph of jobs is not very well connected.
    
    Thanks
    
    to Trevor Blackwell, Dan Friedman, Sarah Harlin, Jessica Livingston, Jackie McDonough, Robert Morris, Peter Norvig, David Sloo, and Aaron Swartz for reading drafts of this.
    `,
    image: null,
    readingTime: 14,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 8,
      username: 'Paul Graham',
      email: 'paulgraham@example.com',
      bio: "Paul's bio",
      image: 'Paul-Graham.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 9,
      },
    ],
    tags: [
      {
        tagId: 11,
        name: 'Technology',
      },
    ],
  },

  {
    postId: 10,
    title: 'How To Think For Yourself',
    content: `
    How To Think For Yourself
    November 2020
    
    There are some kinds of work that you can't do well without thinking differently from your peers. To be a successful scientist, for example, it's not enough just to be correct. Your ideas have to be both correct and novel. You can't publish papers saying things other people already know. You need to say things no one else has realized yet.
    
    The same is true for investors. It's not enough for a public market investor to predict correctly how a company will do. If a lot of other people make the same prediction, the stock price will already reflect it, and there's no room to make money. The only valuable insights are the ones most other investors don't share.
    
    You see this pattern with startup founders too. You don't want to start a startup to do something that everyone agrees is a good idea, or there will already be other companies doing it. You have to do something that sounds to most other people like a bad idea, but that you know isn't — like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors.
    
    Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.
    
    But this pattern isn't universal. In fact, it doesn't hold for most kinds of work. In most kinds of work — to be an administrator, for example — all you need is the first half. All you need is to be right. It's not essential that everyone else be wrong.
    
    There's room for a little novelty in most kinds of work, but in practice there's a fairly sharp distinction between the kinds of work where it's essential to be independent-minded, and the kinds where it's not.
    
    I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do. Do you want to do the kind of work where you can only win by thinking differently from everyone else? I suspect most people's unconscious mind will answer that question before their conscious mind has a chance to. I know mine does.
    
    Independent-mindedness seems to be more a matter of nature than nurture. Which means if you pick the wrong type of work, you're going to be unhappy. If you're naturally independent-minded, you're going to find it frustrating to be a middle manager. And if you're naturally conventional-minded, you're going to be sailing into a headwind if you try to do original research.
    
    One difficulty here, though, is that people are often mistaken about where they fall on the spectrum from conventional- to independent-minded. Conventional-minded people don't like to think of themselves as conventional-minded. And in any case, it genuinely feels to them as if they make up their own minds about everything. It's just a coincidence that their beliefs are identical to their peers'. And the independent-minded, meanwhile, are often unaware how different their ideas are from conventional ones, at least till they state them publicly.
    
    [1]
    
    By the time they reach adulthood, most people know roughly how smart they are (in the narrow sense of ability to solve pre-set problems), because they're constantly being tested and ranked according to it. But schools generally ignore independent-mindedness, except to the extent they try to suppress it. So we don't get anything like the same kind of feedback about how independent-minded we are.
    
    There may even be a phenomenon like Dunning-Kruger at work, where the most conventional-minded people are confident that they're independent-minded, while the genuinely independent-minded worry they might not be independent-minded enough.
    
    Can you make yourself more independent-minded? I think so. This quality may be largely inborn, but there seem to be ways to magnify it, or at least not to suppress it.
    
    One of the most effective techniques is one practiced unintentionally by most nerds: simply to be less aware what conventional beliefs are. It's hard to be a conformist if you don't know what you're supposed to conform to. Though again, it may be that such people already are independent-minded. A conventional-minded person would probably feel anxious not knowing what other people thought, and make more effort to find out.
    
    It matters a lot who you surround yourself with. If you're surrounded by conventional-minded people, it will constrain which ideas you can express, and that in turn will constrain which ideas you have. But if you surround yourself with independent-minded people, you'll have the opposite experience: hearing other people say surprising things will encourage you to, and to think of more.
    
    Because the independent-minded find it uncomfortable to be surrounded by conventional-minded people, they tend to self-segregate once they have a chance to. The problem with high school is that they haven't yet had a chance to. Plus high school tends to be an inward-looking little world whose inhabitants lack confidence, both of which magnify the forces of conformism. So high school is often a bad time for the independent-minded. But there is some advantage even here: it teaches you what to avoid. If you later find yourself in a situation that makes you think "this is like high school," you know you should get out.
    
    [2]
    
    Another place where the independent- and conventional-minded are thrown together is in successful startups. The founders and early employees are almost always independent-minded; otherwise the startup wouldn't be successful. But conventional-minded people greatly outnumber independent-minded ones, so as the company grows, the original spirit of independent-mindedness is inevitably diluted. This causes all kinds of problems besides the obvious one that the company starts to suck. One of the strangest is that the founders find themselves able to speak more freely with founders of other companies than with their own employees.
    
    [3]
    
    Fortunately you don't have to spend all your time with independent-minded people. It's enough to have one or two you can talk to regularly. And once you find them, they're usually as eager to talk as you are; they need you too. Although universities no longer have the kind of monopoly they used to have on education, good universities are still an excellent way to meet independent-minded people. Most students will still be conventional-minded, but you'll at least find clumps of independent-minded ones, rather than the near zero you may have found in high school.
    
    It also works to go in the other direction: as well as cultivating a small collection of independent-minded friends, to try to meet as many different types of people as you can. It will decrease the influence of your immediate peers if you have several other groups of peers. Plus if you're part of several different worlds, you can often import ideas from one to another.
    
    But by different types of people, I don't mean demographically different. For this technique to work, they have to think differently. So while it's an excellent idea to go and visit other countries, you can probably find people who think differently right around the corner. When I meet someone who knows a lot about something unusual (which includes practically everyone, if you dig deep enough), I try to learn what they know that other people don't. There are almost always surprises here. It's a good way to make conversation when you meet strangers, but I don't do it to make conversation. I really want to know.
    
    You can expand the source of influences in time as well as space, by reading history. When I read history I do it not just to learn what happened, but to try to get inside the heads of people who lived in the past. How did things look to them? This is hard to do, but worth the effort for the same reason it's worth travelling far to triangulate a point.
    
    You can also take more explicit measures to prevent yourself from automatically adopting conventional opinions. The most general is to cultivate an attitude of skepticism. When you hear someone say something, stop and ask yourself "Is that true?" Don't say it out loud. I'm not suggesting that you impose on everyone who talks to you the burden of proving what they say, but rather that you take upon yourself the burden of evaluating what they say.
    
    Treat it as a puzzle. You know that some accepted ideas will later turn out to be wrong. See if you can guess which. The end goal is not to find flaws in the things you're told, but to find the new ideas that had been concealed by the broken ones. So this game should be an exciting quest for novelty, not a boring protocol for intellectual hygiene. And you'll be surprised, when you start asking "Is this true?", how often the answer is not an immediate yes. If you have any imagination, you're more likely to have too many leads to follow than too few.
    
    More generally your goal should be not to let anything into your head unexamined, and things don't always enter your head in the form of statements. Some of the most powerful influences are implicit. How do you even notice these? By standing back and watching how other people get their ideas.
    
    When you stand back at a sufficient distance, you can see ideas spreading through groups of people like waves. The most obvious are in fashion: you notice a few people wearing a certain kind of shirt, and then more and more, until half the people around you are wearing the same shirt. You may not care much what you wear, but there are intellectual fashions too, and you definitely don't want to participate in those. Not just because you want sovereignty over your own thoughts, but because unfashionable ideas are disproportionately likely to lead somewhere interesting. The best place to find undiscovered ideas is where no one else is looking.[4]
    
    To go beyond this general advice, we need to look at the internal structure of independent-mindedness — at the individual muscles we need to exercise, as it were. It seems to me that it has three components: fastidiousness about truth, resistance to being told what to think, and curiosity.
    
    Fastidiousness about truth means more than just not believing things that are false. It means being careful about degree of belief. For most people, degree of belief rushes unexamined toward the extremes: the unlikely becomes impossible, and the probable becomes certain.
    
    [5]
    
    To the independent-minded, this seems unpardonably sloppy. They're willing to have anything in their heads, from highly speculative hypotheses to (apparent) tautologies, but on subjects they care about, everything has to be labelled with a carefully considered degree of belief.
    
    [6]
    
    The independent-minded thus have a horror of ideologies, which require one to accept a whole collection of beliefs at once, and to treat them as articles of faith. To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.
    
    Without this fastidiousness about truth, you can't be truly independent-minded. It's not enough just to have resistance to being told what to think. Those kind of people reject conventional ideas only to replace them with the most random conspiracy theories. And since these conspiracy theories have often been manufactured to capture them, they end up being less independent-minded than ordinary people, because they're subject to a much more exacting master than mere convention.
    
    [7]
    
    Can you increase your fastidiousness about truth? I would think so. In my experience, merely thinking about something you're fastidious about causes that fastidiousness to grow. If so, this is one of those rare virtues we can have more of merely by wanting it. And if it's like other forms of fastidiousness, it should also be possible to encourage in children. I certainly got a strong dose of it from my father.
    
    [8]
    
    The second component of independent-mindedness, resistance to being told what to think, is the most visible of the three. But even this is often misunderstood. The big mistake people make about it is to think of it as a merely negative quality. The language we use reinforces that idea. You're
    
    unconventional. You don't care what other people think. But it's not just a kind of immunity. In the most independent-minded people, the desire not to be told what to think is a positive force. It's not mere skepticism, but an active delight in ideas that subvert the conventional wisdom, the more counterintuitive the better.
    
    Some of the most novel ideas seemed at the time almost like practical jokes. Think how often your reaction to a novel idea is to laugh. I don't think it's because novel ideas are funny per se, but because novelty and humor share a certain kind of surprisingness. But while not identical, the two are close enough that there is a definite correlation between having a sense of humor and being independent-minded — just as there is between being humorless and being conventional-minded.
    
    [9]
    
    I don't think we can significantly increase our resistance to being told what to think. It seems the most innate of the three components of independent-mindedness; people who have this quality as adults usually showed all too visible signs of it as children. But if we can't increase our resistance to being told what to think, we can at least shore it up, by surrounding ourselves with other independent-minded people.
    
    The third component of independent-mindedness, curiosity, may be the most interesting. To the extent that we can give a brief answer to the question of where novel ideas come from, it's curiosity. That's what people are usually feeling before having them.
    
    In my experience, independent-mindedness and curiosity predict one another perfectly. Everyone I know who's independent-minded is deeply curious, and everyone I know who's conventional-minded isn't. Except, curiously, children. All small children are curious. Perhaps the reason is that even the conventional-minded have to be curious in the beginning, in order to learn what the conventions are. Whereas the independent-minded are the gluttons of curiosity, who keep eating even after they're full.
    
    [10]
    
    The three components of independent-mindedness work in concert: fastidiousness about truth and resistance to being told what to think leave space in your brain, and curiosity finds new ideas to fill it.
    
    Interestingly, the three components can substitute for one another in much the same way muscles can. If you're sufficiently fastidious about truth, you don't need to be as resistant to being told what to think, because fastidiousness alone will create sufficient gaps in your knowledge. And either one can compensate for curiosity, because if you create enough space in your brain, your discomfort at the resulting vacuum will add force to your curiosity. Or curiosity can compensate for them: if you're sufficiently curious, you don't need to clear space in your brain, because the new ideas you discover will push out the conventional ones you acquired by default.
    
    Because the components of independent-mindedness are so interchangeable, you can have them to varying degrees and still get the same result. So there is not just a single model of independent-mindedness. Some independent-minded people are openly subversive, and others are quietly curious. They all know the secret handshake though.
    
    Is there a way to cultivate curiosity? To start with, you want to avoid situations that suppress it. How much does the work you're currently doing engage your curiosity? If the answer is "not much," maybe you should change something.
    
    The most important active step you can take to cultivate your curiosity is probably to seek out the topics that engage it. Few adults are equally curious about everything, and it doesn't seem as if you can choose which topics interest you. So it's up to you to find them. Or invent them, if necessary.
    
    Another way to increase your curiosity is to indulge it, by investigating things you're interested in. Curiosity is unlike most other appetites in this respect: indulging it tends to increase rather than to sate it. Questions lead to more questions.
    
    Curiosity seems to be more individual than fastidiousness about truth or resistance to being told what to think. To the degree people have the latter two, they're usually pretty general, whereas different people can be curious about very different things. So perhaps curiosity is the compass here. Perhaps, if your goal is to discover novel ideas, your motto should not be "do what you love" so much as "do what you're curious about."
    
    Notes
    
    [1] One convenient consequence of the fact that no one identifies as conventional-minded is that you can say what you like about conventional-minded people without getting in too much trouble. When I wrote "The Four Quadrants of Conformism"
    
    I expected a firestorm of rage from the aggressively conventional-minded, but in fact it was quite muted. They sensed that there was something about the essay that they disliked intensely, but they had a hard time finding a specific passage to pin it on.
    
    [2] When I ask myself what in my life is like high school, the answer is Twitter. It's not just full of conventional-minded people, as anything its size will inevitably be, but subject to violent storms of conventional-mindedness that remind me of descriptions of Jupiter. But while it probably is a net loss to spend time there, it has at least made me think more about the distinction between independent- and conventional-mindedness, which I probably wouldn't have done otherwise.
    
    [3] The decrease in independent-mindedness in growing startups is still an open problem, but there may be solutions.
    
    Founders can delay the problem by making a conscious effort only to hire independent-minded people. Which of course also has the ancillary benefit that they have better ideas.
    
    Another possible solution is to create policies that somehow disrupt the force of conformism, much as control rods slow chain reactions, so that the conventional-minded aren't as dangerous. The physical separation of Lockheed's Skunk Works may have had this as a side benefit. Recent examples suggest employee forums like Slack may not be an unmitigated good.
    
    The most radical solution would be to grow revenues without growing the company. You think hiring that junior PR person will be cheap, compared to a programmer, but what will be the effect on the average level of independent-mindedness in your company? (The growth in staff relative to faculty seems to have had a similar effect on universities.) Perhaps the rule about outsourcing work that's not your "core competency" should be augmented by one about outsourcing work done by people who'd ruin your culture as employees.
    
    Some investment firms already seem to be able to grow revenues without growing the number of employees. Automation plus the ever increasing articulation of the "tech stack" suggest this may one day be possible for product companies.
    
    [4] There are intellectual fashions in every field, but their influence varies. One of the reasons politics, for example, tends to be boring is that it's so extremely subject to them. The threshold for having opinions about politics is much lower than the one for having opinions about set theory. So while there are some ideas in politics, in practice they tend to be swamped by waves of intellectual fashion.
    
    [5] The conventional-minded are often fooled by the strength of their opinions into believing that they're independent-minded. But strong convictions are not a sign of independent-mindedness. Rather the opposite.
    
    [6] Fastidiousness about truth doesn't imply that an independent-minded person won't be dishonest, but that he won't be deluded. It's sort of like the definition of a gentleman as someone who is never unintentionally rude.
    
    [7] You see this especially among political extremists. They think themselves nonconformists, but actually they're niche conformists. Their opinions may be different from the average person's, but they are often more influenced by their peers' opinions than the average person's are.
    
    [8] If we broaden the concept of fastidiousness about truth so that it excludes pandering, bogusness, and pomposity as well as falsehood in the strict sense, our model of independent-mindedness can expand further into the arts.
    
    [9] This correlation is far from perfect, though. Gödel and Dirac don't seem to have been very strong in the humor department. But someone who is both "neurotypical" and humorless is very likely to be conventional-minded.
    
    [10] Exception: gossip. Almost everyone is curious about gossip.
    
    Thanks
    
    to Trevor Blackwell, Paul Buchheit, Patrick Collison, Jessica Livingston, Robert Morris, Harj Taggar, and Peter Thiel for reading drafts of this.
    
    
    
    `,
    image: null,
    readingTime: 12,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 9,
      username: 'Paul Graham',
      email: 'paulgraham@example.com',
      bio: "Paul's bio",
      image: 'Paul-Graham.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 10,
      },
    ],
    tags: [
      {
        tagId: 12,
        name: 'Education',
      },
    ],
  },

  {
    postId: 11,
    title: 'Picking Career',
    content: `
    
    Hey readers! Quick note before we jump in:

    This is a post about something I’ve been wanting to write about forever: careers. Society tells us a lot of things about what we should want in a career and what the possibilities are—which is weird because I’m pretty sure society knows very little about any of this. When it comes to careers, society is like your great uncle who traps you at holidays and goes on a 15-minute mostly incoherent unsolicited advice monologue, and you tune out almost the whole time because it’s super clear he has very little idea what he’s talking about and that everything he says is like 45 years outdated. Society is like that great uncle, and conventional wisdom is like his rant. Except in this case, instead of tuning it out, we pay rapt attention to every word, and then we make major career decisions based on what he says. Kind of a weird thing for us to do.
    
    This post isn’t me giving you career advice really—it’s a framework that I think can help you make career decisions that actually reflect who you are, what you want, and what our rapidly changing career landscape looks like today. You’re not a pro at this, but you’re certainly more qualified to figure out what’s best for you than our collective un-self-aware great uncle. For those of you yet to start your career who aren’t sure what you want to do with their lives, or those of you currently in the middle of your career who aren’t sure you’re on the right path, I hope this post can help you press the reset button on your thought process and get some clarity.
    
    Finally, it feels very good to put this post up. It’s been way, way too long. The last year has been pretty frustrating for me and anyone who likes Wait But Why—a lot of build-up of ideas with none of the satisfying release of those ideas on the blog (most of my last year has been spent working on another, way longer post). I’m hoping this WBW Dark Ages era is nearing its end, because I miss hanging out here. Thanks, as always, to the small group of ridiculously generous, ridiculously patient patrons who have stuck with us through such a slow period.
    
    – Tim
    
    PDF: If you want to print this post or read it offline, the PDF is probably the way to go. You can buy it here.
    
    Your Life Path So Far
    For most of us, childhood is kind of like a river, and we’re kind of like tadpoles.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/river-2.png
    
    We didn’t choose the river. We just woke up out of nowhere and found ourselves on some path set for us by our parents, by society, and by circumstances. We’re told the rules of the river and the way we should swim and what our goals should be. Our job isn’t to think about our path—it’s to succeed on the path we’ve been placed on, based on the way success has been defined for us.
    
    For many of us—and I suspect for a large portion of Wait But Why readers—our childhood river then feeds into a pond, called college.1 We may have some say in which particular pond we landed in, but in the end, most college ponds aren’t really that different from one another.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/pond-1.png
    
    In the pond, we have a bit more breathing room and some leeway to branch out into more specific interests. We start to ponder, looking out at the pond’s shores—out there where the real world starts and where we’ll be spending the rest of our lives. This usually brings some mixed feelings.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Looking-at-shore-2.png
    
    And then, 22 years after waking up in a rushing river, we’re kicked out of the pond and told by the world to go make something of our lives.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/shore-1.jpg
    
    There are a few problems here. One is that at that moment, you’re kind of skill-less and knowledge-less and a lot of other things-less:
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/shore-2.jpg
    
    But before you can even address your general uselessness, there’s an even bigger issue—your pre-set path ended. Kids in school are kind of like employees of a company where someone else is the CEO. But no one is the CEO of your life in the real world, or of your career path—except you. And you’ve spent your whole life becoming a pro student, leaving you with zero experience as the CEO of anything. Up to now, you’ve only been in charge of the micro decisions—”How do I succeed at my job as a student?”—and now you’re suddenly holding the keys to the macro cockpit as well, tasked with answering stressful macro questions like “Who am I?” and “What are the important things in life?” and “What are my options for paths and which one should I choose and how do I even make a path?” When we leave school for the last time, the macro guidance we’ve become so accustomed to is suddenly whisked away from us, leaving us standing there holding our respective dicks, with no idea how to do this.
    
    Then time happens. And we end up on a path. And that path becomes our life’s story.
    
    At the end of our life, when we look back at how things went, we can see our life’s path in its entirety, from an aerial view.
    
    When scientists study people on their deathbed and how they feel about their lives, they usually find that many of them feel some serious regrets. I think a lot of those regrets stem from the fact that most of us aren’t really taught about path-making in our childhoods, and most of us also don’t get much better at path-making as adults, which leaves many people looking back on a life path that didn’t really make sense, given who they are and the world they lived in.
    
    So this is a post about path-making. Let’s take a 30-minute pre-deathbed pause to look down at the path we’re on, and ahead at where that path seems to be going, and make sure it makes sense.
    
    The Cook and the Chef—Revisited
    
    In the past, I’ve written about the critical distinction between “reasoning from first principles” and “reasoning by analogy”—or what I called being a “chef” vs. being a “cook.” Since writing the post, I notice this distinction everywhere, and I’ve thought about it roughly 2 million times in my own life.
    
    The idea is that reasoning from first principles is reasoning like a scientist. You take core facts and observations and use them to puzzle together a conclusion, kind of like a chef playing around with raw ingredients to try to make them into something good. By doing this puzzling, a chef eventually writes a new recipe. The other kind of reasoning—reasoning by analogy—happens when you look at the way things are already done and you essentially copy it, with maybe a little personal tweak here and there—kind of like a cook following an already written recipe.
    
    A pure verbatim recipe-copying cook and a pure independently inventive chef are the two extreme ends of what is, of course, a spectrum. But for any particular part of your life that involves reasoning and decision making, wherever you happen to be on the spectrum, your reasoning process can usually be boiled down to fundamentally chef-like or fundamentally cook-like. Creating vs. copying. Originality vs. conformity.
    
    Being a chef takes a tremendous amount of time and energy—which makes sense, because you’re not trying to reinvent the wheel, you’re trying to invent it for the first time. Puzzling your way to a conclusion feels like navigating a mysterious forest while blindfolded and always involves a whole lot of failure, in the form of trial and error. Being a cook is far easier and more straightforward and less icky. In most situations, being a chef is a terrible waste of time, and comes with a high opportunity cost, since time on Earth is immensely scarce. Right now, I’m wearing J. Crew jeans and a plain t-shirt and a hoodie and Allbirds shoes, because I’m trying to conform. Throughout my life, I’ve looked around at people who seem kind of like me and I’ve bought a bunch of clothes that look like what they wear. And this makes sense—because clothes aren’t important to me, and they’re not how I choose to express my individuality. So in my case, fashion is a perfect part of life to use a reasoning shortcut and be a cook.2
    
    But then there are those parts of life that are really really deeply important—like where you choose to live, or the kinds of friends you choose to make, or whether you want to get married and to whom, or whether you want to have kids and how you want to raise them, or how you set your lifestyle priorities.
    
    Career-path-carving is definitely one of those really really deeply important things. Let’s spell out the obvious reasons why:
    
    Time. For most of us, a career (including ancillary career time, like time spent commuting and thinking about your work) will eat up somewhere between 50,000 and 150,000 hours. At the moment, a long human life runs at about 750,000 hours. When you subtract childhood (~175,000 hours) and the portion of your adult life you’ll spend sleeping, eating, exercising, and otherwise taking care of the human pet you live in, along with errands and general life upkeep (~325,000 hours), you’re left with 250,000 “meaningful adult hours.”3 So a typical career will take up somewhere between 20% and 60% of your meaningful adult time—not something to be a cook about.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Pie-Chart.png
    
    Quality of Life. Your career has a major effect on all the non-career hours as well. For those of us not already wealthy through past earnings, marriage, or inheritance, a career doubles as our means of support. The particulars of your career also often play a big role in determining where you live, how flexible your life is, the kinds of things you’re able to do in your free time, and sometimes even in who you end up marrying.
    
    Impact. On top of your career being the way you spend much of your time and the means of support for the rest of your time, your career triples as your primary mode of impact-making. Every human life touches thousands of other lives in thousands of different ways, and all of those lives you alter then go on to touch thousands of lives of their own. We can’t test this, but I’m pretty sure that you can select any 80-year-old alive today, go back in time 80 years, find them as an infant, throw the infant in the trash, and then come back to the present day and find a countless number of things changed. All lives make a large impact on the world and on the future—but the kind of impact you end up making is largely within your control, depending on the values you live by and the places you direct your energy. Whatever shape your career path ends up taking, the world will be altered by it.
    
    Identity. In our childhoods, people ask us about our career plans by asking us what we want to be when we grow up. When we grow up, we tell people about our careers by telling them what we are. We don’t say, “I practice law”—we say, “I am a lawyer.” This is probably an unhealthy way to think about careers, but the way many societies are right now, a person’s career quadruples as the person’s primary identity. Which is kind of a big thing.
    
    So yeah—your career path isn’t like my shitty sweatshirt. It’s really really deeply important, putting it squarely in “Definitely absolutely make sure to be a chef about it” territory.
    
    Your Career Map
    
    Which brings us to you. I don’t know exactly what your deal is. But there’s a good chance you’re somewhere in one of the blue regions—
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Life-path.png
    
    —which means your career path is a work in progress.4
    
    Whether you’re yet to start your career or well into it, somewhere in the back of your mind (or maybe in the very front of it) is a “Career Plans” map.
    
    We can group map holders into three broad categories—each of which is well-represented in the river, in the pond, standing on the shore, and at every stage of adult life.
    
    One group of people will look at the map and see a big, stressful question mark.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/map1.png
    
    These are people who feel indecisive about their career path. They’ve been told to follow their passion, but they don’t feel especially passionate about anything. They’ve been told to let their strengths guide them, but they’re not sure what they’re best at. They may have felt they had answers in the past, but they’ve changed and they’re no longer sure who they are or where they’re going.
    
    Other people will see a nice clear arrow representing a direction they feel confident is right—but find their legs walking in a different direction. They’re living with one of the most common sources of human misery, a career path they know in their heart is wrong.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/map2.png
    
    The lucky ones feel they know where they want to go and believe they’re marching in that direction.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/map3.png
    
    But even these people should pause and ask themselves, “Who actually drew this arrow? Was it really me?” The answer can get confusing.
    
    I’m pretty sure all of these people would benefit from a moment of career path reflection.
    
    The Okay But Why Do You Think You Can Help Me With My Career Reflection You Draw Stick Figures for a Living Blue Box
    
    Extremely fair question. One thing I always ask myself as I pick topics to write about is, “Am I qualified to write about this?” Here are the reasons I decided to take on this topic:
    
    I have spent most of the last 20 years in a perpetual state of analyzing my own career path.
    
    My path has taken a lot of turns—from wanting to be a movie star when I was 7 to wanting to be the president when I was 17 to wanting to write film scores when I was 22 to wanting to be an entrepreneur when I was 24 to wanting to write musicals when I was 29 to most recently wanting to be a writer-ish guy.
    
    After being pretty all over the place about my career path for most of my life, I actually love my job now. That’s always subject to change, but being able to look at the decision-making processes that led me to confusing or frustrating places, side by side with the decisions that led me to a more fulfilling place, has offered me some wisdom on where people tend to go wrong.
    
    On top of having my own story to look at, I’ve had a front-row seat for the stories of my dozen or so closest friends. My friends seem to share my career path obsessiveness, so between observing their paths and talking with them about those paths again and again along the way, I’ve broadened my views on the topic, which helps me to distinguish between the lessons that are my-life specific and those that are more universal.
    
    Finally, this isn’t a post about which careers are better or worse than others or which career values are more or less meaningful—there are lots of social scientists and self-help authors out there with good data on that, and I’m not one of them. It’s instead a framework that I think can help a career-path reflector better see their own situation, and what really matters to them, clearly and honestly. This framework has worked really well for me, so I think it can probably be helpful for other people too.
    
    Now that you’ve taken a fresh look at your Career Plans map, along with whatever arrow may or may not be on it, put it down and out of sight. We’ll come back to it at the end of the post. It’s time now for a deep dive—let’s think about this from scratch. From first principles.
    
    In the cook-chef post, I designed a simple framework for how a chef makes major career choices. At its core is a simple Venn diagram.
    
    The first part of the diagram is the Want Box, which contains all the careers you find desirable.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Want-Box.png
    
    The second part of the diagram is the Reality Box. The Reality Box is for the set of all careers that are realistic to potentially achieve—based on a comparison, in each case, between your level of potential in an area and the general difficulty of achieving success in that area.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Reality-Box.png
    
    The overlapping area contains your optimal career path choices—the set of arrows you should consider drawing on your Career Map. We can call it the Option Pool.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/venn.png
    
    This is straightforward enough. But actually filling in these boxes accurately is way harder than it looks. For the diagram to work, it has to be as close to the truth as possible, and to get there, we have to lift up the hood of our subconscious and head down. Let’s start with the Want Box.
    
    Deep Analysis, Part 1: Your Want Box
    The hard thing about the Want Box is that you want a bunch of different things—or, rather, there are a bunch of different sides of you, and each of them wants—and fears—its own stuff. And since some motivations have conflicting interests with others, you cannot, by definition, have everything you want. Going for one thing you want means, by definition, not going for others, and sometimes, it’ll specifically mean going directly against others. The Want Box is a game of compromise.
    
    The Yearning Octopus
    
    To do a proper Want Box audit, you need to think about what you yearn for in a career and then unpack the shit out of it. Luckily, we have someone here who can help us. The Yearning Octopus.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Octopus-1.png
    
    We each have our own personal Yearning Octopus**5** in our heads. The particulars of each person’s Yearning Octopus will vary, but people also aren’t all that different from each other, and I bet many of us feel very similar yearnings and fears (especially given that I find that Wait But Why readers tend to have a lot in common).
    
    The first thing to think about is that there are totally distinct yearning worlds—each living on one tentacle. These tentacles often do not get along with each other.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Octopus-2a.png
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Octopus-2B.png
    
    It gets worse. Each tentacle is made up of a bunch of different individual yearnings and their accompanying fears—and these often massively conflict with each other too.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Octopus-3-segmented-1.png
    
    Let’s take a closer look at each tentacle to see what’s going on.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/personal-tentacle.png
    
    The Personal Yearnings tentacle is probably the hardest one to generalize here—it’s pretty particular to each of us. It’s a reflection of our specific personality and our values, and it bears the burden of probably the most complex and challenging human need: fulfillment. It’s also in the shit dealing with not only our current selves, but a bunch of our past selves too. The dreams of 7-year-old you and the idealized identity of 12-year-old you and the secret hopes of 17-year-old you and the evolving passions of your current self are all somewhere on the personal tentacle, each throwing their own little fit about getting what they want, and each fully ready to make you feel horrible about yourself with their disappointment and disgust if you fail them. On top of that, your fear of death sometimes emerges on the personal tentacle, all needy about you leaving your mark and achieving greatness and all that. The personal tentacle is why you don’t find very many billionaires content to spend the rest of their life sipping cocktails on the beach—it’s a highly needy tentacle.
    
    And yet, the personal tentacle is also one that often ends up somewhat neglected. Because in many cases, it’s the ickiest set of yearnings to really go for; because the fears of this tentacle aren’t scary in an immediate way—they creep in out of the background over time; and because the personal tentacle is always at risk of getting bowled over early in your career by the powerful animal emotions of the other tentacles. This neglect can leave a person with major regrets later on once the dust settles. An unfulfilled Personal Yearnings tentacle is often the explanation, for example, behind a very successful, very unhappy person—who may believe they got successful in the wrong field.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/social-tentacle.png
    
    The Social Yearnings tentacle is probably our most primitive, animal side, with its core drive stemming back to our tribal evolutionary past. On the tentacle are a number of odd creatures.
    
    As we’ve discussed before on this blog, we all have a Social Survival Mammoth living in our heads who’s earth-shatteringly obsessed with what other people think of us. This means he craves acceptance and inclusion and being well-liked, while likewise being petrified of embarrassment, negative judgment, and disapproval. He really really really wants to be in the in-group and he really really really doesn’t want to be in the outgroup. He’s quite cute though.
    
    Then there’s your ego, who’s a similar character but even more needy. Your ego doesn’t just want to be accepted; it wants to be admired, desired, and fawned upon—ideally, on a mass scale. More upsetting to it than being disliked is being ignored. It wants to be relevant and important and widely known.
    
    There are other characters milling about as well. Somewhere else on the social tentacle is a little judge with a little gavel who gets very butthurt if it thinks people aren’t judging you fairly—if you’re not appropriately appreciated. It’s very important to the judge that people are aware of exactly how smart and talented you think you are. The judge is also big on holding grudges—which is the reason a lot of people are driven more than anything by a desire to show that person or those people who never believed in them.
    
    Finally, some of us may find a loving little dog on our social tentacle who wants more than anything in the world to please its owner, and who just cannot bear the thought of disappointing them. The one problem with this adorable creature is that its owner isn’t you. It’s a person with so much psychological power over you that, if you’re not careful, you may dedicate your whole career to trying to please them and make them proud. (It’s probably a parent.)
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/lifestyle-tentacle.png
    
    The Lifestyle Yearnings tentacle mostly just wants Tuesday to be a good day. But like, a really pleasant, enjoyable day—with plenty of free time and self-care and relaxation and luxuries.
    
    It’s also concerned with your life in the big picture being as great as possible—as far as your lifestyle tentacle is concerned, you should be able to do what you want to do in life, when and how you want to do it, with the people you like most. Life should be full of fun times and rich experiences, but it should also roll by smoothly, without too much hard work and as few bumps in the road as possible.
    
    The issue is, even if you place a high priority on your lifestyle yearnings, it’s pretty difficult to keep the whole tentacle happy at the same time. The part of the tentacle that just wants to sit around and relax will hold you back from sweating to build the kind of career that offers long-term flexibility and the kind of wealth that can make life luxurious and cushy and full of toys. The part of the tentacle that only feels comfortable when the future feels predictable will reject the exact kinds of paths that may generate the long-term freedom another part of the tentacle longs for. The side of you that wants a stress-free life doesn’t get along very well with the side of you that thirsts to be hang gliding off a cliff in Namibia like Richard Branson.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/moral-tentacle-1.png
    
    The Moral Yearnings tentacle thinks the rest of the tentacles of your Yearning Octopus are a real pack of dicks—each one more self-involved and self-indulgent than the next. The parts of you on the moral tentacle look around and see a big world that needs so much fixing; they see billions of people no less worthy than you of a good life who just happened to be born into inferior circumstances; they see an uncertain future ahead that hangs in the balance between utopia and dystopia for life on Earth—a future we can actually push in the right direction if we could only get our other tentacles out of our way. While the other tentacles fantasize about what you would do with your life if you had a billion dollars in the bank, the moral tentacle fantasizes about the kind of impact you could make if you had a billion dollars to deploy.
    
    Needless to say, the other tentacles of your Yearning Octopus find the moral tentacle to be insufferable. They also can’t begin to understand philanthropy for philanthropy’s sake—they think, “Other people aren’t me, so why would I spend my time and energy working to help them?”—but they can understand philanthropy for their own motive’s sake. While the moral and lifestyle tentacles tend to be in direct conflict, others may sometimes find common ground—the social tentacle can get very into philanthropy if it’ll happen to win you respect and admiration from a highly regarded social group, and some people’s personal tentacle may find the meaning or self-worth it so craves in a philanthropic endeavor.
    
    That’s why, when you do something philanthropic—or anything altruistic, really—there are a few separate things going on in your head. The part of you determined to get proper public credit for the deed lives on your social tentacle; the part of you that thinks “God I’m a good person” lives on your personal tentacle; and the part of you that really loves seeing the person or group you helped be better off lives on your moral tentacle. Likewise, not doing anything for others can hurt you on multiple tentacles—the moral tentacle because it feels guilty and sad, the social tentacle because this may cause others to judge you as a selfish or greedy person, and the personal tentacle because it may lower your self-esteem.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/practical-tentacle.png
    
    Your Practical Yearnings tentacle thinks all of this is fine and great—but it would also like to point out that it’s March 31st and your rent is due tomorrow, and the funny thing about that is that it logged into your bank account and saw that the number of dollars in it is actually less than the number of dollars that your landlord will need from you sometime in the next 34 hours. And yeah it knows that you deposited that check on Thursday and that it’s supposed to clear tomorrow morning, but your practical tentacle also could have sworn that just last month, all the tentacles promised that they’d make some sacrifices in order to build up at least a little bank account cushion so that simply paying the rent wouldn’t have to be really fucking stressful every month. Your practical tentacle also can’t help but notice that your social tentacle offered to buy a round of drinks for all nine people you went to the bar with last Saturday so those people would think of you as a classy, generous person, and that your lifestyle tentacle chose to rent what sure seems like a pretty nice-ass apartment for someone now living check to check, and that the updates have gotten real quiet from your friend about that bagel delivery service he started six months ago that your moral tentacle happily invested $2,500 in to help it get off the ground, and oh also that meanwhile your personal tentacle has everyone sweating their dick off working at two comedy-writing internships simultaneously that somehow manage to bring in less money combined than you made dressing up as an Egyptian enchantress to wait tables at Jekyll & Hyde sophomore year of college.
    
    At its basic level, your practical tentacle wants to make sure you can eat food and wear clothes and buy the medicine you need and not live outside. It doesn’t really care how these things happen—it just wants them to happen. But then everyone else on the octopus makes your practical tentacle’s life super hard by being fucky about things. Every time your income goes up, your lifestyle tentacle decides to raise the bar on what it wants and expects, leaving your practical tentacle continually in the shit trying to cover it all so you don’t have to run up your credit card debt. Your personal tentacle has all of these weird needs that take up a lot of time and more often than not aren’t exactly big money-makers. And while your practical tentacle would be totally down to just ask your rich uncle for money to help out, your social tentacle outlawed asking others for money because “it’s not a good look,” with your personal tentacle chiming in that “yeah, we’re better than that.”
    
    So that’s the situation. You’ve got this Yearning Octopus in your head with five tentacles (or however many yours has), each with their own agenda, that often conflict with each other. Then there are the distinct individual yearnings on each tentacle, often in conflict amongst themselves. And if that weren’t enough, you sometimes have furious internal conflict inside a single yearning. Like when your desire to pursue your passion can’t figure out what it’s most passionate about.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Passion-argument.png
    
    Or when you want so badly to be respected, but then you remember that a career that wins the undying respect of one segment of society will always receive shrugs from other segments and even contemptuous eye rolls from other segments still.
    
    Or when you decide to satisfy your urge to help others, before realizing that the part of you that wants to dedicate your life to helping to mitigate humanity’s greatest existential risks has palpable disdain for the part of you that would rather make a tangible positive impact on your local community—while the part of you that can’t stand the thought of the millions of today’s humans without access to clean water finds both of those other yearnings to be pretty cold and heartless.
    
    So yeah, your Yearning Octopus is complicated. And no human in history has ever satisfied their entire octopus—that’s why you’ll never find it fully smiling. Human yearning is a game of choices and sacrifices and compromise.
    
    Dissecting the Octopus
    
    With that in mind, let’s return to your Want Box. When we think about our career goals and fears and hopes and dreams, our consciousness is just accessing the net output of the Yearning Octopus—which is usually made up of its loudest voices. Only by digging into our mind’s subconscious can we see what’s really going on.6
    
    The cool thing is that we all have the ability to do that. The stuff in your subconscious is like stuff in the basement of a house. It’s not off-limits to us—it’s just in the basement. We can go look at it anytime—we just have to A) remember that the house has a basement, and B) actually spend the time and energy to go down there, even though going down there might suck.
    
    So let’s head to the basement of your mind to look for the octopus. Unless you’re one of those people who’s really practiced at analyzing your subconscious, it might be dark in the basement, making it hard to see your octopus. The way to start turning the lights on is by identifying what your conscious mind currently knows about your yearnings and fears, and then unpacking it.
    
    Like if there’s a certain career path that sounds fantastic to you, unpack that. Which tentacles in particular are yearning for that career—and which specific parts of those tentacles?
    
    If you’re not currently working towards that career you supposedly yearn for, try to figure out why not. If you think it’s because you’re afraid of failing, unpack that. Fear of failure can emerge from any of the tentacles, so that’s not a specific enough analysis. You want to find the specific source of the fear. Is it a social tentacle fear of embarrassment, or of being judged by others as not that smart, or of appearing to be not that successful to your romantic interests? Is it a personal tentacle fear of damaging your own self-image—of confirming a suspicion about yourself that haunts you? Is it a lifestyle tentacle fear of having to downgrade your living situation, or of bringing stress and instability into a currently predictable life? Or maybe that fear of a living situation downgrade isn’t actually emerging from your lifestyle tentacle, but more so from your social tentacle—in other words, is it possible you’re indifferent about the apartment change itself but super concerned about the message a lifestyle downgrade sends to your friends and family? Or are there financial commitments you simply cannot back out of at the moment, and your practical tentacle is in a genuine panic about how you’ll make ends meet should this career switch take longer than expected to work out, or not work out at all? Or are a few of these combining together to generate your fear of making the leap?
    
    Perhaps you don’t really think it’s fear of failure that’s stopping you, but something else. Maybe it’s a dread of the change in identity—both internally and externally—that inevitably accompanies a career move like this. Maybe it’s the heavy weight of inertia—an intense resistance to change—that seems to exist in and of itself and overpowers all of your other yearnings. In either case, you’d want to unpack the feeling and ask yourself exactly which tentacles are so opposed to an identity shift, or so driven by inertia.
    
    Maybe you pine to be rich. You fantasize about a life where you make $1.2 million a year, and you feel a tremendous drive to make it happen. All five tentacles can feel a desire for wealth under certain circumstances, each for their own reasons. Unpack it.
    
    As you unpack an inner drive to make money, maybe you discover that at its core, the drive is more for a sense of security than for vast wealth. That can be unpacked too. A yearning for security at its simplest is just your practical tentacle doing what your practical tentacle does. But maybe it’s not actually basic security you want as much as a guarantee of a certain level of fanciness demanded by your lifestyle or social tentacle. Or perhaps what you really want is a level of security so over-the-top secure it can no longer be called a security yearning—instead, it may be an impulse by the emotional well-being section of your lifestyle tentacle to alleviate a compulsive financial stress you were raised to forever feel, almost regardless of your actual financial situation.
    
    The answers to all of these questions lie somewhere on the tentacles of your Yearning Octopus. And by asking questions like these and digging deep enough to identify the true roots of your various yearnings, you start to turn on the basement light and acquaint yourself with your octopus in all its complexity.
    
    You’ll also come to understand which of your inner yearnings seem to speak the loudest in your mind and carry the most pull in your decision-making processes. Pretty quickly, a yearning hierarchy will begin to reveal itself. You’ll identify yearnings that speak loudly and get their way; yearnings that cry at the top of their lungs but get continually elbowed out of the way by higher-prioritized parts of the octopus; yearnings that seem resigned to their low-status positions in the hierarchy.
    
    Searching for Imposters
    
    We’re making good progress—but we’re just getting started. Once you have a reasonably clear picture of your Yearning Octopus, you can start doing the real work—work that takes place another level down in your subconscious, in the basement of the basement. Here, you can set up a little interrogation room and one by one, bring each yearning down into it for a cross-examination.
    
    You’ll start by asking each yearning: how did you end up here, and why are you the way you are? Desires, beliefs, values, and fears don’t materialize out of nowhere. They’re either developed over time by our internal consciousness as observations and life experience pour in, or they’re implanted in us from the outside, by someone else. In other words, they’re the product of either you the chef or you the cook.
    
    So the goal here in your creepy interrogation room is to tug on the faces of each of your yearnings to find out if it’s authentically you, or if it’s someone else disguised as you.
    
    You can pull on a yearning’s face by playing the Why Game. You’ll ask your initial Why—*Why is this something I want?—*and get to some kind of Because. Then you’ll keep going. Why did that particular Because lead you to want what you now want? And when did that particular Because gain so much gravity with you? You’ll get to a deeper Because behind the Because. And if you continue with this, you’ll usually discover one of three things:
    
    You’ll trace the Why back to its origin and reveal a long chain of authentic evolution that developed through deep independent thought. You’ll pull on their face and confirm that the skin is real.
    
    You’ll trace the Why back to an original Because that someone else installed in you—*I guess the only reason I actually have this value is because my mom kind of forced it on me—*and you realize that you never really thought to consider whether you actually independently agree with it. You never stopped to ask yourself whether your own accumulated wisdom actually justifies the level of conviction you feel about that core belief. In a case like this, the yearning is revealed to be an imposter pretending to be an authentic yearning of yours. You pull on its face and it’s a mask that comes off, exposing the yearning’s original installer underneath.
    
    You’ll trace the Why back and back and get kind of lost in a haze of “I guess I just know this because it’s true!” This could be an authentic you thing, or just another version of #2, in an instance where you can’t recall the moment this feeling was installed in you. Somewhere deep in you, you’ll have a hunch about which it is.
    
    In a #1 scenario, you can be proud that you developed that part of you like a chef. It’s an authentic and hard-earned feeling or value.
    
    In a #2 or maybe #3 scenario, you’ve discovered that you’ve been duped. You’ve let someone else sneak onto your Yearning Octopus while you weren’t looking. When it comes to that particular belief of yours, you’re a cook following someone else’s recipe—an obedient robot reciting desires and fears out of someone else’s brain.
    
    There’s a chance you’re an unusually wise person whose examination reveals an octopus developed mostly by you and kept readily up to date. More likely, you’re like me and most of my friends—your interrogation room reveals some definite imposters, or at least a lot of ambiguity. Like, underneath one mask, you’ll find your mom.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-1.png
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-2.png
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-3.png
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-4.png
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-5-1.png
    
    You’ll pull off others to reveal the values and judgments of broader conventional wisdom, or the viewpoints of your more immediate community, or what’s considered cool by the dominant culture of your generation or the immediate culture within your closest group of friends.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-6.png
    
    Sometimes you’ll get to the end of a Why-Because pathway only to find the philosophy in a famous novel, or something a celebrity hero of yours once said in an interview, or a strong opinion one of your professors always repeated.
    
    You might even find that some of your yearnings and fears were written by you…when you were seven years old. Like a childhood dream that was etched into the back of your consciousness as the thing you believe you really want, when you’re being truly honest.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-7.png
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/mask-8-1.png
    
    The interrogation room probably won’t be that fun a time. But it’s time well spent—because you’re not your 7-year-old self, just like you’re not your parents or your friends or your generation or your society or your heroes or your past decisions or your recent circumstances. You’re Current-Age You—the only person, and the only version of yourself, who is actually qualified to want and not want the things you want and don’t want.
    
    To be clear, this isn’t to say that it’s wrong to live by the words of a wise parent or a famous philosopher or friends you respect or the convictions of a younger you. Humble people are by definition influence-able—influences are an important and inevitable part of who each of us is. The key distinction is this:
    
    Do you treat the words of your external influences as information, held and considered by an authentic inner you, that you’ve carefully decided to embrace? Or are your influences themselves actually in your brain, masquerading as inner you?
    
    Do you want the same thing someone else you know wants because you heard them talk about it, you thought about it alongside your own life experience, and you eventually decided that, for now, you agree? Or because you heard someone talk about what they want or fear, and you thought, “I don’t know shit and that person does, so if they say X is true, I’m sure they’re right”—and then you etched those ideas into your mind, never again feeling the need to question them?
    
    The former is what chefs do. The latter is what you do when you’re being an obedient robot. And a robot is what you become when at some point you get the idea in your head that someone else is more qualified to be you than you are.
    
    The good news is that all humans make this mistake—and you can fix it. Just like your subconscious is right there for viewing if you want to view it—it’s also there for changing and updating and rewriting. It’s your head—you’re allowed to do with it what you want.
    
    So it’s time for some evictions. Masked imposters have to go. Even mom and dad.
    
    At the end of this, your octopus may look a little barren, leaving you feeling a little like you don’t know who you even are anymore. We usually think of this as a bad feeling, or even an existential crisis, but it actually means you’re doing better than most people.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/roller-coaster-1-2.png
    
    The drop from naive over-confidence to wise, realistic humility never feels good, but pausing the roller coaster while it’s still on that first cliff and avoiding the pain—which turns out to be a lot of people’s move—isn’t a great strategy. Wisdom isn’t correlated with knowledge, it’s correlated with being in touch with reality—it’s not how far to the right you are on the graph, it’s how close you are to the orange line. Wisdom hurts at first, but it’s the only place where actual growth happens. The irony is that the cliff-pausers of the world like to make the wiser, braver valley-dwellers or continual-climbers feel bad about themselves—because they fundamentally don’t get how knowing yourself works. They haven’t reached that stage yet.
    
    Getting to know your real self is super hard and never complete. But if you’ve tumbled off the cliff, you’ve gone through a key rite of passage and progress is now possible. As you climb up the orange line, you’ll slowly but surely begin to repopulate your Yearning Octopus with your real self.
    
    At the moment, it probably won’t be obvious what those missing yearnings of yours are exactly—because they’re on an even deeper floor of your subconscious. They’re in the basement of the basement of the basement—in a place called Denial Prison.
    
    Denial Prison
    
    Our brain’s Denial Prison is a place most of us don’t even know is there—it’s where we put the parts of us we repress and deny.
    
    The authentic yearnings of ours that we’re in touch with—i.e. those that proved to be authentic during interrogation—were easy parts of our true selves to find in our subconscious, lying in plain sight, right below the surface of our consciousness. Even our conscious mind knows these yearnings well, because they frequently make their way upstairs into our thoughts. These are the parts of us we have a healthy relationship with.
    
    But then there are the parts of you that weren’t living on your octopus where they’re supposed to be—instead, you found an imposter in their place. These lost parts of you are often incredibly hard to access, because they’ve been living deep in your subconscious, on a floor so low it’s almost not there at all. Almost.
    
    Some parts of us are banished down on basement #3 because they’re extraordinarily painful for us to acknowledge or think about. Sometimes new parts of us are born only to be immediately locked up in prison as part of a denial of our own evolution—i.e. out of stubbornness. But there are other times when a part of us is in Denial Prison because someone else locked it up down there. In the case of your yearnings, some of them will have been put there by whatever masked intruder had been taking its place. If dad has successfully convinced you that you care deeply about having a prestigious career, he probably has also convinced you that the part of you that, deep down, really wants to be a carpenter isn’t really you and isn’t what you really want. At some point during your childhood, he threw your passion for carpentry into a dark, dank Denial Prison cell.
    
    So let’s gather your courage and head down to the basement of the basement of the basement of your mind and see what we find.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/denial-prison-1-1.png
    
    You may pass some unpleasant characters.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/denial-prison-2.png
    
    Leave them for another time—right now, search for locked-away career-related yearnings. Maybe you’ll find a repressed passion to teach. Or a desire to be famous that your particular tribe has shamed you out of. Or a deep love of long blocks of free, open leisure time that your hornier, greedier teenage self kicked downstairs in favor of a raging ambition.
    
    There will be certain parts of your authentic self you won’t be able to uncover in Denial Prison—it’s pretty dark down there. But be patient—now that you’ve done your audit and cleared space for them on your octopus, they may begin to emerge.
    
    Priority Rankings
    
    The other part of our Yearning Octopus audit will address the hierarchy of your yearnings. Almost as important as the yearnings themselves is the priority they’re given. The hierarchy is easy to see because it’s revealed in your actions. You may like to think a desire to do something bold is high up on your hierarchy, but if you’re not currently working on something bold, it reveals that however important boldness is to you, something else—some source of fear or inertia in you—is currently being prioritized above it.
    
    It’s important to remember that a ranking of yearnings is also a ranking of fears. The octopus contains anything that could make you want or not want to pursue a certain career, and the reverse side of each yearning is its accompanying fear of the opposite. The reverse side of your yearning to be admired is a fear of embarrassment. If you flip over your desire for self-actualization, you’ll see a fear of underachieving. The other half of your craving of self-esteem is a fear of feeling shame. If your actions don’t seem to match what you believe is the internal hierarchy of your yearnings, usually it’s because you’re forgetting to think about the role your fears are playing. What looks like a determined drive for success, for example, might actually be someone running away from a negative self-image or trying to escape feelings like envy or under-appreciation. If your actions seem beholden to yearnings that you don’t believe you actually care that much about, you’re probably not looking closely enough at your fears.
    
    With both yearnings and fears in mind, think about what your internal hierarchy might look like, and return that same important question: “Who made this order? Was it really me?”
    
    For example, we’re often told to “follow our passion”—this is society saying “put your passion yearnings at the top of your hierarchy.” That’s a very specific instruction. Maybe that’s the right thing for you, but it also very well might not be. It’s something you need to independently evaluate.
    
    To get this right, let’s try to do a fresh ranking, from first principles, based on who we really are, how we’ve evolved over time, and what really matters to us most, right now.
    
    This isn’t about which yearnings or fears have the loudest voices or which fears are most palpable—if it were, you’d be letting your impulses take the wheel of your life. The person doing the ranking is you—the little center of consciousness reading this post who can observe your octopus and look at it objectively. This involves another kind of compromise. On one side, you’ll try to tap into all the wisdom you’ve accumulated throughout your life and make active decisions about values—about what you really believe is important. On the other side, it’s about self-acceptance and self-compassion. Sometimes you’ll have strong undeniable yearnings that you’re not super proud of—whether you like it or not, those are part of you, and when you neglect them, they may cause a continual stink and make you miserable. Creating your yearning hierarchy is a give and take between what’s important and what’s you. It’s probably a good goal to give higher priority to your more noble qualities, but it’s okay to throw a bone to some of your not-so-noble sides as well—depending on where you decide to draw the line. There’s a wisdom to knowing when to accept your not-so-noble side and when to reject it entirely.
    
    To get all of this in order, we want a good system. You can play around with what works for you—I like the idea of a shelf:
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/yearning-hierarchy-2.png
    
    This divides things into five categories. The absolutely highest priority inner drives get to go in the extra special non-negotiable bowl. The NN bowl is for yearnings so important to you that you want to essentially guarantee that they’ll happen—at the expense of all other yearnings, if necessary. This is why so many of history’s legends were famously single-minded—they had a very intense NN bowl yearning and it led them to world fame, often at the expense of relationships, balance, and health. The bowl is small because it should be used very sparingly—if at all. Like maybe only one thing gets it. Or maybe two or three. Too many things in the NN bowl cancels out its power, making that the same as having nothing in the bowl at all.
    
    Your group of top shelf yearnings is mostly what will drive your career choices—but top shelf placement should also be doled out sparingly (that’s why it’s not a very large shelf). Shelf placement is as much about de-prioritizing as it is about prioritizing. You’re not just choosing which parts of you are the most important to make you happy, you’re choosing which parts of you to intentionally leave wanting or even directly opposed. No matter what your hierarchy looks like, some yearnings will be left feeling very unhappy and some fears will feel like they’re being continually assaulted. This is inevitable.
    
    That’s why most yearnings should be on the middle shelf, the bottom shelf, or the trash can. The middle shelf is good for those not-so-noble qualities in you that you decide to accept. They deserve some of your attention. And they’ll often demand it—core parts of you won’t go quietly into non-prioritization, and they sometimes can really ruin your life if they’re neglected.
    
    Most of the rest will end up on the bottom shelf. Putting a part of you on the bottom shelf is telling it, “I know you want these things, but for now, I’ve decided other things are more important. I promise to revisit you a little later, after I’ve gotten some more information, and if I change my mind, you’ll get a shelf upgrade then.” The best way to think of the bottom shelf is this: the more yearnings you can convince to accept a bottom shelf rating, the better the chances your top shelf and NN bowl yearnings have of getting what they want. Likewise, the fewer yearnings you put on the top shelf, the more likely those on the top shelf will be to thrive. Your time and energy are severely limited, so this is a zero-sum compromise. The amateur mistake is to be too liberal with the NN bowl and top shelf and too sparing with the large bottom shelf.
    
    Then there’s the trash can, for the drives and fears you flat-out reject—those parts of you that fundamentally violate the person your wisest self wants to be. A good amount of inner conflict emerges from people’s trash cans, and trash can control is a major component of integrity and inner strength. But like the rest of your hierarchy decisions, your criteria for what qualifies as trash should be derived from your own deep thought, not from what others tell you is and is not trash.
    
    As you go through this difficult prioritizing process—inevitably, at times, against the screaming protests of unhappily deprioritized yearnings—remember that you’re the only wise one in the room. Yearnings and fears are impatient and bad at seeing the big picture. Even a seemingly high-minded yearning, like those on the moral tentacle, can’t understand the complete picture in the way you can. Many of the people who have done wonders to make the world better got there on a path that started with selfish motives like wealth or personal fulfillment—motives their moral tentacle probably hated at first. The octopus won’t be the wise adult in the room—that’s your job.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/octopus-no-bones-1.png
    
    Finally, as we’ll discuss more later, this is not a permanent decision. It’s the opposite—it’s a rough draft written in light pencil. It’s a hypothesis that you’ll be able to test and then revise based on how actually living this hierarchy feels in practice.
    
    Your Want Box is ready to go. Now let’s turn to your Reality Box.
    
    Deep Analysis, Part 2: Your Reality Box
    The Want Box deals with what you find desirable. The Reality Box deals with what’s possible.
    
    But when we examined the Want Box, it became clear that it’s not necessarily based on what you actually want—it’s based on what you think you want—what you’re in the habit of wanting.
    
    The Reality Box is the same deal. It doesn’t show you reality, it shows your best crack at what reality might be—your perception of reality.
    
    The goal of self-reflection is to bring both of these boxes as close to accuracy as possible. We want our perceived yearnings to be a true reflection of our authentic inner selves, and we want our beliefs about what’s possible to come close to mirroring what’s actually possible. For our Want Box audit, we looked under the hood of the Want Box and found its settings—your yearnings and fears. When we open the hood of your Reality Box, we see a group of beliefs.
    
    When it comes to your career possibilities, you’re dealing with two sets of beliefs: beliefs about the world and beliefs about your own potential. For a career option to qualify for your Reality Box, your potential in that career area has to measure up to the objective difficulty of achieving success in that area.
    
    Us being us, we’re probably pretty bad at assessing either side of this comparison accurately.
    
    I don’t know how you think about career path difficulty, but in my experience, people often see it like this:
    
    There are traditional careers—stuff like medicine or law or teaching or a corporate ladder, etc.—and these careers have predictable, set paths. If you’re decently smart and work hard, you’ll end up in a successful, stable situation.
    
    Then there are less traditional careers—the arts, entrepreneurship, non-profit work, politics, etc.—and these are wildcards. Success and stability are no guarantee, and to reach great heights, it’s either a lottery ticket game of luck, a genetic lottery game of innate talent, or some combination of the two.
    
    These are perfectly reasonable assumptions—if you live in 1952. Your beliefs about the world of careers and about what it takes to succeed need just as thorough an unmasking as your yearnings did—and I suspect that behind most of them, you’ll find big, fat conventional wisdom. You might first pull off the mask of one of your beliefs and find your parents or your friends or your college career coach—but if you keep going and pull on their face, you’ll usually see that it’s also a mask, and conventional wisdom is there hiding behind it. A general conception, a common opinion, an oft-cited statistic**7**—none of which have actually been verified by you, but all of which are treated as gospel by society.
    
    Today’s world goes through dramatic changes each decade, which usually leaves conventional wisdom wildly outdated. But we’re wired for a more ancient world where almost nothing ever changed, so we all reason like cooks and treat conventional wisdom as equivalent to truth.
    
    These problems then extend to how we view our own potential. When you overrate the impact of innate talent on how people fare in their careers—and you also conflate talent and skill level—it won’t leave you feeling great about your chances at many paths. Because we better understand the trajectory of traditional careers, we’re less prone to do this with them. A first-year medical student sees an experienced surgeon at work and thinks, “I can get there one day—just need to do about 20 years of hard work.” But when a young artist or entrepreneur or software engineer looks at the equivalent of the experienced surgeon in their field, they’re more likely to think, “Wow look how talented they are—I’m nowhere near that good,” and get all hopeless. There’s also the other common notion, that people who thrive in non-traditional careers had some “big break” at some point, like hitting a lucky scratch card jackpot—and I don’t know many people who want to risk their careers on scratch cards.
    
    These are only a few examples of the slew of delusions and misconceptions we tend to have about how great careers happen. So let’s brainstorm how it might actually work:
    
    The Career Landscape
    
    I have no idea, mostly. And I think most people have no idea. Things are just changing too quickly.
    
    But that’s kind of the key point. If you can figure out how to get a reasonably accurate picture of the real career landscape out there, you have a massive edge over everyone else, most of whom will be using conventional wisdom as their instruction booklet.
    
    First, there’s the broad landscape—the set of all the jobs someone could possibly have in today’s society. My current job description is: “Writer of 8,000-to-40,000-word articles about a bunch of different topics, with cursing and stick figures, on a remarkably sporadic schedule.” Think conventional wisdom has any job openings for me with that description? The landscape today is made up of thousands of options—some 40 years old, some made possible only three months ago because of the advent of some new technology—and the way things work today, if there’s an option you want that’s not already out there, you can probably create it for yourself. Pretty stressful, but also incredibly exciting.
    
    Then, there’s each specific career path. A career path is like a game board. The conventional wisdom bookshelf contains instruction booklets for only a small fraction of today’s available game boards—and those that it does have usually tell you how that game was played in the past, even though the current game board has evolved significantly into something with new kinds of opportunities and different rules and loopholes. When you consider a career path today, to make an accurate assessment of what the path looks like and what kinds of strength-weakness profiles it favors, you have to understand what that career’s current game board looks like. Otherwise, it’s like trying to evaluate your chances of being a professional basketball player based on your height and strength without realizing that, say, basketball has evolved and is now played on oversize courts that contain 10 different 7-foot hoops, and the current game favors speed over height and strength.
    
    This is promising news. There are likely dozens of awesome career paths that beautifully match your natural strengths, and it’s likely that most other people trying to succeed on those paths are playing with an outdated rulebook and strategy guide. If you simply understand what the game board really looks like and play by modern rules, you have a huge advantage.
    
    Your Potential
    
    And this brings us to you and your particular strengths. Not only do we assess our strengths based on the wrong game boards (like in our basketball example)—even when we have the right game board in mind, we’re often bad at identifying the real strengths that that game calls for.
    
    When assessing your chances on a certain career path, the key question is:
    
    With enough time, could you get good enough at this game to potentially reach whatever your definition of success is in that career?
    
    I like to view this journey to “good enough at the game to succeed” as a distance. The distance starts with where you are now—point A—and ends with you reaching your definition of success, which we can draw with a star.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/A-star-1-1.png
    
    The length of the distance depends on where point A is (how far along you are at the current moment) and where the star is (how lofty your definition of success is).
    
    So if you’re a college graduate who majored in computer science and your career goal is to be a middle-of-the-ladder engineer at Google, your distance might look like this:
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/A-star-2-1.png
    
    But if you’ve never done any kind of computer science before, and your career goal is to be the top engineer at Google, you’ve got a much longer road ahead:
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/A-star-3-1.png
    
    If your goal is to create the new Google, the road gets much, much longer.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/A-star-4-2.png
    
    At this point, conventional wisdom might emerge as a voice in your head and point out that simply getting good enough at a certain skill doesn’t actually guarantee success—you might reach the star on a career path and still find that you haven’t “made it” yet.
    
    That’s mostly wrong, because it’s misunderstanding the star. The star isn’t about a particular skill level—e.g. coding ability or acting skills or business savvy—it’s about the entire game. In traditional careers, the games tend to be more straightforward—if you want to be a top surgeon, and you get incredibly good at surgery, you’ve probably hit your star and you’ll have your career. But the game boards in less traditional careers often involve many more factors. Reaching the “I want to be a famous actor” star doesn’t simply mean getting as good at acting as Morgan Freeman, it means getting as good at the entire actor game as most movie stars get by the time they break through. Acting ability is only one piece of that puzzle—you also need a knack for getting yourself in front of people with power, a shrewdness for personal branding, an insane amount of optimism, a ridiculous amount of hustle and persistence, etc. If you get good enough at that whole game—every component of it—your chances of becoming an A-list movie star are actually pretty high. That’s what hitting the star means.
    
    But conventional wisdom doesn’t get how non-traditional careers work—it only thinks in terms of a narrow aspect of success: talent and hard work. When career paths have game boards with much more going on, conventional wisdom just throws its hands up and calls it “luck.” To conventional wisdom, becoming a movie star requires some talent, but mostly, hitting a rare scratch ticket jackpot.
    
    So how do you figure out your chances of getting to any particular star? It’s all about a simple formula:
    
    Distance = Speed x Time.
    
    In our case, the more apt wording might be:
    
    Progress = Pace x Persistence.
    
    Your outlook on any career quest depends on A) the pace at which you’ll be able to improve at playing that career’s “game” and B) the amount of time you’re willing to persist in chasing that star. Let’s talk about both of these:
    
    Pace
    
    What makes someone slower or faster at improving at a career game? I’d say it comes down to three factors:
    
    Your level of chefness. As we discussed earlier, chefs look at the world with fresh eyes and build conclusions based on what they observe and what they’ve experienced. Cooks arrive at conclusions by following someone else’s recipe—in the case of careers, the recipe is usually conventional wisdom. Careers are complex games that almost everyone starts off bad at—then the chefs improve rapidly through a continual loop…
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/Chef-Strategy-Loop-1.png
    
    …while cooks improve at a snail’s pace, because their strategy is just following a recipe which itself barely changes. What’s more, in a world where career games are constantly evolving and morphing, the chef’s tactics can evolve in real time and keep up. Meanwhile, the cook’s recipe just grows more and more outdated—a problem they remain oblivious to. This is why I’m pretty convinced that at least for less traditional careers, your level of chefness is the single most important factor in determining your pace of improvement.
    
    Your work ethic. This one is obvious. Someone who works on their career 60 hours a week, 50 weeks a year, is going to move down the path almost four times faster than someone who works 20 hours a week, 40 weeks a year. Someone who chooses a balanced lifestyle will move slower than a single-minded workaholic. Someone with a propensity towards laziness or procrastination is going to lose a lot of ground to someone who’s good at putting in consistent work days. Someone who frequently breaks from work to daydream or pick up their phone is going to get less done in each work hour than someone who practices deep focus.
    
    Your natural abilities. Talent does matter. Smarter, more talented people will improve at a game at a faster rate than less naturally gifted people. But intelligence and talent are only two types of natural ability that come into play here. Cleverness and savvy matter too, and those qualities don’t always correlate with raw intelligence. Depending on the type of career, social skills can be critically important as well. In many careers, likable (or subtly manipulative) people have a big advantage over less likable people—and those who enjoy socializing will put in more people hours over time, and build deeper relationships, than antisocial types.
    
    Other things, like existing connections, existing resources, and existing skills matter, of course, but they’re not components of pace—they’re part of the location of point A.
    
    Persistence
    
    When I say persistence, I’m referring to long-term persistence (as opposed to day-to-day work ethic). Persistence is simpler than pace. The more years you’re willing to commit to chasing a star, the farther along the road towards the star you’ll get. A car going 30 mph that quits driving after 15 minutes gets a lot less far than a car that drives 10 mph for two hours.
    
    And this is why persistence is so important. Someone who has decided they’re only willing to give a dream career a shot for three years before they’ll go for their fallback plan has essentially disqualified themselves from a chance at their dreams. It doesn’t matter how awesome you are—if you’ll give up after two or three years of not breaking through, you’re unlikely to succeed. A few years is just not enough time to traverse the typically long distances it takes to get to the raddest success stars, no matter how impressive your pace.
    
    Your Real Strengths and Weaknesses
    
    With our pace-times-persistence equation in mind, let’s revisit the concept of strengths and weaknesses. It’s not that “strengths and weaknesses” is a bad concept—it’s that we think about it all wrong. When we list our strengths, we tend to list our areas of existing skill more than anything else. Instead, strengths should be all about pace and persistence qualities. Originality or lack thereof should be a critical component of the discussion, making qualities like agility and humility (trademark chef traits) notable strengths, and qualities like stubbornness**8** or intellectual laziness (classic cook traits) important weaknesses. The subtleties of work ethic, like a knack for deep focus or a propensity to procrastinate, should also be a major part of the discussion, as should natural abilities beyond talent, like savvy and likability. Qualities related to persistence, like resilience and determination and patience, should be thought of as promising strengths, while a social tentacle clamoring to appear successful as quickly as possible should be viewed as a bright red flag.
    
    Most importantly, these items shouldn’t be discussed as a snapshot of where they are now, but rather in terms of your potential for improvement in each of them. If you handed 25-year-old Michael Jordan a basketball for the first time, he’d suck. But calling basketball a “weakness” of his would be getting it very wrong. Instead, you’d want to watch him practice over the next six weeks and evaluate the slope of his improvement. This lesson applies to specific skills—but most general pace and persistence qualities can also be worked on and improved if you focus on them.
    
    Filling in the Reality Box
    
    Your true Reality Box would literally include all career paths for which you think a highly improved version of yourself could, with an entire lifetime of effort, reach the minimum star you’d be comfortable defining as success. This would be an impossibly big list, only ruling out paths that are clearly far too long for you to traverse at your maximum possible pace on the path (like me chasing a career as an Olympic figure skater). But it’s still useful to pause for a minute and reflect on the vast extent of your full Reality Box—just acknowledging how many options are truly open to you can put you in the right mindset.9
    
    So to be a bit more efficient, let’s worry about the parts of the Reality Box that might actually end up in your Option Pool (the middle of the Venn diagram where the Want and Reality Boxes overlap). To complete our Reality Box audit with that caveat, we need to evaluate:
    
    1) The general landscape. Take our best crack at evaluating the world’s current career landscape—the full range of options available (or create-able).
    
    2) Specific game boards. For any careers that sound remotely interesting, ponder what the deal might be with that career’s current game board—the parties involved, the way success seems to be happening for others recently, the most up-to-date rules of the game, the latest new loopholes that are being exploited, etc.
    
    3) Starting point. For those paths, evaluate your starting point, based on your current skills, resources, and connections relevant to that field.
    
    4) Success point. Think about end points and where on each line your star should be placed. Ask yourself what’s the minimum level of success you’d need to achieve in order to feel happy about having chosen that career path.
    
    5) Your pace. Make an initial estimate for what your pace of improvement might be on these various game boards, based on your current pace-related strengths and how much you think you can improve at each of them (in other words, how much your speed might be able to accelerate).
    
    6) Your level of persistence. Evaluate the amount of time you think you’ll be willing to put into each of these respective paths.
    
    Now it’s just math. You take your game board and make it a line, you plot starting points and success stars that together generate the various distances in front of you, and for each, you multiply your pace by your level of persistence. If it seems like the product of your pace and persistence for a given career path might be able to measure up to the path’s total length, that career lands in your Reality Box. Of course, it’s impossible to get exact values for any of the above factors, but it’s good to at least know the equation you’re working with.
    
    A from-first-principles Reality Box audit may bring some overly optimistic people down to Earth, but I suspect that for most, an audit will leave them feeling like they have a lot more options than they realized, empowering them to set their sights on a bolder direction.
    
    A good Reality Box reflection warrants yet another Want Box reflection. Reframing a bunch of career paths in your mind will affect your level of yearning for some of them. One career may seem less appealing after reminding yourself that it will entail thousands of hours of networking or multiple decades of pre-success struggle. Another may seem less daunting after changing your mind about how much luck is actually involved. There will be other career paths you hadn’t considered wanting because you hadn’t considered them as real options, but some deep reflection has opened your mind to them.
    
    This brings us to the end of our long, two-part deep dive. After a fairly exhausting box-auditing process, we can return to our Venn**10** diagram.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/venn-1.png
    
    Assuming some things have changed, you have a new Option Pool to look at—a new list of options on the table that seem both desirable to your high-priority rankings and possible to achieve. We’re ready now to return to where we were before we started our analysis: the present moment. With these options in front of us, we’re ready to lift our heads up out of analysis and look forward into the future.
    
    Connecting the Dots into the Future
    It’s time to bring back your Career Plans map that I made you put down at the beginning of the post—the one with the arrow or the question mark. If there had been a clear arrow on your map before your audit, check out your new Option Pool. Given everything you’ve reflected upon, does your current career plan still qualify to be there? If so, congrats—you’re ahead of most of us.
    
    If not, well that’s shitty news, but it’s also good news. Remember, going from a false arrow to a question mark is always major progress in life.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/roller-coaster-2-2.png
    
    And actually, a new question mark implies having made the key cliff jump on two roller coasters: getting to know yourself and getting to know the world. Major step in the right direction. Cross out the arrow and join the question mark crowd.
    
    Now the question mark crowd has a tough choice. You gotta pick one of the arrows in the Option Pool.
    
    It’s a tough choice—but it should be way less tough than it is. Here’s why:
    
    Careers used to be kind of like a 40-year tunnel. You picked your tunnel, and once you were in, that was that. You worked in that profession for 40 years or so before the tunnel spit you out on the other side into your retirement.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/tunnels-2.png
    
    The truth is, careers have probably never really functioned like 40-year-tunnels, they just seemed that way. At best, traditional careers of the past played out kind of like tunnels.
    
    Today’s careers—especially the less traditional ones—are really really not like tunnels. But crusty old conventional wisdom has a lot of us still viewing things that way, which makes the already hard job of making big career path choices much harder.
    
    When you think of your career as a tunnel, it causes an identity crisis in anyone who doesn’t feel sure of who exactly they are and who they’ll want to be decades from now—which is most sane people. It enhances the delusion that what we do for work is a synonym for who we are, making a question mark on your map seem like an existential disaster.
    
    When you think of your career as a tunnel, the stakes to make the right choice seem so high that it explodes the feeling of tyranny of choice. For perfectionist types especially, this can be utterly paralyzing.
    
    When you think of your career as a tunnel, you lose the courage to make a career switch, even when your soul is begging for it. It makes switching careers feel incredibly risky and embarrassing, and it suggests that someone who does so is a failure. It also makes all kinds of multi-faceted, vibrant, mid-career people feel like they’re too old to make a bold switch or start a whole new path afresh.
    
    But conventional wisdom still tells many of us that careers are tunnels. As the icing on its shit cake—on top of helping us yearn for things we don’t actually want, deny yearnings that we feel deep down, fear things that aren’t dangerous, and believe things about the world and our potential that aren’t accurate—conventional wisdom tells us that careers are a tunnel to help us daunt the shit out of ourselves unnecessarily.
    
    Today’s career landscape isn’t a lineup of tunnels, it’s a massive, impossibly complex, rapidly changing science laboratory. Today’s people aren’t synonymous with what they do—they’re impossibly complex, rapidly changing scientists. And today’s career isn’t a tunnel, or a box, or an identity label—it’s a long series of science experiments.
    
    Steve Jobs compared life to connecting the dots, pointing out that while it’s easy to look at your past and see how the dots connected to lead you to where you are, it’s basically impossible in life to connect the dots forwards.
    
    If you look at the biographies of your heroes, you’ll see that their paths look a lot more like a long series of connected dots than a straight and predictable tunnel. If you look at yourself and your friends, you’ll probably see the same trend—according to data, the median time a young person stays in a given job is only 3 years (older people spend a longer time on each dot, but not that much longer—10.4 years on average).
    
    So seeing your career as a series of dots isn’t a mental trick to help you make decisions—it’s an accurate depiction of what’s actually happening. And seeing your career as a tunnel isn’t just unproductive—it’s delusional.
    
    Likewise, you’re limited to focusing mainly on the next dot on your path—because it’s the only dot you can figure out. You don’t have to worry about dot #4 because you can’t anyway—you’re literally not qualified to do so.
    
    By the time dot #4 rolls around, you will have learned stuff about yourself you don’t know now. You’ll also have changed from who you are now, and your Yearning Octopus will reflect those changes. You’ll know a lot more than you currently do about the career landscape and the specific game boards you’re interested in, and you’ll have become a much better game player. And of course, that landscape—and those game boards—will have themselves evolved.
    
    The fantastic website 80,000 Hours (which exists to help young, talented people work through their career choices) has compiled a lot of data to back this up: data on the fact that you’ll change, that the world will change, and that you’ll only learn with time what you’re actually good at. Popular psychologist Dan Gilbert also eloquently describes just how bad we are at predicting what will make us happy in the future.
    
    Pretending you can figure out what dot #2 or #4 or #8 should be now is laughable. Future dots are the worry of a future, wiser you living in a future world. So let’s focus on dot #1.
    
    If we’re thinking of ourselves as scientists and of society as a science lab, we should think of your current freshly revised Want-Reality Venn Diagram as nothing more than an early, rough hypothesis. Dot #1 is your chance to test it out.
    
    Hypothesis testing is intuitive in the dating world. If a friend were toiling over what kind of person she wants to marry but never went out with anyone, you’d tell her, “You can’t figure this out on your couch—you’ve gotta start going on dates, and that’ll teach you what you want in a partner.” If that friend then went on a solid first date and returned home to toil for hours about whether or not this new person was The One, you’d again have to correct her. You’d say, “There’s no way you can know that from just one date! You have to get some experience dating this person to learn what you need to learn to make that decision.”
    
    We can all agree that this hypothetical friend is pretty nuts and is lacking a fundamental understanding of how you find a happy relationship. So let’s not be like her when it comes to picking our career. Dot #1 is a chill situation—it’s just a first date.
    
    This is awesome news—because it makes it a lot less scary to draw an arrow on your map if it’s only an arrow to dot #1 of your future. The real cause of tyranny of choice is accurately seeing the sheer number of options you have in today’s world while delusionally seeing those careers as the 40-year tunnels of yesterday’s world. That’s a lethal combo. Reframing your next major career decision as a far lower-stakes choice makes the number of options exciting, not stressful.
    
    And that’s all great in theory. But now comes the hard part.
    
    Making Your Move
    
    You’ve reflected and reflected and reflected and weighed and measured and predicted and considered. You’ve chosen a dot and drawn an arrow. And now you have to actually make the move.
    
    We’re super bad at this. We’re frightened people. We don’t like icky things and making a bold, real-life step is icky. If there’s any ounce of procrastination susceptibility in us, here’s where it’ll show itself.
    
    The Yearning Octopus can help. As we discussed earlier, your behavior at any given point simply displays the configuration of your octopus. If you’ve decided on a life step and you can’t quite take it, it’s because the parts of you that don’t want to make a move are ranked higher in your subconscious than the parts of you that do. Your conscious mind may have tried to assign lower shelf ratings to the parts of your octopus that lean towards inertia, but your yearnings have rebelled. You’re a CEO not in control of their staff.
    
    To fix this problem, think like a kindergarten teacher. In your class, a faction of the 5-year-olds is rebelling against your wishes. What do you do?
    
    Go talk to the 5-year-olds that are causing the trouble. They’re unpleasant, defiant simpletons, but they can still be reasoned with. Talk to them about why you’ve ranked them lower than others in the octopus hierarchy. Describe to them the insights you gained from your Reality Box reflection. Remind them about how connecting the dots works and about the chillness of dot #1. You’re the teacher—figure it out.
    
    The older I get, the clearer it becomes that our internal battle as the kindergarten teachers of our mind is like 97% of life’s struggle. The world is easy—you’re difficult. If you find yourself continually not executing your plans in life and your promises to yourself, you’ve uncovered your new #1 priority—becoming a better kindergarten teacher. Until you do, your life will be run by a bunch of primitive, short-sighted 5-year-olds, and your whole shit will suck. Trust me, I know.
    
    If your inner analysis does call for a career leap to a new dot, I hope that at some point, you’re able to make the jump.
    
    After the Move
    
    Jumping to a new dot is a liberating feeling, usually side by side with some substantial internal havoc.
    
    First of all, for a while at least, you’ll probably suck at what you’re doing on your new dot. While your wise self will know that’s exactly how it should be, your less wise selves will go into full existential meltdown mode. All of the fears you so thoughtfully deprioritized in your octopus ranking will think someone is murdering them and they’ll start trying to call 911. The yearnings you did prioritize won’t be feeling much gratification yet, and they’ll wonder if they were wrong all along about what they thought they wanted. The yearnings you didn’t prioritize will get out the guitar and start singing love songs for the greener-seeming grass you deprived them of. It won’t be much fun.
    
    Even if things do go well, you’ll be quickly reminded of the fact that the Yearning Octopus is a generally unhappy creature. Core pieces of the octopus will feel neglected or even assaulted, and every day that goes by, you’ll be bearing the opportunity cost of the paths you were considering but chose not to walk down—the versions of you in parallel universes where you made other choices. You’ll think about their hypothetical advancement in the world and worry about what you may have passed up.
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/opportunity-cost-2.png
    
    As you get wiser, you’ll learn to view a largely unhappy octopus with acceptance. You’ll let it whine and get good at tuning it out, knowing that it’s whining in the exact way you planned for it to be.
    
    The whining octopus is a reminder of why pure, elated happiness is never a reasonable goal. The times you feel pure happiness are temporary, drug-induced delusions—like the honeymoon phase of a new relationship or new job or the high following a long-awaited success. Those moments are the perfect golf shots of a mediocre golfer’s outing—they’re awesome, and you should enjoy the shit out of them—but they’re not the new normal, and they never will be.
    
    A better goal is contentment: the satisfying feeling that you’re currently taking the best crack you can at a good life path; that what you’re working on might prove to be a piece of an eventual puzzle you can feel really proud of. Chasing happiness is an amateur move. Feeling contentment in those times when your choices and your circumstances have combined to pull it off, and knowing you have all that you could ever ask for, is for the wise.
    
    People talk about being present in the moment, but there’s also the broader concept of macro-presence: feeling broadly present in your own life. If you’re on a career dot that, when you’re being really honest with yourself, feels right, you get to stop thinking and stop planning for a while and just dig in. You’ll come back to the big picture later—for now, you can put the macro picture aside, put your head down, and dedicate all of your energy to the present. For a while, you can just live.
    
    These moments don’t always last that long, so sink your teeth in. Put everything you’ve got into the dot you’ve chosen. As far as you know, you might be Michael Jordan holding his first basketball, so start playing.
    
    The Next Dot?
    
    At some point, your good feelings about the macro picture may sour. And when they do, you’ll have to get back into analysis mode and figure out what, in particular, is causing the restlessness.
    
    Sometimes, the macro mission won’t be the problem. It’ll be that the chef in you has decided that the mission itself calls for a strategic dot jump. In these cases, jumping dots isn’t a release of persistence but the stuff of persistence. This is the mission-enhancing type of dot jump.
    
    Other times, you’ll feel a darker kind of restlessness—the suspicion that you may need to change up the macro mission. When this happens, you’ll have to figure out if that feeling is emerging from the wise parts of you or simply from your restless, deprioritized yearnings. A mission-changing dot jump may be in order, but depending on which parts of you are asking for it, it may also be the wrong move.
    
    In these moments, it’s important to consider where you tend to be on this spectrum:
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/inertia-spectrum.png
    
    The people on the left side of this spectrum are jump-shy. The cement-footed. Their pitfall is staying way too long in the wrong things. The people on the right are jump-happy—the wing-footed—and they have the opposite pitfall: they’re quick quitters.11 (You should be especially wary of cement feet—psychologists believe that people at the end of their lives are most likely to regret living by inertia: a commonly voiced regret is “I wish I had quit earlier,” and the most common advice of the elderly is, “Don’t stay in a job you dislike.“)
    
    This is why these internal frameworks are important. They give you the ability to analyze the source of your impulses. In our example, the question is whether your impulse to jump missions is the result of genuine evolution or quick-quitter bias. So think about your diagram. Is your restlessness just the expected incessant whining of an octopus still correctly configured? The weariness from a long trudge on what’s still the right path for you? Or have you learned new information about yourself or the world during the trudge that has corrected some off-base initial assumptions? Or maybe something is fundamentally evolving—some blue or yellow loop activity:
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/venn-with-loops-small.png
    
    If you feel that things have genuinely changed, you may decide to zoom out even further and think about the big red loop, which deals with fundamentally changing your mission:
    
    https://149909199.v2.pressablecdn.com/wp-content/uploads/2018/04/venn-with-big-loop-small.png
    
    If a career is like connecting the dots, we should probably rank “getting wise about dot-jumping” pretty high on our to-do list. The best place to start is by looking at your own past. Studying your own past decisions, with the flashlight of hindsight and accumulated wisdom, is like an athlete studying game tape.
    
    Looking at my own past, I can see a lot of dot jumps (or, while I was still in school, career plan adjustments), and some of them look pretty unwise in retrospect. But the clearer a picture I can see of my past bad decisions and the thought patterns and behavioral habits that built them, the less likely I’ll be to repeat them in the future.
    
    Remembering that you’re kind of dumb is also a critical humbling exercise. The insecurity of humility doesn’t feel very good, and the burden of having to continually invent your own life map is never easy—but insecurity and difficulty are the feelings of driving your own ship. It’s when we feel too good that we run the risk of becoming overconfident, intellectually complacent, and set in our ways. It’s exactly when we think we have life all figured out that we end up losing our way.
    
    Over the course of your life, your good and bad decisions will collaborate to forge your unique life path. Often on this blog, I’ve written about how irrational our fears can be and how badly they can hold us back. But we should probably embrace the fear of end-of-life regret.
    
    I’ve thankfully never been on anything that felt like a deathbed, but it seems like there’s something about the end of life that lets people see things with clear eyes. It seems like facing death makes all of those voices in your head who aren’t actually you melt away, leaving your little authentic self standing there all alone, in reflection. I think end-of-life regrets may simply be your authentic self thinking about the parts of your life you never got to live—the parts of you that someone else kicked down into your subconscious.
    
    My own psyche seems to back this up—looking back on my path so far, the mistakes that bother me most are the ones that happened because someone else took the wheel of my head and overruled the quiet, insecure voice of my authentic self—the mistakes that I knew at the time, deep down, were wrong. My goal for the future isn’t to avoid mistakes, it’s for the mistakes I do make to be my own.
    
    That’s why I went through such an excruciatingly rigorous analysis in this post. I think this is one of those few topics in life that’s worth it. Other voices will never stop fiercely trying to live your life for you—you owe it to that little insecure character in the very center of your consciousness to get this right.
    `,
    image: null,
    readingTime: 30,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 10,
      username: 'Tim Urban',
      email: 'tim@example.com',
      bio: "Tim's bio",
      image: 'Tim-Urban.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 11,
      },
    ],
    tags: [
      {
        tagId: 12,
        name: 'Education',
      },
    ],
  },

  {
    postId: 12,
    title: 'How To Get Rich Without Getting Lucky',
    content: `
    Naval Ravikant is an Indian American entrepreneur and founder of AngelList, a platform for anyone wanting to invest in, or work at, a startup. As an investor he has taken stakes in over 100 companies including Uber, FourSquare, Twitter.

    It’s fair to say that Naval Ravikant know’s his shit.
    
    What’s better is that he is not afraid to share it on Twitter and for us, he’s a must follow.
    
    This is a straight repost of the awesome thread: ‘How to Get Rich (without getting lucky)’:
    
    Seek wealth, not money or status. Wealth is having assets that earn while you sleep. Money is how we transfer time and wealth. Status is your place in the social hierarchy.
    Understand that ethical wealth creation is possible. If you secretly despise wealth, it will elude you.
    Ignore people playing status games. They gain status by attacking people playing wealth creation games.
    You’re not going to get rich renting out your time. You must own equity — a piece of a business — to gain your financial freedom.
    You will get rich by giving society what it wants but does not yet know how to get. At scale.
    Pick an industry where you can play long term games with long term people.
    The Internet has massively broadened the possible space of careers. Most people haven’t figured this out yet.
    Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.
    Pick business partners with high intelligence, energy, and, above all, integrity.
    Don’t partner with cynics and pessimists. Their beliefs are self-fulfilling.
    Learn to sell. Learn to build. If you can do both, you will be unstoppable.
    Arm yourself with specific knowledge, accountability, and leverage.
    Specific knowledge is knowledge that you cannot be trained for. If society can train you, it can train someone else, and replace you.
    Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now.
    Building specific knowledge will feel like play to you but will look like work to others.
    When specific knowledge is taught, it’s through apprenticeships, not schools.
    Specific knowledge is often highly technical or creative. It cannot be outsourced or automated.
    Embrace accountability, and take business risks under your own name. Society will reward you with responsibility, equity, and leverage.
    The most accountable people have singular, public, and risky brands: Oprah, Trump, Kanye, Elon.
    “Give me a lever long enough, and a place to stand, and I will move the earth.” — Archimedes
    Fortunes require leverage. Business leverage comes from capital, people, and products with no marginal cost of replication (code and media).
    Capital means money. To raise money, apply your specific knowledge, with accountability, and show resulting good judgement.
    Labor means people working for you. It’s the oldest and most fought-over form of leverage. Labor leverage will impress your parents, but don’t waste your life chasing it.
    Capital and labor are permissioned leverage. Everyone is chasing capital, but someone has to give it to you. Everyone is trying to lead, but someone has to follow you.
    Code and media are permissionless leverage. They’re the leverage behind the newly rich. You can create software and media that works for you while you sleep.
    An army of robots is freely available — it’s just packed in data centers for heat and space efficiency. Use it.
    If you can’t code, write books and blogs, record videos and podcasts.
    Leverage is a force multiplier for your judgement.
    Judgement requires experience, but can be built faster by learning foundational skills.
    There is no skill called “business.” Avoid business magazines and business classes.
    Study microeconomics, game theory, psychology, persuasion, ethics, mathematics, and computers.
    Reading is faster than listening. Doing is faster than watching.
    You should be too busy to “do coffee,” while still keeping an uncluttered calendar.
    Set and enforce an aspirational personal hourly rate. If fixing a problem will save less than your hourly rate, ignore it. If outsourcing a task will cost less than your hourly rate, outsource it.
    Work as hard as you can. Even though who you work with and what you work on are more important than how hard you work.
    Become the best in the world at what you do. Keep redefining what you do until this is true.
    There are no get rich quick schemes. That’s just someone else getting rich off you.
    Apply specific knowledge, with leverage, and eventually you will get what you deserve.
    When you’re finally wealthy, you’ll realize that it wasn’t what you were seeking in the first place. But that’s for another day.
    Powerful stuff.
    
    Thanks for reading!
    `,
    image: null,
    readingTime: 9,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 11,
      username: 'Naval Ravikant',
      email: 'naval@example.com',
      bio: "Naval's bio",
      image: 'Naval-Ravikant.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 12,
      },
    ],
    tags: [
      {
        tagId: 12,
        name: 'Education',
      },
    ],
  },

  {
    postId: 13,
    title: 'The One Percent Rule',
    content: `
    The One Percent Rule
    Sometime in the late 1800s—nobody is quite sure exactly when—a man named Vilfredo Pareto was fussing about in his garden when he made a small but interesting discovery.
    
    Pareto noticed that a tiny number of pea pods in his garden produced the majority of the peas.
    
    Now, Pareto was a very mathematical fellow. He worked as an economist and one of his lasting legacies was turning economics into a science rooted in hard numbers and facts. Unlike many economists of the time, Pareto’s papers and books were filled with equations. And the peas in his garden had set his mathematical brain in motion.
    
    What if this unequal distribution was present in other areas of life as well?
    
    https://jamesclear.com/wp-content/uploads/2017/03/vilfredo-pareto-1870s-e1505330818146.jpg
    
    The Pareto Principle
    At the time, Pareto was studying wealth in various nations. As he was Italian, he began by analyzing the distribution of wealth in Italy. To his surprise, he discovered that approximately 80 percent of the land in Italy was owned by just 20 percent of the people. Similar to the pea pods in his garden, most of the resources were controlled by a minority of the players.
    
    Pareto continued his analysis in other nations and a pattern began to emerge. For instance, after poring through the British income tax records, he noticed that approximately 30 percent of the population in Great Britain earned about 70 percent of the total income.
    
    As he continued researching, Pareto found that the numbers were never quite the same, but the trend was remarkably consistent. The majority of rewards always seemed to accrue to a small percentage of people. This idea that a small number of things account for the majority of the results became known as the Pareto Principle or, more commonly, the 80/20 Rule.
    
    Inequality, Everywhere
    In the decades that followed, Pareto’s work practically became gospel for economists. Once he opened the world’s eyes to this idea, people started seeing it everywhere. And the 80/20 Rule is more prevalent now than ever before.
    
    For example, through the 2015-2016 season in the National Basketball Association, 20 percent of franchises have won 75.3 percent of the championships. Furthermore, just two franchises—the Boston Celtics and the Los Angeles Lakers—have won nearly half of all the championships in NBA history. Like Pareto’s pea pods, a few teams account for the majority of the rewards.
    
    The numbers are even more extreme in soccer. While 77 different nations have competed in the World Cup, just three countries—Brazil, Germany, and Italy—have won 13 of the first 20 World Cup tournaments.
    
    Examples of the Pareto Principle exist in everything from real estate to income inequality to tech startups. In the 1950s, three percent of Guatemalans owned 70 percent of the land in Guatemala. In 2013, 8.4 percent of the world population controlled 83.3 percent of the world’s wealth. In 2015, one search engine, Google, received 64 percent of search queries.
    
    Why does this happen? Why do a few people, teams, and organizations enjoy the bulk of the rewards in life? To answer this question, let’s consider an example from nature.
    
    The Power of Accumulative Advantage
    The Amazon rainforest is one of the most diverse ecosystems on Earth. Scientists have cataloged approximately 16,000 different tree species in the Amazon. But despite this remarkable level of diversity, researchers have discovered that there are approximately 227 “hyperdominant” tree species that make up nearly half of the rainforest. Just 1.4 percent of tree species account for 50 percent of the trees in the Amazon.
    
    But why?
    
    Imagine two plants growing side by side. Each day they will compete for sunlight and soil. If one plant can grow just a little bit faster than the other, then it can stretch taller, catch more sunlight, and soak up more rain. The next day, this additional energy allows the plant to grow even more. This pattern continues until the stronger plant crowds the other out and takes the lion’s share of sunlight, soil, and nutrients.
    
    From this advantageous position, the winning plant has a better ability to spread seeds and reproduce, which gives the species an even bigger footprint in the next generation. This process gets repeated again and again until the plants that are slightly better than the competition dominate the entire forest.
    
    Scientists refer to this effect as “accumulative advantage.” What begins as a small advantage gets bigger over time. One plant only needs a slight edge in the beginning to crowd out the competition and take over the entire forest.
    
    Winner-Take-All Effects
    Something similar happens in our lives.
    
    Like plants in the rainforest, humans are often competing for the same resources. Politicians compete for the same votes. Authors compete for the same spot at the top of the best-seller list. Athletes compete for the same gold medal. Companies compete for the same potential client. Television shows compete for the same hour of your attention.
    
    The difference between these options can be razor thin, but the winners enjoy massively outsized rewards.
    
    Imagine two women swimming in the Olympics. One of them might be 1/100th of a second faster than the other, but she gets all of the gold medal. Ten companies might pitch a potential client, but only one of them will win the project. You only need to be a little bit better than the competition to secure all of the reward. Or, perhaps you are applying for a new job. Two hundred candidates might compete for the same role, but being just slightly better than other candidates earns you the entire position.
    
    Situations in which small differences in performance lead to outsized rewards are known as Winner-Take-All Effects.
    
    These situations in which small differences in performance lead to outsized rewards are known as Winner-Take-All Effects. They typically occur in situations that involve relative comparison, where your performance relative to those around you is the determining factor in your success.
    
    Not everything in life is a Winner-Take-All competition, but nearly every area of life is at least partially affected by limited resources. Any decision that involves using a limited resource like time or money will naturally result in a winner-take-all situation.
    
    In situations like these, being just a little bit better than the competition can lead to outsized rewards because the winner takes all. You only win by 1 percent or 1 second or 1 dollar, but you capture 100 percent of the victory. The advantage of being a little bit better is not a little bit more reward, but the entire reward. The winner gets one and the rest get zero.
    
    https://jamesclear.com/wp-content/uploads/2017/03/winner-take-all-effects-e1505330841319.jpg
    
    Winner-Take-All Leads to Winner-Take-Most
    Winner-Take-All Effects in individual competitions can lead to Winner-Take-Most Effects in the larger game of life.
    
    From this advantageous position—with the gold medal in hand or with cash in the bank or from the chair of the Oval Office—the winner begins the process of accumulating advantages that make it easier for them to win the next time around. What began as a small margin is starting to trend toward the 80/20 Rule.
    
    If one road is slightly more convenient than the other, then more people travel down it and more businesses are likely to build alongside it. As more businesses are built, people have additional reasons for using the road and so it gets even more traffic. Soon you end up with a saying like, “20 percent of the roads receive 80 percent of the traffic.”
    
    If one business has a technology that is more innovative than another, then more people will buy their products. As the business makes more money, they can invest in additional technology, pay higher salaries, and hire better people. By the time the competition catches up, there are other reasons for customers to stick with the first business. Soon, one company dominates the industry.
    
    If one author hits the best-seller list, then publishers will be more interested in their next book. When the second book comes out, the publisher will put more resources and marketing power behind it, which makes it easier to hit the best-seller list for a second time. Soon, you begin to understand why a few books sell millions of copies while the majority struggle to sell a few thousand copies.
    
    The margin between good and great is narrower than it seems. What begins as a slight edge over the competition compounds with each additional contest.
    
    The margin between good and great is narrower than it seems. What begins as a slight edge over the competition compounds with each additional contest. Winning one competition improves your odds of winning the next. Each additional cycle further cements the status of those at the top.
    
    Over time, those that are slightly better end up with the majority of the rewards. Those that are slightly worse end up with next to nothing. This idea is sometimes referred to as The Matthew Effect, which references a passage in The Bible that says, “For all those who have, more will be given, and they will have an abundance; but from those who have nothing, even what they have will be taken away.”
    
    Now, let’s come back to the question I posed near the beginning of this article. Why do a few people, teams, and organizations enjoy the bulk of the rewards in life?
    
    The 1 Percent Rule
    Small differences in performance can lead to very unequal distributions when repeated over time. This is yet another reason why habits are so important. The people and organizations that can do the right things, more consistently are more likely to maintain a slight edge and accumulate disproportionate rewards over time.
    
    You only need to be slightly better than your competition, but if you are able to maintain a slight edge today and tomorrow and the day after that, then you can repeat the process of winning by just a little bit over and over again. And thanks to Winner-Take-All Effects, each win delivers outsized rewards.
    
    We can call this The 1 Percent Rule. The 1 Percent Rule states that over time the majority of the rewards in a given field will accumulate to the people, teams, and organizations that maintain a 1 percent advantage over the alternatives. You don’t need to be twice as good to get twice the results. You just need to be slightly better.
    
    The 1 Percent Rule is not merely a reference to the fact that small differences accumulate into significant advantages, but also to the idea that those who are 1 percent better rule their respective fields and industries. Thus, the process of accumulative advantage is the hidden engine that drives the 80/20 Rule.
    
    Thanks for reading!

    `,
    image: null,
    readingTime: 11,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 12,
      username: 'James Clear',
      email: 'james@example.com',
      bio: "James's bio",
      image: 'James-Clear.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 13,
      },
    ],
    tags: [
      {
        tagId: 12,
        name: 'Education',
      },
    ],
  },

  {
    postId: 14,
    title: 'We Are What We Remember',
    content: `
    Memory is an intrinsic part of our life experience. It is critical for learning, and without memories we would have no sense of self. Understanding why some memories stick better than others, as well as accepting their fluidity, helps us reduce conflict and better appreciate just how much our memories impact our lives.

    “Which of our memories are true and which are not is something we may never know. It doesn’t change who we are.”
    
    Memories can be so vivid. Let’s say you are spending time with your sibling and reflecting on your past when suddenly a memory pops up. Even though it’s about events that occurred twenty years ago, it seems like it happened yesterday. The sounds and smells pop into your mind. You remember what you were wearing, the color of the flowers on the table. You chuckle and share your memory with your sibling. But they stare at you and say, “That’s not how I remember it at all.” What?
    
    Memory discrepancies happen all the time, but we have a hard time accepting that our memories are rarely accurate. Because we’ve been conditioned to think of our memories like video recordings or data stored in the cloud, we assert that our rememberings are the correct ones. Anyone who remembers the situation differently must be wrong.
    
    Memories are never an exact representation of a moment in the past. They are not copied with perfect fidelity, and they change over time. Some of our memories may not even be ours, but rather something we saw in a film or a story someone else told to us. We mix and combine memories, especially older ones, all the time. It can be hard to accept the malleable nature of memories and the fact that they are not just sitting in our brains waiting to be retrieved. In Adventures in Memory, writer Hilde Østby and neuropsychologist Ylva Østby present a fascinating journey through all aspects of memory. Their stories and investigations provide great insight into how memory works; and how our capacity for memory is an integral part of the human condition, and how a better understanding of memory helps us avoid the conflicts we create when we insist that what we remember is right.
    
    Memory and learning
    “One thing that aging doesn’t diminish is the wisdom we have accumulated over a lifetime.”
    
    Our memories, dynamic and changing though they may be, are with us for the duration of our lives. Unless you’ve experienced brain trauma, you learn new things and store at least some of what you learn in memory.
    
    Memory is an obvious component of learning, but we don’t often think of it that way. When we learn something new, it’s against the backdrop of what we already know. All knowledge that we pick up over the years is stored in memory. The authors suggest that “how much you know in a broad sense determines what you understand of the new things you learn.” Because it’s easier to remember something if it can hook into context you already have, then the more you know, the more a new memory can attach to. Thus, what we already know, what we remember, impacts what we learn.
    
    The Østbys explain that the strongest memory networks are created “when we learn something truly meaningful and make an effort to understand it.” They describe someone who is passionate about diving and thus “will more easily learn new things about diving than about something she’s never been interested in before.” Because the diver already knows a lot about diving, and because she loves it and is motivated to learn more, new knowledge about diving will easily attach itself to the memory network she already has about the subject.
    
    While studying people who seem to have amazing memories, as measured by the sheer amount they can recall with accuracy, one of the conclusions the Østbys reach is “that many people who rely on their memories don’t use mnemonic techniques, nor do they cram. They’re just passionate about what they do.” The more meaningful the topics and the more we are invested in truly learning, the higher the chances are that we will convert new information into lasting memory. Also, the more we learn, the more we will remember. There doesn’t seem to be a limit on how much we can put into memory.
    
    How we build our narratives
    The experience of being a human is inseparable from our ability to remember. You can’t build relationships without memories. You can’t prepare for the future if you don’t remember the past.
    
    The memories we hold on to early on have a huge impact on the ones we retain as we progress through life. “When memories enter our brain,” the Østbys explain, “they attach themselves to similar memories: ones from the same environment, or that involve the same feeling, the same music, or the same significant moment in history. Memories seldom swim around without connections.” Thus, a memory is significantly more likely to stick around if it can attach itself to something. A new experience that has very little in common with the narrative we’ve constructed of ourselves is harder to retain in memory.
    
    As we get older, our new memories tend to reinforce what we already think of ourselves. “Memory is self-serving,” the Østbys write. “Memories are linked to what concerns you, what you feel, what you want.”
    
    Why is it so much easier to remember the details of a vacation or a fight we’ve had with our partner than the details of a physics lesson or the plot of a classic novel? “The fate of a memory is mostly determined by how much it means to us. Personal memories are important to us. They are tied to our hopes, our values, and our identities. Memories that contribute meaningfully to our personal autobiography prevail in our minds.” We need not beat ourselves up because we have a hard time remembering names or birthdays. Rather, we can accept that the triggers for the creation of a memory and its retention are related to how it speaks to the narrative we maintain about ourselves. This view of memory suggests that to better retain information, we can try to make knowing that information part of our identity. We don’t try to remember physics equations for the sake of it, but rather because in our personal narrative, we are someone who knows a lot about physics.
    
    Memory, imagination, and fluidity
    Our ability to imagine is based, in part, on our ability to remember. The connection works on two levels.
    
    The first, the Østbys write, is that “our memories are the fuel for our imagination.” What we remember about the past informs a lot of what we can imagine about the future. Whether it’s snippets from movies we’ve seen or activities we’ve done, it’s our ability to remember the experiences we’ve had that provide the foundation for our imagination.
    
    Second, there is a physical connection between memory and imagination. “The process that gives us vivid memories is the same as the one that we use to imagine the future.” We use the same parts of the brain when we immerse ourselves in an event from our past as we do when we create a vision for our future. Thus, one of the conclusions of Adventures in Memory is that “as far as our brains are concerned, the past and future are almost the same.” In terms of how they can feel to us, memories and the products of imagination are not that different.
    
    The interplay between past and future, between memory and imagination, impacts the formation of memories themselves. Memory “is a living organism,” the Østbys explain, “always absorbing images, and when new elements are added, they are sewn into the original memory as seamlessly as only our imagination can do.”
    
    One of the most important lessons from the book is to change up the analogies we use to understand memory. Memories are not like movies, exactly the same no matter how many times you watch them. Nor are they like files stored in a computer, unchanging data saved for when we might want to retrieve it. Memories, like the rest of our biology, are fluid.
    
    “Memory is more like live theater, where there are constantly new productions of the same pieces,” the Østbys write. “Each and every one of our memories is a mix of fact and fiction. In most memories the central story is based on true events, but it’s still reconstructed every time we recall it. In these reconstructions, we fill in the gaps with probable facts. We subconsciously pick up details from a sort-of memory prop room.”
    
    Understanding our memory more like a theater production, where the version you see in London’s West End isn’t going to be exactly the same as the one you see on Broadway, helps us let go of attaching a judgment of accuracy to what we remember. It’s okay to find out when reminiscing with friends that you have different memories of the same day. It’s also acceptable that two people will have different memories of the events leading to their divorce, or that business partners will have different memories of the terms they agreed to at the start of the partnership. The more you get used to the fluidity of your memories, the more the differences in recollections become sources of understanding instead of points of contention. What people communicate about what they remember can give you insight into their attitudes, beliefs, and values.
    
    Conclusion
    New memories build on the ones that are already there. The more we know, the easier it is to remember the new things we learn. But we have to be careful and recognize that our tendency is to reinforce the narrative we’ve already built. Brand new information is harder to retain, but sometimes we need to make the effort.
    
    Finally, memories are important not only for learning and remembering but also because they form the basis of what we can imagine and create. In so many ways, we are what we remember. Accepting that our vivid memories can be very different from those who were in the same situation helps us reduce the conflict that comes with insisting that our memories must always be correct.
    
    
    
    `,
    image: null,
    readingTime: 8,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 13,
      username: 'Shane Parrish',
      email: 'james@example.com',
      bio: "Shane's bio",
      image: 'Shane-Parrish.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 14,
      },
    ],
    tags: [
      {
        tagId: 12,
        name: 'Education',
      },
    ],
  },

  {
    postId: 16,
    title: 'How To Get Started With Learning Turkish',
    content: `
    How to get started: Learning Turkish
    Last edited time: April 15, 2023 11:59 PM Owner: Anonymous
    
    One of the hurdles of learning a new language is not knowing where to get started. In this writing I cover what I would do if I was to start and learn Turkish all over again. Stay tuned!
    
    First of all let me talk about the mental model required that more or less applies to learning any language.
    
    1. Approach with a mindset of a five year old.
    You can apply this approach in order to learn the alphabet of the the language and basic words like car, apple, tree, socks, jacket, chair, table... and the like.
    
    🔑 One thing you should pay attention to learn or ask(if you have someone) as many questions as possible and map this words to the language you are comfortable with the most.
    
    Coming back to Turkish, learn daily used words and associate the context of how you learned it. Eventually you would forget and re-learn words but you know the words you will not forget, the words you remember how you came to learn them.
    
    To illustrate this,
    
    On my first night in Turkey, I learned hot in Turkish was sıcak (/sɯ.ˈdʒɑk/) when I was offered a hot tea. Intuitively cold follows as soğuk.
    
    From the above example I can introduce some things about Turkish.
    
    There is a letter ı → “i” without the dot
    The letter c in Turkish is like the j in English.
    Whenever you see ğ → “soft g“, read the word like ğ did not exist. Just ignore it.
    🔑 A popular example to see the above three concepts in action leads as to look at the name of The president of Türkiye. His name is usually mispronounced by international journalist. Recep Tayyip Erdoğan → It is pronounced as “Rejeb Tayyip Erdo_an”
    
    2. What is Turkish actually Like?
    Turkish is an agglutinative language. The word agglutinative comes from the Latin verb 𝘢𝘨𝘨𝘭𝘶𝘵𝘪𝘯𝘢𝘳𝘦 meaning to glue together. Words in Turkish generally have a root and a suffix. The suffix determines the tense, or whether if it is a verb or a noun.
    
    So you can approach learning Turkish like solving a jigsaw puzzle.
    
    3. Back to the root
    Most of the thing you do when learning Turkish is visually breaking down words to their basic constituents — the root and the suffix(s).
    
    📝 Let us see this in play,
    
    The sentence “You will learn Turkish” translates to “Siz Türkçe öğrenecksiniz.”
    
    Siz → You Türkçe → Turkish — You see Turkish came before the verb “to learn” → The sentence structure in Turkish is — Subject + Object + Verb Öğreneceksiniz → You will learn
    
    Let us break “öğrenecksiniz” into its root and suffixes.
    
    What is the verb in the first place?
    
    öğrenmek (to learn) Verbs in Turkish have the ending “mak or mek” after the root.
    What is the root of the verb?
    
    öğren (learn)
    
    You get the root by removing the “mak or mek” from the verb.
    
    The suffixes.
    
    -ecek
    It makes it future tense
    -siniz
    It ends with siniz since it started with Siz(plural you) it has to end in a way that is in agreement with the Subject( Siz → You 🙃). Siz Türkçe öğreneceksiniz → You will learn Turkish
    📌 You can be overwhelmed by the above example — what I say to you making such dissections only makes sense after learning about verbs, tenses and building good library of words.
    
    📌 I want you to know like many things in Life Turkish grammar also makes sense in hindsight. You enjoy it coming back understanding why it had to be that way. The above example is just to help you find out if you find the challenge interesting enough to learn more.
    
    Thanks for reading!
    `,
    image: null,
    readingTime: 4,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 14,
      username: 'Abbas Abdelila',
      email: 'abbas@example.com',
      bio: "Shane's bio",
      image: 'Abbas-Abdelila.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 16,
      },
    ],
    tags: [
      {
        tagId: 12,
        name: 'Education',
      },
    ],
  },

  {
    postId: 17,
    title: 'Learn Git',
   content:`
   Learn Git
   Learn the Basics of Git in Under 10 Minutes
   https://miro.medium.com/v2/resize:fit:1975/1*4kDk9CZEEJBllqd3Fx549A.png
   
   Yes, the title is clickbait. There is no way you can understand the basics of git technology in just 10 minutes. But you can get pretty close in about 25 minutes. And that is the purpose of this article.
   
   If you want to get started on learning about Git technology, you’ve come to the right place. This is a comprehensive beginner’s guide to Git. There are many clients for Git. The technology is all the same no matter the client. But in this guide, we’ll be using GitHub to understand Git.
   
   You can read a Portuguese supplement to the article here. Translations are welcome! Just send me a pull request.
   
   Let’s get started!
   What is Version Control?
   Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. So ideally, we can place any file in the computer on version control.
   
   Umm… Okay… But Why Tho?
   Here’s Why:
   A Version Control System (VCS) allows you to revert files back to a previous state, revert the entire project back to a previous state, review changes made over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a VCS also means that if you screw things up or lose files, you can generally recover easily. And sometimes you just want to know “who wrote this crap”, and having access to that information is worthwhile 😈.
   
   So What is Git?
   Git is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people. Git is a Distributed Version Control System. So Git does not necessarily rely on a central server to store all the versions of a project’s files. Instead, every user “clones” a copy of a repository (a collection of files) and has the full history of the project on their own hard drive. This clone has all of the metadata of the original while the original itself is stored on a self-hosted server or a third-party hosting service like GitHub.
   
   Git helps you keep track of the changes you make to your code. It is basically the history tab for your code editor(With no incognito mode 🌚). If at any point while coding you hit a fatal error and don’t know what’s causing it you can always revert back to the stable state. So it is very helpful for debugging. Or you can simply see what changes you made to your code over time.
   
   https://miro.medium.com/v2/resize:fit:630/1*Lp_67l9zwur7aaFAhpVDrg.png
   
   A simple example of version history of a file.
   
   In the example above, all three cards represent different versions of the same file. We can select which version of the file we want to use at any point in time. So I can jump to and fro to any version of the file in the git time continuum.
   
   Git also helps you synchronise code between multiple people. So imagine you and your friend are collaborating on a project. You both are working on the same project files. Now Git takes those changes you and your friend made independently and merges them into a single “Master” repository. So by using Git you can ensure you both are working on the most recent version of the repository. So you don’t have to worry about mailing your files to each other and working with a ridiculous number of copies of the original file. And collaborating long-distance becomes as easy as HTML 🙃.
   
   Git Workflow:
   Before we start working with Git commands, it is necessary that you understand what it represents.
   
   What is a Repository?
   A repository a.k.a. repo is nothing but a collection of source code.
   
   There are four fundamental elements in the Git Workflow.
   Working Directory, Staging Area, Local Repository, and Remote Repository.
   
   https://miro.medium.com/v2/resize:fit:630/1*iL2J8k4ygQlg3xriKGimbQ.png
   
   Diagram of a simple Git Workflow
   
   If you consider a file in your Working Directory, it can be in three possible states.
   
   It can be staged. This means the files with the updated changes are marked to be committed to the local repository but not yet committed.
   It can be modified. This means the files with the updated changes are not yet stored in the local repository.
   It can be committed. This means that the changes you made to your file are safely stored in the local repository.
   git add is a command used to add a file that is in the working directory to the staging area.
   git commit is a command used to add all files that are staged to the local repository.
   git push is a command used to add all committed files in the local repository to the remote repository. So in the remote repository, all files and changes will be visible to anyone with access to the remote repository.
   git fetch is a command used to get files from the remote repository to the local repository but not into the working directory.
   git merge is a command used to get the files from the local repository into the working directory.
   git pull is a command used to get files from the remote repository directly into the working directory. It is equivalent to a git fetch and a git merge .
   Now that we know what Git is and its basic terminologies, let’s see how we can place a file under git. We’re going to do it the right way and the difficult way. Without any GUI applications.
   
   I’m assuming you already have a file you want to place under version control. If not create a sample folder named ‘MuskCult’ and place some sample code files in it.
   
   Step 0: Make a GitHub Account. Duh.
   If you don't already have one, you can make one here.
   
   Step 1: Make sure you have Git installed on your machine.
   If you are on a Mac, fire up the terminal and enter the following command:
   
   $git --version
   This will prompt open an installer if you don’t already have git. So set it up using the installer. If you have git already, it’ll just show you which version of git you have installed.
   
   If you are running Linux(deb), enter the following in the terminal:
   
   $sudo apt install git-all
   If you are on Windows:
   
   $get a mac
   Just kidding… Relax… The number of people I triggered… Phew…
   
   Go to this link or this link for more info on how to get it.
   
   Step 2: Tell Git who you are.
   Introduce yourself. Slide in. Seriously, mention your Git username and email address, since every Git commit will use this information to identify you as the author.
   
   $git config --global user.name "YOUR_USERNAME"$git config --global user.email "im_satoshi@musk.com"$git config --global --list # To check the info you just provided
   https://miro.medium.com/v2/resize:fit:630/1*JbyUdhLMEdglRxQk6PH7Vg.gif
   
   Step 3: Generate/check your machine for existing SSH keys. (Optional)
   Why you ask? Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username or password at each visit.
   
   Follow this link to learn more about SSH.
   
   Go here to check if you have an existing SSH key.
   
   Go here to generate a SSH Key.
   
   Go here to add the SSH key to your GitHub account.
   
   And finally, go here to test its connection.
   
   If you did setup SSH, every git command that has a link you replace it by:
   
   Instead of : https://github.com/username/reponameYou use    : git@github.com/username/reponame.git     Note : You can use both ways alternatively
   I’ll be using SSH protocol in this tutorial.
   
   Step 4: Let’s Git
   Create a new repository on GitHub. Follow this link.
   
   Now, locate the folder you want to place under git in your terminal.
   
   $ cd Desktop/MuskCult
   Initialize Git:
   And to place it under git, enter:
   
   $ touch README.md    # To create a README file for the repository
   $git init          # Initiates an empty git repository
   https://miro.medium.com/v2/resize:fit:630/1*Q_DUXRghgFQb9F47mUB6LQ.gif
   
   Now go edit the README.md file to provide information about the repository.
   
   Add files to the Staging Area for commit:
   Now to add the files to the git repository for commit:
   
   $git add .
   # Adds all the files in the local repository and stages them for commitOR if you want to add a specific file$git add README.md
   # To add a specific file
   Before we commit let’s see what files are staged:
   $git status# Lists all new or modified files to be committed
   https://miro.medium.com/v2/resize:fit:630/1*a2_hw7cMe2R9R_aI86dB-A.gif
   
   Commit Changes you made to your Git Repo:
   Now to commit files you added to your git repo:
   
   $git commit -m "First commit"
   # The message in the " " is given so that the other users can read the message and see what changes you made
   https://miro.medium.com/v2/resize:fit:630/1*LoUwFy29RkgCS7hCajd_3g.gif
   
   Uncommit Changes you just made to your Git Repo:
   Now suppose you just made some error in your code or placed an unwanted file inside the repository, you can unstage the files you just added using:
   
   $git reset HEAD~1
   # Remove the most recent commit
   # Commit again!
   https://miro.medium.com/v2/resize:fit:630/1*rxOX_U-ZRmGfhgIhNWlDIQ.gif
   
   Add a remote origin and Push:
   Now each time you make changes in your files and save it, it won’t be automatically updated on GitHub. All the changes we made in the file are updated in the local repository. Now to update the changes to the master:
   
   $git remote add originremote_repository_URL
   #sets the new remote
   The git remote command lets you create, view, and delete connections to other repositories.
   
   $git remote -v
   # List the remote connections you have to other repositories.
   The git remote -v command lists the URLs of the remote connections you have to other repositories.
   
   $git push -u origin master# pushes changes to origin
   Now the git push command pushes the changes in your local repository up to the remote repository you specified as the origin.
   
   https://miro.medium.com/v2/resize:fit:630/1*w-nfopsKIks_JRzFe5D8xA.gif
   
   And now if we go and check our repository page on GitHub it should look something like this:
   
   https://miro.medium.com/v2/resize:fit:630/1*aQljQFkytY84BgmlVtpgmw.png
   
   And that’s it. You’ve just added the files to the repository you just created on GitHub.
   
   See the Changes you made to your file:
   Once you start making changes on your files and you save them, the file won’t match the last version that was committed to git. To see the changes you just made:
   
   $git diff# To show the files changes not yet staged
   https://miro.medium.com/v2/resize:fit:630/1*xym1QvvvWorfoyGMXv28Yg.gif
   
   Revert back to the last committed version to the Git Repo:
   Now you can choose to revert back to the last committed version by entering:
   
   $git checkout .OR for a specific file$git checkout -- <filename>
   https://miro.medium.com/v2/resize:fit:630/1*HYgYkfo3W4MUA8CJl12rXg.gif
   
   View Commit History:
   You can use the git log command to see the history of commits you made to your files:
   
   $git log
   https://miro.medium.com/v2/resize:fit:630/1*9w7uBJcQMxc708DBw8Sewg.gif
   
   Each time you make changes that you want to be reflected on GitHub, the following are the most common flow of commands:
   
   $git add .
   $ git status# Lists all new or modified files to be committed
   $git commit -m "Second commit"
   $git push -u origin master
   https://miro.medium.com/v2/resize:fit:630/1*rWBJnBdF1V8YO_mi-jEfxA.gif
   
   Now if we go and see our repo, we can identify whether the commit was successful by looking at the commit message for each file.
   
   https://miro.medium.com/v2/resize:fit:630/1*QHM8m5HGavHkdzPz06UWGw.png
   
   Step 5: That’s all well and good… But How do I download and work on other repositories on GitHub?
   Cloning a Git Repo:
   Locate to the directory you want to clone the repo. Copy the link of the repository you want and enter the following:
   
   $ git cloneremote_repository_URL
   Feel free to go ahead and clone the repo I created above using: https://github.com/Gothamv/MuskCult
   
   https://miro.medium.com/v2/resize:fit:630/1*6NACk8-IiBjbauM-k-aesQ.gif
   
   Pushing Changes to the Git Repo:
   Now you can work on the files you want and commit to changes locally. If you want to push changes to that repository you either have to be added as a collaborator for the repository or you have created something known as a pull request. Go and check out how to do one here and give me a pull request with your code file.
   
   Collaborating:
   So imagine you and your friend are collaborating on a project. You both are working on the same project files. Each time you make some changes and push it into the master repo, your friend has to pull the changes that you pushed into the git repo. Meaning to make sure you’re working on the latest version of the git repo each time you start working, a git pull command is the way to go.
   
   Now below is an example of a project my friend and I are collaborating on:
   
   https://miro.medium.com/v2/resize:fit:630/1*2-tl2rHsgPqiv88aI55CPw.png
   
   There has just been a commit on the repo
   
   So to make sure those changes are reflected on my local copy of the repo:
   
   $git pull origin master
   https://miro.medium.com/v2/resize:fit:630/1*ySDKu2OEdkc26yOUp-TJJQ.gif
   
   Here are two more useful git commands:
   $git fetch
   AND
   $git merge
   In the simplest terms, git fetch followed by a git merge equals a git pull. But then why do these exist?
   
   When you use git pull, Git tries to automatically do your work for you. It is context-sensitive, so Git will merge any pulled commits into the branch you are currently working in. git pull automatically merges the commits without letting you review them first.
   
   When you git fetch, Git gathers any commits from the target branch that do not exist in your current branch and stores them in your local repository. However, it does not merge them with your current branch. This is particularly useful if you need to keep your repository up to date, but are working on something that might break if you update your files. To integrate the commits into your master branch, you use git merge.
   
   One More Thing:
   .gitignore
   So what is it?
   
   .gitignore tells git which files (or patterns) it should ignore. It's usually used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, etc.
   
   https://miro.medium.com/v2/resize:fit:630/1*3NFtOjfz0NvNSwba7YCmDA.png
   
   So in the above example, files like pycache, .DS_Store are used by the system to store information for faster access. This is not useful for other collaborators. So we can tell git to ignore them by adding a .gitignore file.
   
   Use the touch command to create the .gitignore file:
   
   $ touch .gitignore
   And you can add the following patterns to tell git to ignore such files.
   
   /*.cmake
   /*.DS_Store
   /.user
   /build
   etc. depending upon the files you want git to untrack
   And that’s pretty much it for the basics. Stay tuned for Part 2 which will focus on Branch, Merge, Stash, Rebase, etc.
   Peace Out ✌️
   
   
   `,
    image: null,
    readingTime: 4,
    pinned: false,
    createdAt: '2023-08-20T13:20:10.633Z',
    user: {
      userId: 14,
      username: 'Sarvar Musazade',
      email: 'sarvar@example.com',
      bio: "Sarvar's bio",
      image: 'Sarvar-Musazade.jpg',
    },
    likes: [
      {
        userId: 9,
        postId: 17,
      },
    ],
    tags: [
      {
        tagId: 11,
        name: 'Technology',
      },
    ],
  },
];
