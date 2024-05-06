---
title: Scratch Cloud Logs
date: 2024/5/06
description: ScratchCloudLogs ページについてはこちらをご覧ください。
tag: scratch, cloud, log, nodejs
author: Fun117
---

# Scratch Cloud Logs

このプロジェクトはScratch Cloud APIを使用してクラウド変数の変更をロギングするためのNode.jsスクリプトです。

## 概要

このスクリプトは、Scratchのプロジェクトに接続し、クラウド変数の変更をリアルタイムでキャッチしてログに記録します。ログは`cloud.log`ファイルに保存されます。

## 前提条件

- Node.jsがインストールされていること
- `config.js` ファイルにプロジェクトIDが設定されていること

## インストール

```bash
git clone https://github.com/Fun117/scratch-cloud-logs.git
```

```bash
npm install
```

## 構成

### `config.js` ファイルにプロジェクトIDを設定します。
```js filename="example.js"
module.exports = {
    projectId: 'your_project_id_here'
};
```

## 使用方法

### スクリプトを実行します。
```bash
npm start
```

### ログファイル

ログは `cloud.log` ファイルに保存されます。このファイルはGitリポジトリには含まれません。

## 注意事項

このスクリプトはScratchのAPIを使用しているため、Scratchの利用規約に従って使用してください。

## アドオン

### Scratch Building

ビル経営ゲームのクラウドデータ通信の監視を簡単にするために作成されたアドオンです。

#### ログ

クラウドデータの通信を確認することができます。現在、本人確認機能はチャットの通信にのみ対応しています。

ログ：`logs/scratch-building.log`
チャットログ：`logs/scratch-building-chat.log`,

```bash
node addons/scratch-building/logs.js
```

#### チャット

ユーザー名を指定してチャットをすることができます。ゲーム内では送信者を偽造することが可能ですが、API通信を監視することで送信者が本人であるかどうかを特定できます。そのため、この機能の使用は推奨されません。この機能を使用してゲームのプレイに支障が出た場合、責任を負いかねます。

```bash
node addons/scratch-building/chat.js <username>
```

### ログのカスタマイズ

設定ファイル `addons/scratch-building/_config.js` で設定されている `LogFormat` をカスタマイズすることで表示を自由に調整できます。

- **LogFormat**：サーバーに出力する標準ログのフォーマットです。色を含むログの設定を行います。
- **LogFormatWarn**：サーバーに出力する警告ログのフォーマットです。警告レベルのログの設定を行います。
- **LogFormat_noColor**：色なしのログのフォーマットです。色を除いたログの設定を行います。

これらの設定を使用して、ログの内容や表示形式を独自にカスタマイズすることが可能です。