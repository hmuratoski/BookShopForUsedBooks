for %%i in (dir /b /s src\images\*.png) do (
	optipng -o 7 "%%i%
)