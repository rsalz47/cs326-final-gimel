
./simple_test:     file format elf64-littleriscv


Disassembly of section .text:

00000000000100e8 <exit>:
   100e8:	ff010113          	addi	sp,sp,-16
   100ec:	00000593          	li	a1,0
   100f0:	00813023          	sd	s0,0(sp)
   100f4:	00113423          	sd	ra,8(sp)
   100f8:	00050413          	mv	s0,a0
   100fc:	39c000ef          	jal	ra,10498 <__call_exitprocs>
   10100:	7501b503          	ld	a0,1872(gp) # 136e8 <_global_impure_ptr>
   10104:	05853783          	ld	a5,88(a0)
   10108:	00078463          	beqz	a5,10110 <exit+0x28>
   1010c:	000780e7          	jalr	a5
   10110:	00040513          	mv	a0,s0
   10114:	514010ef          	jal	ra,11628 <_exit>

0000000000010118 <register_fini>:
   10118:	00000793          	li	a5,0
   1011c:	00078863          	beqz	a5,1012c <register_fini+0x14>
   10120:	00010537          	lui	a0,0x10
   10124:	5c050513          	addi	a0,a0,1472 # 105c0 <__libc_fini_array>
   10128:	7740006f          	j	1089c <atexit>
   1012c:	00008067          	ret

0000000000010130 <_start>:
   10130:	00003197          	auipc	gp,0x3
   10134:	e6818193          	addi	gp,gp,-408 # 12f98 <__global_pointer$>
   10138:	77818513          	addi	a0,gp,1912 # 13710 <errno>
   1013c:	00003617          	auipc	a2,0x3
   10140:	65c60613          	addi	a2,a2,1628 # 13798 <__BSS_END__>
   10144:	40a60633          	sub	a2,a2,a0
   10148:	00000593          	li	a1,0
   1014c:	20c000ef          	jal	ra,10358 <memset>
   10150:	00000517          	auipc	a0,0x0
   10154:	74c50513          	addi	a0,a0,1868 # 1089c <atexit>
   10158:	00050863          	beqz	a0,10168 <_start+0x38>
   1015c:	00000517          	auipc	a0,0x0
   10160:	46450513          	addi	a0,a0,1124 # 105c0 <__libc_fini_array>
   10164:	738000ef          	jal	ra,1089c <atexit>
   10168:	154000ef          	jal	ra,102bc <__libc_init_array>
   1016c:	00012503          	lw	a0,0(sp)
   10170:	00810593          	addi	a1,sp,8
   10174:	00000613          	li	a2,0
   10178:	06c000ef          	jal	ra,101e4 <main>
   1017c:	f6dff06f          	j	100e8 <exit>

0000000000010180 <__do_global_dtors_aux>:
   10180:	ff010113          	addi	sp,sp,-16
   10184:	00813023          	sd	s0,0(sp)
   10188:	7a01c783          	lbu	a5,1952(gp) # 13738 <completed.1>
   1018c:	00113423          	sd	ra,8(sp)
   10190:	02079263          	bnez	a5,101b4 <__do_global_dtors_aux+0x34>
   10194:	00000793          	li	a5,0
   10198:	00078a63          	beqz	a5,101ac <__do_global_dtors_aux+0x2c>
   1019c:	00012537          	lui	a0,0x12
   101a0:	77050513          	addi	a0,a0,1904 # 12770 <__FRAME_END__>
   101a4:	00000097          	auipc	ra,0x0
   101a8:	000000e7          	jalr	zero # 0 <exit-0x100e8>
   101ac:	00100793          	li	a5,1
   101b0:	7af18023          	sb	a5,1952(gp) # 13738 <completed.1>
   101b4:	00813083          	ld	ra,8(sp)
   101b8:	00013403          	ld	s0,0(sp)
   101bc:	01010113          	addi	sp,sp,16
   101c0:	00008067          	ret

00000000000101c4 <frame_dummy>:
   101c4:	00000793          	li	a5,0
   101c8:	00078c63          	beqz	a5,101e0 <frame_dummy+0x1c>
   101cc:	00012537          	lui	a0,0x12
   101d0:	7a818593          	addi	a1,gp,1960 # 13740 <object.0>
   101d4:	77050513          	addi	a0,a0,1904 # 12770 <__FRAME_END__>
   101d8:	00000317          	auipc	t1,0x0
   101dc:	00000067          	jr	zero # 0 <exit-0x100e8>
   101e0:	00008067          	ret

00000000000101e4 <main>:
   101e4:	f7010113          	addi	sp,sp,-144
   101e8:	08113423          	sd	ra,136(sp)
   101ec:	08813023          	sd	s0,128(sp)
   101f0:	09010413          	addi	s0,sp,144
   101f4:	00050793          	mv	a5,a0
   101f8:	f6b43823          	sd	a1,-144(s0)
   101fc:	f6f42e23          	sw	a5,-132(s0)
   10200:	f7043783          	ld	a5,-144(s0)
   10204:	00878793          	addi	a5,a5,8
   10208:	0007b783          	ld	a5,0(a5)
   1020c:	00000593          	li	a1,0
   10210:	00078513          	mv	a0,a5
   10214:	220000ef          	jal	ra,10434 <open>
   10218:	00050793          	mv	a5,a0
   1021c:	fef42623          	sw	a5,-20(s0)
   10220:	f8840713          	addi	a4,s0,-120
   10224:	fec42783          	lw	a5,-20(s0)
   10228:	06400613          	li	a2,100
   1022c:	00070593          	mv	a1,a4
   10230:	00078513          	mv	a0,a5
   10234:	24c000ef          	jal	ra,10480 <read>
   10238:	f8844783          	lbu	a5,-120(s0)
   1023c:	00078713          	mv	a4,a5
   10240:	04100793          	li	a5,65
   10244:	06f71063          	bne	a4,a5,102a4 <main+0xc0>
   10248:	f8944783          	lbu	a5,-119(s0)
   1024c:	00078713          	mv	a4,a5
   10250:	04200793          	li	a5,66
   10254:	04f71863          	bne	a4,a5,102a4 <main+0xc0>
   10258:	f8a44783          	lbu	a5,-118(s0)
   1025c:	00078713          	mv	a4,a5
   10260:	04300793          	li	a5,67
   10264:	04f71063          	bne	a4,a5,102a4 <main+0xc0>
   10268:	f8b44783          	lbu	a5,-117(s0)
   1026c:	00078713          	mv	a4,a5
   10270:	04400793          	li	a5,68
   10274:	02f71863          	bne	a4,a5,102a4 <main+0xc0>
   10278:	f8c44783          	lbu	a5,-116(s0)
   1027c:	00078713          	mv	a4,a5
   10280:	04500793          	li	a5,69
   10284:	02f71063          	bne	a4,a5,102a4 <main+0xc0>
   10288:	f8d44783          	lbu	a5,-115(s0)
   1028c:	00078713          	mv	a4,a5
   10290:	04600793          	li	a5,70
   10294:	00f71863          	bne	a4,a5,102a4 <main+0xc0>
   10298:	000117b7          	lui	a5,0x11
   1029c:	7687b783          	ld	a5,1896(a5) # 11768 <__errno+0xc>
   102a0:	0007b023          	sd	zero,0(a5)
   102a4:	00000793          	li	a5,0
   102a8:	00078513          	mv	a0,a5
   102ac:	08813083          	ld	ra,136(sp)
   102b0:	08013403          	ld	s0,128(sp)
   102b4:	09010113          	addi	sp,sp,144
   102b8:	00008067          	ret

00000000000102bc <__libc_init_array>:
   102bc:	fe010113          	addi	sp,sp,-32
   102c0:	00813823          	sd	s0,16(sp)
   102c4:	01213023          	sd	s2,0(sp)
   102c8:	00012437          	lui	s0,0x12
   102cc:	00012937          	lui	s2,0x12
   102d0:	77440793          	addi	a5,s0,1908 # 12774 <__preinit_array_end>
   102d4:	77490913          	addi	s2,s2,1908 # 12774 <__preinit_array_end>
   102d8:	40f90933          	sub	s2,s2,a5
   102dc:	00113c23          	sd	ra,24(sp)
   102e0:	00913423          	sd	s1,8(sp)
   102e4:	40395913          	srai	s2,s2,0x3
   102e8:	02090063          	beqz	s2,10308 <__libc_init_array+0x4c>
   102ec:	77440413          	addi	s0,s0,1908
   102f0:	00000493          	li	s1,0
   102f4:	00043783          	ld	a5,0(s0)
   102f8:	00148493          	addi	s1,s1,1
   102fc:	00840413          	addi	s0,s0,8
   10300:	000780e7          	jalr	a5
   10304:	fe9918e3          	bne	s2,s1,102f4 <__libc_init_array+0x38>
   10308:	00012437          	lui	s0,0x12
   1030c:	00012937          	lui	s2,0x12
   10310:	77840793          	addi	a5,s0,1912 # 12778 <__init_array_start>
   10314:	78890913          	addi	s2,s2,1928 # 12788 <__do_global_dtors_aux_fini_array_entry>
   10318:	40f90933          	sub	s2,s2,a5
   1031c:	40395913          	srai	s2,s2,0x3
   10320:	02090063          	beqz	s2,10340 <__libc_init_array+0x84>
   10324:	77840413          	addi	s0,s0,1912
   10328:	00000493          	li	s1,0
   1032c:	00043783          	ld	a5,0(s0)
   10330:	00148493          	addi	s1,s1,1
   10334:	00840413          	addi	s0,s0,8
   10338:	000780e7          	jalr	a5
   1033c:	fe9918e3          	bne	s2,s1,1032c <__libc_init_array+0x70>
   10340:	01813083          	ld	ra,24(sp)
   10344:	01013403          	ld	s0,16(sp)
   10348:	00813483          	ld	s1,8(sp)
   1034c:	00013903          	ld	s2,0(sp)
   10350:	02010113          	addi	sp,sp,32
   10354:	00008067          	ret

