// SVG Icon Components
const EmailIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const GitHubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);


const CodeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z"
        />
    </svg>
);

const AIIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A2.5 2.5 0 0 0 1 13.5v1a2.5 2.5 0 0 0 1.928 2.497L3 17v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2l.072-.003A2.5 2.5 0 0 0 23 14.5v-1a2.5 2.5 0 0 0-1.928-2.497L21 10.975zM5 8h14v3h-2.5V9.5h-3V11h-3V9.5h-3V11H5V8zm14 6v3H5v-3h2.5v1.5h3V14h3v1.5h3V14H19z"
        />
    </svg>
);

const UsersIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"
        />
    </svg>
);

const ImpactIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16H3V5h18v14z"
        />
    </svg>
);

export { EmailIcon, LinkedInIcon, GitHubIcon, CodeIcon, AIIcon, UsersIcon, ImpactIcon };