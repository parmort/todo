# Backend

A simple REST API written in TypeScript. I used ExpressJS for the server and
PostgreSQL for the database. Nothing too special.

## Developing

1. Clone the repo and run `npm i` *in this folder*
2. Run `npm run compile`. This compiles the TypeScript code into JavaScript. This
is a watch script, so no need to re-run it each time.
3. Run `npm run dev`. This runs the development server. Again, this watches the
directory, so no need to re-run each time.

> If you happen to use VIm (like I do), I would recommend using TMux to split your
> terminal into windows and panes. 1 running terminal is much better than 3.

## Production

For production, run `npm start`.
