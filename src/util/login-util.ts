export const tokenLoader = async () => {
    const response = await fetch("http://localhost:4040/token");
    // const responseData = await response
    localStorage.setItem("access-key", responseData.accessKey)
    console.log(responseData.accessKey)
    return responseData;
};