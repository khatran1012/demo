const isAuth = () => {
    const tokenAuth = localStorage.getItem('tokenAuth')
    return !!tokenAuth
}

export {
    isAuth
}