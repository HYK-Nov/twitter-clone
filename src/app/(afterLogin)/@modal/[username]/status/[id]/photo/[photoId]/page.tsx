import styles from "./photoModal.module.css";
import {faker} from "@faker-js/faker";
import ActionButtons from "@/app/(afterLogin)/_components/ActionButtons";
import PhotoModalCloseButton
    from "@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton";
import Post from "@/app/(afterLogin)/_components/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";

export default function PageModal() {
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text()
        }
    };

    return (
        <div className={styles.container}>
            <PhotoModalCloseButton/>
            <div className={styles.imageZone}>
                <img src={photo.link} alt={photo.Post?.content}/>
                <div className={styles.image} style={{backgroundImage: `url(${photo.link})`}}/>
                <div className={styles.buttonZone}>
                    <div className={styles.buttonInner}>
                        <ActionButtons white/>
                    </div>
                </div>
            </div>
            <div className={styles.commentZone}>
                <Post noImage/>
                <CommentForm/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};