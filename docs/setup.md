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
npm i
npm start
```

#### Run Fuzzer
```
???
```

