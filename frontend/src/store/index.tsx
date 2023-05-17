import PostDTO from '@/types/Post/Post';

export const trendUsers = [
  {
    username: 'Sarvar Musazade',
    image: '/images/Schauf-Bammer.jpg',
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Abbas Abdelila',
    image: "/images/Abbas-Abdelila.jpg",
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Ali Kalantari',
    image: "/images/Ashley-Bretford.jpg",
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Rza Maharramov',
    image: "/images/Au-Chang.jpg",
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Mazahir',
    image: "/images/fake-person-6.jpg",
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Jon Doe',
    image: '/images/John-Doe.jpg',
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
        name: 'Tag 1',
      },
    ],
  },
  {
    postId: 3,
    title:
      'A Biotech Startup Reverses Aging',
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
];