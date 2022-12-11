import styles from './textwithcta.module.scss';

export default function Textwitcta({ title, body }) {

    return (<>
        <div className={`${styles['text-with-cta-container']} container`}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }}>

            </div>
        </div>
    </>);
}