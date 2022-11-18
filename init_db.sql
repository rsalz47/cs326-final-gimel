DROP SCHEMA fizzy CASCADE;

CREATE SCHEMA fizzy;
CREATE TABLE fizzy.users(id SERIAL PRIMARY KEY, name varchar(255), role varchar(1), handle varchar(255));
CREATE TABLE fizzy.comments(id integer, comment text, timestamp text, name varchar(255));
CREATE TABLE fizzy.stats(cases_total bigint, crash_total bigint, 
			crash_unique bigint, run_time bigint, coverage bigint, 
			cmp_cov bigint, instr_count bigint, timeouts bigint);
CREATE TABLE fizzy.project(name text, fuzzer text, target text, input_dir text, 
			   output_dir text, timestamp text);

INSERT INTO fizzy.stats
VALUES (0, 0, 0, 0, 0, 0, 0, 0);
