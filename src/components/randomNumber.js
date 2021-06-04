const randomNumber =  (max,min) => {
    return (Math.floor(Math.random() * (max - 1 + min)) + min)
}

export default randomNumber