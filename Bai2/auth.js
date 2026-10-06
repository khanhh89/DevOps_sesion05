function authenticate(user, password) { return user && password; }

function login(user) { return authenticate(user, user.password); }

function validateUser(user) { return !!user; }
