// resources.ts
const resources = {
    en: {
        translation: {
            en: 'English',
            vi: 'Vietnamese',
            login: "Log In",
            password: 'Password',
            fgPw: 'Forget Password',
            noAccount: `Don't have an account`,
            signup: 'Sign Up',
            loginOtherWay: 'Or Log in with',
            loginWith: 'Log in with',
        },
    },
    vi: {
        translation: {
            en: 'Tiếng Anh',
            vi: 'Tiếng Việt',
            login: "Đăng nhập",
            password: 'Mật khẩu',
            fgPw: 'Quên mật khẩu',
            noAccount: `Chưa có tài khoản`,
            signup: 'Đăng ký',
            loginOtherWay: 'Hoặc là đăng nhập với',
            loginWith: 'Đăng nhập với'
        },
    },
};

const resourcesList = [
    { label: 'English', value: 'en' },
    { label: 'Vietnamese', value: 'vi' },
];

export { resources, resourcesList };
