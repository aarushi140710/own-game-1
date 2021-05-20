class Restaurant2{
    constructor(){

    }

    async start() {
        burger = createSprite(500,400);
        burger.addImage("burger", burgerImg);

        chef2 = createSprite(500,400);
        chef2.addImage("chef2", chef2Img);

        cupcake = createSprite(500,400);
        cupcake.addImage("cupcake", cupcakeImg);

        donut = createSprite(500,400);
        donut.addImage("donut", donutImg);

        frenchfries = createSprite(500,400);
        frenchfries.addImage("frenchfries", frenchfriesImg);

        hotdog = createSprite(500,400);
        hotdog.addImage("hotdog", hotdogImg);

        popcorn = createSprite(500,400);
        popcorn.addImage("popcorn", popcornImg);

        resort2 = createSprite(500,400);
        resort2.addImage("resort2", resort2Img);

        sandwich = createSprite(500,400);
        sandwich.addImage("sandwich", sandwichImg);
    }

}