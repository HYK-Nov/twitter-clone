import styles from "./chatRoom.module.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import Link from "next/link";
import {faker} from "@faker-js/faker";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function ChatRoom() {
    const user = {
        id: 'HOoo',
        nickname: '호오오',
        image: faker.image.avatar()
    };
    const messages = [
        {messageId: 1, roomId: 123, id: 'yundori97', content: 'ㅎㅇ', createdAt: new Date()},
        {messageId: 2, roomId: 123, id: 'HOoo', content: '반말하지 마세요', createdAt: new Date()},
    ];

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <BackButton/>
                <div><h2>{user.nickname}</h2></div>
            </div>
            <Link href={`/${user.id}`} className={styles.userInfo}>
                <img src={user.image} alt={user.id}/>
                <div><b>{user.nickname}</b></div>
                <div>@{user.id}</div>
            </Link>

            <div className={styles.list}>
                {messages.map((e) => {
                    if (e.id === 'yundori97') {
                        return (
                            <div key={e.messageId} className={cx(styles.message, styles.myMessage)}>
                                <div className={styles.content}>{e.content}</div>
                                <div className={styles.date}>
                                    {dayjs(e.createdAt).format('YYYY년 MM월 DD일 A HH:mm')}
                                    {(messages.length > 0 && messages.at(-1)?.content !== 'yundori97') && ` · 확인함`}
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={e.messageId} className={cx(styles.message, styles.yourMessage)}>
                            <div className={styles.content}>{e.content}</div>
                            <div className={styles.date}>{dayjs(e.createdAt).format('YYYY년 MM월 DD일 A HH:mm')}</div>
                        </div>
                    )
                })}
            </div>
        </main>
    );
};