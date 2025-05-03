import magic from "./magic";

const isLogged = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if(isLogged){
    console.log("User is logged in: ", isLoggedIn);
}
    else{
    console.log("User is not logged in: ", isLoggedIn);}
    
    return isLoggedIn;
}

export default isLogged;