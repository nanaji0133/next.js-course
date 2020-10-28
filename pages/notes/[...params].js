import { useRouter } from "next/router";


const noteDetail = () =>
{
    const router = useRouter();
    const { params } = router.query;
    console.log(params);
    return (
        <div>
            spectific note
        </div>
    );
};

export default noteDetail;