0000000000010358 <memset>:
   10358:	00f00313          	li	t1,15
   1035c:	00050713          	mv	a4,a0
   10360:	02c37a63          	bgeu	t1,a2,10394 <memset+0x3c>
   10364:	00f77793          	andi	a5,a4,15
   10368:	0a079063          	bnez	a5,10408 <memset+0xb0>
   1036c:	06059e63          	bnez	a1,103e8 <memset+0x90>
   10370:	ff067693          	andi	a3,a2,-16
   10374:	00f67613          	andi	a2,a2,15
   10378:	00e686b3          	add	a3,a3,a4
   1037c:	00b73023          	sd	a1,0(a4)
   10380:	00b73423          	sd	a1,8(a4)
   10384:	01070713          	addi	a4,a4,16
   10388:	fed76ae3          	bltu	a4,a3,1037c <memset+0x24>
   1038c:	00061463          	bnez	a2,10394 <memset+0x3c>
   10390:	00008067          	ret
   10394:	40c306b3          	sub	a3,t1,a2
   10398:	00269693          	slli	a3,a3,0x2
   1039c:	00000297          	auipc	t0,0x0
   103a0:	005686b3          	add	a3,a3,t0
   103a4:	00c68067          	jr	12(a3)
   103a8:	00b70723          	sb	a1,14(a4)
   103ac:	00b706a3          	sb	a1,13(a4)
   103b0:	00b70623          	sb	a1,12(a4)
   103b4:	00b705a3          	sb	a1,11(a4)
   103b8:	00b70523          	sb	a1,10(a4)
   103bc:	00b704a3          	sb	a1,9(a4)
   103c0:	00b70423          	sb	a1,8(a4)
   103c4:	00b703a3          	sb	a1,7(a4)
   103c8:	00b70323          	sb	a1,6(a4)
   103cc:	00b702a3          	sb	a1,5(a4)
   103d0:	00b70223          	sb	a1,4(a4)
   103d4:	00b701a3          	sb	a1,3(a4)
   103d8:	00b70123          	sb	a1,2(a4)
   103dc:	00b700a3          	sb	a1,1(a4)
   103e0:	00b70023          	sb	a1,0(a4)
   103e4:	00008067          	ret
   103e8:	0ff5f593          	zext.b	a1,a1
   103ec:	00859693          	slli	a3,a1,0x8
   103f0:	00d5e5b3          	or	a1,a1,a3
   103f4:	01059693          	slli	a3,a1,0x10
   103f8:	00d5e5b3          	or	a1,a1,a3
   103fc:	02059693          	slli	a3,a1,0x20
   10400:	00d5e5b3          	or	a1,a1,a3
   10404:	f6dff06f          	j	10370 <memset+0x18>
   10408:	00279693          	slli	a3,a5,0x2
   1040c:	00000297          	auipc	t0,0x0
   10410:	005686b3          	add	a3,a3,t0
   10414:	00008293          	mv	t0,ra
   10418:	f98680e7          	jalr	-104(a3)
   1041c:	00028093          	mv	ra,t0
   10420:	ff078793          	addi	a5,a5,-16
   10424:	40f70733          	sub	a4,a4,a5
   10428:	00f60633          	add	a2,a2,a5
   1042c:	f6c374e3          	bgeu	t1,a2,10394 <memset+0x3c>
   10430:	f3dff06f          	j	1036c <memset+0x14>

0000000000010434 <open>:
   10434:	00050313          	mv	t1,a0
   10438:	7601b503          	ld	a0,1888(gp) # 136f8 <_impure_ptr>
   1043c:	fb010113          	addi	sp,sp,-80
   10440:	02c13023          	sd	a2,32(sp)
   10444:	02d13423          	sd	a3,40(sp)
   10448:	02f13c23          	sd	a5,56(sp)
   1044c:	0006069b          	sext.w	a3,a2
   10450:	02010793          	addi	a5,sp,32
   10454:	00058613          	mv	a2,a1
   10458:	00030593          	mv	a1,t1
   1045c:	00113c23          	sd	ra,24(sp)
   10460:	02e13823          	sd	a4,48(sp)
   10464:	05013023          	sd	a6,64(sp)
   10468:	05113423          	sd	a7,72(sp)
   1046c:	00f13423          	sd	a5,8(sp)
   10470:	1ac000ef          	jal	ra,1061c <_open_r>
   10474:	01813083          	ld	ra,24(sp)
   10478:	05010113          	addi	sp,sp,80
   1047c:	00008067          	ret

0000000000010480 <read>:
   10480:	00050793          	mv	a5,a0
   10484:	7601b503          	ld	a0,1888(gp) # 136f8 <_impure_ptr>
   10488:	00060693          	mv	a3,a2
   1048c:	00058613          	mv	a2,a1
   10490:	00078593          	mv	a1,a5
   10494:	1f00006f          	j	10684 <_read_r>

0000000000010498 <__call_exitprocs>:
   10498:	fb010113          	addi	sp,sp,-80
   1049c:	03413023          	sd	s4,32(sp)
   104a0:	7501ba03          	ld	s4,1872(gp) # 136e8 <_global_impure_ptr>
   104a4:	03213823          	sd	s2,48(sp)
   104a8:	04113423          	sd	ra,72(sp)
   104ac:	1f8a3903          	ld	s2,504(s4)
   104b0:	04813023          	sd	s0,64(sp)
   104b4:	02913c23          	sd	s1,56(sp)
   104b8:	03313423          	sd	s3,40(sp)
   104bc:	01513c23          	sd	s5,24(sp)
   104c0:	01613823          	sd	s6,16(sp)
   104c4:	01713423          	sd	s7,8(sp)
   104c8:	01813023          	sd	s8,0(sp)
   104cc:	04090063          	beqz	s2,1050c <__call_exitprocs+0x74>
   104d0:	00050b13          	mv	s6,a0
   104d4:	00058b93          	mv	s7,a1
   104d8:	00100a93          	li	s5,1
   104dc:	fff00993          	li	s3,-1
   104e0:	00892483          	lw	s1,8(s2)
   104e4:	fff4841b          	addiw	s0,s1,-1
   104e8:	02044263          	bltz	s0,1050c <__call_exitprocs+0x74>
   104ec:	00349493          	slli	s1,s1,0x3
   104f0:	009904b3          	add	s1,s2,s1
   104f4:	040b8463          	beqz	s7,1053c <__call_exitprocs+0xa4>
   104f8:	2084b783          	ld	a5,520(s1)
   104fc:	05778063          	beq	a5,s7,1053c <__call_exitprocs+0xa4>
   10500:	fff4041b          	addiw	s0,s0,-1
   10504:	ff848493          	addi	s1,s1,-8
   10508:	ff3416e3          	bne	s0,s3,104f4 <__call_exitprocs+0x5c>
   1050c:	04813083          	ld	ra,72(sp)
   10510:	04013403          	ld	s0,64(sp)
   10514:	03813483          	ld	s1,56(sp)
   10518:	03013903          	ld	s2,48(sp)
   1051c:	02813983          	ld	s3,40(sp)
   10520:	02013a03          	ld	s4,32(sp)
   10524:	01813a83          	ld	s5,24(sp)
   10528:	01013b03          	ld	s6,16(sp)
   1052c:	00813b83          	ld	s7,8(sp)
   10530:	00013c03          	ld	s8,0(sp)
   10534:	05010113          	addi	sp,sp,80
   10538:	00008067          	ret
   1053c:	00892783          	lw	a5,8(s2)
   10540:	0084b703          	ld	a4,8(s1)
   10544:	fff7879b          	addiw	a5,a5,-1
   10548:	06878263          	beq	a5,s0,105ac <__call_exitprocs+0x114>
   1054c:	0004b423          	sd	zero,8(s1)
   10550:	fa0708e3          	beqz	a4,10500 <__call_exitprocs+0x68>
   10554:	31092783          	lw	a5,784(s2)
   10558:	008a96bb          	sllw	a3,s5,s0
   1055c:	00892c03          	lw	s8,8(s2)
   10560:	00d7f7b3          	and	a5,a5,a3
   10564:	0007879b          	sext.w	a5,a5
   10568:	02079263          	bnez	a5,1058c <__call_exitprocs+0xf4>
   1056c:	000700e7          	jalr	a4
   10570:	00892703          	lw	a4,8(s2)
   10574:	1f8a3783          	ld	a5,504(s4)
   10578:	01871463          	bne	a4,s8,10580 <__call_exitprocs+0xe8>
   1057c:	f92782e3          	beq	a5,s2,10500 <__call_exitprocs+0x68>
   10580:	f80786e3          	beqz	a5,1050c <__call_exitprocs+0x74>
   10584:	00078913          	mv	s2,a5
   10588:	f59ff06f          	j	104e0 <__call_exitprocs+0x48>
   1058c:	31492783          	lw	a5,788(s2)
   10590:	1084b583          	ld	a1,264(s1)
   10594:	00d7f7b3          	and	a5,a5,a3
   10598:	0007879b          	sext.w	a5,a5
   1059c:	00079c63          	bnez	a5,105b4 <__call_exitprocs+0x11c>
   105a0:	000b0513          	mv	a0,s6
   105a4:	000700e7          	jalr	a4
   105a8:	fc9ff06f          	j	10570 <__call_exitprocs+0xd8>
   105ac:	00892423          	sw	s0,8(s2)
   105b0:	fa1ff06f          	j	10550 <__call_exitprocs+0xb8>
   105b4:	00058513          	mv	a0,a1
   105b8:	000700e7          	jalr	a4
   105bc:	fb5ff06f          	j	10570 <__call_exitprocs+0xd8>

00000000000105c0 <__libc_fini_array>:
   105c0:	fe010113          	addi	sp,sp,-32
   105c4:	00813823          	sd	s0,16(sp)
   105c8:	000127b7          	lui	a5,0x12
   105cc:	00012437          	lui	s0,0x12
   105d0:	78878793          	addi	a5,a5,1928 # 12788 <__do_global_dtors_aux_fini_array_entry>
   105d4:	79040413          	addi	s0,s0,1936 # 12790 <impure_data>
   105d8:	40f40433          	sub	s0,s0,a5
   105dc:	00913423          	sd	s1,8(sp)
   105e0:	00113c23          	sd	ra,24(sp)
   105e4:	40345493          	srai	s1,s0,0x3
   105e8:	02048063          	beqz	s1,10608 <__libc_fini_array+0x48>
   105ec:	ff840413          	addi	s0,s0,-8
   105f0:	00f40433          	add	s0,s0,a5
   105f4:	00043783          	ld	a5,0(s0)
   105f8:	fff48493          	addi	s1,s1,-1
   105fc:	ff840413          	addi	s0,s0,-8
   10600:	000780e7          	jalr	a5
   10604:	fe0498e3          	bnez	s1,105f4 <__libc_fini_array+0x34>
   10608:	01813083          	ld	ra,24(sp)
   1060c:	01013403          	ld	s0,16(sp)
   10610:	00813483          	ld	s1,8(sp)
   10614:	02010113          	addi	sp,sp,32
   10618:	00008067          	ret

000000000001061c <_open_r>:
   1061c:	fe010113          	addi	sp,sp,-32
   10620:	00058713          	mv	a4,a1
   10624:	00813823          	sd	s0,16(sp)
   10628:	00913423          	sd	s1,8(sp)
   1062c:	00060593          	mv	a1,a2
   10630:	00050413          	mv	s0,a0
   10634:	00068613          	mv	a2,a3
   10638:	00070513          	mv	a0,a4
   1063c:	00113c23          	sd	ra,24(sp)
   10640:	7601ac23          	sw	zero,1912(gp) # 13710 <errno>
   10644:	014010ef          	jal	ra,11658 <_open>
   10648:	fff00793          	li	a5,-1
   1064c:	00f50c63          	beq	a0,a5,10664 <_open_r+0x48>
   10650:	01813083          	ld	ra,24(sp)
   10654:	01013403          	ld	s0,16(sp)
   10658:	00813483          	ld	s1,8(sp)
   1065c:	02010113          	addi	sp,sp,32
   10660:	00008067          	ret
   10664:	7781a783          	lw	a5,1912(gp) # 13710 <errno>
   10668:	fe0784e3          	beqz	a5,10650 <_open_r+0x34>
   1066c:	01813083          	ld	ra,24(sp)
   10670:	00f42023          	sw	a5,0(s0)
   10674:	01013403          	ld	s0,16(sp)
   10678:	00813483          	ld	s1,8(sp)
   1067c:	02010113          	addi	sp,sp,32
   10680:	00008067          	ret

