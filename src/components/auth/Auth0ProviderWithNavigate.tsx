import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = "https://ecomJNP-mswat5s-projects.vercel.app/";

  if (!domain || !clientId || !redirectUri) {
    console.error("unable to initialise auth", {
      domain,
      clientId,
      redirectUri,
    });
    throw new Error("unable to initialise auth");
  }

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || "/shop/home");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
