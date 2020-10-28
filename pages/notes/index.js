import Link from "next/link";
import React from 'react';

const notes = () =>
{
    const notes = new Array(15).fill(1).map((e, i) => ({ id: i, title: `Notes: ${i}` }));
    return (
        <div>
            <h1>all notes index page</h1>
            {notes.map(note =>
                (
                    <div>
                        <Link href="notes/[id]" as={ `notes/${note.id}` }>
                            <a>
                                { note.title }
                            </a>
                        </Link>
                    </div>

                )
            ) }
            {/* <Link href="/notes/[id]" as={ `notes/1` }>
                <a>
                    note 1
                </a>
            </Link> */}
        </div>
    );
};

export default notes;