0000000000010684 <_read_r>:
   10684:	fe010113          	addi	sp,sp,-32
   10688:	00058713          	mv	a4,a1
   1068c:	00813823          	sd	s0,16(sp)
   10690:	00913423          	sd	s1,8(sp)
   10694:	00060593          	mv	a1,a2
   10698:	00050413          	mv	s0,a0
   1069c:	00068613          	mv	a2,a3
   106a0:	00070513          	mv	a0,a4
   106a4:	00113c23          	sd	ra,24(sp)
   106a8:	7601ac23          	sw	zero,1912(gp) # 13710 <errno>
   106ac:	7f1000ef          	jal	ra,1169c <_read>
   106b0:	fff00793          	li	a5,-1
   106b4:	00f50c63          	beq	a0,a5,106cc <_read_r+0x48>
   106b8:	01813083          	ld	ra,24(sp)
   106bc:	01013403          	ld	s0,16(sp)
   106c0:	00813483          	ld	s1,8(sp)
   106c4:	02010113          	addi	sp,sp,32
   106c8:	00008067          	ret
   106cc:	7781a783          	lw	a5,1912(gp) # 13710 <errno>
   106d0:	fe0784e3          	beqz	a5,106b8 <_read_r+0x34>
   106d4:	01813083          	ld	ra,24(sp)
   106d8:	00f42023          	sw	a5,0(s0)
   106dc:	01013403          	ld	s0,16(sp)
   106e0:	00813483          	ld	s1,8(sp)
   106e4:	02010113          	addi	sp,sp,32
   106e8:	00008067          	ret

00000000000106ec <cleanup_glue>:
   106ec:	fd010113          	addi	sp,sp,-48
   106f0:	01213823          	sd	s2,16(sp)
   106f4:	0005b903          	ld	s2,0(a1)
   106f8:	02813023          	sd	s0,32(sp)
   106fc:	00913c23          	sd	s1,24(sp)
   10700:	02113423          	sd	ra,40(sp)
   10704:	01313423          	sd	s3,8(sp)
   10708:	01413023          	sd	s4,0(sp)
   1070c:	00058413          	mv	s0,a1
   10710:	00050493          	mv	s1,a0
   10714:	04090263          	beqz	s2,10758 <cleanup_glue+0x6c>
   10718:	00093983          	ld	s3,0(s2)
   1071c:	02098863          	beqz	s3,1074c <cleanup_glue+0x60>
   10720:	0009ba03          	ld	s4,0(s3)
   10724:	000a0e63          	beqz	s4,10740 <cleanup_glue+0x54>
   10728:	000a3583          	ld	a1,0(s4)
   1072c:	00058463          	beqz	a1,10734 <cleanup_glue+0x48>
   10730:	fbdff0ef          	jal	ra,106ec <cleanup_glue>
   10734:	000a0593          	mv	a1,s4
   10738:	00048513          	mv	a0,s1
   1073c:	2b0000ef          	jal	ra,109ec <_free_r>
   10740:	00098593          	mv	a1,s3
   10744:	00048513          	mv	a0,s1
   10748:	2a4000ef          	jal	ra,109ec <_free_r>
   1074c:	00090593          	mv	a1,s2
   10750:	00048513          	mv	a0,s1
   10754:	298000ef          	jal	ra,109ec <_free_r>
   10758:	00040593          	mv	a1,s0
   1075c:	02013403          	ld	s0,32(sp)
   10760:	02813083          	ld	ra,40(sp)
   10764:	01013903          	ld	s2,16(sp)
   10768:	00813983          	ld	s3,8(sp)
   1076c:	00013a03          	ld	s4,0(sp)
   10770:	00048513          	mv	a0,s1
   10774:	01813483          	ld	s1,24(sp)
   10778:	03010113          	addi	sp,sp,48
   1077c:	2700006f          	j	109ec <_free_r>

0000000000010780 <_reclaim_reent>:
   10780:	7601b783          	ld	a5,1888(gp) # 136f8 <_impure_ptr>
   10784:	10a78a63          	beq	a5,a0,10898 <_reclaim_reent+0x118>
   10788:	07853583          	ld	a1,120(a0)
   1078c:	fd010113          	addi	sp,sp,-48
   10790:	00913c23          	sd	s1,24(sp)
   10794:	02113423          	sd	ra,40(sp)
   10798:	02813023          	sd	s0,32(sp)
   1079c:	01213823          	sd	s2,16(sp)
   107a0:	01313423          	sd	s3,8(sp)
   107a4:	00050493          	mv	s1,a0
   107a8:	04058063          	beqz	a1,107e8 <_reclaim_reent+0x68>
   107ac:	00000913          	li	s2,0
   107b0:	20000993          	li	s3,512
   107b4:	012587b3          	add	a5,a1,s2
   107b8:	0007b403          	ld	s0,0(a5)
   107bc:	00040e63          	beqz	s0,107d8 <_reclaim_reent+0x58>
   107c0:	00040593          	mv	a1,s0
   107c4:	00043403          	ld	s0,0(s0)
   107c8:	00048513          	mv	a0,s1
   107cc:	220000ef          	jal	ra,109ec <_free_r>
   107d0:	fe0418e3          	bnez	s0,107c0 <_reclaim_reent+0x40>
   107d4:	0784b583          	ld	a1,120(s1)
   107d8:	00890913          	addi	s2,s2,8
   107dc:	fd391ce3          	bne	s2,s3,107b4 <_reclaim_reent+0x34>
   107e0:	00048513          	mv	a0,s1
   107e4:	208000ef          	jal	ra,109ec <_free_r>
   107e8:	0604b583          	ld	a1,96(s1)
   107ec:	00058663          	beqz	a1,107f8 <_reclaim_reent+0x78>
   107f0:	00048513          	mv	a0,s1
   107f4:	1f8000ef          	jal	ra,109ec <_free_r>
   107f8:	1f84b403          	ld	s0,504(s1)
   107fc:	02040063          	beqz	s0,1081c <_reclaim_reent+0x9c>
   10800:	20048913          	addi	s2,s1,512
   10804:	01240c63          	beq	s0,s2,1081c <_reclaim_reent+0x9c>
   10808:	00040593          	mv	a1,s0
   1080c:	00043403          	ld	s0,0(s0)
   10810:	00048513          	mv	a0,s1
   10814:	1d8000ef          	jal	ra,109ec <_free_r>
   10818:	fe8918e3          	bne	s2,s0,10808 <_reclaim_reent+0x88>
   1081c:	0884b583          	ld	a1,136(s1)
   10820:	00058663          	beqz	a1,1082c <_reclaim_reent+0xac>
   10824:	00048513          	mv	a0,s1
   10828:	1c4000ef          	jal	ra,109ec <_free_r>
   1082c:	0504a783          	lw	a5,80(s1)
   10830:	04078663          	beqz	a5,1087c <_reclaim_reent+0xfc>
   10834:	0584b783          	ld	a5,88(s1)
   10838:	00048513          	mv	a0,s1
   1083c:	000780e7          	jalr	a5
   10840:	5204b403          	ld	s0,1312(s1)
   10844:	02040c63          	beqz	s0,1087c <_reclaim_reent+0xfc>
   10848:	00043583          	ld	a1,0(s0)
   1084c:	00058663          	beqz	a1,10858 <_reclaim_reent+0xd8>
   10850:	00048513          	mv	a0,s1
   10854:	e99ff0ef          	jal	ra,106ec <cleanup_glue>
   10858:	00040593          	mv	a1,s0
   1085c:	02013403          	ld	s0,32(sp)
   10860:	02813083          	ld	ra,40(sp)
   10864:	01013903          	ld	s2,16(sp)
   10868:	00813983          	ld	s3,8(sp)
   1086c:	00048513          	mv	a0,s1
   10870:	01813483          	ld	s1,24(sp)
   10874:	03010113          	addi	sp,sp,48
   10878:	1740006f          	j	109ec <_free_r>
   1087c:	02813083          	ld	ra,40(sp)
   10880:	02013403          	ld	s0,32(sp)
   10884:	01813483          	ld	s1,24(sp)
   10888:	01013903          	ld	s2,16(sp)
   1088c:	00813983          	ld	s3,8(sp)
   10890:	03010113          	addi	sp,sp,48
   10894:	00008067          	ret
   10898:	00008067          	ret

000000000001089c <atexit>:
   1089c:	00050593          	mv	a1,a0
   108a0:	00000693          	li	a3,0
   108a4:	00000613          	li	a2,0
   108a8:	00000513          	li	a0,0
   108ac:	4d50006f          	j	11580 <__register_exitproc>

00000000000108b0 <_malloc_trim_r>:
   108b0:	fd010113          	addi	sp,sp,-48
   108b4:	01313423          	sd	s3,8(sp)
   108b8:	000139b7          	lui	s3,0x13
   108bc:	02813023          	sd	s0,32(sp)
   108c0:	00913c23          	sd	s1,24(sp)
   108c4:	01213823          	sd	s2,16(sp)
   108c8:	01413023          	sd	s4,0(sp)
   108cc:	02113423          	sd	ra,40(sp)
   108d0:	00058a13          	mv	s4,a1
   108d4:	00050913          	mv	s2,a0
   108d8:	ed898993          	addi	s3,s3,-296 # 12ed8 <__malloc_av_>
   108dc:	441000ef          	jal	ra,1151c <__malloc_lock>
   108e0:	0109b703          	ld	a4,16(s3)
   108e4:	000017b7          	lui	a5,0x1
   108e8:	fdf78413          	addi	s0,a5,-33 # fdf <exit-0xf109>
   108ec:	00873483          	ld	s1,8(a4)
   108f0:	41440433          	sub	s0,s0,s4
   108f4:	ffc4f493          	andi	s1,s1,-4
   108f8:	00940433          	add	s0,s0,s1
   108fc:	00c45413          	srli	s0,s0,0xc
   10900:	fff40413          	addi	s0,s0,-1
   10904:	00c41413          	slli	s0,s0,0xc
   10908:	00f44e63          	blt	s0,a5,10924 <_malloc_trim_r+0x74>
   1090c:	00000593          	li	a1,0
   10910:	00090513          	mv	a0,s2
   10914:	411000ef          	jal	ra,11524 <_sbrk_r>
   10918:	0109b783          	ld	a5,16(s3)
   1091c:	009787b3          	add	a5,a5,s1
   10920:	02f50863          	beq	a0,a5,10950 <_malloc_trim_r+0xa0>
   10924:	00090513          	mv	a0,s2
   10928:	3f9000ef          	jal	ra,11520 <__malloc_unlock>
   1092c:	02813083          	ld	ra,40(sp)
   10930:	02013403          	ld	s0,32(sp)
   10934:	01813483          	ld	s1,24(sp)
   10938:	01013903          	ld	s2,16(sp)
   1093c:	00813983          	ld	s3,8(sp)
   10940:	00013a03          	ld	s4,0(sp)
   10944:	00000513          	li	a0,0
   10948:	03010113          	addi	sp,sp,48
   1094c:	00008067          	ret
   10950:	408005b3          	neg	a1,s0
   10954:	00090513          	mv	a0,s2
   10958:	3cd000ef          	jal	ra,11524 <_sbrk_r>
   1095c:	fff00793          	li	a5,-1
   10960:	04f50a63          	beq	a0,a5,109b4 <_malloc_trim_r+0x104>
   10964:	000137b7          	lui	a5,0x13
   10968:	77078793          	addi	a5,a5,1904 # 13770 <__malloc_current_mallinfo>
   1096c:	0007a703          	lw	a4,0(a5)
   10970:	0109b683          	ld	a3,16(s3)
   10974:	408484b3          	sub	s1,s1,s0
   10978:	0014e493          	ori	s1,s1,1
   1097c:	4087073b          	subw	a4,a4,s0
   10980:	00090513          	mv	a0,s2
   10984:	0096b423          	sd	s1,8(a3)
   10988:	00e7a023          	sw	a4,0(a5)
   1098c:	395000ef          	jal	ra,11520 <__malloc_unlock>
   10990:	02813083          	ld	ra,40(sp)
   10994:	02013403          	ld	s0,32(sp)
   10998:	01813483          	ld	s1,24(sp)
   1099c:	01013903          	ld	s2,16(sp)
   109a0:	00813983          	ld	s3,8(sp)
   109a4:	00013a03          	ld	s4,0(sp)
   109a8:	00100513          	li	a0,1
   109ac:	03010113          	addi	sp,sp,48
   109b0:	00008067          	ret
   109b4:	00000593          	li	a1,0
   109b8:	00090513          	mv	a0,s2
   109bc:	369000ef          	jal	ra,11524 <_sbrk_r>
   109c0:	0109b703          	ld	a4,16(s3)
   109c4:	01f00693          	li	a3,31
   109c8:	40e507b3          	sub	a5,a0,a4
   109cc:	f4f6dce3          	bge	a3,a5,10924 <_malloc_trim_r+0x74>
   109d0:	7681b683          	ld	a3,1896(gp) # 13700 <__malloc_sbrk_base>
   109d4:	0017e793          	ori	a5,a5,1
   109d8:	00f73423          	sd	a5,8(a4)
   109dc:	40d50533          	sub	a0,a0,a3
   109e0:	000136b7          	lui	a3,0x13
   109e4:	76a6a823          	sw	a0,1904(a3) # 13770 <__malloc_current_mallinfo>
   109e8:	f3dff06f          	j	10924 <_malloc_trim_r+0x74>

