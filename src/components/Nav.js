import Link from "next/link";
import React from 'react';

const Nav = () =>
{
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-3 d-flex justify-content-start align-items-center" style={ { fontSize: "20px", height: "60px" } }>
                <Link href="/">
                    <a>
                        Note App
                    </a>
                </Link>

                <Link href="/notes">
                    <a className="pl-4">
                        notes
                    </a>
                </Link>

            </nav>
        </div>
    );
};

export default Nav;