import { useRouter } from "next/router";


const noteDetail = () =>
{
    const router = useRouter();
    const { id } = router.query;
    console.log(router.query);
    return (
        <div>
            spectific note - {id }
        </div>
    );
};

export default noteDetail;