import Head from "next/head";
import { useRouter } from "next/router";
import React from 'react';

const noteDetail = () =>
{
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    return (
        <div className="container">
            spectific note - {id }
            <div className="">
                programmtic routing:-
            <button onClick={ e => router.push("/") }>
                    Home page
            </button>
            </div>
        </div>
    );
};

export default noteDetail;