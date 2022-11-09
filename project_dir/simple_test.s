
simple_test:	file format elf64-x86-64

Disassembly of section .init:

0000000000401000 <_init>:
  401000: f3 0f 1e fa                  	endbr64
  401004: 48 83 ec 08                  	sub	rsp, 8
  401008: 48 8b 05 e9 2f 00 00         	mov	rax, qword ptr [rip + 12265] # 0x403ff8 <simple_test.c+0x403ff8>
  40100f: 48 85 c0                     	test	rax, rax
  401012: 74 02                        	je	0x401016 <_init+0x16>
  401014: ff d0                        	call	rax
  401016: 48 83 c4 08                  	add	rsp, 8
  40101a: c3                           	ret

Disassembly of section .plt:

0000000000401020 <.plt>:
  401020: ff 35 e2 2f 00 00            	push	qword ptr [rip + 12258] # 0x404008 <_GLOBAL_OFFSET_TABLE_+0x8>
  401026: f2 ff 25 e3 2f 00 00         	repne		jmp	qword ptr [rip + 12259] # 0x404010 <_GLOBAL_OFFSET_TABLE_+0x10>
  40102d: 0f 1f 00                     	nop	dword ptr [rax]
  401030: f3 0f 1e fa                  	endbr64
  401034: 68 00 00 00 00               	push	0
  401039: f2 e9 e1 ff ff ff            	repne		jmp	0x401020 <.plt>
  40103f: 90                           	nop
  401040: f3 0f 1e fa                  	endbr64
  401044: 68 01 00 00 00               	push	1
  401049: f2 e9 d1 ff ff ff            	repne		jmp	0x401020 <.plt>
  40104f: 90                           	nop

Disassembly of section .plt.sec:

0000000000401050 <.plt.sec>:
  401050: f3 0f 1e fa                  	endbr64
  401054: f2 ff 25 bd 2f 00 00         	repne		jmp	qword ptr [rip + 12221] # 0x404018 <_GLOBAL_OFFSET_TABLE_+0x18>
  40105b: 0f 1f 44 00 00               	nop	dword ptr [rax + rax]
  401060: f3 0f 1e fa                  	endbr64
  401064: f2 ff 25 b5 2f 00 00         	repne		jmp	qword ptr [rip + 12213] # 0x404020 <_GLOBAL_OFFSET_TABLE_+0x20>
  40106b: 0f 1f 44 00 00               	nop	dword ptr [rax + rax]

Disassembly of section .text:

0000000000401070 <_start>:
  401070: f3 0f 1e fa                  	endbr64
  401074: 31 ed                        	xor	ebp, ebp
  401076: 49 89 d1                     	mov	r9, rdx
  401079: 5e                           	pop	rsi
  40107a: 48 89 e2                     	mov	rdx, rsp
  40107d: 48 83 e4 f0                  	and	rsp, -16
  401081: 50                           	push	rax
  401082: 54                           	push	rsp
  401083: 45 31 c0                     	xor	r8d, r8d
  401086: 31 c9                        	xor	ecx, ecx
  401088: 48 c7 c7 56 11 40 00         	mov	rdi, 4198742
  40108f: ff 15 5b 2f 00 00            	call	qword ptr [rip + 12123] # 0x403ff0 <simple_test.c+0x403ff0>
  401095: f4                           	hlt
  401096: 66 2e 0f 1f 84 00 00 00 00 00	nop	word ptr cs:[rax + rax]

00000000004010a0 <_dl_relocate_static_pie>:
  4010a0: f3 0f 1e fa                  	endbr64
  4010a4: c3                           	ret
  4010a5: 66 2e 0f 1f 84 00 00 00 00 00	nop	word ptr cs:[rax + rax]
  4010af: 90                           	nop

00000000004010b0 <deregister_tm_clones>:
  4010b0: b8 38 40 40 00               	mov	eax, 4210744
  4010b5: 48 3d 38 40 40 00            	cmp	rax, 4210744
  4010bb: 74 13                        	je	0x4010d0 <deregister_tm_clones+0x20>
  4010bd: b8 00 00 00 00               	mov	eax, 0
  4010c2: 48 85 c0                     	test	rax, rax
  4010c5: 74 09                        	je	0x4010d0 <deregister_tm_clones+0x20>
  4010c7: bf 38 40 40 00               	mov	edi, 4210744
  4010cc: ff e0                        	jmp	rax
  4010ce: 66 90                        	nop
  4010d0: c3                           	ret
  4010d1: 66 66 2e 0f 1f 84 00 00 00 00 00     	nop	word ptr cs:[rax + rax]
  4010dc: 0f 1f 40 00                  	nop	dword ptr [rax]

00000000004010e0 <register_tm_clones>:
  4010e0: be 38 40 40 00               	mov	esi, 4210744
  4010e5: 48 81 ee 38 40 40 00         	sub	rsi, 4210744
  4010ec: 48 89 f0                     	mov	rax, rsi
  4010ef: 48 c1 ee 3f                  	shr	rsi, 63
  4010f3: 48 c1 f8 03                  	sar	rax, 3
  4010f7: 48 01 c6                     	add	rsi, rax
  4010fa: 48 d1 fe                     	sar	rsi
  4010fd: 74 11                        	je	0x401110 <register_tm_clones+0x30>
  4010ff: b8 00 00 00 00               	mov	eax, 0
  401104: 48 85 c0                     	test	rax, rax
  401107: 74 07                        	je	0x401110 <register_tm_clones+0x30>
  401109: bf 38 40 40 00               	mov	edi, 4210744
  40110e: ff e0                        	jmp	rax
  401110: c3                           	ret
  401111: 66 66 2e 0f 1f 84 00 00 00 00 00     	nop	word ptr cs:[rax + rax]
  40111c: 0f 1f 40 00                  	nop	dword ptr [rax]

