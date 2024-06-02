import styles from './post.module.css';
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import {faker} from "@faker-js/faker";
import ActionButtons from "@/app/(afterLogin)/_components/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_components/PostArticle";
import PostImages from "@/app/(afterLogin)/_components/PostImages";
import cx from "classnames";

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = { noImage?: boolean };
export default function Post({noImage}: Props) {
    const target = {
        postId: 1,
        User: {
            id: 'HOoo',
            nickname: '호오오',
            image: '/photo-1.jpg'
        },
        content: '우왕',
        createdAt: new Date(),
        Images: [] as any[]
    };

    if (Math.random() > 0.5 && !noImage) {
        for (let i = 0; i < Math.random() * 4; i++) {
            target.Images.push({imageId: i + 1, link: faker.image.urlLoremFlickr()});
        }
    }

    return (
        <PostArticle post={target}>
            <div className={styles.postWrapper}>
                <div className={styles.postUserSection}>
                    <Link href={`/${target.User.id}`} className={styles.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname}/>
                        <div className={styles.postShade}/>
                    </Link>
                </div>
                <div className={styles.postBody}>
                    <div className={styles.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={styles.postUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={styles.postUserId}>@{target.User.id}</span>
                            &nbsp;
                            ·
                            &nbsp;
                        </Link>
                        <span className={styles.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{target.content}</div>
                    <div>
                        <PostImages post={target}/>
                    </div>
                    <ActionButtons/>
                </div>
            </div>
        </PostArticle>
    );
};