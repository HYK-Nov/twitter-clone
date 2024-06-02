import Home from "@/app/(afterLogin)/home/page";

type Props = {
    params: {
        username: string,
        id: string,
        photoId: number
    }
}
export default function Page({params}:Props) {
    // console.log(params.id, params.photoId, params.username);
    return (
        <Home/>
    );
};