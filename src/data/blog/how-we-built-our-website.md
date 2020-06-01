---
path: how-we-built-our-website
date: 2020-06-01T09:33:59.898Z
title: How we built our website
peek: "If you're an aspiring web developer, then you probably know that the
  frontend market is largely occupied by three great frameworks/libraries:
  React, Vue and Angular. While theoretically we could settle for one of these
  to develop our website, we realized it would be helpful to have a tool that
  could easily import data from sources that even non tech-savvy people could
  understand..."
author: Pedro Fernandes
img: /assets/christopher-gower-m_hrflhgabo-unsplash.jpg
---
If you're an aspiring web developer, then you probably know that the frontend market is largely occupied by three great frameworks/libraries: React, Vue and Angular. While theoretically we could settle for one of these to develop our website, we realized it would be helpful to have a tool that could easily import data from sources that even non tech-savvy people could understand. Enter [GatsbyJS](https://www.gatsbyjs.org/).

Gatsby is a static site generator, built with React and GraphQL, two of the most popular technologies in recent years. Some of its strongest points are folder based routing, template based pages and a large plugin library, all of which we extensively used.

Let's start by looking at our [products](https://simplify-lgp.tech/products/) page. If you click any of the products, you'll notice they are very similar in structure. In fact, they all share a common template. By taking advantage of some of Gatsby's plugins, we were able to feed data from Markdown files, that would later be converted in their own page. Thus, adding a new product to our website is as easy as adding a new file, without having to change anything else in our code!

Our [team](https://simplify-lgp.tech/team/) page takes a similar approach. We could put each team member in our code but then, as you can imagine, it could become quite messy. Instead, we used a single JSON file containing information for all of our collaborators. Once again, adding a new member is as easy as ever!

Finally, let's take a look at our [blog](https://simplify-lgp.tech/blog). Maybe you're guessing that we are using the same approach as for the products page, since every blog post "looks" the same right? Well, you'd be half right. We are still using the same template, but in this case using Markdown files to write a blog post wouldn't be convenient for everyone. Enter [netlify-cms](https://www.netlifycms.org/): the perfect tool to make a bridge between the developers and the editors, it allows us to write a post with a rich-text editor: as I'm doing right now! Then, all it takes to publish it to the website is a single click of a button!

In summary, Gatsby was the perfect choice for our website. Just like we intend to simplify your life, Gatsby simplified ours!