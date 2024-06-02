import styles from './profile.module.css';
import Post from "@/app/(afterLogin)/_components/Post";
import BackButton from "@/app/(afterLogin)/_components/BackButton";

export default function Profile() {
    const user = {
        id: 'yundori97',
        nickname: 'YD97',
        image: '/X_logo.svg'
    };

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <BackButton/>
                <h3 className={styles.headerTitle}>{user.nickname}</h3>
            </div>
            <div className={styles.userZone}>
                <div className={styles.userImage}>
                    <img src={user.image} alt={user.image}/>
                </div>
                <div className={styles.userName}>
                    <div>{user.nickname}</div>
                    <div>@{user.id}</div>
                </div>
                <button className={styles.followButton}>팔로우</button>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </main>
    );
}