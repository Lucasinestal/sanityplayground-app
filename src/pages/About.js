import React from "react";
import sanityClient from "./../client";

export default function About() {
  const [page, setPageData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(
        `*[_type == "page" && slug.current == "about"]{
      title,
    }`
      )
      .then((data) => {
        setPageData(data[0]);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  console.log(page);

  return (
    <>
      {loading && <div>loading...</div>}
      {!loading && <div>{page?.title}</div>}
    </>
  );
}
