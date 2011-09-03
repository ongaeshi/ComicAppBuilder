ComicAppBuilder 
=======================================================

## 概要 ##

コミックアプリビルダーは、連番画像を用意するだけで簡単にiPhone, iPadで動くブックアプリを作ることが出来るフレームワークです。

- オリジナル漫画をApp Storeに置きたい
- 自炊した画像を手元でアプリ化して楽しみたい。

をやりたい人の参考になれば幸いです。

## 必要なもの ##

* XCode (3.2.6で動作確認)
* PhoneGap 1.0.0
* Sencha Touch 1.1.0

## インストール ##

[PhoneGap](http://www.phonegap.com/)のインストール、[Sencha Touch SDK](http://www.extjs.co.jp/products/touch/)のダウンロードの仕方については、各公式サイト等を参考にして下さい。

1. PhonGap のインストール
2. Sencha Touch SDK のダウンロード
3. 最新の ComicAppBuilder をチェックアウト (もしくは[最新のアーカイブ](https://github.com/ongaeshi/ComicAppBuilder/tarball/master)をダウンロード)
4. Sencha Touch SDK を `ComicAppBuilder/www/lib/touch/` にコピー

````shell
# 最新の ComicAppBuilder をチェックアウト
$ git clone git://github.com/ongaeshi/ComicAppBuilder.git

# ダウンロードした Sencha Touch SDK を展開
$ unzip sencha-touch-1.1.0.zip 

# Sencha Touch SDK を ComicAppBuilder/www/lib/touch/ にコピー
$ cp -rpv sencha-touch-1.1.0 ComicAppBuilder/www/lib/touch

# 不要なファイルを削除しておくと、アプリの再起動が早くなります。
$ cd ComicAppBuilder/www/lib/touch
$ rm -r docs/ examples/ jsbuilder/ pkgs/ src/ test/ *.html
````

以上でインストールは終了です。

## ビルドする ##

1. XCodeで `ComicAppBuilder/ComicAppBuilder.xcodeproj` を開きます
2. アプリ名を変えたい場合は、ここで **[プロジェクト]→[名称変更]** を行います
2. **ビルドと実行** します。
3. シュミレーターが起動し、サンプル画像が表示されれば成功です
4. **Sample PhotoViewer for iPhone(320x480)**が写真集の、**Sample ComicViewer for iPad(768x1024)**がコミックの設定サンプルになります。
 
## オリジナル画像に差し替える ##

1. `ComicAppBuilder/` 以下に対して操作を行います。
2. `www/image/` に、連番画像(1.jpg, 2.jpg, ....) をコピーします。
3. `www/index.js` を編集します。
4. XCodeでビルドしなおして、表示される画像が変われば成功です。

````javascript
// 設定例 : www/image/test/ 以下に 1.jpg, 2.jpg ...10.jpg を置いた場合

const PARAM = {
  prefix: 'test/',   // 連番画像の置き場所 (www/image/test/1.jpg -> 'test/' )
  suffix: '.jpg',    // '.jpg' or '.png'
  page_num: 10,      // 画像の枚数 [1.jpg, 2.jpg, ...6.jpg] だったら 6
  is_reverse: false  // 右開きだったらtrue, 左開きだったらfalse
};
````

## 作成者 ##

* ongaeshi (owner): [http://ongaeshi.me/](http://ongaeshi.me/)

## ライセンス ##

ComicAppBuilder は MIT License です、無保証ですが改変等はご自由にどうぞ。

PhoneGap, Sencha Touch SDK については各ライブラリのライセンスに従って下さい。

## コミックアプリビルダーを使って何か作ったら・・・ ##

全く強制ではないですが、[ongaeshi](http://ongaeshi.me/) ([Twitter](http://twitter.com/ongaeshi), [blog](http://d.hatena.ne.jp/tuto0621/)) まで教えてくれたら励みになります。

