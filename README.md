## Overview

This is a simple web app that allows users to add and remove movies in
a list. It works better on desktop but should be usable on mobile. I
would have liked to improve the style, but it implements the general
requirements. It is viewable on GitHub pages. The repository is
https://github.com/jdbren/jbre0263-tracker.

## Development Notes

I decided to use Next.js because of a recommendation from someone at
the company I just started interning with (it is summer in the US). I
later realized that this framework was far more complex than necessary
for this project, and uses unnessary features like server-side rendering.
I also underestimated the time necessary to learn React, and there are
possibly improper uses causing hydration error. Next will automatically
switch to client-side rendering which solves most of the issues, however.

The main file is app/page.tsx which lays out the HTML for the root.
There are several other React components, mainly MovieList and AddMenu
which are responsible for displaying the movies and adding new movies,
respectively. The data is stored between sessions in local storage (I think
loading this data is causing some of the SSR issues). The data model uses a
Movie object with all of the necessary information. It also retrieves a
poster jpg url from The Movie Database by querying the movie title.

## Frameworks and Dependencies
- Next.js
- TypeScript: Found this easier to use with React.
- TailwindCSS: allows easy inline CSS within jsx elements
- React.js: Underlies Next.js for building components and state updates

## Building and Testing
See below for running. Next.js automatically sets up the backend Node server.
Production build is created through npm run build and then npm run start.

## Features
- Adding and removing movies
- Posters that are based on the movie title entered (issues with loading these
sometimes)
- Sorting by various metrics
- Filtering a specific genre of movies

## Sources
- The Movie Database (https://developer.themoviedb.org/reference/intro/getting-started)
- Next.js (https://nextjs.org/docs) including initial project outline
- React.js (https://react.dev/reference/react)
- TailwindCSS (https://tailwindcss.com/docs/installation)

## AI Usage Acknowledgement
I used Github Copilot throughout development.


## Next.js Information

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
