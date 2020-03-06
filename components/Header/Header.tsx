import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/posts/new">
                    <a>New post</a>
                </Link>
            </li>
        </ul>
    </header>
);

export default Header;
