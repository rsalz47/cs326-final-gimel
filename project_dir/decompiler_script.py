# Script used to generate the cfg.json file that is used to parse out the control flow graph for our tool

import json

funcs = {}
for func in bv.functions:
    cfg = {}
    cfg["blocks"] = []
    cfg["edges"] = []
    for block in func.medium_level_il.basic_blocks:
        block_instrs = []
        for instr in block.disassembly_text:
            block_instrs.append(str(instr))
        cfg["blocks"].append(block_instrs)
        for edge in block.outgoing_edges:
            cfg["edges"].append((block.index, edge.target.index))
    funcs[func.name] = cfg

with open("/tmp/cfg.json", "w") as f:
    json.dump(funcs, f, indent = 4)

