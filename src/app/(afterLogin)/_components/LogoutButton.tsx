'use client';
import styles from "./logoutButton.module.css";

export default function LogoutButton() {
    const me = {    // 임시 정보
        id: 'yundori97',
        nickname: 'YD97',
        image: '/X_logo.svg',
    };

    const onLogout = () => {};

    return (
        <button className={styles.logOutButton} onClick={onLogout}>
            <div className={styles.logOutUserImage}>
                <img src={me.image} alt={me.id}/>
            </div>
            <div className={styles.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
};