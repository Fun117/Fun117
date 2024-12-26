"use client";

import { useParams, useRouter } from "next/navigation";
import config from "../../richtpl.config";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    // rest を文字列に変換
    const restPath = Array.isArray(params.rest)
      ? params.rest.join("/") // 配列の場合はスラッシュで結合
      : params.rest || ""; // 文字列の場合はそのまま、undefined の場合は空文字

    const i18n_siteUrl = `/${config.i18n.defaultLocale}/${params.locale}/${restPath}`;

    router.replace(i18n_siteUrl);
  }, []);

  return null;
}
