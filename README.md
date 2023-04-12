Project showcase with Nextjs


## Task

Task is described inside `Task.pdf` file.


### Project Requrements

1. Create a new Next.js project :heavy_check_mark:
     - `this project`
2. Set up a navigation system with a homepage and detail page :heavy_check_mark:
    - `/pages` ( used Next 12 architecture )
3. Create a simple API endpoint :heavy_check_mark:
    - `~/utils/fetch` Typed api endpoint used in `index.tsx` and `[id].tsx`
4. User server-side rendering to fetch and display data :heavy_check_mark:
    - `getServerSideProps` inside `index.tsx` as SSR method, and `getStaticProps` inside `[id].tsx` for SSG*
5. Use CSS :heavy_check_mark:
    - Used Tailwind as css platform.


*SSG is not ideal for that kinda content becouse its created during build, if anyone added post or comment for post between
build and client view it would not update. This is just as showcase.


## Technologies

 1. `Nextjs`
 2. `Tailwind`
 3. `React-hooks`


## Shown skills

1. Nextjs architecture - SSR and SSG pages.
2. Tailwind structure - Basic styling.
3. React - useState, useContext, useMemo.
4. Typescript and PropTypes integration.
5. Tests
6. Clean code


## Description

This site uses Nextjs server side rendering during home page load with `getStaticServerProps`, it provides all posts and
parses users to those posts. Uses object transformation for `users` to normalize data for better usage.

Detail pages are generated using SSG, that means during build time.

Search is done by basic css and useContext, nothing fancy. Object are searched recursivly but also memoized based on search value.

Paggination is not done, API endpoints doesnt allow any filter on how many record I require thus it would be nessesary cut
it on the FE, thats pointless at that time becouse we already have that data so why not show it.


## TODOS

1. Better error handling where we may not get comments for posts but we do get post so we can show user just the post.

2. Add tranlsations - multiple language support.

3. Navbar has just fake buttons maybe add some functionality.

4. Better test coverage. Add cypress tests.

5. Better documatation of functionalComponents and helpers.

## Personal notes

As a my first `NextJs` project I got to learn how data are fetched on server-side platform. Personally I found `Remix`
more understandable and litte bit better. I also first time used `Tailwind`, on a first glanced its mayham, I didnt understand
why would anyone use it but after few videos on it I think I understand its usecase, but Im still not a big fan of it.

In `Task.pdf` in Skill proved its written
```Implementing authentication in Next.js```
I did not implement any authentication as its not in `Project Requirement`. If its required I will use `https://auth0.com/`
to do it.
