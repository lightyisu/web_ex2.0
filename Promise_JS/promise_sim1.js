function timeout(ms){
    return new Promise((resolve,reject)=>{
        
        setTimeout(reject,ms,'2020 happy chinese new year');
    });
}

timeout(200).catch((error)=>{
    console.error(error);
})