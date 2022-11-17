meta:
  id: sfuzz
  endian: be
seq:
  - id: p_type
    type: u1
    enum: parse_type
  - id: x_val
    type: u8
  - id: y_val
    type: u8
  - id: x_name_len
    type: u2
  - id: y_name_len
    type: u2
  - id: x_name
    type: str
    size: x_name_len
    encoding: ASCII
  - id: y_name
    type: str
    size: y_name_len
    encoding: ASCII
enums:
  parse_type:
    1: line_graph
    2: source_cov
