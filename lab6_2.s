#########################################################
#					DATA SEGMENT						#
#	This is where all strings, constants are declared	#
#########################################################

		.data		# the data segment
prompt1:	.asciiz	"Enter first string: \n"
prompt2:	.asciiz	"Enter second string: \n"
input1:     .space  128    # buffer for input1
input2:		.space  128	   # buffer for input2

#########################################################
#					TEXT SEGMENT						#
#	This is where all the instructions reside			#
#########################################################

		.text		# the code segment
		.globl main
main:

	##### GET FIRST INPUT STRING ######
	#Prints the prompt1 string
	li $v0, 4
	la $a0, prompt1
	syscall

	la $a0,input1 # load addr of the buffer input1
    li $v0, 8 # service 8 to read from input
    syscall   # read in a line to the buffer


	##### GET SECOND INPUT STRING ######

	#Prints the prompt2 string
	li $v0, 4
	la $a0, prompt2
	syscall

	la $a0,input2 # load addr of the buffer input2
    li $v0,8 	# service 8
    syscall   	# read in a line to the buffer


    ### READ IN ONE CHARACTER ####
    la $s0, input1
    lbu $t0, 0($s0)

    ### PRINT OUT CHARACTER ###
    move $a0, $t0
    li $v0, 11
    syscall

    ### loop through string ###
    la $s0, input1
    li $t0, 0 		# $t0 is index

LOOP:
	add $s1, $s0, $t0
	lbu $s7, 0($s1)

	## TEST whether the end of string or not ##
	beq  $s7, $zero, EXIT

	## convert the character into UPPERCASE
	addi $s7, $s7, -32
	sb $s7, 0($s1)

	addi $t0, $t0, 1
	j LOOP

EXIT:

	## print out the new input1
	la $a0, input1
	li $v0, 4
	syscall

	li $v0, 10
	syscall
