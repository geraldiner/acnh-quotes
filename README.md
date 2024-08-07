# Words of Wisdom from Pascal of Animal Crossing: New Horizons
The tutorial is for [building a simple CRUD app with Node, Express, and MongoDB](https://zellwk.com/blog/crud-express-mongodb/). These were all terms I've heard before and understood individually, but never together. I really wanted to learn about backend programming because I'd decided to do a more serious for-fun programming project. (If you've been following my work, any "fun" projects is 99% Animal Crossing-related, so a "more serious for-fun programming project" is a project with more function.)

While the tutorial goes through using quotes from Yoda and Darth Vader of Star Wars, I used Pascal and Pave of Animal Crossing for fun.

Learn more about Pascal: https://animalcrossing.fandom.com/wiki/Pascal

And about Pave: https://animalcrossing.fandom.com/wiki/Pav%C3%A9
 
## How It's Made
**Tech used:** HTML, CSS, JavaScript, NodeJS, ExpressJS

I started out with initializing a node project with `npm init` and installing `express`.

I went through each of the CRUD requests and added some functionality to it.

* Create - Submit a new quote to be created in the database and shown in the webapge.
* Read - Read information from the backend and display to the webpage.
* Update - With a click of a button, you could replace Pascal's quote with a Pave quote.
* Delete - With a click of a button, you could delete a Pave quote (if one exists).

In polishing the site, I removed the CUD functionality, with the assumption that there wouldn't be many new quotes to be added. And replacing Pascal's quotes with a Pave one didn't really add much value.
 
## Optimizations
The biggest optimization I wanted to address in this project was how to hide any credentials, such as API keys or username/password combos, from Github while making sure I could still deploy to Heroku. 

After reading and listening to a bunch of Youtube videos, it seemed easy enough. But still, it took about an hour to set up. Not bad for my first time.

It was all just a matter of setting up `config variables`.

I really deviated from the tutorial by taking away the actual CUD parts, but while building I still went through them to get the hang of it. In my version, instead of replacing Yoda's quotes with a Darth Vader quote, I replaced Pascal's quote with a [Pave quote](https://animalcrossing.fandom.com/wiki/Pav%C3%A9)...which really only boils down to: 'Pave must DANCE'.
 
## Lessons Learned
 
I spent a long time trying to fix an authentication error to MongoDB before realizing it was because I hadn't replaced the template string properly with my credentials. 🙃

The way the tutorial breaks down CRUD really made it clear how to write it in JavaScript, specifically in a Node app. And `express` makes it so easy to handle that. You can specify any handling of request with `app.get` or `app.post` or `app.use`. 

This was also my first time deploying to Heroku, which has always seemed like a scary thing. Now that I've done it, it's not so bad. Really makes me confident in building more web apps.

<blockquote>
<p>Surviving failure leads to confidence, which leads to success.</p>
<cite><a href="https://wiki.healthygamer.gg/en/Motivation" target="_blank">Dr. K, HealthyGamer.gg</a></cite>
</blockquote>
 














## Other Projects

Check out other stuff I've worked on:

**Secret Santa App**: https://github.com/geraldiner/secret-santa-app

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

## Currently I'm:

- Working full-time at <a target="_blank" href="https://nomnomnow.com">Nom Nom</a>, migrating JavaScript to TypeScript
- Building my brand, <a target="_blank" href="https://happiandco.com">Happi & Co. Studio LLC</a>

But I'm always open to hearing about your next big thing!

## Let's get to know each other!

Connect with me:

**Twitter**: [@GeraldineDesu](https://twitter.com/geraldinedesu)

**LinkedIn**: [in/GeraldineR](https://linkedin.com/in/geraldiner)

**Email**: hello [at] geraldiner [dot] com
