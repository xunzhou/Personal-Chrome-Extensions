Param([string]$raw)
$arg = $raw -replace "lcdbg://", "" -replace "%5C","/"
code $arg