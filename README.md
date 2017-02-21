# react-table

table组件
![alt text](http://img1.gtimg.com/house/pics/hv1/85/78/2173/141319300.png "Title")
[在线demo](http://datianyun.github.io/table "Title")
### Installation
``` sh
npm install reactui-table
```

### API

### props

|name|type|default| description|
|-----|---|--------|----|
|columns | array |- | 表格头部|
|tdata | array | -| 表格数据 |
### Demo

``` sh
npm run start
```

http://localhost:8888/example/

### Usage
``` javascript
let columns = ['示例1','示例2','示例3','操作']
let tdata = [{
    id : 1,
    name : 'hello',
    email : 'qq@qq.com'
},{
    id : 2,
    name : 'admin',
    email : 'admin@qq.com'
}]

//组件支持html格式
let action = {
    className : 'col-action clearfix',
    type : 'html',
    click : this.handleclick.bind(this),
    value : ''
}
let label = '<a class="label '+'add'+'"' + ' data-status="' + '1'+'">' +'添加'+'</a>'
action.value = label


let cdata = [[1,"hello","qq@qq.com",action],[2,"admin","admin@qq.com",action]]

<Table columns={columns} tdata={cdata}></Table>
```
