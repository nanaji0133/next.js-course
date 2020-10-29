import { useRouter } from "next/router";
import React from 'react';

const noteDetail = () =>
{
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    return (
        <div className="container">
            Note - {id }
        </div>
    );
};

export default noteDetail;