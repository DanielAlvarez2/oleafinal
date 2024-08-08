
password input
type=showPassword?'text':'password'

add up/down arrow keypress to adjust formatting

check for glitch:
changing the photo of an item,
you need to refresh to see new pic???

add a second input line for 2-line description of allergies

no login "button"
only use a route at /login

page for bartenders of cocktail recipes

develop using iPad for cross-browser compatibility

add a PRESS update page

add a page for NEWSLETTER

create hyperlinks at each li with mongo id
to redirect back to the same location on the page
after move item up/down

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

