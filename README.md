# 捉住小猫

[开始游戏](https://ganlvtech.github.io/phaser-catch-the-cat/)
[![Build Status](https://www.travis-ci.org/ganlvtech/phaser-catch-the-cat.svg?branch=master)](https://www.travis-ci.org/ganlvtech/phaser-catch-the-cat)

## 游戏玩法

* 点击小圆点，围住小猫。
* 你点击一次，小猫走一次。
* 直到你把小猫围住（赢），或者小猫走到边界并逃跑（输）。

## 部署

<details>
<summary>1. 使用已生成的游戏文件</summary>

首先新建一个 `index.html` 文件，接着在其中引入游戏框架 `phaser.min.js`

```html
<script src="phaser.min.js"></script>
```

然后引入游戏代码 `catch-the-cat.[contenthash].js`，注：`[contenthash]` 是文件的 hash 值，是动态的，此处作占位符用

```html
<script src="https://raw.githubusercontent.com/ganlvtech/phaser-catch-the-cat/gh-pages/catch-the-cat.[contenthash].js"></script>
```

然后在指定的 div 中新建一个游戏的 canvas，并开始游戏

```html
<div id="catch-the-cat"></div>
```

最后这个 `index.html` 的内容大概是这样的：

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Catch The Cat</title>
    <style>
        * {
            padding: 0;
            margin: 0
        }

        body {
            background-color: #eeeeee;
        }

        #catch-the-cat {
            width: 100%;
            margin-top: 32px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="catch-the-cat"></div>
    <script src="phaser.min.js"></script>
    <script src="https://raw.githubusercontent.com/ganlvtech/phaser-catch-the-cat/gh-pages/catch-the-cat.a47de2ba155da75b7d01.js"></script>
    <a href="https://github.com/ganlvtech/phaser-catch-the-cat" class="github-corner" aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#eee; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
    </a>
    <style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
</body>
</html>
```
</details>

<details>
<summary>2. Fork 此项目自行构建</summary>

**注意：请确保你已创建 GitHub Pages 用户站点，即 `<username>.github.io`，详情见此[教程](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site)**

首先 fork 此项目，然后进到你 fork 后的代码仓库中进行后续操作

然后我们要为此仓库启用 GitHub Pages 项目站点，具体步骤可以参考[这里](https://docs.github.com/cn/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

接下来，我们需要将此项目的代码 clone 到本地，根据自己的需求修改 `src/index.ts` 文件中 `new CatchTheCatGame()` 所接收的参数

参数列表：

| 参数  | 值    | 说明       |
| :---: | :---: | :--------- |
| w     | `11`  | 横向格子数 |
| h     | `11`  | 竖向格子数 |
| r     | `20`  | 圆半径像素 |

非必选参数：

| 参数            | 值                     | 说明                                |
| :-------------: | :--------------------- | :---------------------------------- |
| backgroundColor | `0xeeeeee`             | 背景颜色                            |
| parent          | `catch-the-cat`        | 父元素的 id 或 DOM 对象             |
| statusBarAlign  | `center`               | 状态栏左对齐 `left` 或居中 `center` |
| credit          | `github.com/ganlvtech` | 右下角的备注信息                    |


最后，将更新后的代码推送至远程仓库，等待 GitHub Action 部署完成后，访问 `https://<username>.github.io/phaser-catch-the-cat/` 即可
</details>

## 自己编写算法

参考 `src/solvers/` 中提供的例子编写算法，并使用下列代码替换。

```js
window.game.solver = yourSolver;
```

这个 solver 的返回值即为猫要往哪个方向走一步，如果撞墙则算玩家获胜

| 值 | 说明 |
| :--- | :---------------------- |
| -1 | 猫主动弃权 |
| 0  | 左 |
| 1  | 左上 |
| 2  | 右上 |
| 3  | 右 |
| 4  | 右下 |
| 5  | 左下 |

猫站在星号的位置，数字代表每个方向的编号

```plain
 1 2
0 * 3
 5 4
```

例如

```js
window.game.solver = function (blocksIsWall, i, j) {
    return 0;
};
```

即：一直向左走，直到撞墙。

## 说明

* 游戏的思路和小猫的图片来源于 [www.gamedesign.jp](https://www.gamedesign.jp/flash/chatnoir/chatnoir.html)，原来的游戏名叫 Chat Noir，我只是尝试用 javascript 重写一遍。
