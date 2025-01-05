export const CheckValidate = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    // const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isPasswordValid = true;
    const isNameValid = name ? /^[A-ZÀ-ÿ][a-zÀ-ÿ'.,\- ]{1,}(\s[A-ZÀ-ÿ][a-zÀ-ÿ'.,\- ]{1,})*$/.test(name) : true;

    if (name && !isNameValid) return "Name is not valid";
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
};