00000000000109ec <_free_r>:
   109ec:	12058e63          	beqz	a1,10b28 <_free_r+0x13c>
   109f0:	fe010113          	addi	sp,sp,-32
   109f4:	00813823          	sd	s0,16(sp)
   109f8:	00913423          	sd	s1,8(sp)
   109fc:	00058413          	mv	s0,a1
   10a00:	00050493          	mv	s1,a0
   10a04:	00113c23          	sd	ra,24(sp)
   10a08:	315000ef          	jal	ra,1151c <__malloc_lock>
   10a0c:	ff843503          	ld	a0,-8(s0)
   10a10:	ff040713          	addi	a4,s0,-16
   10a14:	000135b7          	lui	a1,0x13
   10a18:	ffe57793          	andi	a5,a0,-2
   10a1c:	00f70633          	add	a2,a4,a5
   10a20:	ed858593          	addi	a1,a1,-296 # 12ed8 <__malloc_av_>
   10a24:	00863683          	ld	a3,8(a2)
   10a28:	0105b803          	ld	a6,16(a1)
   10a2c:	ffc6f693          	andi	a3,a3,-4
   10a30:	1cc80063          	beq	a6,a2,10bf0 <_free_r+0x204>
   10a34:	00d63423          	sd	a3,8(a2)
   10a38:	00157513          	andi	a0,a0,1
   10a3c:	00d60833          	add	a6,a2,a3
   10a40:	0a051463          	bnez	a0,10ae8 <_free_r+0xfc>
   10a44:	ff043303          	ld	t1,-16(s0)
   10a48:	00883803          	ld	a6,8(a6)
   10a4c:	00013537          	lui	a0,0x13
   10a50:	40670733          	sub	a4,a4,t1
   10a54:	01073883          	ld	a7,16(a4)
   10a58:	ee850513          	addi	a0,a0,-280 # 12ee8 <__malloc_av_+0x10>
   10a5c:	006787b3          	add	a5,a5,t1
   10a60:	00187813          	andi	a6,a6,1
   10a64:	14a88663          	beq	a7,a0,10bb0 <_free_r+0x1c4>
   10a68:	01873303          	ld	t1,24(a4)
   10a6c:	0068bc23          	sd	t1,24(a7)
   10a70:	01133823          	sd	a7,16(t1) # 101e8 <main+0x4>
   10a74:	1e080863          	beqz	a6,10c64 <_free_r+0x278>
   10a78:	0017e693          	ori	a3,a5,1
   10a7c:	00d73423          	sd	a3,8(a4)
   10a80:	00f63023          	sd	a5,0(a2)
   10a84:	1ff00693          	li	a3,511
   10a88:	0af6ec63          	bltu	a3,a5,10b40 <_free_r+0x154>
   10a8c:	0037d793          	srli	a5,a5,0x3
   10a90:	0017869b          	addiw	a3,a5,1
   10a94:	0016969b          	slliw	a3,a3,0x1
   10a98:	00369693          	slli	a3,a3,0x3
   10a9c:	0085b803          	ld	a6,8(a1)
   10aa0:	00d586b3          	add	a3,a1,a3
   10aa4:	0006b503          	ld	a0,0(a3)
   10aa8:	4027d61b          	sraiw	a2,a5,0x2
   10aac:	00100793          	li	a5,1
   10ab0:	00c797b3          	sll	a5,a5,a2
   10ab4:	0107e7b3          	or	a5,a5,a6
   10ab8:	ff068613          	addi	a2,a3,-16
   10abc:	00c73c23          	sd	a2,24(a4)
   10ac0:	00a73823          	sd	a0,16(a4)
   10ac4:	00f5b423          	sd	a5,8(a1)
   10ac8:	00e6b023          	sd	a4,0(a3)
   10acc:	00e53c23          	sd	a4,24(a0)
   10ad0:	01013403          	ld	s0,16(sp)
   10ad4:	01813083          	ld	ra,24(sp)
   10ad8:	00048513          	mv	a0,s1
   10adc:	00813483          	ld	s1,8(sp)
   10ae0:	02010113          	addi	sp,sp,32
   10ae4:	23d0006f          	j	11520 <__malloc_unlock>
   10ae8:	00883503          	ld	a0,8(a6)
   10aec:	00157513          	andi	a0,a0,1
   10af0:	02051e63          	bnez	a0,10b2c <_free_r+0x140>
   10af4:	00013537          	lui	a0,0x13
   10af8:	00d787b3          	add	a5,a5,a3
   10afc:	ee850513          	addi	a0,a0,-280 # 12ee8 <__malloc_av_+0x10>
   10b00:	01063683          	ld	a3,16(a2)
   10b04:	0017e893          	ori	a7,a5,1
   10b08:	00f70833          	add	a6,a4,a5
   10b0c:	16a68a63          	beq	a3,a0,10c80 <_free_r+0x294>
   10b10:	01863603          	ld	a2,24(a2)
   10b14:	00c6bc23          	sd	a2,24(a3)
   10b18:	00d63823          	sd	a3,16(a2)
   10b1c:	01173423          	sd	a7,8(a4)
   10b20:	00f83023          	sd	a5,0(a6)
   10b24:	f61ff06f          	j	10a84 <_free_r+0x98>
   10b28:	00008067          	ret
   10b2c:	0017e693          	ori	a3,a5,1
   10b30:	fed43c23          	sd	a3,-8(s0)
   10b34:	00f63023          	sd	a5,0(a2)
   10b38:	1ff00693          	li	a3,511
   10b3c:	f4f6f8e3          	bgeu	a3,a5,10a8c <_free_r+0xa0>
   10b40:	0097d693          	srli	a3,a5,0x9
   10b44:	00400613          	li	a2,4
   10b48:	0ed66a63          	bltu	a2,a3,10c3c <_free_r+0x250>
   10b4c:	0067d693          	srli	a3,a5,0x6
   10b50:	0396851b          	addiw	a0,a3,57
   10b54:	0015151b          	slliw	a0,a0,0x1
   10b58:	0386861b          	addiw	a2,a3,56
   10b5c:	00351513          	slli	a0,a0,0x3
   10b60:	00a58533          	add	a0,a1,a0
   10b64:	00053683          	ld	a3,0(a0)
   10b68:	ff050513          	addi	a0,a0,-16
   10b6c:	12d50863          	beq	a0,a3,10c9c <_free_r+0x2b0>
   10b70:	0086b603          	ld	a2,8(a3)
   10b74:	ffc67613          	andi	a2,a2,-4
   10b78:	00c7f663          	bgeu	a5,a2,10b84 <_free_r+0x198>
   10b7c:	0106b683          	ld	a3,16(a3)
   10b80:	fed518e3          	bne	a0,a3,10b70 <_free_r+0x184>
   10b84:	0186b503          	ld	a0,24(a3)
   10b88:	00a73c23          	sd	a0,24(a4)
   10b8c:	00d73823          	sd	a3,16(a4)
   10b90:	01013403          	ld	s0,16(sp)
   10b94:	00e53823          	sd	a4,16(a0)
   10b98:	01813083          	ld	ra,24(sp)
   10b9c:	00048513          	mv	a0,s1
   10ba0:	00813483          	ld	s1,8(sp)
   10ba4:	00e6bc23          	sd	a4,24(a3)
   10ba8:	02010113          	addi	sp,sp,32
   10bac:	1750006f          	j	11520 <__malloc_unlock>
   10bb0:	14081a63          	bnez	a6,10d04 <_free_r+0x318>
   10bb4:	01863583          	ld	a1,24(a2)
   10bb8:	01063603          	ld	a2,16(a2)
   10bbc:	00f686b3          	add	a3,a3,a5
   10bc0:	01013403          	ld	s0,16(sp)
   10bc4:	00b63c23          	sd	a1,24(a2)
   10bc8:	00c5b823          	sd	a2,16(a1)
   10bcc:	0016e793          	ori	a5,a3,1
   10bd0:	01813083          	ld	ra,24(sp)
   10bd4:	00f73423          	sd	a5,8(a4)
   10bd8:	00048513          	mv	a0,s1
   10bdc:	00d70733          	add	a4,a4,a3
   10be0:	00813483          	ld	s1,8(sp)
   10be4:	00d73023          	sd	a3,0(a4)
   10be8:	02010113          	addi	sp,sp,32
   10bec:	1350006f          	j	11520 <__malloc_unlock>
   10bf0:	00157513          	andi	a0,a0,1
   10bf4:	00d786b3          	add	a3,a5,a3
   10bf8:	02051063          	bnez	a0,10c18 <_free_r+0x22c>
   10bfc:	ff043503          	ld	a0,-16(s0)
   10c00:	40a70733          	sub	a4,a4,a0
   10c04:	01873783          	ld	a5,24(a4)
   10c08:	01073603          	ld	a2,16(a4)
   10c0c:	00a686b3          	add	a3,a3,a0
   10c10:	00f63c23          	sd	a5,24(a2)
   10c14:	00c7b823          	sd	a2,16(a5)
   10c18:	0016e613          	ori	a2,a3,1
   10c1c:	7701b783          	ld	a5,1904(gp) # 13708 <__malloc_trim_threshold>
   10c20:	00c73423          	sd	a2,8(a4)
   10c24:	00e5b823          	sd	a4,16(a1)
   10c28:	eaf6e4e3          	bltu	a3,a5,10ad0 <_free_r+0xe4>
   10c2c:	7901b583          	ld	a1,1936(gp) # 13728 <__malloc_top_pad>
   10c30:	00048513          	mv	a0,s1
   10c34:	c7dff0ef          	jal	ra,108b0 <_malloc_trim_r>
   10c38:	e99ff06f          	j	10ad0 <_free_r+0xe4>
   10c3c:	01400613          	li	a2,20
   10c40:	02d67663          	bgeu	a2,a3,10c6c <_free_r+0x280>
   10c44:	05400613          	li	a2,84
   10c48:	06d66863          	bltu	a2,a3,10cb8 <_free_r+0x2cc>
   10c4c:	00c7d693          	srli	a3,a5,0xc
   10c50:	06f6851b          	addiw	a0,a3,111
   10c54:	0015151b          	slliw	a0,a0,0x1
   10c58:	06e6861b          	addiw	a2,a3,110
   10c5c:	00351513          	slli	a0,a0,0x3
   10c60:	f01ff06f          	j	10b60 <_free_r+0x174>
   10c64:	00d787b3          	add	a5,a5,a3
   10c68:	e99ff06f          	j	10b00 <_free_r+0x114>
   10c6c:	05c6851b          	addiw	a0,a3,92
   10c70:	0015151b          	slliw	a0,a0,0x1
   10c74:	05b6861b          	addiw	a2,a3,91
   10c78:	00351513          	slli	a0,a0,0x3
   10c7c:	ee5ff06f          	j	10b60 <_free_r+0x174>
   10c80:	02e5b423          	sd	a4,40(a1)
   10c84:	02e5b023          	sd	a4,32(a1)
   10c88:	00a73c23          	sd	a0,24(a4)
   10c8c:	00a73823          	sd	a0,16(a4)
   10c90:	01173423          	sd	a7,8(a4)
   10c94:	00f83023          	sd	a5,0(a6)
   10c98:	e39ff06f          	j	10ad0 <_free_r+0xe4>
   10c9c:	0085b803          	ld	a6,8(a1)
   10ca0:	4026561b          	sraiw	a2,a2,0x2
   10ca4:	00100793          	li	a5,1
   10ca8:	00c797b3          	sll	a5,a5,a2
   10cac:	0107e7b3          	or	a5,a5,a6
   10cb0:	00f5b423          	sd	a5,8(a1)
   10cb4:	ed5ff06f          	j	10b88 <_free_r+0x19c>
   10cb8:	15400613          	li	a2,340
   10cbc:	00d66e63          	bltu	a2,a3,10cd8 <_free_r+0x2ec>
   10cc0:	00f7d693          	srli	a3,a5,0xf
   10cc4:	0786851b          	addiw	a0,a3,120
   10cc8:	0015151b          	slliw	a0,a0,0x1
   10ccc:	0776861b          	addiw	a2,a3,119
   10cd0:	00351513          	slli	a0,a0,0x3
   10cd4:	e8dff06f          	j	10b60 <_free_r+0x174>
   10cd8:	55400613          	li	a2,1364
   10cdc:	00d66e63          	bltu	a2,a3,10cf8 <_free_r+0x30c>
   10ce0:	0127d693          	srli	a3,a5,0x12
   10ce4:	07d6851b          	addiw	a0,a3,125
   10ce8:	0015151b          	slliw	a0,a0,0x1
   10cec:	07c6861b          	addiw	a2,a3,124
   10cf0:	00351513          	slli	a0,a0,0x3
   10cf4:	e6dff06f          	j	10b60 <_free_r+0x174>
   10cf8:	7f000513          	li	a0,2032
   10cfc:	07e00613          	li	a2,126
   10d00:	e61ff06f          	j	10b60 <_free_r+0x174>
   10d04:	0017e693          	ori	a3,a5,1
   10d08:	00d73423          	sd	a3,8(a4)
   10d0c:	00f63023          	sd	a5,0(a2)
   10d10:	dc1ff06f          	j	10ad0 <_free_r+0xe4>

