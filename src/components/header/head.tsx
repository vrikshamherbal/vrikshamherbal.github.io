import styles from "./head.module.scss";

export default function Header() {
    return (<>
        <div className={`navbar navbar-default navbar-static-top ${styles['header-component']}`}>
            <div className={'container'}>
                <div className={'navbar-header'}>

                    <a className={`navbar-brand ${styles.logo}`} href="index.html"><img src="img/logo.jpeg" alt="logo" /><h3>VRIKSHAM</h3></a>
                </div>
                <div className={`navbar-collapse collapse ${styles["header-navbar"]}`}>
                    <ul className={`nav navbar-nav ${styles["header-nav"]}`}>
                        <li className={styles.active}><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}