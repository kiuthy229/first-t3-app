/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import { env } from "./src/env.mjs";


/** @type {import("next").NextConfig} */

const publicRuntimeConfig = {
  NODE_ENV: env.NODE_ENV,
  NEXTAUTH_URL: env.NEXTAUTH_URL,
  DISCORD_CLIENT_SECRET: env.DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_ID: env.DISCORD_CLIENT_ID
}

const config = {
  reactStrictMode: true,
  images: { domains: ["cdn.discordapp.com"] },

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;