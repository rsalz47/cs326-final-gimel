## Milestone 2

#### 0. API Documentation 

Usage examples for all of these api's are in `src/frontend/js/client.js`

##### server/server.js
> `POST comments/create`  
This api is used to insert a new comment into the server-side db. The web-app uses it to insert 
notes using the message-field in the leftmost view of index.html.

> `POST /comments/read`  
This api is used to read all the currently existing notes from the server-side db. It is used to
display the notes in the leftmost view of index.html, as well as continuously refresh the comments
on the user-facing display.

> `POST /comments/update`  
This api is used to update existing comments. It reads out a comment from the database, and changes
its data field based on the changes requested by the user.

> `POST /comments/delete`  
This api is used to delete an existing comment. It takes in a note id and uses it to delete a note 
from the server-side db.

> `GET /cfg/function_list`  
This api is used to return a list of function names for the target. This api's usecase basically
mirrors just running objdump on the target binary with the option to just look for function nanmes.

> `POST /cfg/cfg_for_func`  
This api takes in a function name and queries the targets cfg-object to return the control flow
graph for the function corresponding to the name.

##### server/routes/user.js  
> `GET /users`  
This api returns information about all users

> `GET /users/:id`  
This api takes in a user id from the get request to it and uses it to return the data about a
user-account.

> `POST /users/verify`  
This api validates a username/password from the data of a post request and communicates if this is 
a valid combination for an existing user.

> `POST /users/register`  
This api takes in a username/password from the data of a post request and uses it to register a new
user to the server-side db.

##### server/routes/stat.js  
> `GET /stats`  
This api simply returns an object that contains all the relevant high-level statistics information.

##### server/routes/source.js

> `GET /sources/list`
This API acquires available files listed in `project_dir/` in the server.

> `GET /sources/file?path={p}`
This API acquires file with path `p` in `project_dir/`. If the file does not
exist, 404 returned.

#### 2. Front-end Implementation

We have many different apis for different user interfaces of our application. Since this part of the
milestone however only asks for 4 screenshots of very specific functionalities, therefore we will
showcase 4 screenshots for the create/read/update/delete operations for the notes/comments api.

> Create
This screenshot showcases the comments window, and how new comments can be added to it using the
text-field and the 'send' button.

![](../imgs/notes_create.PNG)

> Read
This screenshot just showcases the comments window. The read api is used to read out comments from
the server-side db and lists them on the user interface.
![](../imgs/notes_read.PNG)

> Update
This screenshot showcases how the update api can be used to update a comment on the site
![](../imgs/notes_edit1.PNG)
![](../imgs/notes_edit2.PNG)

> Delete
This screenshot showcases how the delete api can be used to delete a comment on the site
![notes_delete](../imgs/notes_delete1.PNG)
![notes_delete](../imgs/notes_delete2.PNG)


#### 3. Deployment
Our website is currently deployed at boiling-forest-11621.herokuapp.com

#### Work Breakdown
We did almost all of the work on this project together in one room, so we all spent approximately
the same amount of time on this project. We were able to split the project up fairly well during
this time with everyone working on different apis. 
