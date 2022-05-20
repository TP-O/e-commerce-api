		.data

arr:     .word 23, 54, 16, 73, 43, 89, 23, 12, 34, 56
min:     .asciiz "\nMin is: "
max:     .asciiz "\nMax is: "

		.text
		.globl main
main:
    la $t1, 0
    la $s3, arr

    lw $s1, ($s3)
    lw $s2, ($s3)

LOOP:
    addi $t1, $t1, 1
    beq $t1, 10, PRINT_RESULT

    addi $s3, $s3, 4
    lw $s4, ($s3)

    blt $s4, $s1, CHANGE_MIN

    bgt $s4, $s2, CHANGE_MAX

    j LOOP

CHANGE_MIN:
    lw $s1, ($s3)

    j LOOP

CHANGE_MAX:
    lw $s2, ($s3)

    j LOOP

PRINT_RESULT:
    la $a0, min
    li $v0, 4
    syscall

    li $v0, 1
    move $a0, $s1
    syscall

    la $a0, max
    li $v0, 4
    syscall

    li $v0, 1
    move $a0, $s2
    syscall

    li $v0, 10
    syscall
