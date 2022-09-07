


export const getConfig = () => {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'))
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        return config;
    }
    return null;
}