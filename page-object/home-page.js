import { Selector, t } from "testcafe";

class HomePage {

    constructor(){
        this.computerLink = Selector("a").withText("Computer");
        this.desktopsLink = Selector("a").withText("Desktops");
        this.electronicsLink = Selector("a").withText("Electronics");
        this.cameraAndPhotoLink = Selector("a").withText("Camera & photo");
        this.productTitle = Selector("a").withText("Build");
        this.addToCart = Selector("div.buttons").child("button.product-box-add-to-cart-button");
    }

    async hoverMenuComputer(){
        await t.hover(this.computerLink)
        .wait(500);
    }

    async hoverMenuElectronics(){
        await t.hover(this.electronicsLink)
        .wait(500);
    }

    async clickMenuDesktops(){
        await t.click(this.desktopsLink)
        .wait(500);
    }

    async clickMenuCameraAndPhoto(){
        await t.click(this.cameraAndPhotoLink)
        .wait(500);
    }

    async clickAddToCart(){
        await t.hover(this.addToCart)
        .wait(500)
        .click(this.addToCart)
    }
}

export default HomePage