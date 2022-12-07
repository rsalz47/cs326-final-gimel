DROP SCHEMA fizzy CASCADE;

CREATE SCHEMA fizzy;
CREATE TABLE fizzy.users(id SERIAL PRIMARY KEY, name varchar(255), role varchar(1), handle varchar(255));
CREATE TABLE fizzy.comments(id SERIAL PRIMARY KEY, comment text, timestamp text, name varchar(255));
CREATE TABLE fizzy.stats(cases_total bigint, crash_total bigint, 
			crash_unique bigint, run_time bigint, coverage bigint, 
			cmp_cov bigint, instr_count bigint, timeouts bigint);
CREATE TABLE fizzy.projects(name text, fuzzer text, target text, input_dir text, 
			   output_dir text, time_stamp text);
CREATE TABLE fizzy.credentials(id integer, hash char(128), salt char(32));

-- Sample data
INSERT INTO fizzy.users ("name", "role", handle)
VALUES ('Admin', 'A', 'admin');

INSERT INTO fizzy.stats
VALUES (0, 0, 0, 0, 0, 0, 0, 0);

INSERT INTO fizzy.comments (name, comment, timestamp)
VALUES ('sample_user', 'I would love a hug', 'Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)');