0000000000010d14 <_malloc_r>:
   10d14:	fa010113          	addi	sp,sp,-96
   10d18:	04913423          	sd	s1,72(sp)
   10d1c:	05213023          	sd	s2,64(sp)
   10d20:	04113c23          	sd	ra,88(sp)
   10d24:	04813823          	sd	s0,80(sp)
   10d28:	03313c23          	sd	s3,56(sp)
   10d2c:	03413823          	sd	s4,48(sp)
   10d30:	03513423          	sd	s5,40(sp)
   10d34:	03613023          	sd	s6,32(sp)
   10d38:	01713c23          	sd	s7,24(sp)
   10d3c:	01813823          	sd	s8,16(sp)
   10d40:	01913423          	sd	s9,8(sp)
   10d44:	01758493          	addi	s1,a1,23
   10d48:	02e00793          	li	a5,46
   10d4c:	00050913          	mv	s2,a0
   10d50:	0697e663          	bltu	a5,s1,10dbc <_malloc_r+0xa8>
   10d54:	02000793          	li	a5,32
   10d58:	26b7e663          	bltu	a5,a1,10fc4 <_malloc_r+0x2b0>
   10d5c:	7c0000ef          	jal	ra,1151c <__malloc_lock>
   10d60:	02000493          	li	s1,32
   10d64:	05000793          	li	a5,80
   10d68:	00400613          	li	a2,4
   10d6c:	000139b7          	lui	s3,0x13
   10d70:	ed898993          	addi	s3,s3,-296 # 12ed8 <__malloc_av_>
   10d74:	00f987b3          	add	a5,s3,a5
   10d78:	0087b403          	ld	s0,8(a5)
   10d7c:	ff078713          	addi	a4,a5,-16
   10d80:	28e40263          	beq	s0,a4,11004 <_malloc_r+0x2f0>
   10d84:	00843783          	ld	a5,8(s0)
   10d88:	01843683          	ld	a3,24(s0)
   10d8c:	01043603          	ld	a2,16(s0)
   10d90:	ffc7f793          	andi	a5,a5,-4
   10d94:	00f407b3          	add	a5,s0,a5
   10d98:	0087b703          	ld	a4,8(a5)
   10d9c:	00d63c23          	sd	a3,24(a2)
   10da0:	00c6b823          	sd	a2,16(a3)
   10da4:	00176713          	ori	a4,a4,1
   10da8:	00090513          	mv	a0,s2
   10dac:	00e7b423          	sd	a4,8(a5)
   10db0:	770000ef          	jal	ra,11520 <__malloc_unlock>
   10db4:	01040513          	addi	a0,s0,16
   10db8:	2180006f          	j	10fd0 <_malloc_r+0x2bc>
   10dbc:	800007b7          	lui	a5,0x80000
   10dc0:	ff04f493          	andi	s1,s1,-16
   10dc4:	fff7c793          	not	a5,a5
   10dc8:	1e97ee63          	bltu	a5,s1,10fc4 <_malloc_r+0x2b0>
   10dcc:	1eb4ec63          	bltu	s1,a1,10fc4 <_malloc_r+0x2b0>
   10dd0:	74c000ef          	jal	ra,1151c <__malloc_lock>
   10dd4:	1f700793          	li	a5,503
   10dd8:	4e97f663          	bgeu	a5,s1,112c4 <_malloc_r+0x5b0>
   10ddc:	0094d793          	srli	a5,s1,0x9
   10de0:	34078c63          	beqz	a5,11138 <_malloc_r+0x424>
   10de4:	00400713          	li	a4,4
   10de8:	40f76c63          	bltu	a4,a5,11200 <_malloc_r+0x4ec>
   10dec:	0064d793          	srli	a5,s1,0x6
   10df0:	0397861b          	addiw	a2,a5,57 # ffffffff80000039 <__BSS_END__+0xffffffff7ffec8a1>
   10df4:	0016169b          	slliw	a3,a2,0x1
   10df8:	0387851b          	addiw	a0,a5,56
   10dfc:	00369693          	slli	a3,a3,0x3
   10e00:	000139b7          	lui	s3,0x13
   10e04:	ed898993          	addi	s3,s3,-296 # 12ed8 <__malloc_av_>
   10e08:	00d986b3          	add	a3,s3,a3
   10e0c:	0086b403          	ld	s0,8(a3)
   10e10:	ff068693          	addi	a3,a3,-16
   10e14:	1e868e63          	beq	a3,s0,11010 <_malloc_r+0x2fc>
   10e18:	01f00593          	li	a1,31
   10e1c:	0100006f          	j	10e2c <_malloc_r+0x118>
   10e20:	36075863          	bgez	a4,11190 <_malloc_r+0x47c>
   10e24:	01843403          	ld	s0,24(s0)
   10e28:	1e868463          	beq	a3,s0,11010 <_malloc_r+0x2fc>
   10e2c:	00843783          	ld	a5,8(s0)
   10e30:	ffc7f793          	andi	a5,a5,-4
   10e34:	40978733          	sub	a4,a5,s1
   10e38:	fee5d4e3          	bge	a1,a4,10e20 <_malloc_r+0x10c>
   10e3c:	0209b403          	ld	s0,32(s3)
   10e40:	00013837          	lui	a6,0x13
   10e44:	ee880813          	addi	a6,a6,-280 # 12ee8 <__malloc_av_+0x10>
   10e48:	00050613          	mv	a2,a0
   10e4c:	1d041a63          	bne	s0,a6,11020 <_malloc_r+0x30c>
   10e50:	0089b783          	ld	a5,8(s3)
   10e54:	4026571b          	sraiw	a4,a2,0x2
   10e58:	00100593          	li	a1,1
   10e5c:	00e595b3          	sll	a1,a1,a4
   10e60:	22b7fe63          	bgeu	a5,a1,1109c <_malloc_r+0x388>
   10e64:	0109b403          	ld	s0,16(s3)
   10e68:	00843a83          	ld	s5,8(s0)
   10e6c:	ffcafa93          	andi	s5,s5,-4
   10e70:	009ae863          	bltu	s5,s1,10e80 <_malloc_r+0x16c>
   10e74:	409a87b3          	sub	a5,s5,s1
   10e78:	01f00713          	li	a4,31
   10e7c:	2ef74663          	blt	a4,a5,11168 <_malloc_r+0x454>
   10e80:	76818b93          	addi	s7,gp,1896 # 13700 <__malloc_sbrk_base>
   10e84:	7901ba03          	ld	s4,1936(gp) # 13728 <__malloc_top_pad>
   10e88:	000bb703          	ld	a4,0(s7)
   10e8c:	fff00793          	li	a5,-1
   10e90:	01540c33          	add	s8,s0,s5
   10e94:	01448a33          	add	s4,s1,s4
   10e98:	4ef70a63          	beq	a4,a5,1138c <_malloc_r+0x678>
   10e9c:	000017b7          	lui	a5,0x1
   10ea0:	01f78793          	addi	a5,a5,31 # 101f <exit-0xf0c9>
   10ea4:	00fa0a33          	add	s4,s4,a5
   10ea8:	fffff7b7          	lui	a5,0xfffff
   10eac:	00fa7a33          	and	s4,s4,a5
   10eb0:	000a0593          	mv	a1,s4
   10eb4:	00090513          	mv	a0,s2
   10eb8:	66c000ef          	jal	ra,11524 <_sbrk_r>
   10ebc:	fff00793          	li	a5,-1
   10ec0:	00050b13          	mv	s6,a0
   10ec4:	42f50a63          	beq	a0,a5,112f8 <_malloc_r+0x5e4>
   10ec8:	43856663          	bltu	a0,s8,112f4 <_malloc_r+0x5e0>
   10ecc:	7d818c93          	addi	s9,gp,2008 # 13770 <__malloc_current_mallinfo>
   10ed0:	000ca703          	lw	a4,0(s9)
   10ed4:	014707bb          	addw	a5,a4,s4
   10ed8:	00fca023          	sw	a5,0(s9)
   10edc:	00078693          	mv	a3,a5
   10ee0:	54ac0863          	beq	s8,a0,11430 <_malloc_r+0x71c>
   10ee4:	000bb703          	ld	a4,0(s7)
   10ee8:	fff00793          	li	a5,-1
   10eec:	56f70063          	beq	a4,a5,1144c <_malloc_r+0x738>
   10ef0:	418b07b3          	sub	a5,s6,s8
   10ef4:	00d787bb          	addw	a5,a5,a3
   10ef8:	00fca023          	sw	a5,0(s9)
   10efc:	00fb7c13          	andi	s8,s6,15
   10f00:	4a0c0863          	beqz	s8,113b0 <_malloc_r+0x69c>
   10f04:	000017b7          	lui	a5,0x1
   10f08:	418b0b33          	sub	s6,s6,s8
   10f0c:	01078b93          	addi	s7,a5,16 # 1010 <exit-0xf0d8>
   10f10:	010b0b13          	addi	s6,s6,16
   10f14:	418b8bb3          	sub	s7,s7,s8
   10f18:	014b0a33          	add	s4,s6,s4
   10f1c:	fff78793          	addi	a5,a5,-1
   10f20:	414b8bb3          	sub	s7,s7,s4
   10f24:	00fbfbb3          	and	s7,s7,a5
   10f28:	000b8593          	mv	a1,s7
   10f2c:	00090513          	mv	a0,s2
   10f30:	5f4000ef          	jal	ra,11524 <_sbrk_r>
   10f34:	fff00793          	li	a5,-1
   10f38:	56f50863          	beq	a0,a5,114a8 <_malloc_r+0x794>
   10f3c:	41650533          	sub	a0,a0,s6
   10f40:	000b871b          	sext.w	a4,s7
   10f44:	01750a33          	add	s4,a0,s7
   10f48:	000ca783          	lw	a5,0(s9)
   10f4c:	0169b823          	sd	s6,16(s3)
   10f50:	001a6a13          	ori	s4,s4,1
   10f54:	00e787bb          	addw	a5,a5,a4
   10f58:	00fca023          	sw	a5,0(s9)
   10f5c:	014b3423          	sd	s4,8(s6)
   10f60:	4f340a63          	beq	s0,s3,11454 <_malloc_r+0x740>
   10f64:	01f00613          	li	a2,31
   10f68:	4f567a63          	bgeu	a2,s5,1145c <_malloc_r+0x748>
   10f6c:	00843683          	ld	a3,8(s0)
   10f70:	fe8a8713          	addi	a4,s5,-24
   10f74:	ff077713          	andi	a4,a4,-16
   10f78:	0016f693          	andi	a3,a3,1
   10f7c:	00e6e6b3          	or	a3,a3,a4
   10f80:	00d43423          	sd	a3,8(s0)
   10f84:	00900593          	li	a1,9
   10f88:	00e406b3          	add	a3,s0,a4
   10f8c:	00b6b423          	sd	a1,8(a3)
   10f90:	00b6b823          	sd	a1,16(a3)
   10f94:	52e66463          	bltu	a2,a4,114bc <_malloc_r+0x7a8>
   10f98:	008b3a03          	ld	s4,8(s6)
   10f9c:	000b0413          	mv	s0,s6
   10fa0:	78018713          	addi	a4,gp,1920 # 13718 <__malloc_max_sbrked_mem>
   10fa4:	00073683          	ld	a3,0(a4)
   10fa8:	00f6f463          	bgeu	a3,a5,10fb0 <_malloc_r+0x29c>
   10fac:	00f73023          	sd	a5,0(a4)
   10fb0:	78818713          	addi	a4,gp,1928 # 13720 <__malloc_max_total_mem>
   10fb4:	00073683          	ld	a3,0(a4)
   10fb8:	34f6f463          	bgeu	a3,a5,11300 <_malloc_r+0x5ec>
   10fbc:	00f73023          	sd	a5,0(a4)
   10fc0:	3400006f          	j	11300 <_malloc_r+0x5ec>
   10fc4:	00c00793          	li	a5,12
   10fc8:	00f92023          	sw	a5,0(s2)
   10fcc:	00000513          	li	a0,0
   10fd0:	05813083          	ld	ra,88(sp)
   10fd4:	05013403          	ld	s0,80(sp)
   10fd8:	04813483          	ld	s1,72(sp)
   10fdc:	04013903          	ld	s2,64(sp)
   10fe0:	03813983          	ld	s3,56(sp)
   10fe4:	03013a03          	ld	s4,48(sp)
   10fe8:	02813a83          	ld	s5,40(sp)
   10fec:	02013b03          	ld	s6,32(sp)
   10ff0:	01813b83          	ld	s7,24(sp)
   10ff4:	01013c03          	ld	s8,16(sp)
   10ff8:	00813c83          	ld	s9,8(sp)
   10ffc:	06010113          	addi	sp,sp,96
   11000:	00008067          	ret
   11004:	0187b403          	ld	s0,24(a5)
   11008:	0026061b          	addiw	a2,a2,2
   1100c:	d6879ce3          	bne	a5,s0,10d84 <_malloc_r+0x70>
   11010:	0209b403          	ld	s0,32(s3)
   11014:	00013837          	lui	a6,0x13
   11018:	ee880813          	addi	a6,a6,-280 # 12ee8 <__malloc_av_+0x10>
   1101c:	e3040ae3          	beq	s0,a6,10e50 <_malloc_r+0x13c>
   11020:	00843783          	ld	a5,8(s0)
   11024:	01f00693          	li	a3,31
   11028:	ffc7f793          	andi	a5,a5,-4
   1102c:	40978733          	sub	a4,a5,s1
   11030:	24e6cc63          	blt	a3,a4,11288 <_malloc_r+0x574>
   11034:	0309b423          	sd	a6,40(s3)
   11038:	0309b023          	sd	a6,32(s3)
   1103c:	10075663          	bgez	a4,11148 <_malloc_r+0x434>
   11040:	1ff00713          	li	a4,511
   11044:	14f76c63          	bltu	a4,a5,1119c <_malloc_r+0x488>
   11048:	0037d793          	srli	a5,a5,0x3
   1104c:	0017871b          	addiw	a4,a5,1
   11050:	0017171b          	slliw	a4,a4,0x1
   11054:	00371713          	slli	a4,a4,0x3
   11058:	0089b503          	ld	a0,8(s3)
   1105c:	00e98733          	add	a4,s3,a4
   11060:	00073583          	ld	a1,0(a4)
   11064:	4027d69b          	sraiw	a3,a5,0x2
   11068:	00100793          	li	a5,1
   1106c:	00d797b3          	sll	a5,a5,a3
   11070:	00a7e7b3          	or	a5,a5,a0
   11074:	ff070693          	addi	a3,a4,-16
   11078:	00d43c23          	sd	a3,24(s0)
   1107c:	00b43823          	sd	a1,16(s0)
   11080:	00f9b423          	sd	a5,8(s3)
   11084:	00873023          	sd	s0,0(a4)
   11088:	0085bc23          	sd	s0,24(a1)
   1108c:	4026571b          	sraiw	a4,a2,0x2
   11090:	00100593          	li	a1,1
   11094:	00e595b3          	sll	a1,a1,a4
   11098:	dcb7e6e3          	bltu	a5,a1,10e64 <_malloc_r+0x150>
   1109c:	00f5f733          	and	a4,a1,a5
   110a0:	02071463          	bnez	a4,110c8 <_malloc_r+0x3b4>
   110a4:	00159593          	slli	a1,a1,0x1
   110a8:	ffc67613          	andi	a2,a2,-4
   110ac:	00f5f733          	and	a4,a1,a5
   110b0:	0046061b          	addiw	a2,a2,4
   110b4:	00071a63          	bnez	a4,110c8 <_malloc_r+0x3b4>
   110b8:	00159593          	slli	a1,a1,0x1
   110bc:	00f5f733          	and	a4,a1,a5
   110c0:	0046061b          	addiw	a2,a2,4
   110c4:	fe070ae3          	beqz	a4,110b8 <_malloc_r+0x3a4>
   110c8:	01f00893          	li	a7,31
   110cc:	0016031b          	addiw	t1,a2,1
   110d0:	0013131b          	slliw	t1,t1,0x1
   110d4:	00331313          	slli	t1,t1,0x3
   110d8:	ff030313          	addi	t1,t1,-16
   110dc:	00698333          	add	t1,s3,t1
   110e0:	00030513          	mv	a0,t1
   110e4:	01853783          	ld	a5,24(a0)
   110e8:	00060e13          	mv	t3,a2
   110ec:	12f50e63          	beq	a0,a5,11228 <_malloc_r+0x514>
   110f0:	0087b703          	ld	a4,8(a5)
   110f4:	00078413          	mv	s0,a5
   110f8:	0187b783          	ld	a5,24(a5)
   110fc:	ffc77713          	andi	a4,a4,-4
   11100:	409706b3          	sub	a3,a4,s1
   11104:	12d8ce63          	blt	a7,a3,11240 <_malloc_r+0x52c>
   11108:	fe06c2e3          	bltz	a3,110ec <_malloc_r+0x3d8>
   1110c:	00e40733          	add	a4,s0,a4
   11110:	00873683          	ld	a3,8(a4)
   11114:	01043603          	ld	a2,16(s0)
   11118:	00090513          	mv	a0,s2
   1111c:	0016e693          	ori	a3,a3,1
   11120:	00d73423          	sd	a3,8(a4)
   11124:	00f63c23          	sd	a5,24(a2)
   11128:	00c7b823          	sd	a2,16(a5)
   1112c:	3f4000ef          	jal	ra,11520 <__malloc_unlock>
   11130:	01040513          	addi	a0,s0,16
   11134:	e9dff06f          	j	10fd0 <_malloc_r+0x2bc>
   11138:	40000693          	li	a3,1024
   1113c:	04000613          	li	a2,64
   11140:	03f00513          	li	a0,63
   11144:	cbdff06f          	j	10e00 <_malloc_r+0xec>
   11148:	00f407b3          	add	a5,s0,a5
   1114c:	0087b703          	ld	a4,8(a5)
   11150:	00090513          	mv	a0,s2
   11154:	00176713          	ori	a4,a4,1
   11158:	00e7b423          	sd	a4,8(a5)
   1115c:	3c4000ef          	jal	ra,11520 <__malloc_unlock>
   11160:	01040513          	addi	a0,s0,16
   11164:	e6dff06f          	j	10fd0 <_malloc_r+0x2bc>
   11168:	0014e713          	ori	a4,s1,1
   1116c:	00e43423          	sd	a4,8(s0)
   11170:	009404b3          	add	s1,s0,s1
   11174:	0099b823          	sd	s1,16(s3)
   11178:	0017e793          	ori	a5,a5,1
   1117c:	00090513          	mv	a0,s2
   11180:	00f4b423          	sd	a5,8(s1)
   11184:	39c000ef          	jal	ra,11520 <__malloc_unlock>
   11188:	01040513          	addi	a0,s0,16
   1118c:	e45ff06f          	j	10fd0 <_malloc_r+0x2bc>
   11190:	01843683          	ld	a3,24(s0)
   11194:	01043603          	ld	a2,16(s0)
   11198:	bfdff06f          	j	10d94 <_malloc_r+0x80>
   1119c:	0097d713          	srli	a4,a5,0x9
   111a0:	00400693          	li	a3,4
   111a4:	12e6fc63          	bgeu	a3,a4,112dc <_malloc_r+0x5c8>
   111a8:	01400693          	li	a3,20
   111ac:	22e6e863          	bltu	a3,a4,113dc <_malloc_r+0x6c8>
   111b0:	05c7059b          	addiw	a1,a4,92
   111b4:	0015959b          	slliw	a1,a1,0x1
   111b8:	05b7069b          	addiw	a3,a4,91
   111bc:	00359593          	slli	a1,a1,0x3
   111c0:	00b985b3          	add	a1,s3,a1
   111c4:	0005b703          	ld	a4,0(a1)
   111c8:	ff058593          	addi	a1,a1,-16
   111cc:	1ce58463          	beq	a1,a4,11394 <_malloc_r+0x680>
   111d0:	00873683          	ld	a3,8(a4)
   111d4:	ffc6f693          	andi	a3,a3,-4
   111d8:	00d7f663          	bgeu	a5,a3,111e4 <_malloc_r+0x4d0>
   111dc:	01073703          	ld	a4,16(a4)
   111e0:	fee598e3          	bne	a1,a4,111d0 <_malloc_r+0x4bc>
   111e4:	01873583          	ld	a1,24(a4)
   111e8:	0089b783          	ld	a5,8(s3)
   111ec:	00b43c23          	sd	a1,24(s0)
   111f0:	00e43823          	sd	a4,16(s0)
   111f4:	0085b823          	sd	s0,16(a1)
   111f8:	00873c23          	sd	s0,24(a4)
   111fc:	e91ff06f          	j	1108c <_malloc_r+0x378>
   11200:	01400713          	li	a4,20
   11204:	12f77063          	bgeu	a4,a5,11324 <_malloc_r+0x610>
   11208:	05400713          	li	a4,84
   1120c:	1ef76863          	bltu	a4,a5,113fc <_malloc_r+0x6e8>
   11210:	00c4d793          	srli	a5,s1,0xc
   11214:	06f7861b          	addiw	a2,a5,111
   11218:	0016169b          	slliw	a3,a2,0x1
   1121c:	06e7851b          	addiw	a0,a5,110
   11220:	00369693          	slli	a3,a3,0x3
   11224:	bddff06f          	j	10e00 <_malloc_r+0xec>
   11228:	001e0e1b          	addiw	t3,t3,1
   1122c:	003e7793          	andi	a5,t3,3
   11230:	01050513          	addi	a0,a0,16
   11234:	10078863          	beqz	a5,11344 <_malloc_r+0x630>
   11238:	01853783          	ld	a5,24(a0)
   1123c:	eb1ff06f          	j	110ec <_malloc_r+0x3d8>
   11240:	01043603          	ld	a2,16(s0)
   11244:	0014e593          	ori	a1,s1,1
   11248:	00b43423          	sd	a1,8(s0)
   1124c:	00f63c23          	sd	a5,24(a2)
   11250:	00c7b823          	sd	a2,16(a5)
   11254:	009404b3          	add	s1,s0,s1
   11258:	0299b423          	sd	s1,40(s3)
   1125c:	0299b023          	sd	s1,32(s3)
   11260:	0016e793          	ori	a5,a3,1
   11264:	0104bc23          	sd	a6,24(s1)
   11268:	0104b823          	sd	a6,16(s1)
   1126c:	00f4b423          	sd	a5,8(s1)
   11270:	00e40733          	add	a4,s0,a4
   11274:	00090513          	mv	a0,s2
   11278:	00d73023          	sd	a3,0(a4)
   1127c:	2a4000ef          	jal	ra,11520 <__malloc_unlock>
   11280:	01040513          	addi	a0,s0,16
   11284:	d4dff06f          	j	10fd0 <_malloc_r+0x2bc>
   11288:	0014e693          	ori	a3,s1,1
   1128c:	00d43423          	sd	a3,8(s0)
   11290:	009404b3          	add	s1,s0,s1
   11294:	0299b423          	sd	s1,40(s3)
   11298:	0299b023          	sd	s1,32(s3)
   1129c:	00176693          	ori	a3,a4,1
   112a0:	0104bc23          	sd	a6,24(s1)
   112a4:	0104b823          	sd	a6,16(s1)
   112a8:	00d4b423          	sd	a3,8(s1)
   112ac:	00f407b3          	add	a5,s0,a5
   112b0:	00090513          	mv	a0,s2
   112b4:	00e7b023          	sd	a4,0(a5)
   112b8:	268000ef          	jal	ra,11520 <__malloc_unlock>
   112bc:	01040513          	addi	a0,s0,16
   112c0:	d11ff06f          	j	10fd0 <_malloc_r+0x2bc>
   112c4:	0034d613          	srli	a2,s1,0x3
   112c8:	0016079b          	addiw	a5,a2,1
   112cc:	0017979b          	slliw	a5,a5,0x1
   112d0:	0006061b          	sext.w	a2,a2
   112d4:	00379793          	slli	a5,a5,0x3
   112d8:	a95ff06f          	j	10d6c <_malloc_r+0x58>
   112dc:	0067d713          	srli	a4,a5,0x6
   112e0:	0397059b          	addiw	a1,a4,57
   112e4:	0015959b          	slliw	a1,a1,0x1
   112e8:	0387069b          	addiw	a3,a4,56
   112ec:	00359593          	slli	a1,a1,0x3
   112f0:	ed1ff06f          	j	111c0 <_malloc_r+0x4ac>
   112f4:	13340463          	beq	s0,s3,1141c <_malloc_r+0x708>
   112f8:	0109b403          	ld	s0,16(s3)
   112fc:	00843a03          	ld	s4,8(s0)
   11300:	ffca7a13          	andi	s4,s4,-4
   11304:	409a07b3          	sub	a5,s4,s1
   11308:	009a6663          	bltu	s4,s1,11314 <_malloc_r+0x600>
   1130c:	01f00713          	li	a4,31
   11310:	e4f74ce3          	blt	a4,a5,11168 <_malloc_r+0x454>
   11314:	00090513          	mv	a0,s2
   11318:	208000ef          	jal	ra,11520 <__malloc_unlock>
   1131c:	00000513          	li	a0,0
   11320:	cb1ff06f          	j	10fd0 <_malloc_r+0x2bc>
   11324:	05c7861b          	addiw	a2,a5,92
   11328:	0016169b          	slliw	a3,a2,0x1
   1132c:	05b7851b          	addiw	a0,a5,91
   11330:	00369693          	slli	a3,a3,0x3
   11334:	acdff06f          	j	10e00 <_malloc_r+0xec>
   11338:	01033783          	ld	a5,16(t1)
   1133c:	fff6061b          	addiw	a2,a2,-1
   11340:	1c679a63          	bne	a5,t1,11514 <_malloc_r+0x800>
   11344:	00367793          	andi	a5,a2,3
   11348:	ff030313          	addi	t1,t1,-16
   1134c:	fe0796e3          	bnez	a5,11338 <_malloc_r+0x624>
   11350:	0089b703          	ld	a4,8(s3)
   11354:	fff5c793          	not	a5,a1
   11358:	00e7f7b3          	and	a5,a5,a4
   1135c:	00f9b423          	sd	a5,8(s3)
   11360:	00159593          	slli	a1,a1,0x1
   11364:	b0b7e0e3          	bltu	a5,a1,10e64 <_malloc_r+0x150>
   11368:	ae058ee3          	beqz	a1,10e64 <_malloc_r+0x150>
   1136c:	00f5f733          	and	a4,a1,a5
   11370:	00071a63          	bnez	a4,11384 <_malloc_r+0x670>
   11374:	00159593          	slli	a1,a1,0x1
   11378:	00f5f733          	and	a4,a1,a5
   1137c:	004e0e1b          	addiw	t3,t3,4
   11380:	fe070ae3          	beqz	a4,11374 <_malloc_r+0x660>
   11384:	000e0613          	mv	a2,t3
   11388:	d45ff06f          	j	110cc <_malloc_r+0x3b8>
   1138c:	020a0a13          	addi	s4,s4,32
   11390:	b21ff06f          	j	10eb0 <_malloc_r+0x19c>
   11394:	0089b503          	ld	a0,8(s3)
   11398:	4026d69b          	sraiw	a3,a3,0x2
   1139c:	00100793          	li	a5,1
   113a0:	00d797b3          	sll	a5,a5,a3
   113a4:	00a7e7b3          	or	a5,a5,a0
   113a8:	00f9b423          	sd	a5,8(s3)
   113ac:	e41ff06f          	j	111ec <_malloc_r+0x4d8>
   113b0:	014b0bb3          	add	s7,s6,s4
   113b4:	41700bb3          	neg	s7,s7
   113b8:	034b9b93          	slli	s7,s7,0x34
   113bc:	034bdb93          	srli	s7,s7,0x34
   113c0:	000b8593          	mv	a1,s7
   113c4:	00090513          	mv	a0,s2
   113c8:	15c000ef          	jal	ra,11524 <_sbrk_r>
   113cc:	fff00793          	li	a5,-1
   113d0:	00000713          	li	a4,0
   113d4:	b6f514e3          	bne	a0,a5,10f3c <_malloc_r+0x228>
   113d8:	b71ff06f          	j	10f48 <_malloc_r+0x234>
   113dc:	05400693          	li	a3,84
   113e0:	08e6e463          	bltu	a3,a4,11468 <_malloc_r+0x754>
   113e4:	00c7d713          	srli	a4,a5,0xc
   113e8:	06f7059b          	addiw	a1,a4,111
   113ec:	0015959b          	slliw	a1,a1,0x1
   113f0:	06e7069b          	addiw	a3,a4,110
   113f4:	00359593          	slli	a1,a1,0x3
   113f8:	dc9ff06f          	j	111c0 <_malloc_r+0x4ac>
   113fc:	15400713          	li	a4,340
   11400:	08f76463          	bltu	a4,a5,11488 <_malloc_r+0x774>
   11404:	00f4d793          	srli	a5,s1,0xf
   11408:	0787861b          	addiw	a2,a5,120
   1140c:	0016169b          	slliw	a3,a2,0x1
   11410:	0777851b          	addiw	a0,a5,119
   11414:	00369693          	slli	a3,a3,0x3
   11418:	9e9ff06f          	j	10e00 <_malloc_r+0xec>
   1141c:	7d818c93          	addi	s9,gp,2008 # 13770 <__malloc_current_mallinfo>
   11420:	000ca783          	lw	a5,0(s9)
   11424:	014786bb          	addw	a3,a5,s4
   11428:	00dca023          	sw	a3,0(s9)
   1142c:	ab9ff06f          	j	10ee4 <_malloc_r+0x1d0>
   11430:	034c1713          	slli	a4,s8,0x34
   11434:	aa0718e3          	bnez	a4,10ee4 <_malloc_r+0x1d0>
   11438:	0109b403          	ld	s0,16(s3)
   1143c:	014a8a33          	add	s4,s5,s4
   11440:	001a6a13          	ori	s4,s4,1
   11444:	01443423          	sd	s4,8(s0)
   11448:	b59ff06f          	j	10fa0 <_malloc_r+0x28c>
   1144c:	016bb023          	sd	s6,0(s7)
   11450:	aadff06f          	j	10efc <_malloc_r+0x1e8>
   11454:	000b0413          	mv	s0,s6
   11458:	b49ff06f          	j	10fa0 <_malloc_r+0x28c>
   1145c:	00100793          	li	a5,1
   11460:	00fb3423          	sd	a5,8(s6)
   11464:	eb1ff06f          	j	11314 <_malloc_r+0x600>
   11468:	15400693          	li	a3,340
   1146c:	06e6e663          	bltu	a3,a4,114d8 <_malloc_r+0x7c4>
   11470:	00f7d713          	srli	a4,a5,0xf
   11474:	0787059b          	addiw	a1,a4,120
   11478:	0015959b          	slliw	a1,a1,0x1
   1147c:	0777069b          	addiw	a3,a4,119
   11480:	00359593          	slli	a1,a1,0x3
   11484:	d3dff06f          	j	111c0 <_malloc_r+0x4ac>
   11488:	55400713          	li	a4,1364
   1148c:	06f76663          	bltu	a4,a5,114f8 <_malloc_r+0x7e4>
   11490:	0124d793          	srli	a5,s1,0x12
   11494:	07d7861b          	addiw	a2,a5,125
   11498:	0016169b          	slliw	a3,a2,0x1
   1149c:	07c7851b          	addiw	a0,a5,124
   114a0:	00369693          	slli	a3,a3,0x3
   114a4:	95dff06f          	j	10e00 <_malloc_r+0xec>
   114a8:	ff0c0c13          	addi	s8,s8,-16
   114ac:	018a0a33          	add	s4,s4,s8
   114b0:	416a0a33          	sub	s4,s4,s6
   114b4:	00000713          	li	a4,0
   114b8:	a91ff06f          	j	10f48 <_malloc_r+0x234>
   114bc:	01040593          	addi	a1,s0,16
   114c0:	00090513          	mv	a0,s2
   114c4:	d28ff0ef          	jal	ra,109ec <_free_r>
   114c8:	0109b403          	ld	s0,16(s3)
   114cc:	000ca783          	lw	a5,0(s9)
   114d0:	00843a03          	ld	s4,8(s0)
   114d4:	acdff06f          	j	10fa0 <_malloc_r+0x28c>
   114d8:	55400693          	li	a3,1364
   114dc:	02e6e663          	bltu	a3,a4,11508 <_malloc_r+0x7f4>
   114e0:	0127d713          	srli	a4,a5,0x12
   114e4:	07d7059b          	addiw	a1,a4,125
   114e8:	0015959b          	slliw	a1,a1,0x1
   114ec:	07c7069b          	addiw	a3,a4,124
   114f0:	00359593          	slli	a1,a1,0x3
   114f4:	ccdff06f          	j	111c0 <_malloc_r+0x4ac>
   114f8:	7f000693          	li	a3,2032
   114fc:	07f00613          	li	a2,127
   11500:	07e00513          	li	a0,126
   11504:	8fdff06f          	j	10e00 <_malloc_r+0xec>
   11508:	7f000593          	li	a1,2032
   1150c:	07e00693          	li	a3,126
   11510:	cb1ff06f          	j	111c0 <_malloc_r+0x4ac>
   11514:	0089b783          	ld	a5,8(s3)
   11518:	e49ff06f          	j	11360 <_malloc_r+0x64c>

