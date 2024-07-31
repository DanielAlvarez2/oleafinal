


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
