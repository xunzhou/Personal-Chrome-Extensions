f=$(echo $1 | cut -c9-)
code $f
notify-send "lcdbg.sh" $f