0000000000401120 <__do_global_dtors_aux>:
  401120: f3 0f 1e fa                  	endbr64
  401124: 80 3d 0d 2f 00 00 00         	cmp	byte ptr [rip + 12045], 0 # 0x404038 <completed.0>
  40112b: 75 13                        	jne	0x401140 <__do_global_dtors_aux+0x20>
  40112d: 55                           	push	rbp
  40112e: 48 89 e5                     	mov	rbp, rsp
  401131: e8 7a ff ff ff               	call	0x4010b0 <deregister_tm_clones>
  401136: c6 05 fb 2e 00 00 01         	mov	byte ptr [rip + 12027], 1 # 0x404038 <completed.0>
  40113d: 5d                           	pop	rbp
  40113e: c3                           	ret
  40113f: 90                           	nop
  401140: c3                           	ret
  401141: 66 66 2e 0f 1f 84 00 00 00 00 00     	nop	word ptr cs:[rax + rax]
  40114c: 0f 1f 40 00                  	nop	dword ptr [rax]

0000000000401150 <frame_dummy>:
  401150: f3 0f 1e fa                  	endbr64
  401154: eb 8a                        	jmp	0x4010e0 <register_tm_clones>

0000000000401156 <main>:
  401156: f3 0f 1e fa                  	endbr64
  40115a: 55                           	push	rbp
  40115b: 48 89 e5                     	mov	rbp, rsp
  40115e: 48 83 c4 80                  	add	rsp, -128
  401162: 89 7d 8c                     	mov	dword ptr [rbp - 116], edi
  401165: 48 89 75 80                  	mov	qword ptr [rbp - 128], rsi
  401169: 48 8b 45 80                  	mov	rax, qword ptr [rbp - 128]
  40116d: 48 83 c0 08                  	add	rax, 8
  401171: 48 8b 00                     	mov	rax, qword ptr [rax]
  401174: be 00 00 00 00               	mov	esi, 0
  401179: 48 89 c7                     	mov	rdi, rax
  40117c: b8 00 00 00 00               	mov	eax, 0
  401181: e8 da fe ff ff               	call	0x401060 <.plt.sec+0x10>
  401186: 89 45 fc                     	mov	dword ptr [rbp - 4], eax
  401189: 48 8d 4d 90                  	lea	rcx, [rbp - 112]
  40118d: 8b 45 fc                     	mov	eax, dword ptr [rbp - 4]
  401190: ba 64 00 00 00               	mov	edx, 100
  401195: 48 89 ce                     	mov	rsi, rcx
  401198: 89 c7                        	mov	edi, eax
  40119a: b8 00 00 00 00               	mov	eax, 0
  40119f: e8 ac fe ff ff               	call	0x401050 <.plt.sec>
  4011a4: 0f b6 45 90                  	movzx	eax, byte ptr [rbp - 112]
  4011a8: 3c 41                        	cmp	al, 65
  4011aa: 75 39                        	jne	0x4011e5 <main+0x8f>
  4011ac: 0f b6 45 91                  	movzx	eax, byte ptr [rbp - 111]
  4011b0: 3c 42                        	cmp	al, 66
  4011b2: 75 31                        	jne	0x4011e5 <main+0x8f>
  4011b4: 0f b6 45 92                  	movzx	eax, byte ptr [rbp - 110]
  4011b8: 3c 43                        	cmp	al, 67
  4011ba: 75 29                        	jne	0x4011e5 <main+0x8f>
  4011bc: 0f b6 45 93                  	movzx	eax, byte ptr [rbp - 109]
  4011c0: 3c 44                        	cmp	al, 68
  4011c2: 75 21                        	jne	0x4011e5 <main+0x8f>
  4011c4: 0f b6 45 94                  	movzx	eax, byte ptr [rbp - 108]
  4011c8: 3c 45                        	cmp	al, 69
  4011ca: 75 19                        	jne	0x4011e5 <main+0x8f>
  4011cc: 0f b6 45 95                  	movzx	eax, byte ptr [rbp - 107]
  4011d0: 3c 46                        	cmp	al, 70
  4011d2: 75 11                        	jne	0x4011e5 <main+0x8f>
  4011d4: 48 b8 41 41 41 41 41 41 41 41	movabs	rax, 4702111234474983745
  4011de: 48 c7 00 00 00 00 00         	mov	qword ptr [rax], 0
  4011e5: b8 00 00 00 00               	mov	eax, 0
  4011ea: c9                           	leave
  4011eb: c3                           	ret

Disassembly of section .fini:

00000000004011ec <_fini>:
  4011ec: f3 0f 1e fa                  	endbr64
  4011f0: 48 83 ec 08                  	sub	rsp, 8
  4011f4: 48 83 c4 08                  	add	rsp, 8
  4011f8: c3                           	ret
