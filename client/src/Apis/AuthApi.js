import { AxiosConfig } from "./AxiosConfig";

export const AuthApi = {
    login: async (body) => {
        return AxiosConfig.post("/auth/login", body)
    }
};
