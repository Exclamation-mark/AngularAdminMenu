import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appMouseOnMask]'
})
export class MouseOnMaskDirective {
  @Input('appMouseOnMask')index: number;
  constructor() { }
  @Output() onMouseEventChange: EventEmitter<mouseListenerData> = new EventEmitter();
  @HostListener('mouseenter') onMouseEnter() {
    this.onMouseEventChange.emit(new mouseListenerData(true,this.index));
    console.log("进来了 发送in事件 index:" + this.index);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.onMouseEventChange.emit(new mouseListenerData(false, this.index));
    console.log("出去了 发送out事件  index:" + this.index);
  }
}
export class mouseListenerData {
  constructor(
    public isIn: boolean,
    public index: number,
  ){}
}
