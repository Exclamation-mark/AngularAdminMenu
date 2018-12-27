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
