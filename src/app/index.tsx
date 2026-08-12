import { Redirect } from "expo-router";

export default function App(){
    const userData = false

    // const userData = {
    //     token: "8127745683764",
    //     name: "Username",
    // }

    if(userData) return <Redirect href="/(private)/home" />

    return(
        <Redirect href="/login" />
    )
}