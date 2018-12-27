import {Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Menu} from "../entity/menu";
import {MenuService} from "../../service/menu.service";
import {mouseListenerData} from "../Directive/mouse-on-mask.directive";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private  mouseMask: mouseListenerData = new mouseListenerData(false,-1);
  @Input() private menus: Menu[];
  private lastClickChildMenu = [0,0];
  constructor(private menuService: MenuService,private el: ElementRef) { }
  ngOnInit() {

  }



  childMenuClic(parentIndex: any, childMenu: any) {
    console.log(typeof(parentIndex) )
    this.menus[this.lastClickChildMenu[0]].childs[this.lastClickChildMenu[1]].isSelected = false;
    this.menus[parentIndex].childs[childMenu].isSelected = true;
    this.lastClickChildMenu = [parentIndex,childMenu];
  }


  onMouseMove(value: any): void{
    console.log(value);
  }
  getIndexHeight(Index: number): number{
    let result: number = 0;
    for (let i = 0; i < Index; i++){
      if (this.menus[i].isopen){
        result = result + (45 + this.menus[i].childs.length*40);
      } else {
        result = result + 45;
      }
    }
    return result;
  }


  OnMouseChange($event) {
    let mouseData: mouseListenerData = <mouseListenerData>$event;
    let top = this.getIndexHeight(mouseData.index);
      if (mouseData.isIn == false){
        this.el.nativeElement.querySelector("#mask").style.top = (top + 22.5) + 'px';
        this.el.nativeElement.querySelector("#mask").style.height = '0px';
        this.el.nativeElement.querySelector("#mask").style.opacity = '0';
      } else {
        this.el.nativeElement.querySelector("#mask").style.top = (top + 'px');
        this.el.nativeElement.querySelector("#mask").style.height = '45px';
        this.el.nativeElement.querySelector("#mask").style.opacity = '1';
      }
      this.mouseMask = mouseData;
  }
}
