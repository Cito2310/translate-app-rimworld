interface props {
    element: "check" | "square" | "minus" | "xcross" | "bars" | "icon";
    className?: string;
}

export const Icon = ({ element, className }: props) => {
    switch( element ) {
        case "check": return <svg className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='currentColor' d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>

        case "square": return <svg xmlns="http://www.w3.org/2000/svg" className={className} height="0.9em" width="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>

        case "minus": return <svg xmlns="http://www.w3.org/2000/svg" className={className} height="1.1em" width="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>

        case "xcross": return <svg xmlns="http://www.w3.org/2000/svg" className={className} height="1.1em" width="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

        case "bars": return <svg xmlns="http://www.w3.org/2000/svg" className={className} height="1em" width="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

        case "icon": return <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={className} height="1em" width="1em" viewBox="0 0 256.000000 256.000000"preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path fill="currentColor" d="M1195 2554 c-167 -11 -380 -72 -520 -149 -230 -125 -466 -380 -560
            -605 -41 -95 -81 -226 -95 -309 -15 -87 -15 -298 0 -396 24 -160 106 -371 193
            -500 162 -239 351 -389 630 -499 211 -84 524 -98 769 -35 87 22 299 115 368
            162 182 123 351 311 443 493 39 78 95 245 113 341 21 112 20 347 0 462 -9 47
            -27 114 -40 150 -13 37 -32 88 -42 114 -20 56 -106 209 -133 239 -11 11 -45
            52 -77 91 -32 40 -86 94 -119 120 -34 27 -74 61 -91 76 -97 90 -368 206 -534
            229 -90 13 -236 20 -305 16z m277 -288 c100 -20 265 -87 351 -142 87 -56 237
            -205 297 -294 46 -68 118 -230 139 -315 37 -145 30 -382 -15 -514 -64 -185
            -127 -291 -250 -416 -226 -230 -500 -330 -817 -297 -256 27 -430 113 -613 304
            -122 127 -177 217 -234 383 -67 191 -68 420 -3 605 71 206 158 335 318 472
            116 99 295 186 440 213 95 18 296 18 387 1z"/>
            <path fill="currentColor" d="M1224 2170 c-11 -4 -33 -23 -48 -41 -24 -29 -28 -39 -24 -81 4 -33
            13 -57 29 -74 21 -23 22 -27 9 -47 -176 -271 -171 -265 -230 -282 -30 -9 -107
            -34 -170 -55 l-115 -39 -41 47 c-39 45 -44 47 -94 47 -47 0 -55 -3 -86 -37
            -27 -30 -34 -46 -34 -77 0 -54 17 -87 57 -112 33 -21 75 -22 129 -4 17 5 33
            -11 105 -106 152 -201 136 -159 131 -351 l-4 -166 -34 -6 c-58 -11 -86 -44
            -92 -107 -3 -45 0 -59 19 -83 76 -96 219 -51 219 70 0 42 0 42 53 59 28 10
            103 37 164 61 l112 44 113 -44 c62 -24 137 -52 166 -62 l52 -19 0 -47 c0 -123
            162 -157 222 -47 38 68 4 147 -72 170 l-37 11 -6 171 -5 171 72 92 c39 50 86
            112 104 138 l32 47 50 -7 c63 -8 103 8 130 51 32 52 27 108 -14 153 -31 34
            -39 37 -86 37 -49 0 -55 -3 -90 -42 -21 -24 -41 -43 -46 -43 -5 0 -80 23 -167
            52 l-159 51 -59 89 c-32 49 -65 96 -73 103 -8 8 -24 30 -36 50 l-22 35 27 53
            c15 32 23 61 19 73 -19 59 -29 76 -59 94 -34 21 -75 25 -111 10z"/>
            </g>
        </svg>
       
    }
}
