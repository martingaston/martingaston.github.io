# martingaston.github.io

Firstly, thanks for taking the time to read this :bowtie: Below are a few thoughts and resources I used to make my portfolio site:

## Design Approach

My initial designs for a portfolio were slightly more ambitious than my current technical ability - I started by sketching out some (incredibly basic) shapes, although my drawing skills are so embarassing I'd only be prepared to show you those if we'd had a few drinks.

In the end, I decided to park my first concept - a portfolio designed around a 1900s-esque print ad - go for something quite a bit simpler: a straightforward two-column layout. I'd like to come back to the first idea down the line, though :thumbsup:

## Coding

There were a few instances when putting this together that I realised how compabilitity (especially with legacy browsers) can play a large factor in how things get displayed. However, I have chosen to focus predominatly on modern browsers & mobile. My overall goals with the design was to keep it simple.

### CSS

+ I took the colour from Pantone's [London Fashion Week Spring 2018](https://www.pantone.com/fashion-color-trend-report-london-spring-2018) trend report, as I think a lot of these colours would look just as good on a screen as they presumably did on a catwalk.
+ I wanted to make use of responsive design (as my two column design for desktop would translate poorly to mobile) so researched the basics of the `@media` tag - [w3schools](https://www.w3schools.com/css/css3_mediaqueries.asp) and [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) proved typically invaluable here.
+ I read up on `rem` and `em` while putting this together, and have tried to implement it across the CSS rather than `px`.
+ I've also used some newer CSS like `box-sizing` and `scroll-behavior` for a better viewing experience with modern browsers.
+ The site icons have come from [Font Awesome](https://fontawesome.com), but while I loved the designs I wanted to implement them manually which led me down the path of SVG rendering in HTML. This [post by Elliot Dahl on Prototypr](https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4) was incredibly useful for that.

### JavaScript

+ I realised that a lot of the JavaScript I've currently learnt via Codewars is really exciting, but I don't know much about actually interacting with and manipulating the DOM to put a lot of that into practice when it comes to site design. That's definitely one of my next goals, but in the meantime I still wanted to use a little of the JavaScript I've learnt here - so I made a random `greeting()` function that can also be triggered with a click. Not essential, but fun :blush:

## Next Steps

+ I'd like to convert this portfolio to a Jekyll template, as I think that's a cool bit of a kit that has natural potential due to it being used across GitHub Pages. I do not think this single-page site necessarily *needs* to be converted to Jekyll in its current form, however, but I would certainly want to make use of it if I was to start building additional pages into the site.
+ I think the work section could do with a new approach when my projects start to increase - I've tried to future-proof it a bit with its design but I think there would be a better way to design it for the user experience if there were, say, 6+ projects displayed there.
+ I'd really like the greeting animation to work a little better. Chiefly, I'd like it to animate upon being clicked - this would be a much better experience when viewed on mobile, as well. I'd also like to see the animation rotate from the center of the text, not the div element.
+ I've played around with some theming in the CSS, which works quite effectively. I'd like to design that in to the site itself, allowing users to choose their own colours.
