export type UserAuth = { email: string; password: string };

export type UserPassWordReset = { email: string; redirect_url?: string };

export type UserSetPassword = { token: string; secret: string; password: string; password_confirm: string };
