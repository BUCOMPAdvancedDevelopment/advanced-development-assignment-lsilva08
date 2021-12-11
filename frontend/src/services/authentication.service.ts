import { SigninResponse } from "../contracts/authentication";

export const signin = async (email: string, password: string): Promise<SigninResponse> => {
    console.log(`Signin-in ${email} with password ${password}`)
    return {
        token: 'token',
        user: {
            email: 'email@email.com',
            id: 1,
            name: 'user',
            profile: 'admin'
        }
    }
}

export const signup = async (name: string, email: string, password: string): Promise<SigninResponse> => {
    //do register, and with the response payload send the user to signin
    //const response = api.signup(name, email, password, profile);
    return signin(email, password);
}