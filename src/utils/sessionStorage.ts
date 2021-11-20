export function setItem(token:string){
    sessionStorage.setItem("token", token);
}

export function getItem(name:string):any{
    return sessionStorage.getItem(name)
}

export function clearSessionStorage(){
    sessionStorage.clear()
}