
const loginLogoutHandler = (isAuthenticated: boolean, router: any, setData: any) => {
    if (isAuthenticated) {
        router.push("/categories")
    } else {
        setData({})
        router.push("/login")
    }
}
export default loginLogoutHandler