### 注意

    * 这是**两个**工程: `hot` 和 `test`
    * 如果需要使用`https`，需要先导入根证书：`RootCA/HiiPack.pem`


### 运行

    npm install hiipack -g
    cd hot
    npm install
    cd test
    npm install

    hii start -xo --https

### 编译

    cd hot
    hii pack
    hii min

    cd test
    hii pack
    hii min
### 地址

    # 首页
    http://localhost:8800/

    https://hii.pack.com/
    https://hii.pack.com/

    https://hii.pack.com/hot/src/index.html
    https://test.pack.com/test/src/index.html