
password input
type=showPassword?'text':'password'

add up/down arrow keypress to adjust formatting

check for glitch:
changing the photo of an item,
you need to refresh to see new pic???

add a second input line for 2-line description of allergies

page for bartenders of cocktail recipes

develop using iPad for cross-browser compatibility

add a PRESS update page

add a page for NEWSLETTER

create hyperlinks at each li with mongo id
to redirect back to the same location on the page
after move item up/down
NOT when deleting item!!!

after dinner drinks need update pages made

move to .env file

fix logic for displaying sides on printed menu

edit existing menu item screen with no pic
shows a broken link for the "no pic" icon

return to footerEdit.ejs 
right above </footer>

        <% if(req.user.role=='manager'){ %>
            <div>
                <a href='/users'>
                    <i class="fa-solid fa-user"></i>
                </a>
            </div>
        <% } %>
        <div>
            <% if(req.user){ %>
                <a href='/logout'>logout</a>
            <% }else{ %>
                <a href='/login'>login</a>
            <% } %>
        </div>

add google analytics

add "Lost Password" instructions to login page:
"first have a manager DELETE old account, THEN create new 
account, since 2 accounts can't have the same email
to log in with"

make sure oleademo.com/print does not require a login
to make it easier to print when in a hurry

feature: allow managers to add new pics to homepage slideshow

ask olea owners to give me an estimate on how much to 
charge future clients, fair market price

feature: create a bar-only menu

feature: use arrow keys on keyboard to control formatting 
changes

end of week, no napkins left to fold
should be studying menu

chef:"allergies"
servers:write in notepads???

ask for testimonials for codbasesoftware.com

need a "loading" spinner for uploading/editing menu items

liquors: constantly changing without updating servers

look for reviews on fb/ig/yelp/google/opentable

"compliments to the chef" page
ask your server for your table#

META tags for each page

example: new vegetarian entree - 
hummus: chick peas, cumin, lemon juice, garlic, pepper, tahini, salt
where would servers "save" that info???
in their notebooks???

add feature to delete pic of an existing menu item
and replace it with blank/no image

SENDGRID:
all MANAGERS get email notifications of
-new staff account signups
-newsletter
demonstrate that STAFF will not receive these
i.e. do not approve application for 2 owners
leave them as STAFF roles
and send a newsletter/signup request

print on menus:
"for allergies go to oleanewhaven.com/allergies"

sidework checklist including:
"check bathroom air fresheners blinking red"

a{width:100%;height:100%;}
<a href=''></a>

print menu without prices

add modal with a loading spinner for any database actions

print on menu: "scan QR code for digital menu/pics/allergies
"

when people use google translate taking a pic of menu on their phone

people show me pics on their phones of OLD menu items