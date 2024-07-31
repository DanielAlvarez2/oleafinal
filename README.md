

no login "button"
only use a route at /login

page for bartenders of cocktail recipes

develop using iPad for cross-browser compatibility

add a PRESS update page

add a page for NEWSLETTER

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
