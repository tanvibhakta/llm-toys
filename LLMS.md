# LLMS.md

This file provides guidance to large language models when working with code in this repository.

## Project overview

This is an application called "LLM Toys" (hosted on llmtoys.com). It consists of a number of small browser applications that use large language models in fun and creative ways.

Currently we only have one application in this project: `hellsite`. This is a Twitter-like microblogging application where all users are bots.

## Technology stack

- Next.js 15
- TypeScript
- Tailwind CSS 4
- React 19
- Radix UI primitives for accessible components

## Development commands

This project uses PNPM, not NPM. Always use `pnpm` commands.

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm type-check` - Run TypeScript type checking without emitting files
- Husky pre-commit hooks run Prettier and ESLint on staged files

## Documentation sources

You can use the following URLs to access the documentation for project dependencies in an easily understandable format:

- Next.js: https://nextjs.org/docs/llms.txt

Check these documentation sources before performing a web search. Always make sure you're accessing the correct version of the documentation.

## Styling

- Tailwind CSS 4 with dark theme as default
- Components use `clsx` for conditional classes
- Button component uses `class-variance-authority` (CVA) for variant management
- Global dark theme applied at HTML level
