# AngularAdminMenu
angular封装的layui 后台菜单按钮
##效果  
![效果1](https://raw.githubusercontent.com/Exclamation-mark/AngularAdminMenu/master/paperkey/src/app/common/tmp2(1).gif "区块链")
![效果1](https://raw.githubusercontent.com/Exclamation-mark/AngularAdminMenu/master/paperkey/src/app/common/tmp2.gif "区块链")  
### 准备工作：  
npm install layui-src -save
package.json 文件下 dependencies添加"layui-src": "^2.4.5",
angular.json文件中 styles添加 "node_modules/layui-src/src/css/layui.css"  
**在angular的项目中引入layui的样式表**  
## 怎样使用：  
### 1.写一个服务获取菜单数据  
```
export class MenuService {
  private menus: Menu[] = [
    new Menu("菜单一", "javascript:;" , true,[ new ChildMenu('子菜单一', "test"),new ChildMenu('子菜单一', "test"),new ChildMenu('子菜单一', "test")]),
    new Menu("菜单二", "javascript:;" , true,[ new ChildMenu('子菜单一', "test"),new ChildMenu('子菜单一', "test"),new ChildMenu('子菜单一', "test")]),
    new Menu("菜单三", "javascript:;" , true,[ new ChildMenu('子菜单一', "test"),new ChildMenu('子菜单一', "test"),new ChildMenu('子菜单一', "test")]),
    new Menu("菜单四", "test", false,null)
  ];
  constructor() { }
  public getMenus(): Menu[]{
    return this.menus;
  }
}
 
```  
### 2.主组件的调用服务  
```
export class AdminComponent implements OnInit {
  private menus: Menu[];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menus = this.menuService.getMenus();
    console.log("admin module");
  }

}

```  
### 3.在页面中注入数据
```
<div class="layui-layout layui-layout-admin">
  <app-navbar></app-navbar>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <app-menu [menus]="menus"></app-menu>
      </div>
      <div class="col-md-9">
        <app-home></app-home>
      </div>
    </div>
  </div>
  <app-footter></app-footter>
</div>

```  
### 4.menu实体类的定义
```
export class Menu {
  public isopen: boolean = false;
  constructor(
    public name: string,
    public url: string,
    public isParent: boolean,
    public childs: ChildMenu[]
  ){}
}

export class ChildMenu {
  public isSelected: boolean = false;
  constructor(
    public name: string,
    public url: string
  ){}
}

```  
### 5.当前的缺陷  
路由相关没做处理仅仅是效果实现了

### 6.注意  
bidy class属性要设置为layui-layout-body
### 7.laiui地址  
[laiui地址](https://www.layui.com/ "laiui地址")
