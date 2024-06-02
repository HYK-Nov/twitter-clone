'use client';
import {useRouter} from "next/navigation";
import {faker} from "@faker-js/faker";
import styles from "@/app/(afterLogin)/messages/message.module.css";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Room() {
    const router = useRouter();
    const user = {
        id: 'HOoo',
        nickname: '호오오',
        Messages: [
            {roomId: 123, content: 'ㅎㅇ', createdAt: new Date()},
            {roomId: 123, content: '반말하지 마세요', createdAt: new Date()},
        ]
    };
    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    };
    const onClickUserImage = () => {
        router.push(`/${user.id}`);
    }

    return (
        <div className={styles.room} onClickCapture={onClick}>
            <div className={styles.roomUserImage} onClickCapture={onClickUserImage}>
                <img src={faker.image.avatar()} alt={""}/>
            </div>
            <div className={styles.roomChatInfo}>
                <div className={styles.roomUserInfo}>
                    <b>{user.nickname}</b>
                    &nbsp;
                    ·
                    &nbsp;
                    <span className={styles.postDate}>
                        {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
                    </span>
                </div>
                <div className={styles.roomLastChat}>
                    {user.Messages?.at(-1)?.content}
                </div>
            </div>
        </div>
    );
};