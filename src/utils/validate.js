export const checkValidate = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === null && password === null) {
    return "Login details required!";
  } else if (email !== null && !emailRegex.test(email)) {
    return "Email is Ivalid";
  } else if (password !== null && password.length <= 3) {
    return "Password is Ivalid";
  } else {
    return null;
  }
};
