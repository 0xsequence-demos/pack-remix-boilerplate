import type { ActionFunctionArgs } from "@remix-run/cloudflare"; // or cloudflare/deno
import { json, redirect } from "@remix-run/cloudflare"; // or cloudflare/deno
import { Form } from "@remix-run/react";

export default function Signup() {
  // omitted for brevity
}
//
// export const action = serverOnly$(async (req) => {
//   const env = req.context.cloudflare.env;
//   const formData = await req.request.formData();
//   const walletAddress = formData.get("walletAddress");
//   const network = findSupportedNetwork(env.CHAIN_HANDLE)!;
//   const relayerUrl = `https://${env.CHAIN_HANDLE}-relayer.sequence.app`;
//
//   const settings: Partial<SessionSettings> = {
//     /* starthide */
//     networks: [
//       {
//         ...networks[network.chainId],
//         rpcUrl: network.rpcUrl,
//         relayer: {
//           url: relayerUrl,
//           provider: {
//             url: network.rpcUrl,
//           },
//         },
//       },
//     ],
//     /* endhide */
//   };
//
//   const session = await Session.singleSigner({
//     settings: settings,
//     signer: env.PKEY,
//     projectAccessKey: env.BUILDER_PROJECT_ACCESS_KEY,
//   });
//
//   const signer = session.account.getSigner(network.chainId);
//   const collectibleInterface = new ethers.Interface([
//     "function mint(address to, uint256 tokenId, uint256 amount, bytes data)",
//   ]);
//   const dataArgs = [walletAddress, 7, 1, "0x00"];
//   const data = collectibleInterface.encodeFunctionData("mint", dataArgs);
//   return await signer.sendTransaction({
//     to: env.DEMO_ITEMS_CONTRACT_ADDRESS,
//     data,
//   });
// });

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  console.log({ formData });
  // const email = String(formData.get("email"));
  // const password = String(formData.get("password"));
  //
  // const errors = {};
  //
  // if (!email.includes("@")) {
  //   errors.email = "Invalid email address";
  // }
  //
  // if (password.length < 12) {
  //   errors.password = "Password should be at least 12 characters";
  // }

  // Redirect to dashboard if validation is successful
  return redirect("/dashboard");
}
