import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [{ title: "Sequence Pack Contract Demo" }];
};

export default function Index() {
  return <div className="flex h-screen items-center justify-center">HERE</div>;
}
