# 株式会社ZAICO Webフロントエンドエンジニアコーディングテスト

## 概要

本プロジェクトは株式会社ZAICO（以下弊社）が、弊社に Webフロントエンドエンジニアを希望する方に出す課題のベースプロジェクトです。 下記の概要を詳しく読んだ上で課題を取り組んでください。

## Webアプリ仕様

zaico API を利用して、在庫情報を取得・表示と作成をするWebアプリです。

### zaico APIの仕様と使い方

API 仕様は以下の通りです。

[zaico API Document](https://zaicodev.github.io/zaico_api_doc/)

zaicoのAPIを利用するためzaicoのアカウントを登録し、APIトークンを取得して使用してください。

[API利用に関するドキュメント](https://support.zaico.co.jp/hc/ja/articles/4406632009625-zaico-API%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E5%9C%A8%E5%BA%AB%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E6%93%8D%E4%BD%9C%E3%81%99%E3%82%8B)

Webアプリで動作確認をスムーズに行えるように、まずはzaicoから在庫登録してデータを作成してください。

[在庫登録のドキュメント](https://support.zaico.co.jp/hc/ja/articles/9425011130265--WEB-%E5%9C%A8%E5%BA%AB%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B)

※ ライブラリの利用はオープンソースのものに限ります。  
※ 環境は適宜更新してください。

### Webアプリの動作

1. 登録されている在庫一覧の表示
2. 在庫詳細データの表示

## 課題取り組み方法

Issues を確認した上、本プロジェクトを [**Duplicate** してください](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)（Fork しないようにしてください。必要ならプライベートリポジトリにしても大丈夫です）。今後のコミットは全てご自身のリポジトリで行ってください。

次の選考を開始する前までに [`課題`](https://github.com/zaicodev/zaico_webfrontend_codingtest/issues/1) を確認・対応し、出来た所までで問題ありませんので、リポジトリのアドレスをご連絡ください。

## 環境構築

```sh
npm install
```

### 開発サーバの起動

```sh
npm run dev
```

### 単体テストの実行 （[Vitest](https://vitest.dev/)）

```sh
npm run test:unit
```
