const AUTH_KEY = "career_admin_logged_in";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

export function login(username, password) {
    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {
        localStorage.setItem(AUTH_KEY, "true");
        return true;
    }

    return false;
}

export function logout() {
    localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === "true";
}