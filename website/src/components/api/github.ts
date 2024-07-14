"use server";

import config from "../../../richtpl.config";

const user = config.organizationName;

async function FetchData() {
  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();
  return data;
}

// 全てのデータを返す
export async function GetAllData() {
  const res = await FetchData();
  return res;
}

// データを返す
export async function GetData(type: string) {
  const res = await FetchData();
  return res[type];
}

// フォロワー数を返す
export async function GetFollowerCount() {
  const res = await FetchData();
  return res.followers;
}

// パブリックリポジトリ数を返す
export async function GetPublic_repos() {
  const res = await FetchData();
  return res.followers;
}