000000000001151c <__malloc_lock>:
   1151c:	00008067          	ret

0000000000011520 <__malloc_unlock>:
   11520:	00008067          	ret

0000000000011524 <_sbrk_r>:
   11524:	fe010113          	addi	sp,sp,-32
   11528:	00813823          	sd	s0,16(sp)
   1152c:	00913423          	sd	s1,8(sp)
   11530:	00050413          	mv	s0,a0
   11534:	00058513          	mv	a0,a1
   11538:	00113c23          	sd	ra,24(sp)
   1153c:	7601ac23          	sw	zero,1912(gp) # 13710 <errno>
   11540:	1a0000ef          	jal	ra,116e0 <_sbrk>
   11544:	fff00793          	li	a5,-1
   11548:	00f50c63          	beq	a0,a5,11560 <_sbrk_r+0x3c>
   1154c:	01813083          	ld	ra,24(sp)
   11550:	01013403          	ld	s0,16(sp)
   11554:	00813483          	ld	s1,8(sp)
   11558:	02010113          	addi	sp,sp,32
   1155c:	00008067          	ret
   11560:	7781a783          	lw	a5,1912(gp) # 13710 <errno>
   11564:	fe0784e3          	beqz	a5,1154c <_sbrk_r+0x28>
   11568:	01813083          	ld	ra,24(sp)
   1156c:	00f42023          	sw	a5,0(s0)
   11570:	01013403          	ld	s0,16(sp)
   11574:	00813483          	ld	s1,8(sp)
   11578:	02010113          	addi	sp,sp,32
   1157c:	00008067          	ret

