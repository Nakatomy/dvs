import Image from "next/image";
import { useRouter } from "next/router";
import { Heading, Paragraph } from "components";

const DvsCom = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const link = searchParams.get("url");

  if (!link) return null;

  const linkURL = new URL(link);
  const title = searchParams.get("title");

  return (
    <>
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#fff",
          color: "#000",
          border: "#001540 16px solid",
        }}
      >
        <Heading>{title}</Heading>
        <Paragraph>DigitalVaultServices.com</Paragraph>
        <span>{linkURL.pathname}</span>
      </div>
    </>
  );
};
export default DvsCom
