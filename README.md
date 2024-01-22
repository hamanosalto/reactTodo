# はじめに
dokerで環境を構築しreactを使いTodoアプリを作成します。

・dockerを以下からダウンロード

https://matsuand.github.io/docs.docker.jp.onthefly/desktop/mac/install/

node.jsとnpmを以下を参考にインストールしておきます。

https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09

## 手順
## reactプロジェクトの作成
dokerを起動後

Reactアプリケーションを作成するためにターミナルで以下のコマンドを入力しディレクトリを作成します。

npx create-react-app react-app

今回は、プロジェク名をreact-appにします。

### プロジェクト内に移動

cd react-appで先ほど任意の名前で作成したディレクトリに移動します。

### Dockerfileの作成

先ほど作成したreact-appの中のsrcにDockerfileを作成し以下を貼り付ける。

    FROM node:20-alpine
    
    ENV NODE_ENV=development
    
    WORKDIR /usr/src/app
    
    COPY package.json package-lock.json .
    
    RUN npm install
    
    COPY . .


### docker-compose.ymlの作成

先ほど作成したreact-appの中のsrcにdocker-compose.ymlを作成し以下を貼り付ける

    version: "3"
    
    services:
    
      react-app: #サービス名
      
        build: .
        
        volumes: #バインドマウント
        
          - ./:/usr/src/app
          
        command: npm start
        
        ports:
        
          - "3000:3000"

### コンテナの作成と立ち上げ

ターミナルで以下を入力
docker compose up --build -d

localhost:3000にアクセスして、画像が出たらOK。
