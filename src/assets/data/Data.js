
const initialDataUsers = [
    {
        name: "user",
        email: "user@gmail.com",
        password: "123456789",
        phone:"01026049630",
        isLogged:false,
    }
];

export const initializeLocalStorage = () => {
    let storedUsers = JSON.parse(localStorage.getItem("dataUsers"));
    if (!storedUsers) {
        localStorage.setItem("dataUsers", JSON.stringify(initialDataUsers));
        storedUsers = initialDataUsers;
    }
    return storedUsers;
};