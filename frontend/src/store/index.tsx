import PostDTO from "@/types/Post/Post";


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
    alt: "Sarvar",
    src: "/images/abbas-profile.jpg"
  },
  {
    alt: "image",
    src: "/images/Ashley-Bretford.jpg"
  },
  {
    alt: "image",
    src: "/images/fake-person-6.jpg"
  },
  {
    alt: "image",
    src: "/images/Helena-Roseberg.jpg"
  },
  {
    alt: "image",
    src: "/images/Mike-Greenwood.jpg"
  },
  {
    alt: "image",
    src: "/images/Au-Chang.jpg"
  },
  {
    alt: "image",
    src: "/images/generative-ai.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
  {
    alt: "image",
    src: "/images/Schauf-Bammer.jpg"
  },
]


export const tags = [
  {
    id: 1,
    name: "Programing"
  },
  { id: 2, name: "Science" },
  { id: 3, name: "Technology" },
  { id: 4, name: "Art" },
  { id: 5, name: "Business" },
  { id: 6, name: "Sports" },
  { id: 7, name: "Entertainment" },
  { id: 8, name: "Health" },
  { id: 9, name: "Education" },
  { id: 10, name: "Politics" }
]

/**
 * 
 * private Long postId;

    private String title;

    private String content;

    private String image;

    private Integer readingTime;

    private boolean pinned;

    private Date createdAt;

    private UserDTO user;

    private Set<PostLikeDTO> likes;

    //private Set<CommentDTO> comments;
    // post icinde bu kadar buyuk bir veriye gerek yok neden cunku biz bu koiitleri
    // bir sidebar gibi acicagiz yani post acilifdigi anda gelimiyecek onu da sidebar tetiklendigi zaman
    // o anki postun id si ile ceke biliriz

    private Set<TagDTO> tags = new HashSet<>();
 */
/*private Long userId;
private String username;
private String email;
private String bio;
private String image;*/

export const posts: PostDTO[] = [
  {
    postId: 1,
    title: "5 Javascript Clean Coding Patterns To Enhance your Code",
    content: "Writing good reusable code can be difficult sometimes. Sometimes we may learn to code in different languages and stick to some limitations or patterns that make sense in that context."
      + "Although there is no right or wrong in coding without context, there are some simple ways of writing code that are more generic and can be applied to a lot of contexts, and create more readable, maintainable, and predictable code. Here are some of them:",
    image: null,
    readingTime: 2,
    pinned: false,
    createdAt: "2023-08-20T13:20:10.633Z",
    user: {
      userId: 2,
      username: "Sarvar",
      email: "email.com1",
      bio: "SDU",
      image: "Schauf-Bammer.jpg"
    },
    likes: [
      {
        userId: 2,
        postId: 1
      }
    ],
    tags: [
      {
        tagId: 1,
        name: "Programing"
      }
    ]
  },
  {
    postId: 1,
    title: "Wikpedia",
    content: "The big lie we’re told, in school and again in early-career settings, is that being “good” at programming is about solving harder and harder problems in a more elegant way. The truth is much more mundane — being good at programming is about efficiently solving a large set of mostly trivial problems, quickly and cleanly. What IS true, however, is how valuable “flow state” is to doing this. Being able to remain immersed in the work allows you to quickly shift between domains, tracking the flow of state from user to business logic through to data store, and back again.",
    image: null,
    readingTime: 2,
    pinned: false,
    createdAt: "2023-08-20T13:20:10.633Z",
    user: {
      userId: 1,
      username: "User 1",
      email: "email.com",
      bio: "Bio 1",
      image: "Schauf-Bammer.jpg"
    },
    likes: [
      {
        userId: 1,
        postId: 1
      }
    ],
    tags: [
      {
        tagId: 1,
        name: "Tag 1"
      }
    ]
  },
  {
    postId: 2,
    title: "Title 2",
    content: "In much the same way that survey scales are plotted against the average human’s ability to discriminate (usually 5-7 choices, never more than 9), frameworks that rely on fewer files, of fewer types, and organized in as flat a hierarchy as possible are simpler for new developers to come up to speed with, and easier for EVERYONE to remain in flow state when working on",
    image: null,
    readingTime: 3,
    pinned: false,
    createdAt: "2023-08-20T13:20:10.633Z",
    user: {
      userId: 2,
      username: "User 2",
      email: "user2@example.com",
      bio: "Bio 2",
      image: "Schauf-Bammer.jpg"
    },
    likes: [
      {
        userId: 2,
        postId: 2
      }
    ],
    tags: [
      {
        tagId: 3,
        name: "Linux"
      }
    ]
  },
  {
    postId: 3,
    title: "Title 3",
    content: "“Good” programmers love to denigrate PHP and javascript for being “bad” languages; yet both of them are notable for supporting simple “Single-file” patterns. Javascript does this through JSX; PHP simply allows every php script to contain arbitrary HTML as well. I’ve decided to recreate the joy of Single-File development, but for Python. This will hopefully bridge the obvious gaps between the “Notebook” python data science communities, the “Boot Camp” software developer communities, and the front lines of web application development.",
    image: null,
    readingTime: 4,
    pinned: false,
    createdAt: "2023-08-20T13:20:10.633Z",
    user: {
      userId: 3,
      username: "User 3",
      email: "user3@example.com",
      bio: "Bio 3",
      image: "Schauf-Bammer.jpg"
    },
    likes: [
      {
        userId: 3,
        postId: 3
      }
    ],
    tags: [
      {
        tagId: 3,
        name: "Tag 3"
      }
    ]
  },
  {
    postId: 4,
    title: "Title 4",
    content: "Over the next few blog posts, I’ll talk through many of the “bad” practices I’ve embraced to simplify and streamline my development experience. Even better, I’ll announce the various open source libraries that I’ve discovered, extended or developed along the way.",
    image: null,
    readingTime: 5,
    pinned: false,
    createdAt: "2023-08-20T13:20:10.633Z",
    user: {
      userId: 4,
      username: "User 4",
      email: "user4@example.com",
      bio: "Bio 4",
      image: "Schauf-Bammer.jpg"
    },
    likes: [
      {
        userId: 4,
        postId: 4
      }
    ],
    tags: [
      {
        tagId: 4,
        name: "Tag 4"
      }
    ]
  },
]