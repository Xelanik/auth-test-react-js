import axios from "./axios";

import type { UserAuth, UserPassWordReset, UserSetPassword } from "../types/auth.types";

const login = (user: UserAuth) => axios.post("/login", user);

const resetPassword = (user: UserPassWordReset) => axios.post("/password-reset", user);

const setPassword = (user: UserSetPassword) => axios.post("/password-set", user);

export const userService = { login, resetPassword, setPassword };
