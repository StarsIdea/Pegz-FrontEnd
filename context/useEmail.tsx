import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
} from "react";
import { API_URL } from "../utils/constants";
// import { Profile } from "../types";

// type useEmailData = {
//     profiles: Profile[];
// };

// const useEmail = createContext<useEmailData>({
//     profiles: [],
// });
// export default useEmail;

export const checkEmail = (address: String) => {
    const [email, setEmail ] = useState(null);
    const [id, setId] = useState(null);
    const fetchEmail = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/checkemail/${address}`, {
                method: "GET",
            });
            const data = await res.json();
            setEmail(data.email);
            setId(data.id);
            if (data.error) {
                return null;
            }
        } catch (err) {
            console.log("Exception in fetch asset", err);
        }
    },[address]);
    // 
    useEffect(() => {
        fetchEmail();
    }, [fetchEmail]);

    return { id, email};
};

export const saveEmail = async (id: String, email: String) => {
    // const [user, setUser ] = useState(null);
    const fetchUser = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/updateEmail/${id}/${email}`, {
                method: "GET",
            });
            const data = await res.json();
            // setUser(data);
            if (data.error) {
                return null;
            }
        } catch (err) {
            console.log("Exception in fetch asset", err);
        }
    },[id, email]);
    // 
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return;
};
