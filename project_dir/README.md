This 326-project is meant to be a visualization tool for a security tool (eg. a fuzzer).

This directory holds various files related to this project, including the source code of the target 
(simple\_test.c), the compiled binary (simple\_test), the control-flow-graph of the target 
(cfg.json) which was generated using the api of a decompiler, the decompiler\_script.py used to
generate it, and the fuzzer that is used to send real-time data to our web-application that it
generates while fuzzing the target (sfuzz).
