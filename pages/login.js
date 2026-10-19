const login = `
  <section class="page-banner">
    <p class="eyebrow">WELCOME BACK</p>
    <h1>Login</h1>
    <p>Sign in to your Summit Ridge Outfitters account.</p>
  </section>

  <section class="login-section">
    <div class="login-box">
      <div class="image-placeholder login-image">
        <p>Login Banner Image</p>
      </div>

      <h2>Welcome Back</h2>
      <p>Enter your information to sign in.</p>

      <form>
        <label for="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          placeholder="Enter your email"
        />

        <label for="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          placeholder="Enter your password"
        />

        <button type="button" class="button button-orange">
          Sign In
        </button>

        <p class="login-note">New here? Create an account to get started.</p>
      </form>
    </div>
  </section>
`;

export default login;
