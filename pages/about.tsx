import styles from "../styles/About.module.scss";

const AboutPage: React.FC = () => (
    <div className={styles.container}>
        <div className={styles.left}>
            <img src="/images/pegz/pegz.jpg" alt="About Pegz" />
        </div>
        <div className={styles.right}>
            <h2>About</h2>
            <div>
                <p>
                PEGZ is a series of 100 unique collectables, each one of a kind and drawn digitally by Matt Furie. Every Peg character is a member of a family, one of 10 types, including "Pepe" who is present here in the rarest of forms. 
                </p>
                <p>
                Matt's vast world of characters come to life in the form of collectable/tradable files, each with a 2D avatar .PNG file, a 3D .GLB coin file, and an animated .GIF file. 
                </p>
                <p>
                The PEGZ project came about as Matt focused on digitally created work, and provides a unique opportunity for collectors to get into his vast universe of bizarre mutants and characters, the same universe that single-handledly spawned the most iconic internet creature of all time, Pepe the Frog.
                </p>
                <p>
                    -
                </p>
                <p> 
                Welcome to pegz.fun! I've been mining my brains out to bring you these seeds of the metaverse. May the faces of these new mutants bring you joy, good luck, and good fortune from the digital dreamscape.
                </p>
                <p>
                Peace, Love Unity, Respect,
                </p>
                <p>
                Matt Furie    
                </p>

            </div>
        </div>
    </div>
);

export default AboutPage;
