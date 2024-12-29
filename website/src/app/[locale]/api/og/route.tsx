import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { getLocale, getTranslations } from "next-intl/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const locale = getLocale();
  const t = await getTranslations({
    locale,
    namespace: "",
  });

  let response;

  const searchParams = request.nextUrl.searchParams;

  const theme = searchParams.get("theme") || "iconAndTitle";

  const title = `${
    searchParams.get("title")
      ? t.has(`${searchParams.get("title")}`)
        ? t(`${searchParams.get("title")}`)
        : searchParams.get("title")
      : t("metadata.title")
  }`;
  const description = `${
    searchParams.get("description")
      ? t.has(`${searchParams.get("description")}`)
        ? t(`${searchParams.get("description")}`)
        : searchParams.get("description")
      : t("metadata.description")
  }`;

  function ThemeContent({
    theme,
    title,
    description,
  }: {
    theme: string;
    title: string;
    description: string;
  }) {
    if (theme === "mainTitleMinIcon" || description) {
      return (
        <div tw="flex flex-col justify-center items-start w-full h-full text-left px-[120px] py-[100px]">
          <div tw="flex justify-center items-center">
            <img
              width={50}
              height={50}
              src="https://toakiryu.com/wp-content/toakiryu/icon.png"
              tw="mr-5 rounded-full border"
            />
            <span
              tw="text-white"
              style={{
                fontSize: 20,
                fontStyle: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {t("metadata.title")}
            </span>
          </div>
          <div tw="flex flex-col text-white w-full mt-auto">
            <h1
              style={{
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </h1>
            <p
              tw="text-white/80"
              style={{
                fontSize: 25,
                fontStyle: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {description},
              Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,Apple,
            </p>
          </div>
        </div>
      );
    }

    return (
      <div tw="flex justify-center items-center px-[120px] py-[100px]">
        <img
          width={100}
          height={100}
          src="https://toakiryu.com/wp-content/toakiryu/icon.png"
          tw="mr-10 rounded-full border"
        />
        <h1
          tw="text-white"
          style={{
            fontSize: 40,
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: 1.3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h1>
      </div>
    );
  }

  try {
    response = new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              "url(http://localhost:3000/wp-content/upload/sl_0210121_40570_31.jpg)",
            backgroundColor: "#fff",
            backgroundSize: "100% 100%",
          }}
          tw="flex flex-col justify-center  w-full h-full"
        >
          <ThemeContent theme={theme} title={title} description={description} />
        </div>
      ),
      {
        status: 200,
        width: 1200,
        height: 630,
      }
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to generate OG image", error: error },
      { status: 500 }
    );
  }
}
