#### Quick-start Guide
```
Our application is generally divided into 2 parts. The server portion which manages database
interactions and persistent data, and the local instance that generates new data and allows for user
interaction. The webapp visualizes data that is transmitted by a fuzzer that is run on a local
client.

If you want to test the webapp remotely, you can simply access it at: 
https://boiling-forest-11261.herokuapp.com/ (note that this won't run the fuzzer, so no new data
will be automatically generated/visualized by the website, it will still support all features of the
tool while running on default, generally 0-initialized, data)

For more extensive testing, the below instructions can be used to run the fuzzer locally to generate
more dynamic data for the webapp to visualize. 

The db-setup instructions are not necessary for interacting with the remote heroku instance, but can
be used if you wish to host the webserver on a local device.
```

#### DB Setup
```
sudo apt install postgresql
/usr/lib/postgresql/14/bin/initdb ./project_dir/db
/usr/lib/postgresql/14/bin/pg_ctl -D ./project_dir/db -l logfile start
psql postgres -a -f ./init_db.sql

IF ERROR (LOG:  could not bind IPv4 address "127.0.0.1": Address already in use):
    $ sudo systemctl stop postgresql

IF ERROR (FATAL:  could not create lock file "/var/run/postgresql/.s.PGSQL.5432.lock": Permission denied):
    $ Chown listed directory to current user
```

#### Run Webapp
```
If you are hosting the project locally, you must point the webapp to the database before starting the webapp.
Simply create an enivronment variable `DATABASE_URL` with value set to your database location
(i.e: postgresql://localhost:5432/postgres)
Alternatively, at the root of webapp, create an `.env` file, and add the following line:
DATABASE_URL=<Your database URL>

To install necessary dependencies and start the webapp, do:
npm i
npm start
```

#### Account Creation in Webapp
Interaction with our Account Creation functionality can be found at localhost:3001/src/frontend/login.html. 

#### Run Fuzzer
```
The fuzzer is compatible with linux.
To run it simply execute project_dir/run_fuzzer. We will have a demo of 
this for the final submission.
```

