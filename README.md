# はじめに
dokerで環境を構築しreactを使いTodoアプリを作成します。

・あらかじめDockerとnode.jsとnpmをインストールしておきます。

## 手順
## reactプロジェクトの作成
Reactアプリケーションを作成するためにターミナルで以下のコマンドを入力しディレクトリを作成します。

npx create-react-app react-app

今回は、プロジェク名をreact-appします。

### プロジェクト内に移動

cd react-appで先ほど任意の名前で作成したディレクトリに移動します。

### コンテナの作成と立ち上げ

ターミナルで以下を入力
docker compose up --build -d

localhost:3000にアクセスして、画像が出たらOK。
