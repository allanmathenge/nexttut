---
title: 'Two Forms of Pre-rendering'
date: '2024-07-24'
---

Next.js has two forms of pre-rendering: **Static Generetion** and **Server-Side Rendering**. The difference is in **where** it generates HTML for a page.

**Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _re-used_ on each request.
**Server-side Rendering** is the pre-rendering method that generates HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
