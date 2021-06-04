const arrayOfQuotes = [
    {
        'author': 'Aastha Kafle',
        'quote': 'Never Give up',
    },
    {
        'author': 'Samrat Kafle',
        'quote': 'Give Respect, Take Respect',
    },
];


function genquote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length);
    document.querySelector('#qt').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#at').textContent = `--${arrayOfQuotes[random].author}`;
} 