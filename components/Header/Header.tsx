import React from 'react';
import Link from 'next/link';

import { HeaderList, HeaderListItem, HeaderLink } from './Header.styled';

const Header = (): JSX.Element => (
    <header>
        <HeaderList>
            <HeaderListItem>
                <Link prefetch href="/" passHref>
                    <HeaderLink>Home</HeaderLink>
                </Link>
            </HeaderListItem>
            <HeaderListItem>
                <Link prefetch href="/posts/new" passHref>
                    <HeaderLink>New post</HeaderLink>
                </Link>
            </HeaderListItem>
        </HeaderList>
    </header>
);

export default Header;
