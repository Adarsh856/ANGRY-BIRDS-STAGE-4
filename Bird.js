class Bird extends BaseClass {
  constructor(x,y,bImage){
    super(x,y,50,50);
    if (bImage)
    this.image = loadImage(bImage);
  }

  display() {
    super.display();
  }
}
