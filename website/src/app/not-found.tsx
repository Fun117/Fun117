"use client";

import Error from "next/error";

export default function NotFoundPage() {
  return (
    <html>
      <head>
        <title>404</title>
      </head>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
