let IDES = [
    {
        name: 'JSFiddle',
        siteURL: 'https://jsfiddle.net/',
        embed: () => {return(<iframe width="100%" height="500" title='JSFiddle embed' src="//jsfiddle.net/InstructorKate/3xfgqdr2/4/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>)},
        pros: [
            'Embed snippet – embed can be used as an iframe or script. ',
            'Performs JS Extensions and Libraries, React.',
            'Can display fiddle directly from a GitHub repository code base.'
        ],
        cons: [
            'Cannot observe student process / code history',
            'Does not seem to have user / permission levels',
            'Seems to have event issues in trials / demos, could be troublesome for new developers trying to treat fiddle embed like VSC.'
        ] 
    }
];

export default IDES; 