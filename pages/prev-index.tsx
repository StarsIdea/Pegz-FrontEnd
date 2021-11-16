import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Index.module.scss";
import {
    API_URL,
    AVAILABLE_TOKENS_QUERY,
    SOLD_TOKENS_IN_HOME,
    SOLD_TOKENS_QUERY,
    TOKENS_IN_HOME,
    UPCOMING_TOKENS_QUERY,
    UPCOMING_TOKENS_IN_HOME,
} from "../utils/constants";
import { NFT, Slide } from "../types";
import Auctions from "../components/Auctions";
import ActiveAuctions from "../components/ActiveAuctions";
import Slider from "../components/Slider";
import HeadWithImage from "../components/HeadWithImage";
// index page start
export const Home: React.FC<{
    assets: NFT[];
    sold: NFT[];
    upcoming: NFT[];
    slides: Slide[];
}> = ({ assets, slides, sold, upcoming }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chainsaw NFT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.auctionSection}>
                <HeadWithImage />
                <Slider slides={slides} />
                {assets?.length > 0 && (
                    <ActiveAuctions assets={assets} link="/auctions/0" />
                )}
                {sold?.length > 2 && (
                    <Auctions assets={sold} title="Sold" link="/sold/0" />
                )}
                {upcoming?.length > 0 && (
                    <Auctions
                        assets={upcoming}
                        title="Upcoming"
                        link="/upcoming/0"
                    />
                )}
            </section>
            <section className={styles.rightSection}>
                <div className={styles.logomovie}>
                    <div className={styles.logomovieItem}>
                        <iframe src="https://streamable.com/e/6l7pv5?autoplay=1&nocontrols=1" width="100%" height="100%" allow="autoplay" className={styles.logomovieIframe} />
                    </div>
                </div>
                <div className={styles.centerItem}>
                    <img src="/images/pegz/bymattfurie.png" width="68%" />
                </div>
                <div className={styles.centerItem}>
                    <img src="/images/pegz/parameterz.png" width="45%" />
                </div>
                <div className={styles.centerItem}>
                    <img src="/images/pegz/signup.png" width="45%" />
                </div>
            
                <div className={styles.mcEmbedSignup}>
                    <form action="https://fun.us1.list-manage.com/subscribe/post?u=fd780084ff583a4d5cd703a23&amp;id=8f68958589" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className={styles.centerItem} target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" /> <br />
                            <div className={styles.mcEmbedSignupScrollItem}>
                                <input type="text" name="b_fd780084ff583a4d5cd703a23_8f68958589" />
                            </div>
                            <br />
                            <div><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></div>
                            <br />
                        </div>
                    </form>
                </div>
                <div className={styles.centerItem}>
                    <img src="/images/pegz/nevermiss3.png" width="45%" />
                </div>

                <div className={styles.social}>
                    <div className="divsocial"> <a href="https://twitter.com/matt_furie"> <img id="imgsocial" src="/images/pegz/mtwitter.png" /></a></div>
                    <div className="divsocial"> <a href="https://www.instagram.com/pegzpegzpegz/"> <img id="imgsocial" src="/images/pegz/mig.png" /></a></div>
                    <div className="divsocial"> <a href="https://discord.com/invite/aXQqKxKggh"> <img id="imgsocial" src="/images/pegz/mdiscord.png" /></a></div>
                </div>
                <p className={styles.socialTextContent}> @ 2021 PEGZ | <a href="https://www.mattfurie.com/">MATT FURIE</a> | <a href="https://www.chainsaw.fun/">CHAIN/SAW</a></p>
                <br />
                <br />

                <div className={styles.centerItem}>
                    <img src="/images/pegz/fuckyeah.png" width="78%" />
                </div>
            </section>
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    /** Get tokens with auctions */
    const availableTokenRes = await fetch(
        `${API_URL}/tokens?_limit=${TOKENS_IN_HOME}&${AVAILABLE_TOKENS_QUERY}`,
    );
    const availableTokens = await availableTokenRes.json();
    /** Get tokens sold */
    const soldTokensRes = await fetch(
        `${API_URL}/tokens?_limit=${SOLD_TOKENS_IN_HOME}&${SOLD_TOKENS_QUERY}`,
    );
    const sold = await soldTokensRes.json();

    /** Get tokens not on sale and not sold */
    const upcomingTokensRes = await fetch(
        `${API_URL}/tokens?_limit=${UPCOMING_TOKENS_IN_HOME}&${UPCOMING_TOKENS_QUERY}`,
    );
    const upcoming = await upcomingTokensRes.json();

    /** Get slides */
    let slides = [];
    try {
        const slidesRes = await fetch(`${API_URL}/slider`);
        const sliderData = await slidesRes.json();
        slides = sliderData.slides as Slide[];
    } catch (err) {
        console.log("Exception in loading slides, defaulting to empty list");
    }

    return {
        props: {
            assets: availableTokens,
            sold,
            upcoming,
            slides,
        },
    };
}
