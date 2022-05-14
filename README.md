# 汎用ボタンライブラリ

## 概要
このプロジェクトは汎用的なボタンUIをまとめたライブラリ

## 設計手法
CSSの設計手法は[OOCSS]を採用
構造と見た目を分けてすっきりとさせるため

## TypeScriptのコンパイル方法
rollupのプラグインを使用してTypeScript→JavaScriptへのコンパイルを行う
その際にバンドルも一緒に行っている

## メモ
### TypeScriptのコンパイルについて
'src/components/button/index.ts'のようにファイルを指定してコンパイルを行うとtsconfig.jsonが無視される
'npx tsc'のようにファイル名を指定しないでコンパイルを行うことで正しく読み込まれる