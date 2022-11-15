import { Selector, t } from "testcafe";

class NopCommerce {

    constructor(){
        this.computerLink = Selector("a").withText("Computer");
        this.desktopsLink = Selector("a").withText("Desktops");
        this.productTitle = Selector("a").withText("Build");
        this.addToCart = Selector('html > body > div:nth-of-type(6) > div:nth-of-type(3) > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > div > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > button')
        this.priceValue = Selector("#price-value-1")
    }


    async hoverMenuComputer(){
        await t.hover(this.computerLink);
    }

    async clickMenuDesktops(){
        await t.click(this.desktopsLink);
    }

    async clickAddToCart(){
        await t.hover(this.addToCart)
        .wait(2000)
        .click(this.addToCart)
    }

}

export default NopCommerce