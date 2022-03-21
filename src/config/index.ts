export const auth0config: {
  "client_id": string;
  "domain": string;
  "redirect_uri": string;
} =
  {
    "client_id": process.env.AUTH0_CLIENT_ID || "",
    "domain": process.env.AUTH0_DOMAIN || "",
    "redirect_uri": process.env.AUTH0_REDIRECT_URI || "",
  };

