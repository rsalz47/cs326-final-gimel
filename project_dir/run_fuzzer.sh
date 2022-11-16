#!/bin/bash

cd sfuzz
cargo run --release -- -i in -o out -n 1 -k 127.0.0.1:3001 -- ../simple_test @@