0000000000011580 <__register_exitproc>:
   11580:	7501b703          	ld	a4,1872(gp) # 136e8 <_global_impure_ptr>
   11584:	1f873783          	ld	a5,504(a4)
   11588:	06078063          	beqz	a5,115e8 <__register_exitproc+0x68>
   1158c:	0087a703          	lw	a4,8(a5)
   11590:	01f00813          	li	a6,31
   11594:	08e84663          	blt	a6,a4,11620 <__register_exitproc+0xa0>
   11598:	02050863          	beqz	a0,115c8 <__register_exitproc+0x48>
   1159c:	00371813          	slli	a6,a4,0x3
   115a0:	01078833          	add	a6,a5,a6
   115a4:	10c83823          	sd	a2,272(a6)
   115a8:	3107a883          	lw	a7,784(a5)
   115ac:	00100613          	li	a2,1
   115b0:	00e6163b          	sllw	a2,a2,a4
   115b4:	00c8e8b3          	or	a7,a7,a2
   115b8:	3117a823          	sw	a7,784(a5)
   115bc:	20d83823          	sd	a3,528(a6)
   115c0:	00200693          	li	a3,2
   115c4:	02d50863          	beq	a0,a3,115f4 <__register_exitproc+0x74>
   115c8:	00270693          	addi	a3,a4,2
   115cc:	00369693          	slli	a3,a3,0x3
   115d0:	0017071b          	addiw	a4,a4,1
   115d4:	00e7a423          	sw	a4,8(a5)
   115d8:	00d787b3          	add	a5,a5,a3
   115dc:	00b7b023          	sd	a1,0(a5)
   115e0:	00000513          	li	a0,0
   115e4:	00008067          	ret
   115e8:	20070793          	addi	a5,a4,512
   115ec:	1ef73c23          	sd	a5,504(a4)
   115f0:	f9dff06f          	j	1158c <__register_exitproc+0xc>
   115f4:	3147a683          	lw	a3,788(a5)
   115f8:	00000513          	li	a0,0
   115fc:	00c6e6b3          	or	a3,a3,a2
   11600:	30d7aa23          	sw	a3,788(a5)
   11604:	00270693          	addi	a3,a4,2
   11608:	00369693          	slli	a3,a3,0x3
   1160c:	0017071b          	addiw	a4,a4,1
   11610:	00e7a423          	sw	a4,8(a5)
   11614:	00d787b3          	add	a5,a5,a3
   11618:	00b7b023          	sd	a1,0(a5)
   1161c:	00008067          	ret
   11620:	fff00513          	li	a0,-1
   11624:	00008067          	ret

