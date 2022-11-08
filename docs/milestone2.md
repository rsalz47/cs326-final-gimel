## Milestone 2

#### 0. API Documentation 

Usage examples for all of these api's are in `src/frontend/js/client.js`

##### server/server.js
> `/comments/create`  
This api is used to insert a new comment into the server-side db. The web-app uses it to insert 
notes using the message-field in the leftmost view of index.html.

> `/comments/read`  
This api is used to read all the currently existing notes from the server-side db. It is used to eg.
display the notes in the leftmost view of index.html.

> `/comments/update`  
This api is used to update existing comments. It reads out a comment from the database, and changes
its data field based on the changes requested by the user.

> `/comments/delete`  
This api is used to delete an existing comment. It takes in a note id and uses it to delete a note 
from the server-side db. It is used for 

> `/cfg/function_list`  
This api is used to return a list of function names for the target. This api's usecase basically
mirrors just running objdump on the target binary with the option to just look for function nanmes.

> `/cfg/cfg_for_func`  
This api takes in a function name and queries the targets cfg-object to return the control flow
graph for the function corresponding to the name.

##### server/routes/user.js  
> `/users`  
This api returns information about all users

> `users/:id`  
This api takes in a user id from the get request to it and uses it to return the data about a
user-account. 

> `/users/verify`  
This api validates a username/password from the data of a post request and communicates if this is 
a valid combination for an existing user.

> `/users/register`  
This api takes in a username/password from the data of a post request and uses it to register a new
user to the server-side db.

##### server/routes/stat.js  
> `/stats`  
This api simply returns an object that contains all the relevant high-level statistics information.


#### 2. Front-end Implementation

We have many different apis for different user interfaces of our application. Since this part of the
milestone however only asks for 4 screenshots of very specific functionalities, therefore we will
showcase 4 screenshots for the create/read/update/delete operations for the notes/comments api.

> Create
This screenshot showcases the comments window, and how new comments can be added to it using the
text-field and the 'send' button.
![notes_create](../imgs/notes_create.png)

> Read
This screenshot just showcases the comments window. The read api is used to read out comments from
the server-side db and lists them on the user interface.
![notes_read](../imgs/notes_read.png)

> Update
This screenshot showcases how the update api can be used to update a comment on the site
![notes_update](../imgs/notes_update.png)

> Delete
This screenshot showcases how the delete api can be used to delete a comment on the site
![notes_delete](../imgs/notes_delete.png)


#### 3. Deployment

TODO:
1. TODO: Screenshots for the apis in part 2
2. Hosting + setup.md + Finish deploymnet part

#### Work Breakdown
We did almost all of the work on this project together in one room, so we all spent approximately
the same amount of time on this project. We were able to split the project up fairly well during
this time with everyone working on different apis. 
