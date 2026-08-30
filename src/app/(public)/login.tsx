import { LoginView } from "@/viewModels/Login/login.view";
import { useLoginViewModel } from "@/viewModels/Login/useLogin.viewModel";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Login(){
    const props = useLoginViewModel()

    return <LoginView {...props} />
}