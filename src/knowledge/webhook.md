## 新电脑配置 git 环境

> 一些git基础知识可以参考 [pro git](https://gitee.com/progit/)



### 如何配置 SSH 公钥访问 git 仓库

1. 本地用ssh-keygen生成私钥

   打开命令行终端输入`ssh-keygen -t rsa -C <your_email@example.com>`( 你的邮箱)，连续点击 Enter 键即可。

2. 公钥配置到git服务器

> 这一部分可以参考 [如何配置 SSH 公钥访问 git 仓库？](https://coding.net/help/doc/git/ssh-key.html)



###  `git push`时不需要输入密码

如果你的`git`仓库拉到本地时用的是 `https` 的协议，那么在不做任何操作的情况，`git push` 时是需要输入 git 的用户名和密码的。

如何达到` git push` 时不需要输入 git 的用户名和密码呢？

你可以：

- 走 SSH 协议
  - 即你在clone文件时即使用ssh协议
- 走 `https` 协议
  - [配置 credential helper](https://help.github.com/en/articles/caching-your-github-password-in-git)

> 参考[一个网友的tip](https://todebug.com/Tips/)



### 一台电脑怎么配置多个 git 环境？

待补充……



## shell 脚本

- http://www.linuxso.com/command/sed.html

- https://blog.csdn.net/weiguang1017/article/details/80345058



## webhook 妙用

- https://jerryzou.com/posts/webhook-practice/
- https://excaliburhan.com/post/add-webhooks-to-your-project.html



### 如何使用 github pages

- https://zhuanlan.zhihu.com/p/38480155