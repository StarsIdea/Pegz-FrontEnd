import Link from "next/link";
import Signup from "../components/Signup";
import { FormEvent, useState, useCallback } from "react";
import Modal from "../components/Modal";
import { useAllowance } from "../context/BalanceContext";
import { useProfile } from "../context/ProfileContext";
import { useUser } from "../context/UserContext";
import { checkEmail,saveEmail } from "../context/useEmail";
import styles from "../styles/landing.module.scss";

const LoginPage: React.FC = () => {
    const [val, setVal] = useState('');
    const user = useUser();
    const profile = useProfile();
    const allowance = useAllowance();
    const address = user ? user.address : 'undefined';
    console.log(address);
    const {id, email} = checkEmail(address);
    console.log(email);
    // const email = useCallback(async () => {
    //     try {
    //       const email = await checkEmail(address)
    //       return email
    //     } catch (e) {
    //       return false
    //     }
    //   }, [address])
    const regex = RegExp('\S+@\S+\.\S+');
    
    const onClose = function () { return null };
    const onChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
          setVal(e.currentTarget.value)
        },
        [setVal],
      )
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(val);
        saveEmail(id, val);
    }
    // const emailForRegexp = email ? email : '';
    const [ modalView, setModalView ] = useState(!regex.test(email) ? true : false);
    if (user) {
        return (
            <div className={styles.container}>
                {modalView && (
                    <Modal handleClose={onClose}>
                        <p>Please input Email.</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                onChange={onChange}
                            />
                            <div className={styles.buttonContainer}>
                                <button type="submit">
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </Modal>
                )}
                <h2>Your are logged in</h2>

                <div>
                    {!profile && (
                        <Link href="/onboarding/username">
                            <a>Add a username</a>
                        </Link>
                    )}
                    {!allowance && (
                        <p>
                            It seems like you didn&rsquo;t give approval to the
                            router, you can do that when you place your first
                            bid
                        </p>
                    )}
                </div>

                <Link href="/">
                    <button className={styles.enterButton}>
                        ENTER CHAINSAW
                    </button>
                </Link>
                <Link href="/settings">
                    <a>Change Settings</a>
                </Link>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <Signup />
        </div>
    );
};

export default LoginPage;
