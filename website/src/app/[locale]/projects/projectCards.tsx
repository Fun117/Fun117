export const cards = [
  {
    title: "Scratch Status",
    description: "2024年12月20日 ~",
    src: "/wp-content/product/scratch-status.toakiryu.com.webp",
    ctaText: "Visit",
    ctaLink: "https://scratch-status.toakiryu.com",
    content: () => {
      return (
        <>
          <p>
            Scratchサービスの稼働状況をリアルタイムで監視し、稼働時間、バージョン、サーバー負荷、データベースの健康状態などの詳細なステータス情報を提供します。Scratchの主要なサービスとキャッシュ接続の状態を確認できます。
          </p>
          <p>
            制作経緯は、Scratch
            サービスが利用できない時に、サービスの稼働状況を把握したいと思ったからです。Scratch
            サービスが提供する API を利用し、ユーザーが分かりやすい UI
            で稼働状況を表示することを意識し制作しました。一定時間経つとステータスを再取得し、プログレスバーを使用して更新時間を表示するようにしました。
          </p>
          <p>制作期間: 約5時間</p>
        </>
      );
    },
  },
  {
    title: "GForm Quick Submit",
    description: "2024年 12月 17日 ~",
    src: "/wp-content/product/gform-quick-submit.toakiryu.com.webp",
    ctaText: "Visit",
    ctaLink: "https://gform-quick-submit.toakiryu.com",
    content: () => {
      return (
        <>
          <p>
            Google
            フォームにデータを素早く送信できるパッケージです。このツールを使えば、お問い合わせフォームなどを簡単にウェブサイトに統合できます。無料でGoogleフォームを利用可能なので、初心者の方にも最適です。
          </p>
          <p>
            制作経緯は、お問い合わせフォームをウェブサイトに実装したいと思ったことが始まりです。お問い合わせフォームなどを提供するサービスは多く存在しますが、制限や、カスタマイズがあまりできないなどの問題があります。そこで、Google
            Form 利用して無料でフォームを公開し、Google
            フォームが提供する、フォームレスポンスという送信機能を使ってフォームを外部から送信できるようにしました。
          </p>
          <p>
            しかし問題はまだあります。Google
            フォームには項目にエントリーIDが割り当てられており、項目に対応するID
            を取得する必要があり、そのIDがないとフォームを送信することができません。そこで、項目に対応するエントリーIDを検出する解析ツールも開発しました。
          </p>
          <p>制作期間: 約15時間</p>
        </>
      );
    },
  },
  {
    title: "Support Scripts",
    description: "2024年12月8日 ~ 2024年12月20日",
    src: "/wp-content/product/support-scripts.toakiryu.com.webp",
    ctaText: "Visit",
    ctaLink: "https://support-scripts.toakiryu.com",
    content: () => {
      return (
        <>
          <p>
            このプロジェクトは、Minecraftにおけるプレイヤーの位置情報などの情報を簡単に取得できるようにするデータパックです。
          </p>
          <p>
            このサイトを作成した経緯は、趣味で作っていた Minecraft
            のデータパックを配布しようと思ったのが始まりです。人気配布サイトに投稿するのは簡単だけど、不要な機能がたくさんあって面倒だったのもあるけど、自分が好きなデザインではなかったので、前回制作した
            クラフトリサイクルのサイトを使うことにしました。
          </p>
          <p>制作期間: 約5時間</p>
        </>
      );
    },
  },
  {
    title: "Craft Recycle",
    description: "2024年11月24日 ~ 2024年12月20日",
    src: "/wp-content/product/craftrecycle.toakiryu.com.webp",
    ctaText: "Visit",
    ctaLink: "https://craftrecycle.toakiryu.com",
    content: () => {
      return (
        <>
          <p>
            このプロジェクトは、Minecraftにおけるアイテムやブロックをリサイクル可能にするためのレシピを追加し、新たなクラフト体験を提供するデータパックです。
          </p>
          <hr />
          <p>
            このサイトを作成した経緯は、趣味で作っていた Minecraft
            のデータパックを配布しようと思ったのが始まりです。人気配布サイトに投稿するのは簡単だけど、不要な機能がたくさんあって面倒だったのもあるけど、自分が好きなデザインではなかったので、自分で配布サイトを作成することにしました。
          </p>
          <p>制作期間: 約5時間</p>
        </>
      );
    },
  },
  {
    title: "ぶいすぽDB",
    description: "2024年10月18日 ~ 2024年10月21日",
    src: "/wp-content/product/vspodb.vercel.app.webp",
    ctaText: "Visit",
    ctaLink: "https://vspodb.vercel.app",
    content: () => {
      return (
        <>
          <p>
            ぶいすぽっ！の情報データベースサイトです。メンバーの詳細情報から実績,見所など、役立つ情報を見つけることができます。
          </p>
          <p>
            制作経緯は、Youtube で VTuber のコンテンツを見るようになって、VTuber
            の情報が多く確認するのがとても大変だったので、専用サイトを作成し簡単に見つけれるようにしようと思ったのが始まりです。
          </p>
          <p>
            現在サイトで使用する予定の一部画像や情報の使用許可を得られていないため限定公開状態です。
          </p>
          <p>制作期間: 約15時間</p>
        </>
      );
    },
  },
  {
    title: "Scratch Auth",
    description: "2024年10月5日 ~",
    src: "/wp-content/product/scratch-auth.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/scratch-auth/pkg",
    content: () => {
      return (
        <>
          <p>
            Scratch Auth は、Scratch 用のシンプルな OAuth
            サービスです。開発者にはわかりやすい API
            を提供し、ユーザーにはスムーズなログイン体験を提供します。Scratch
            Auth を使用すると、Web サイトに OAuth 機能を簡単に実装できます。
          </p>
          <p>
            制作経緯は、過去に制作した Scratch Auth React
            をより強化したパッケージを制作しようと思ったからです。Scratch Auth
            API はとても複雑で実装するのが面倒なので、scratch-auth.config
            という一つのファイルで設定を行えるようにしました。
          </p>
          <p>制作期間: 約5時間</p>
        </>
      );
    },
  },
  {
    title: "Next.js Rich Template",
    description: "2024年6月26日 ~ ",
    src: "/wp-content/product/nextjs-rich-tpl.toakiryu.com.webp",
    ctaText: "Visit",
    ctaLink: "https://nextjs-rich-tpl.toakiryu.com",
    content: () => {
      return (
        <>
          <p>
            このプロジェクトは、Next.js を使用してモダンな Web
            アプリケーションを構築するための堅牢なスタートポイントを提供します。ローカリゼーションのサポートやテーマ切り替えなど、開発を効率化するために事前設定された機能を含んでいます。
          </p>
          <p>
            制作経緯は、ウェブサイトを開発するときに毎回テーマ切り替え機能やローカリゼーションのサポートする機能を実装するのが面倒に思って作成に至りました。テンプレートは定期的にアップデートを行い、常に最新のバージョンをサポートするようにしています。
          </p>
          <p>制作期間: 約10時間</p>
        </>
      );
    },
  },
  {
    title: "ScPay",
    description: "2024年6月10日 ~",
    src: "/wp-content/product/scpay.vercel.app.webp",
    ctaText: "Visit",
    ctaLink: "https://scpay.vercel.app",
    content: () => {
      return (
        <>
          <p>
            Scratchアカウントを当サービスと連携して、ゲームの進捗情報などのデータを同期します。開発者向けに認証サービスも提供します。
          </p>
          <p>
            制作経緯は、友達が Scratch とうプラットフォームで ScPay
            というサービスを開始したいといい、僕がウェブサイトを担当し、一緒にデータベースを制作することになったのが始まりです。
            いろいろな事情があり、2024年8月11日に開発が中断されましたが、2024年11月10日に開発を再開することになり、一気に進捗が進みました。初めてアカウントシステムを一から構築することになったので、とても苦戦しました。運営アカウントでログインされている場合は、サイト内ニュースの情報更新ができたり、ダッシュボードでアナリティクスにアクセスできるようにするなど、運営専用機能なども実装しました。
          </p>
          <p>制作期間: 約6ヶ月間</p>
        </>
      );
    },
  },
  {
    title: "Zshmgr",
    description: "2024年5月17日 ~ 2024年9月25日",
    src: "/wp-content/product/zshmgr.vercel.app.webp",
    ctaText: "Visit",
    ctaLink: "https://zshmgr.vercel.app",
    content: () => {
      return (
        <>
          <p>
            Zsh用のシンプルなパッケージマネージャーです。ユーザーはパッケージのインストール、アンインストール、アップデート、リスト表示を簡単に行うことができます。このツールはGitHubリポジトリとシームレスに連携するように設計されており、Zshスクリプトやツールの管理が容易になります。
          </p>
          <p>
            制作経緯は、作業ディレクトリーへの移動コマンドや、その他不要ファイルの削除コマンドなどを作成しているときに管理ツールがほしいと思ったのが始まりです。最低限の機能だけを実装しました。
          </p>
          <p>制作期間: 約28時間 / アーカイブ済み</p>
        </>
      );
    },
  },
  {
    title: "Scratch Auth React",
    description: "2024年3月30日 ~ 2024年10月4日",
    src: "/wp-content/product/scratch-auth-react.webp",
    ctaText: "Visit",
    ctaLink: "https://www.npmjs.com/package/scratch-auth-react",
    content: () => {
      return (
        <>
          <p>
            Scratch
            AuthはScratch用のシンプルなOAuthサービスです。開発者にはわかりやすいAPIを、エンドユーザーにはスムーズなログイン体験を提供します。scratch-auth-react
            を使うことで更に簡単にOAuth機能をサイトに実装することができます。
          </p>
          <p>
            制作経緯は、Scratch
            アカウントでのログインする機能を簡単に実装できるようにしたいと思ったからです。パッケージでは、最低限の設定をするだけで、複雑な
            Scratch Auth の API
            を使った認証機能を実装できるように工夫をして制作をしました。
          </p>
          <p>
            現在はサポートを終了し新たに @scratch-auth
            で同じような機能を提供しています。
          </p>
          <p>制作期間: 約14時間 / アーカイブ済み</p>
        </>
      );
    },
  },
  {
    title: "Scratch Building",
    description: "2024年3月8日 ~ 2024年8月1日",
    src: "/wp-content/product/scratch-building.vercel.app.webp",
    ctaText: "Visit",
    ctaLink: "https://scratch-building.vercel.app",
    content: () => {
      return (
        <>
          <p>
            ビル経営ゲームはScratchプラットフォーム上で開発されたゲームであり、このサイトは公式ウェブサイトとして機能します。アカウント認証、コメント、通知、コミュニティ参加など、さまざまな機能を提供しています。
          </p>
          <p>
            制作経緯は、Scratch
            というプラットフォームで公開されていた、人気ゲームの公式ウェブサイトに貢献したいと思ったことが始まりです。初めは
            2023年12月16日で、その頃のサイトは HTML
            で作成されていました。そこでは、コメントの返信機能の実装などをし貢献しました。2024年2月23日には僕が主導して
            Next.js
            のサイトへの移行を開始しました。新たなサイトでは、コメント機能,
            独自広告機能,
            アイテムショップのプレビューページなどを制作しました。さらに Scratch
            Auth というサービスを使って Scratch
            アカウントでのログイン機能を実装し、ログインユーザー限定機能も実装しました。
          </p>
          <p>制作期間: 約6ヶ月間</p>
        </>
      );
    },
  },
  {
    title: "Safe Encode",
    description: "2024年2月29日 ~ 2024年9月17日",
    src: "/wp-content/product/safe-encode.vercel.app.webp",
    ctaText: "Visit",
    ctaLink: "https://safe-encode.vercel.app",
    content: () => {
      return (
        <>
          <p>
            セキュリティとプライバシーを重視したデータのエンコードおよびデコードのためのツールです。SafeEncodeは、機密情報や個人情報などの重要なデータを安全に変換し、安全な形式で保存および転送することを目的としています。このツールは、安全な通信やデータベースへの保存などの様々なセキュアなデータ処理に利用できます。
          </p>
          <p>
            制作経緯は、暗号化という技術に興味をもったことが始まりです。暗号化は多くの方法がありますが、簡単に暗号化を行えるAPIを作成しようと思い開発をしました。最終的にはキーと内容を指定するだけで、暗号化と復号をすることができるAPIを作成することができました。
          </p>
          <p>制作期間: 約48時間 / アーカイブ済み</p>
        </>
      );
    },
  },
];
