

const content = document.querySelector('#content');

function addContent() {
    content.innerHTML = `
    <header>
        <div class="hero"></div>
        <h1 class="name">SALUTE <span>FRUIT</span></h1>
    </header>
    <nav>
        <ul class="tabs">
            <li class="tab tab-current" data-selection="menu">MENU</li>
            <li class="tab" data-selection="contact">CONTACT</li>
            <li class="tab" data-selection="about">ABOUT</li>
        </ul>
        <!-- would be cool to make a 3d object (either with blender, three.js, or zzzdog)(fruit, whatevs) to put under the navigation here  -->
    </nav>
    <main class="pages">
            <div class="page page-current" id="menu">
                <div class="menu-item one">
                    <h5 class="item-name">Go Vegan</h5>
                    <div class="item-description">
                        <p>Our customer favorite signature smoothie.</p>
                        <p class="ingredients">Strawberries, Mango, Raspberries, Honey, & Oatmilk</p>
                    </div>
                    <p class="item-price">$15</p>
                </div>
                <div class="menu-item two">
                    <h5 class="item-name">Is It Local?</h5>
                    <div class="item-description">
                        <p>Our favorite question gets our favorite smoothie ingredients.</p>
                        <p class="ingredients">Kale, Spinach, Carrot, Beets, Banannas, & Oatmilk</p>
                    </div>
                    <p class="item-price">$16</p>
                </div>
                <div class="menu-item three">
                    <h5 class="item-name">Whole Foods is Corporate</h5>
                    <div class="item-description">
                        <p>Our in case you forgot smoothie.</p>
                        <p>Stick it to corporate society by spending a lot of money with us.</p>
                        <p class="ingredients">Apple, Bananna, Mango, Guava, Grapefruit, & Oatmilk</p>
                    </div>
                    <p class="item-price">$14</p>
                </div>
                <div class="menu-item four">
                    <h5 class="item-name">Smoothies Are Over!</h5>
                    <div class="item-description">
                        <p>Psyche. Only the coolest kids drink smoothies.</p>
                        <p class="ingredients">Blueberries, Raspberries, Strawberries, Blackberries, Figs, & Oatmilk</p>
                    </div>
                    <p class="item-price">$15</p>
                </div>
            </div>
            <div class="page" id="contact">
                <div class="info">
                    <div class="address">
                        <p>1234 Main Street</p>
                        <p>Portland, OR, 97222</p>
                    </div>
                    <div class="phone">
                        <p>1-666-420-6969</p>
                    </div>
                    <div class="hours">
                        <p>12pm-8pm everyday</p>
                    </div>
                    <div class="order">
                        <h5>Place an order for pickup</h5>
                        <button>ORDER</button>
                    </div>
                </div>
            </div>
            <div class="page" id="about">
                <div class="speech">
                    <div class="paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nisl suscipit adipiscing bibendum est.</p>
                        <p>Vitae ultricies leo integer malesuada nunc vel risus. Aenean et tortor at risus viverra adipiscing.</p>
                        <p>Et netus et malesuada fames ac turpis egestas integer eget. Sed libero enim sed faucibus.</p>
                        <p>Aliquam sem et tortor consequat id porta. Pretium lectus quam id leo in. Morbi tincidunt ornare massa eget egestas purus viverra.</p>
                        <p> Nulla facilisi nullam vehicula ipsum. Turpis tincidunt id aliquet risus.</p>
                    </div>
                    <div class="paragraph">
                        <p>Praesent tristique magna sit amet purus gravida quis. Nec tincidunt praesent semper feugiat nibh sed pulvinar.</p>
                        <p>Egestas fringilla phasellus faucibus scelerisque. Diam donec adipiscing tristique risus nec feugiat.</p>
                        <p>Ac placerat vestibulum lectus mauris ultrices. Egestas maecenas pharetra convallis posuere morbi leo urna molestie.</p>
                        <p>Leo duis ut diam quam. Purus faucibus ornare suspendisse sed nisi lacus. In nisl nisi scelerisque eu ultrices vitae.</p>
                        <p>Vitae elementum curabitur vitae nunc sed velit. Aliquam eleifend mi in nulla.</p>
                    </div>
                </div>
            </div>
    </main>
    <footer>
        <h5>Made with <span class="heart"></span> by Alec Moschetti</h5>
    </footer>
    `;
}

export { addContent } 












