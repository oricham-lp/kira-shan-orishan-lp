# きら☆シャン オリシャンLP 設置ガイド

白・アイボリー・シャンパンゴールドを基調にした、スマートフォン優先のオリシャンLPです。すべての見出し、説明文、ボタンはHTMLなので、WordPress上で編集できます。

## ファイル構成

```text
kira-shan-orishan-lp/
├─ .nojekyll                   GitHub Pages用設定
├─ index.html                  単体で確認できるページ
├─ style.css                   LP専用スタイル
├─ script.js                   フェードイン演出
├─ wordpress-snippet.html      カスタムHTML用の一体型コード
└─ assets/
   └─ images/
      ├─ kira-shan-hero-v4.png
      ├─ kira-shan-products-v5.png
      └─ kira-shan-keyholder-v4.png
```

## まずパソコンで確認する

`index.html` をダブルクリックするとブラウザで表示できます。インターネット接続や開発用サーバーは不要です。

## GitHub Pagesで公開する

このフォルダは、そのままGitHub Pagesへ公開できます。GitHubリポジトリの`main`ブランチ直下を公開元に設定してください。

公開後のURL例：

```text
https://oricham-lp.github.io/kira-shan-orishan-lp/
```

## WordPressへ設置する方法

### 1. 画像をアップロードする

FTPまたはサーバーのファイルマネージャーで、次のフォルダをWordPressへアップロードします。

```text
wp-content/uploads/kira-shan-orishan-lp/assets/images/
```

アップロード後、以下のURLで画像が表示されることを確認してください。

```text
https://あなたのドメイン/wp-content/uploads/kira-shan-orishan-lp/assets/images/kira-shan-hero-v4.png
https://あなたのドメイン/wp-content/uploads/kira-shan-orishan-lp/assets/images/kira-shan-products-v5.png
https://あなたのドメイン/wp-content/uploads/kira-shan-orishan-lp/assets/images/kira-shan-keyholder-v4.png
```

### 2. 固定ページを作る

1. WordPress管理画面で「固定ページ」→「新規固定ページを追加」を開きます。
2. ページタイトルに「オリシャン」などを入力します。
3. 「＋」から「カスタムHTML」ブロックを追加します。
4. `wordpress-snippet.html` の内容をすべて貼り付けます。
5. 「プレビュー」で表示を確認してから公開します。

テーマ側の余白が残る場合は、固定ページのテンプレートを「全幅」または「フルワイド」に変更してください。テーマによって名称は異なります。

## 画像URLを変更する場合

画像を別の場所へアップロードした場合は、`wordpress-snippet.html` 内の次の文字列を検索し、実際のURLへ置き換えてください。

```text
/wp-content/uploads/kira-shan-orishan-lp/assets/images/
```

## 文言やリンクを変更する

CTAボタンはすべて以下へリンクしています。

```text
https://oricham.net/
```

リンク先を変える場合は、`wordpress-snippet.html` 内のこのURLを一括置換します。文章はHTML内の日本語を直接編集できます。

## WordPressでJavaScriptが消える場合

WordPressのユーザー権限やセキュリティ設定によっては、カスタムHTML内の`script`タグが保存時に削除される場合があります。その場合もページ内容と固定注文ボタンは動作し、各セクションは最初から表示されます。フェードイン演出も使いたい場合は、管理者権限で保存するか、テーマのカスタムJavaScript欄へ`script`タグ内のコードだけを追加してください。

## 公開前チェック

- 画像3点が表示されている
- スマートフォンで横スクロールがない
- 画面下の注文ボタンが本文を隠していない
- すべての「オリシャンを注文する」が `https://oricham.net/` を開く
- 固定ページが全幅表示になっている
- 店舗情報、価格、注意事項など必要な情報を追記した

## 画像について

同梱画像は、このLP用に生成したオリジナルのイメージ素材です。ボトルラベル内の作例表記を除き、ページの見出し、説明文、CTAは編集可能なHTMLで実装しています。
