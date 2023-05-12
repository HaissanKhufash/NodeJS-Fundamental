@echo off

SET a=%1 
SET b=%2

SET /A addition=%a%+%b%
ECHO operation.bat has began
ECHO Result: %addition%
exit