0000000000011628 <_exit>:
   11628:	05d00893          	li	a7,93
   1162c:	00000073          	ecall
   11630:	00054463          	bltz	a0,11638 <_exit+0x10>
   11634:	0000006f          	j	11634 <_exit+0xc>
   11638:	ff010113          	addi	sp,sp,-16
   1163c:	00813023          	sd	s0,0(sp)
   11640:	00050413          	mv	s0,a0
   11644:	00113423          	sd	ra,8(sp)
   11648:	4080043b          	negw	s0,s0
   1164c:	110000ef          	jal	ra,1175c <__errno>
   11650:	00852023          	sw	s0,0(a0)
   11654:	0000006f          	j	11654 <_exit+0x2c>

0000000000011658 <_open>:
   11658:	ff010113          	addi	sp,sp,-16
   1165c:	00113423          	sd	ra,8(sp)
   11660:	00813023          	sd	s0,0(sp)
   11664:	40000893          	li	a7,1024
   11668:	00000073          	ecall
   1166c:	00050413          	mv	s0,a0
   11670:	00054c63          	bltz	a0,11688 <_open+0x30>
   11674:	0005051b          	sext.w	a0,a0
   11678:	00813083          	ld	ra,8(sp)
   1167c:	00013403          	ld	s0,0(sp)
   11680:	01010113          	addi	sp,sp,16
   11684:	00008067          	ret
   11688:	0d4000ef          	jal	ra,1175c <__errno>
   1168c:	4080043b          	negw	s0,s0
   11690:	00852023          	sw	s0,0(a0)
   11694:	fff00513          	li	a0,-1
   11698:	fe1ff06f          	j	11678 <_open+0x20>

000000000001169c <_read>:
   1169c:	ff010113          	addi	sp,sp,-16
   116a0:	00113423          	sd	ra,8(sp)
   116a4:	00813023          	sd	s0,0(sp)
   116a8:	03f00893          	li	a7,63
   116ac:	00000073          	ecall
   116b0:	00050413          	mv	s0,a0
   116b4:	00054c63          	bltz	a0,116cc <_read+0x30>
   116b8:	00813083          	ld	ra,8(sp)
   116bc:	00040513          	mv	a0,s0
   116c0:	00013403          	ld	s0,0(sp)
   116c4:	01010113          	addi	sp,sp,16
   116c8:	00008067          	ret
   116cc:	4080043b          	negw	s0,s0
   116d0:	08c000ef          	jal	ra,1175c <__errno>
   116d4:	00852023          	sw	s0,0(a0)
   116d8:	fff00413          	li	s0,-1
   116dc:	fddff06f          	j	116b8 <_read+0x1c>

00000000000116e0 <_sbrk>:
   116e0:	79818693          	addi	a3,gp,1944 # 13730 <heap_end.0>
   116e4:	0006b703          	ld	a4,0(a3)
   116e8:	ff010113          	addi	sp,sp,-16
   116ec:	00113423          	sd	ra,8(sp)
   116f0:	00050793          	mv	a5,a0
   116f4:	02071063          	bnez	a4,11714 <_sbrk+0x34>
   116f8:	0d600893          	li	a7,214
   116fc:	00000513          	li	a0,0
   11700:	00000073          	ecall
   11704:	fff00613          	li	a2,-1
   11708:	00050713          	mv	a4,a0
   1170c:	02c50a63          	beq	a0,a2,11740 <_sbrk+0x60>
   11710:	00a6b023          	sd	a0,0(a3)
   11714:	0d600893          	li	a7,214
   11718:	00e78533          	add	a0,a5,a4
   1171c:	00000073          	ecall
   11720:	0006b703          	ld	a4,0(a3)
   11724:	00e787b3          	add	a5,a5,a4
   11728:	00f51c63          	bne	a0,a5,11740 <_sbrk+0x60>
   1172c:	00813083          	ld	ra,8(sp)
   11730:	00a6b023          	sd	a0,0(a3)
   11734:	00070513          	mv	a0,a4
   11738:	01010113          	addi	sp,sp,16
   1173c:	00008067          	ret
   11740:	01c000ef          	jal	ra,1175c <__errno>
   11744:	00813083          	ld	ra,8(sp)
   11748:	00c00793          	li	a5,12
   1174c:	00f52023          	sw	a5,0(a0)
   11750:	fff00513          	li	a0,-1
   11754:	01010113          	addi	sp,sp,16
   11758:	00008067          	ret

000000000001175c <__errno>:
   1175c:	7601b503          	ld	a0,1888(gp) # 136f8 <_impure_ptr>
   11760:	00008067          	ret
