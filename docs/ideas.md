#### 326 Final Project 

#### Team Name
- Gimel

#### Application Name
- fizzy

#### Team Overview
- Gilbert Hoermann - seal9055
- Dung Nguyen - dungwinux
- Ronan Salz - rsalz47

#### Innovative Idea
Our project is meant to be a tool for data visualization. The application be targeted at small-team based groups of users with the intention of a private instance being hosted locally. The 
application enables multiple users to review and annotate the displayed data. Users will be 
provided with multiple formats of data visualization to best suit their needs.

This idea does not directly correlate with existing applications as far as we are aware, but it is
intended to be used with program analysis tooling such as fuzzers/tracers that emit a lot of
structured data that would benefit from human readable visualization.

#### Important Components
- User Interface 
    - First step requires creation of a project, after which users will be able to log into the
    application and access the project.
    - Admin interface that can be used to manage account access
    - Configuration tab to setup some options for the project
    - Multiple tabs to display data in different formats such as line graphs, control-flow-graphs,
    and a source code viewer. 
    
- Server side
    - Manage multiple connections for both end users and data transmission from the application that
    provides the data to be visualized
    - Implement logic to parse and visualize data
    - Manage logins

- Database
    - Store User Accounts
    - Store provided data and edits the users made towards the existing data
    - Configuration settings
