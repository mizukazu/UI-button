# 汎用ボタンライブラリ

## 概要
このプロジェクトは汎用的なボタンUIをまとめたライブラリです。

## 設計手法

## メモ
### TypeScriptのコンパイルについて
'src/components/button/index.ts'のようにファイルを指定してコンパイルを行うとtsconfig.jsonが無視される。
'npx tsc'のようにファイル名を指定しないでコンパイルを行うことで正しく読み込まれる。