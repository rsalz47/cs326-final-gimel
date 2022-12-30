# Fizzy
Start Date: Oct, 2022

This is a webapp focused on data visualization for binary analysis tools such as fuzzers or tracing
tools. It exposes a simple api to record data from a given tool, and displays it in various forms
that may be useful for manual analysis. View demo video below for demonstration of capabilities.

#### Features
- Controlflow graph colored based on fuzzer coverage information
- Line graphs to display different helpful metrics about the run
- Simple source code editor
- Dashboard displaying most relevant data in a simple manner
- User authorization

#### Setup 
> Serverside Setup (Database and Webapp)
```sh
# Setup database
sudo apt install -y postgres
cd fizzy
/usr/lib/postgresql/14/bin/initdb ./project_dir/db
/usr/lib/postgresql/14/bin/pg_ctl -D ./project_dir/db -l logfile start
psql postgres -a -f ./init_db.sql

# Start webapp (edit url if db and webapp aren't run on same host)
cd fizzy
echo "DATABASE_URL=postgresql://localhost:5432/postgres" > .env
npm i
npm start

# Extra: Create admin account
npm run initadmin
```

> Client Setup (Fuzzer & Target)
```sh
# Fuzzer
Modify fuzzer to send statistics to the webapp using the apis described in #Usage and run it once
the webapp is up.

# Target
project_dir/cfg.json - This file contains the controlflow graph for the target. A script is included
to dump this from a binary using binary ninja, but free tools such as angr can easily accomplish
this too. The docs describe the exact format of this.

project_dir/<Source-Files> - Here u can include various source files for the target. All files with
the following extensions will automatically be loaded into the webapp (c|cpp|S|asm).

```

#### Usage
```
The fuzzer needs to log into the webapp using some valid creds (and save the provided cookie for 
future requests to remain logged in), and then interact with the following 2 api's to transmit 
its data in json format to the webapp.

- POST `/stats/cov`
This API is used by the fuzzer to transmit new coverage data.
Expected request body:
    Array[numbers] (Comma separated array of numbers signifying the addresses that have been hit)

- POST `/stats`
This api is used by the fuzzer to transmit general data, which is then inserted into the database.
Expected request body:
{
    "total_cases": number,
    "crashes": number,
    "ucrashes": number,
    "coverage": number,
    "cmpcov": number,
    "exec_time": number,
    "instr_count": number,
    "timeouts": number,
}
```

#### Demo
![Demo](/imgs/demo.gif)
