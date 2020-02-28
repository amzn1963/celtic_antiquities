https://media.giphy.com/media/MBOvUAZraGvlOabZoy/giphy.gif
[![Build Status](https://travis-ci.org/amzn1963/celtic_antiquities.svg?branch=master)](https://travis-ci.org/amzn1963/celtic_antiquities)
<h1>
<a id="user-content-celtic-antiquities" class="anchor" aria-hidden="true" href="#celtic-antiquities"></a>
Celtic Antiquities</h1>

<p>This is the final milestone project which showcases an online store where users can browse the products for sale, register their details, login and logout and also pay for their purchases using a secure payment platform.</p>

<h2>
<a id="user-content-table-of-contents" class="anchor" aria-hidden="true" href="#table-of-contents"></a>
Table of Contents</h2>
<ol start="2">
    <li>
    <a href="#ux">UX</a>
    </li>
    <li>
    <a href="#features">FEATURES</a>
        <ul>
    <li>
    <a href="#home-page">Home Page</a>
    </li>
    <li>
    <a href="#register-page">Register Page</a>
    </li>
    <li>
    <a href="#login-page">Login Page</a>
    </li>
    <li>
    <a href="#password-page">Password Page</a>
    </li>
    <li>
    <a href="#payment-page">Payment Page</a>
    </li>
    <li>
    <a href="#products-page">Products Page</a>
    </li>
    <li>
    <a href="#search-facility">Search Facility</a>
    </li>
        </ul>
    <li>
    <a href="#features-left-to-implement">FEATURES LEFT TO IMPLEMENT</a>
    </li>
    <li>
    <a href="#technologies-used">TECHNOLOGIES USED</a>
    </li>
    <li>
    <a href="#testing">TESTING</a>
    </li>
    <li>
    <a href="#deployment">DEPLOYMENT</a>
    </li>
    <li>
    <a href="#credits">CREDITS</a>
    </li>
</ol>
<h2>
    <a id="user-content-ux" class="anchor" aria-hidden="true" href="#ux"></a>
UX</h2>

<p>This is an online store which has a variety of products relating to the Celtic Culture found throughout Europe and UK. Every product has an image and a product description and also a price which is set as GB Pounds. The user can just browse the products, alternatively, the user can register their details, login and logout, and also purchase the products using the online payment system.</p>

<p>There is an opportunity for the user to register their details such as email address, password, username, these are essential if the user wishes to purchase any products.</p>

<p>The online payment system is active, therefore, caution needs to heeded here as if the user enters valid card details their card will debited. But as these products are ficticious (as I don't own them) this will impact the user financially and give a poor user experience. But for testing purposes, I encourage the user to test purchasing using the 4242 test card method.</p>

<p>Password changes synced through Google Mail, therefore, any user can change their password (password reset if the original password is fogotten).</p>

<h2>
    <a id="user-content-features" class="anchor" aria-hidden="true" href="#features"></a>
FEATURES
</h2>

<p>Firstly, the user can view all the images of celtic antiquities, each has its own descriptive history and purchase price.  All of these images can be found by clicking the Celtic Antiquities heading on the navbar.</p>

<p>Secondly, the user, if interested can register their details which will gain them full access to the site.  This will entail selecting items they wish to purchase and using the built in payment system (more information relating to payments further in the section).</p>

<p>Thirdly, there is an active search facility where the user can type in a word and if there is a match, the item(s) will then be displayed on their own - this will give the user a clearer view of the searched products on display.</p>

<p>Finally, There are contact details at the footer of the page if any user is experiencing problems with the site - this is an added extra to be proactive with the user.</p>

<ol>
    <li>
<h3>
    <a id="user-content-home-page" class="anchor" aria-hidden-"true" href="#home-page"></a>
Home Page
</h3>

<p>The home page gives the user a list of 12 individual items which are stored inside the Django database.  These items all have an image and a desription including a website price.  The items are laid out in rows inside individual boxes.  This give a clean feel to the site.</p>
<p>There is also a navbar (further details later on in the section), a simple but clean heading image and a footer which has contact details for the user to use.</p>
<p>By clicking the title on the navbar - this will return the user to the home page - it is visible wherever the user is on the site.</p>
    </li>
    <li>
<h3>
    <a id="user-content-register-page" class="anchor" aria-hidden="true" href="#register-page"></a>
Register Page
</h3>

<p>This page has 4 form fields for the user to fill out.  Ranging from the user email address, username, password & password confirmation.  It is a standard registration form with a button which the user clicks to register all the details that they have just entered.</P>

<p>If a user who has previously registered but accidently arrives at this page, there is a link which the user can click and it link to the sign in form page.</p>

<p>The logo, navbar and footer are still visible on this page - this shows the user that all these forms are all inside the site - no external links.</p>
    </li>
    <li>
<h3>
    <a id="user-content-login-page" class="anchor" aria-hidden="true" href="#login-page"></a>
Login Page
</h3>

<p>Once the user have registered their details - by clicking the login tab on the navbar, the page changes to a pre-designed form which gives the two boxes to fill out - Username & password. When the users details have been entered there is a login button the user can click and entry to the website has been granted.</p>
<p>There is also a link where the user can click if they require to reset their password.  The user will receive a confirmation email to their specified email address where they reset their password.</p>
    </li>
    <li>


