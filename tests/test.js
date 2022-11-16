import NopCommerce from '../page-object/nop-commerce'


const nopCommerce = new NopCommerce()


fixture `Realizar compra de un computador`
.page `https://demo.nopcommerce.com/`

test("Build your own computer", async t => {
    await t.maximizeWindow().wait(500);
    await nopCommerce.hoverMenuComputer();
    await nopCommerce.clickMenuDesktops();
    await nopCommerce.clickAddToCart();
    await t.expect(nopCommerce.productName.innerText).eql("Build your own computer");
    
    await nopCommerce.selectRam("8GB [+$60.00]")
    await nopCommerce.checkHdd();
    await nopCommerce.selectSoftware();
    await nopCommerce.productAddToCart();

})


