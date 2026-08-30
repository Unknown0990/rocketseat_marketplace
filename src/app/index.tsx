import { useUserStore } from "@/shared/store/user-store";
import { Redirect } from "expo-router";

export default function App(){
    const { user, token } = useUserStore()

    // const userData = {
    //     token: "8127745683764",
    //     name: "Username",
    // }

    if(user && token) return <Redirect href="/(private)/home" />

    return(
        <Redirect href="/(public)/login" />
    )
}