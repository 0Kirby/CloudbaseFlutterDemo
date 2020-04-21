# CloudbaseFlutter

在Flutter中使用云开发的云函数、云存储和云数据库能力的一个Demo。

## 视频教程
哔哩哔哩： https://www.bilibili.com/video/BV1RK411V7qc/  
如果喜欢的话请**一键三连**呗♥♥♥

## 什么是云开发
![Cloudbase](https://docs.cloudbase.net/favicon.png)  
[**云开发 Cloudbase**](https://www.cloudbase.net/) ，是**Serverless**云端一体化产品方案，是腾讯云为移动开发者提供的高可用、自动弹性扩缩的**后端云服务**，可用于开发**多种端应用**（小程序，公众号，Web 应用，Flutter 客户端等），达到**一站式**后台服务构建多端应用，帮助开发者统一构建和管理后端服务和后端云资源，避免了应用开发过程中参与繁琐的服务器搭建及运维，开发者可以专注于**业务逻辑**的实现，开发门槛更低，效率更高。

## 任务介绍

以制作一个简单的在线执行代码的跨平台APP为例，通过使用云开发的 **Flutter SDK** ，介绍云开发在Flutter中的使用方法。
我们需要利用云开发的产品能力完成以下任务：
1. 使用**云函数**实现调用执行代码API并返回结果
2. 从**云存储**中读取需要执行的代码
3. 将调用**云函数**的执行结果储存到**云数据库**中

## 准备工具
- IDE: Intellij IDEA或Android Studio
- Plugins: Flutter和Dart

## 需要替换的常量  
在**lib**目录下的**main.dart**文件中，替换以下常量：  
- _envId: 填入您的云开发环境ID
- _function: 填入您创建的云函数的名称
- _collection: 填入您的云数据库集合名称
- _fileId: 填入您上传到云存储的文件地址