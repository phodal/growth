# Growth NG

[![Build Status](https://travis-ci.org/phodal/growth-ng.svg?branch=master)](https://travis-ci.org/phodal/growth-ng) 
[![Coverage Status](https://coveralls.io/repos/github/phodal/growth-ng/badge.svg?branch=master)](https://coveralls.io/github/phodal/growth-ng?branch=master)
[![Code Climate](https://codeclimate.com/github/phodal/growth-ng/badges/gpa.svg)](https://codeclimate.com/github/phodal/growth-ng)
[![Gitter](https://img.shields.io/gitter/room/phodal/growth-ng.svg)](https://gitter.im/phodal/growth-ng)


TODO List
---

 - 开源书列表
 - Awesome 项目列表
 - 点击图片进入全屏
 - 练习页面
   - 算法和数据结构练习
   — 可视化算法
   - 可练习算法

技术栈
---

 - React Native
 - React Native Elements：UI 框架
 - React Native Router Flux：路由控制
 - React Native Vector Icons：图标组件 
 - Jest：单元测试框架
 - React Test Renderer：UI 测试框架

ESLint Style: [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) 

Join us
---

### Setup
0. 更新xcode至8.3.2
1. 安装 yarn 或者 npm
2. 安装 react-native-cli：``yarn global add react-native-cli``
3. 安装依赖： ``yarn install``
4. 链接原生库：``react-native link``
5. 添加子模块：``git submodule init && git submodule update``
6. 运行 Demo：``react-native run-ios``

### Workflow

1. 获取上游最新代码：``git pull --rebase``
2. 添加修改功能，**小步提交**，即实现某个小功能就本地小步提交一次。如：
    1. 添加某个库，提交一次。
    2. 完成 UI 设计，提交一次。
    3. 完成功能，提交一次。
    4. 编写测试，提交一次。
    5. 修复 Lint，提交一次。
3. 编写、运行测试 ``npm test``
4. 执行 lint 检测 ``npm run lint``
5. 提交到服务器
6. 来一个 Pull Request

### 提交信息规范

建议提交信息按如下规范：

```
[任务分类] 主要修改组件：修改内容
```

示例 1，``[T] tabs: add icons`` 。其中的 ``T`` 表示这是一个技术卡，``tabs`` 表示修改的是 Tabs，``add icons`` 则表示添加了图标。

示例 2，``[SkillTree] detail: add link data``。其中的 ``SkillTree`` 表示修改的是技能树 Tab 下的内容，``detail`` 则表示修改的是详情页，``add link data`` 则表示是添加了技能的数据

### 打包

项目自带的 keystore 是用下面命令生成的，仅用于测试：

> $ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000


### UI Test: appnium

Thanks to: [http://chase-seibert.github.io/blog/2017/01/06/appium-react-native-quickstart.html](http://chase-seibert.github.io/blog/2017/01/06/appium-react-native-quickstart.html)

**Setup**

1. install basic libs

```
brew install libimobiledevice --HEAD
brew install carthage
```

2. install appium

```
npm install -g appium ios-deploy wd
```

3. install xcpretty

```
gem install xcpretty  # optional
```

4. test ``appium`` command

```
appium
```

5. create ``virtualenv``

```
virtualenv venv
. venv/bin/activate
pip install -r requirements.txt
```

6. run test

```
py.test e2e/*.py
```


Release && Deploy
---

```
brew cask install fastlane	
```

Documents
---

**Growth 内容 API**

地址：[https://github.com/GrowthStudio/growth-content](https://github.com/GrowthStudio/growth-content)    


**探索 API**

名称               |   API 地址
------------------|-----------------
文章合集           | https://phodal.coding.me/growth/articles/api/all.json
学习路线           | https://phodal.coding.me/growth/awesome/api/all.json
我的职业是前端工程师 | https://phodal.coding.me/growth/fe/api/all.json
Growth 实战指南    | https://phodal.coding.me/growth/growth-in-action/api/all.json
ideabook项目集     | https://phodal.coding.me/growth/ideabook/api/all.json
练手项目           | https://phodal.coding.me/growth/project/api/all.json
工具箱            | https://phodal.coding.me/growth/toolbox/api/all.json
开源书列表         | https://phodal.github.io/growth-api-gitbook/api.json
Awesome 项目列表   | https://phodal.github.io/growth-api-awesome/api/awesomes.json

社区 API 文档： [Growth NG Wiki](https://github.com/phodal/growth-ng/wiki)

Basis on: [React Native Stater APP](https://github.com/mcnamee/react-native-starter-app)

License
---

[![Phodal's Idea](http://brand.phodal.com/shields/idea-small.svg)](http://ideas.phodal.com/)

© 2016 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas).  This code is distributed under the MIT license. See `LICENSE` in this directory.
