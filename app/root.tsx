import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getDefaultWaasConnectors, KitProvider } from "@0xsequence/kit";
import { ThemeProvider } from "@0xsequence/design-system";
import { KitCheckoutProvider } from "@0xsequence/kit-checkout";
import { ChainId } from "@0xsequence/network";
import { SequenceBoilerplate } from "boilerplate-design-system";

import {
  createConfig,
  http,
  useAccount,
  useDisconnect,
  useSwitchChain,
  WagmiProvider,
} from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Chain, Transport } from "viem";

import "./tailwind.css";

export const defaultChainId = ChainId.ARBITRUM_SEPOLIA;

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const queryClient = new QueryClient();

export const config = createConfig({
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http(),
  },
});

export default function App() {
  const balance = 0;

  return (
    <SequenceBoilerplate
      githubUrl="https://github.com/0xsequence-demos/primary-sale-1155-boilerplate/"
      name="ERC 1155 Pack Boilerplate"
      description="Example of how to perform sales of 1155 NFT Pack using Sequence."
      docsUrl="https://docs.sequence.xyz/"
      wagmi={{ useAccount, useDisconnect, useSwitchChain }}
      faucetUrl="https://faucet.circle.com/"
      balance={balance ? `$${balance}` : false}
    >
      <Outlet />
    </SequenceBoilerplate>
  );
}

export function Layout() {
  const projectAccessKey = import.meta.env.VITE_PROJECT_ACCESS_KEY;
  const waasConfigKey = import.meta.env.VITE_WAAS_CONFIG_KEY;
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const appleClientId = import.meta.env.VITE_APPLE_CLIENT_ID;
  // const appleRedirectURI = window.location.origin + window.location.pathname;
  const walletConnectId = import.meta.env.VITE_WALLET_CONNECT_ID;

  console.log({
    projectAccessKey,
    waasConfigKey,
    googleClientId,
    appleClientId,
    walletConnectId,
  });

  const kitConfig = { projectAccessKey };

  // const connectors = getDefaultWaasConnectors({
  //   walletConnectProjectId: walletConnectId,
  //   waasConfigKey,
  //   googleClientId,
  //   // Notice: Apple Login only works if deployed on https (to support Apple redirects)
  //   appleClientId,
  //   appleRedirectURI,
  //   defaultChainId,
  //   appName: "Kit Starter",
  //   projectAccessKey,
  // });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <ThemeProvider theme="dark">
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <KitProvider config={kitConfig}>
                {/* <KitCheckoutProvider> */}
                {/* <Toaster /> */}
                <App />
                {/* </KitCheckoutProvider> */}
              </KitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
