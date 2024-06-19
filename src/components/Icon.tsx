interface props {
    element: "check" | "minimize" | "square" | "minus" | "xcross";
    className?: string;
}

export const Icon = ({ element, className }: props) => {
    switch( element ) {
        case "check": return <svg className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='currentColor' d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>

        case "minimize": return <svg className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>

        case "square": return <svg xmlns="http://www.w3.org/2000/svg" className={className} height="0.9em" width="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>

        case "minus": return <svg xmlns="http://www.w3.org/2000/svg" className={className} height="1.1em" width="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>

        case "xcross": return <svg xmlns="http://www.w3.org/2000/svg" className={className} height="1.1em" width="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    }
}
