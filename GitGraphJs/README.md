# 使用GitGaph.js來畫Git分支圖
官網: http://gitgraphjs.com/
(other: Git Flow Chart)

## 環境,安裝與設定
設定環境與安裝相關套件。我用gulp來做為執行環境, 所以務必要用node裝好gulp.

#### 用bower安裝graph使用GitGaph
準備好bower.json, 將需要的套件設定好準備安裝.

```
//如果bower.json中己有加入gitgraph.js的設定
bower install

//如果bower.json中沒有加入gitgraph.js的設定
bower install gitgraph.js --save-dev
```

#### 用node安裝相關套件
準備好package.json, 將需要的套件設定好準備安裝.

```
#以package.json的設定將需要的套件安裝到node_modules
npm install
```

## 執行環境
以gulp做為執行環境需要建立gulp.config.json(非標準)及gulpfile.js(必要)

* 建立gulp.config.json將gulp執行環境的靜態變數設定好.
* 建立gulpfile.js, 載入gulp.config.json及相關gulp套件, 並建立tasks來執行相關工作.

#### 運行網站
執行以下命令並啟動網站運行
```
gulp serve-dev
```

開啟browser, 輸入 localhost:8080 即可看到結果.

##### Note
若有出現缺少git, 要到環境變數中去設定
```
//x86
;C:\Program Files (x86)\Git\bin;C:\Program Files (x86)\Git\cmd
//x64
;C:\Program Files\Git\bin;C:\Program Files\Git\cmd
```

## 設計筆記

#### 引用官方範例
官方有提供index.html及index.js, 參考這2個檔案用來畫出圖案.


#### 建立物件

```
var config = {
  template: "metro",       // could be: "blackarrow" or "metro" or myTemplate (custom Template object)
  orientation: "horizontal"
  , mode: "compact"     // special compact mode : hide messages & compact graph
};
var gitGraph = new GitGraph( config );
```

#### 建立master branch

```
// Create branch named "master"
var master = gitGraph.branch( "master" );
```

#### 在master上建立commit
```
// Commit on HEAD Branch which is "master"
master.commit( "Initial commit" );

// Add few commits on master.
master.commit( "My second commit" ).commit( "Add awesome feature" );
```

#### 建立branch並commit

```
var develop = master.branch("develop"); // New branch from HEAD
var myfeature = develop.branch("myfeature"); // New branch from develop

develop.checkout();
develop.commit( "develop branch 1st commit" ).commit("develop branch 2nd commit");

myfeature.checkout();
myfeature.commit( "myfeature branch 1st commit" );

master.checkout();
master.commit("switch back to master");

develop.checkout();
develop.commit( "develop branch 3rd commit" ).commit("develop branch 4th commit");

myfeature.checkout();
myfeature.commit( "myfeature branch 2nd commit" );
```

#### Merge
將develop合併到master

```
develop.merge(master, "merge develop to master");
```