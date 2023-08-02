let IDES = [
    {
        name: 'JSFiddle',
        siteURL: 'https://jsfiddle.net/',
        embed: () => {return(<iframe width="100%" height="500" title='JSFiddle embed' src="//jsfiddle.net/InstructorKate/3xfgqdr2/4/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>)},
        pros: [
            'Embed snippet – embed can be used as an iframe or script. ',
            'Performs JS Extensions and Libraries, React.',
            'Can display fiddle directly from a GitHub repository code base.',
            'Seemingly students do not need to each make an account to use the embed.'
        ],
        cons: [
            'Cannot observe student process / code history',
            'Does not seem to have user / permission levels',
            'Seems to have event issues in trials / demos, could be troublesome for new developers trying to treat fiddle embed like VSC.'
        ] 
    },
    {
        name: 'CodePen',
        siteURL: 'https://codepen.io/',
        embed: () => {return(<iframe height="500" style={{width: '100%'}} scrolling="no" title="IDE Testing" src="https://codepen.io/Katelyn-Lockhart/embed/zYMezQB?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/Katelyn-Lockhart/pen/zYMezQB">
        IDE Testing</a> by Katelyn Lockhart (<a href="https://codepen.io/Katelyn-Lockhart">@Katelyn-Lockhart</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>)},
        pros: [
            'Embedding via HTML, prefill embed, or iframe. No file explorer. ',
            'Can import packages and libraries via Skypack, React friendly. Will have to go into pen setting to turn on Babel to pack files for React/JSX rendering.',
            'Set up for staff would mean a single Upright team to build pens for the embeds. Due to paid team/pro status, cost would be $1440/year for a team of 10.'
        ],
        cons: [
            'There is only what seems to be a paid tier organization system for teams with three user roles: Owner, Admin, Member. https://blog.codepen.io/documentation/team-management/ ',
            'Cannot observe student process / code history.'
        ] 
    }
];

/* 
Empty IDE Object w/in the array:
{
        name: '',
        siteURL: '',
        embed: () => {return()},
        pros: [
            '',
            '',
            '',
            ''
        ],
        cons: [
            '',
            '',
            ''
        ] 
    }
*/

export default IDES; 