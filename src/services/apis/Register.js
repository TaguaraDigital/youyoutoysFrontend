const RegisterFinder = {};
// const URL = "http://localhost:3500/api/v1/auth/"
const URL = "https://youyoutoysbackend.vercel.app/api/v1/auth/";

RegisterFinder.signup = async (user) => {
  const response = await fetch(URL + "register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  });
  return await response.json();
};

RegisterFinder.login = async (user) => {
  const response = await fetch(URL + "login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  });
  return await response.json();
};

RegisterFinder.verify = async (user) => {
  const response = await fetch(URL + "is-verify", {
    method: "GET",
    headers: { token: localStorage.token },
  });
  return await response.json();
};

export default RegisterFinder;
