import { Helmet } from "react-helmet-async";

type ReactHelmet = {
  title: string;
  description: string;
  keywords: string;
};

export default function ReactHelmet({
  title,
  description,
  keywords,
}: ReactHelmet) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}
