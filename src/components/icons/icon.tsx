import React from 'react'

interface IconProps {
    name: string;
}

export default function Icon({ name }: IconProps) {
    switch (name) {
        case 'bell':
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" className='hover:animate-pulse'>
                    <path d="M13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 11.25 2.25 12.75 2.25 12.75H15.75C15.75 12.75 13.5 11.25 13.5 6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.2975 15.75C10.1656 15.9773 9.97638 16.166 9.74867 16.2971C9.52096 16.4283 9.26278 16.4973 9 16.4973C8.73722 16.4973 8.47904 16.4283 8.25133 16.2971C8.02362 16.166 7.83436 15.9773 7.7025 15.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            )
        case 'refresh':
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='hover:animate-spin'>
                    <path d="M15 2V6H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.3664 13.5881C15.7454 13.1864 15.7271 12.5535 15.3254 12.1745C14.9238 11.7954 14.2909 11.8138 13.9118 12.2155L15.3664 13.5881ZM13.9118 12.2155C13.0503 13.1284 11.8412 13.7474 10.4942 13.9381L10.7746 15.9183C12.5448 15.6677 14.1763 14.8492 15.3664 13.5881L13.9118 12.2155ZM10.4942 13.9381C9.14709 14.1288 7.77452 13.8749 6.62811 13.2328L5.6508 14.9778C7.18882 15.8392 9.00465 16.1689 10.7746 15.9183L10.4942 13.9381ZM6.62811 13.2328C5.48305 12.5915 4.6521 11.614 4.2577 10.4959L2.3716 11.1612C2.93868 12.7688 4.11144 14.1156 5.6508 14.9778L6.62811 13.2328ZM4.2577 10.4959C3.8644 9.38092 3.92221 8.17743 4.42489 7.09374L2.61058 6.25215C1.88967 7.8063 1.80343 9.55049 2.3716 11.1612L4.2577 10.4959ZM4.42489 7.09374C4.92914 6.00667 5.85687 5.0953 7.06491 4.54617L6.23728 2.72545C4.62476 3.45844 3.32992 4.70139 2.61058 6.25215L4.42489 7.09374ZM7.06491 4.54617C8.27396 3.99659 9.66766 3.85479 10.9889 4.15248L11.4285 2.20138C9.68791 1.80922 7.84878 1.99293 6.23728 2.72545L7.06491 4.54617ZM10.9889 4.15248C12.3098 4.45007 13.4489 5.16161 14.2138 6.13479L15.7862 4.89891C14.7196 3.54185 13.1695 2.59363 11.4285 2.20138L10.9889 4.15248Z" fill="currentColor" />
                </svg>
            )
        case 'feedback':
            return (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="7" r="1" fill="currentColor" />
                <circle cx="9" cy="7" r="1" fill="currentColor" />
                <circle cx="12" cy="7" r="1" fill="currentColor" />
            </svg>
            )
        default:
            return null
    }
}
