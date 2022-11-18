import HomePage from '../page-object/home-page'
import ProductPage from '../page-object/product-page';
import ShoppingCartPage from '../page-object/shoppingcart-page';


const homePage = new HomePage();
const productPage = new ProductPage();
const shoppingCart = new ShoppingCartPage();

const ramId = 3;
var price, ram, hdd, software, productLeica, productLeicaPrice;

fixture `Realizar compras`
.page `https://demo.nopcommerce.com/`

test("Build your own computer", async t => {
    await t.maximizeWindow().wait(500);
    await homePage.hoverMenuComputer();
    await homePage.clickMenuDesktops();
    await homePage.clickAddToCart();

    await t.expect(productPage.productName.innerText).eql("Build your own computer");
    await productPage.selectRam(ramId)
    await productPage.checkHdd();
    await productPage.selectSoftware();
    await productPage.productAddToCart();
    await t.expect(productPage.notification.innerText).contains("The product has been added to your shopping cart");
    price = await productPage.productPrice.innerText;
    ram = await productPage.productRamOption.nth(ramId).innerText;
    hdd = await productPage.hdd.innerText;
    software = await productPage.productSoftware.innerText;

    await productPage.goShoppingCart();
    await t.expect(shoppingCart.productInfo.innerText).contains(hdd);
    await t.expect(shoppingCart.productInfo.innerText).contains(ram);
    await t.expect(shoppingCart.productInfo.innerText).contains(software);
    await t.expect(shoppingCart.priceUnit.innerText).eql(price);

    await homePage.hoverMenuElectronics();
    await homePage.clickMenuCameraAndPhoto();

    productLeica = await productPage.productLeicaName.innerText;
    productLeicaPrice = await productPage.productLeicaPrice.innerText;
    await productPage.productLeicaAddToCart();
    await t.expect(productPage.notification.innerText).contains("The product has been added to your shopping cart");

    await productPage.goShoppingCart();
    await t.expect(shoppingCart.productLeicaUnitPrice.innerText).eql(productLeicaPrice);
    await t.expect(shoppingCart.productLeicaSubTotal.innerText).eql(productLeicaPrice);

    await t.wait(2000);
})


