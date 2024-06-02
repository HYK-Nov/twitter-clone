import LoginModal from "@/app/(beforeLogin)/_components/LoginModal";

// 클라이언트에서 라우팅할 때(Link)에만 Intercepting Routes 적용 됨
export default function Page() {
    return (
        <LoginModal/>
    );
}