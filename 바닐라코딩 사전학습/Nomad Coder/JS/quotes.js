const quotes = [
    {
        quote: "programmers are tommorow's rockstar",
        author: "will.i.am",
    },
    {
        quote: "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Anything you're good at contributes to happiness.",
        author: "Bertrand Russell",
    },
    {
        quote: " The fool doth think he is wise, But the wise man knows himself to be a fool.",
        author: "William Shakespeare",
    },
    {
        quote: "Although the world is full of suffering, it is also full of the overcoming of it.",
        author: "Helen Keller",
    },
    {
        quote: "Old soldiers never die; They just fade away.",
        author: "Douglas MacArthur",
    },
    {
        quote: "Anything you're good at contributes to happiness.",
        author: "Bertrand Russell",
    },
    {
        quote: "If you want to be happy for a year, plant a garden. if you wnat to be happy for life, plant a tree.",
        author: "English Proverb",
    },
    {
        quote: "Nothing is more despicable than respect based on fear.",
        author: "Albert Camus",
    },
    {
        quote: "Only the person who has faith in himself is able to be faithful to others.",
        author: "Erich Fromm",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;