
const loginLogoutHandler = (isLoggedIn: boolean, router: any) => {
    if (isLoggedIn) {
        localStorage.removeItem("authToken")
        localStorage.removeItem("userInfo")
        router.push("/login")
    } else {
        router.push("/login")
    }
}
export default loginLogoutHandler