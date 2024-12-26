"use client";

import { Spinner } from "@nextui-org/react";

export default function NotFoundPage() {

  return (
    <html>
      <body>
        <div className="flex justify-center items-center w-full h-dvh">
          <div className="flex justify-center items-center">
            <Spinner size="sm" className="mr-2" />
            <h1>Redirect...</h1>
          </div>
        </div>
      </body>
    </html>
  );
}
