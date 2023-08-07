let IDES = [
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
    },
    {
        name: 'Code Sandbox',
        siteURL: 'https://codesandbox.io/',
        embed: () => {return(<iframe src="https://codesandbox.io/embed/happy-black-yvs7mn?fontsize=14&hidenavigation=1&theme=dark"
        style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden" }}
        title="happy-black-yvs7mn"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>)},
        pros: [
            'Has file explorer, ability to connect to GH for version control, and CLI command supported.',
            'Can embed via url or iFrame, embed functionality in beta though which may mean embed may not support full IDE features.',
            'Does have a Team/Organization structure that is $15 billed annually per team member per month. There are seemingly only two permission levels, a read or write status. The paid version will allow us to build/use an unlimited amount of private repos and sandboxes. https://codesandbox.io/docs/learn/teams/permissions ',
        ],
        cons: [
            `Embed may have performance issues since it's a beta feature.`,
            'Cannot seem to view a coding history or observe student code.',
            'I doubt embed will retain student content and will refresh with the page.'
        ] 
    },
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
            'Cannot edit code in embed without redirect to site, only discovered after testing embed in the react app.',
            'Cannot observe student process / code history',
            'Does not seem to have user / permission levels',
            'Seems to have event issues in trials / demos, could be troublesome for new developers trying to treat fiddle embed like VSC.'
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