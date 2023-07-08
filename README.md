## Medium Clone Full Stack Project

Medium Clone project is a full stack web application project and it was created with Java Spring Boot and Next.js. Also, frontend design of project was designed with Tailwind CSS.

## Brief Description of the Project

In our application, users will be able to share their own writings and comment on other users' writings. They can also follow other users and receive notifications when they are followed. Additionally, there will be a special section for popular posts and authors in our app. Users can follow their favorite authors and easily find their writings. Our app will also have a search feature, allowing users to easily find posts on specific topics. Along with all these features, users will have profiles where they can share information about themselves.

## Technologies

<h4>Backend</h4>
<ul>
    <li>Java 17</li>
    <li>Spring Boot 3</li>
    <li>Spring Security</li>
    <li>Spring Data JPA</li>
    <li>MySql</li>
    <li>Redis</li>
    <li>Docker</li>
    <li>Jwt</li>
    <li>Cloudinary</li>
    <li>AOP</li>
    <li>Modelmapper</li>
    <li>Apache commons-lang3</li>
    <li>Swagger</li>
</ul>

<h4>Frontend</h4>
<ul>
    <li>JavaScript</li>
    <li>React</li>
    <li>Next.js</li>
    <li>Next Auth</li>
    <li>Tailwind CSS</li>
    <li>Swr</li>
    <li>TypeScript</li>
    <li>next-mdx</li>
    <li>Ant Desing</li>
    <li>Material UI</li>
</ul>

## Usage Of Technologies

<h4>On the Backend Side, </h4>
Java Spring Boot was used to generate a REST API. MySQL was used as a relational database. In this project, we implemented an N-Layered architecture. In the data access layer, Spring Data JPA was used to access data from the database. Authorization and authentication processes were provided by Spring Security and JWT (JSON Web Tokens). When a user logs in, an access token and refresh token are generated. We used Redis for one purpose in this project: storing the refresh token. We store the refresh token in Redis when a user logs in. If the access token expires, we use the refresh token stored in Redis to refresh the access token. The Redis configuration can be found in the config package. Additionally, AOP (Aspect-Oriented Programming) was used. A logging aspect was created for the logging process and saving purposes. To upload images to the cloud, the Cloudinary API was utilized. Cloudinary configuration  can be found in the config package. Docker was used to run Redis and MySQL images. For this purpose, a Docker Compose file was generated.

<h4>On the Frontend Side, </h4>
//ToDo:

## How can I use this project?

<p> 1. Clone or Download zip folder of this repository </p> 
    
    git clone https://github.com/SDU-Bilgisayar-Muhendisligi/cleanreading.git

<p> 3. Run docker compose file for redis and mysql images.
    Open cmd in project root folder and type:
</p>

    docker compose up -d

<p> 4. Start your backend project with your favourite IDE. </p>

<p> 5. In frontend directory, open cmd and type: </p>

    npm install

<p> 6. Start frontend project. </p>

    npm run dev
