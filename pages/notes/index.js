import Link from "next/link";
import React from 'react';
import style from "../../styles/notesIndex.module.css";

const notes = () =>
{
    const notes = new Array(15).fill(1).map((e, i) => ({ id: i, title: `Notes: ${i}` }));
    return (
        <div>
            <h1>My Notes</h1>
            <div className={ style.myNotes }>
                { notes.map(note =>
                    (
                        <div key={ note.id }>
                            <Link href="notes/[id]" as={ `notes/${note.id}` }>
                                <a>
                                    { note.title }
                                </a>
                            </Link>
                        </div>
                    )
                ) }
            </div>
        </div>
    );
};

export default notes;