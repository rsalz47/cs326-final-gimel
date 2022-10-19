## Milestone 1

#### Data Interactions
#### Wireframes
The below picture represents the basic layout of our site. We intend to have multiple tabs to
showcase different views. Each of these tabs then has 2-3 different views for the user to interact
with.
![wireframe](../imgs/wireframes.png)

#### Page screenshots
- This is the initial Dashboard displayed when the site is first opened by a loged in user. It
displays a window with notes shared between team members, a table describing the users currently on
this project, and 2 tables displaying various high level statistics about the project. This page is
meant to provide a brief initial overview.
![dashboard](../imgs/dashboard.png)

- This page has 2 main views (left and right). Left lists all the functions found in this project
while right displays a control-flow-graph for each function. Different graphs can be opened by
clicking on different functions in the view. Since this graph is meant to showcase coverage data for
a fuzzer to an analyst, basic blocks that have been hit are marked green while basic blocks that
aren't hit are white. Additionally the analyst can click on a function call within a block to
open the graph for that function. The back button can then be used to return to the previous
function.
![cfg](../imgs/cfg.png)

- The config tab once again has multiple views. The left view is used to chose an option window
while the right view displays this view. This first screenshot demonstrates the 'fuzzer options'
view which lets a user chose a fuzzer and define a parse structure that will be used to parse inputs
from the fuzzer into the various graphs we are displaying in this application.
![config1](../imgs/config1.png)

- This screenshot showcases the 'Manage Users' tab. As the name describes it just allows for some
simple user management.
![config2](../imgs/config2.png)

- This is the login window. It is currently not routed to yet, but it can be accessed at
'/login.html' and is the view that a user will use to log into the application.
![login](../imgs/login.png)

#### Work Breakdown

