import { fetchuser } from "../components/utils/fetchlocalstorage"


const userinfo = fetchuser();

export const initialstate = {
    user: userinfo,
}